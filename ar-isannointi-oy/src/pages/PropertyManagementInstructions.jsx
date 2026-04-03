import '../css/PropertyManagementInstructions.css'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import ResidentInstructionsImage from '../assets/webp/ResidentInstructionsImage.webp'
import AccordionMenuGrid from '../components/AccordionMenuGrid';
import propertyManagementInstructionItemsFi from '../data/propertyManagementInstructionItems.fi';
import propertyManagementInstructionItemsEn from '../data/propertyManagementInstructionItems.en';

function PropertyManagementInstructions() {
    const { t, i18n } = useTranslation();
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchInput, setSearchInput] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const isEnglish = i18n.resolvedLanguage?.startsWith('en');
    const sourceItems = isEnglish ? propertyManagementInstructionItemsEn : propertyManagementInstructionItemsFi;
    const activeLanguage = i18n.resolvedLanguage ?? undefined;

    const categoryButtons = [
        { id: 'all', label: isEnglish ? 'All' : 'Kaikki' },
        { id: 'asuminen', label: isEnglish ? 'Living' : 'Asuminen' },
        { id: 'turvallisuus', label: isEnglish ? 'Safety' : 'Turvallisuus' },
    ];

    const categoryFilteredItems = selectedCategory === 'all'
        ? sourceItems
        : sourceItems.filter((item) => item.category === selectedCategory);

    const instructionTextFilteredItems = searchTerm
        ? categoryFilteredItems.filter((item) => {
            const searchableText = [
                item.heading,
                ...Object.entries(item)
                    .filter(([key, value]) => key.startsWith('paragraph') && typeof value === 'string')
                    .map(([, value]) => value),
            ]
                .join(' ')
                .toLocaleLowerCase(activeLanguage);

            return searchableText.includes(searchTerm);
        })
        : categoryFilteredItems;

    const handleSearch = () => {
        setSearchTerm(searchInput.trim().toLocaleLowerCase(activeLanguage));
    };

    const handleResetSearch = () => {
        setSearchInput('');
        setSearchTerm('');
    };

    const handleSearchInputKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const instructionItems = instructionTextFilteredItems.map(({ id, heading, category, ...paragraphs }) => ({
        id,
        heading,
        body: Object.values(paragraphs)
            .filter(Boolean)
            .map((paragraph, index) => (
                <p key={`${id}-paragraph-${index}`} className={index === 0 ? '' : 'pt-2'}>
                    {paragraph}
                </p>
            )),
    }));

    return (
        <div className="container-fluid px-0">

            <div className='container-fluid Instruction-Introduction-Section'>
                <div className='row gx-0 d-flex justify-content-center py-5'>
                    <div className='col-11 col-xxl-9'>
                        <div className='d-block d-md-none col-12 col-sm-11 pb-5'>
                            <img src={ResidentInstructionsImage} alt={t('propertyLanding.images.introductionAlt')} className="Responsibility-Image" />
                        </div>
                        <div className='row gx-0 justify-content-between align-items-center'>
                            <div className='col-12 col-sm-11 col-md-6 col-lg-5 col-xl-6 col-xxl-5'>
                                <h3 className='pb-3 d-none d-md-block'>
                                    {t('PropertyManagementInstructions.Introduction-Section.title')}
                                </h3>
                                <h4 className='pb-1 d-block d-md-none'>
                                    {t('PropertyManagementInstructions.Introduction-Section.title')}
                                </h4>
                                <p>
                                    {t('PropertyManagementInstructions.Introduction-Section.paragraph1')}
                                </p>
                                <p className='pb-1 pb-md-3'>
                                    {t('PropertyManagementInstructions.Introduction-Section.paragraph2')}
                                </p>
                            </div>
                            <div className='d-none d-md-flex justify-content-end col-5'>
                                <img src={ResidentInstructionsImage} alt={t('propertyLanding.images.introductionAlt')} className="Responsibility-Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid Filtering-Section">
                <div className="row justify-content-center">
                    <div className="col-11 col-md-9 col-lg-7 py-5">

                        <div className="row">
                            <div className="col-12 pb-5">
                                <label htmlFor="instructionSearch" className="form-label">
                                    {t('PropertyManagementInstructions.Filtering-Section.Instruction-Name')}
                                </label>

                                <div className="d-flex flex-column flex-md-row gap-3">
                                    <input
                                        type="text"
                                        className="form-control flex-grow-1"
                                        id="instructionSearch"
                                        value={searchInput}
                                        onChange={(event) => setSearchInput(event.target.value)}
                                        onKeyDown={handleSearchInputKeyDown}
                                    />

                                    <div className="d-flex gap-3 flex-wrap flex-sm-nowrap">
                                        <button
                                            type="button"
                                            className="Color-Button flex-shrink-0"
                                            onClick={handleSearch}
                                        >
                                            {isEnglish ? 'Search instruction' : 'Hae ohje'}
                                        </button>

                                        <button
                                            type="button"
                                            className="Outline-Button flex-shrink-0"
                                            onClick={handleResetSearch}
                                        >
                                            {isEnglish ? 'Reset search' : 'Tyhjennä haku'}
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <label htmlFor="category" className="form-label">
                                    {isEnglish ? 'Categories:' : 'Kategoriat:'}
                                </label>

                                <div className="d-flex gap-2 flex-wrap">
                                    {categoryButtons.map((category) => (
                                        <button
                                            key={category.id}
                                            type="button"
                                            className={`Outline-Button ${selectedCategory === category.id ? 'active' : ''}`.trim()}
                                            onClick={() => setSelectedCategory(category.id)}
                                        >
                                            {category.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='container-fluid Instruction-Accordion-Section'>
                <div className='row justify-content-center'>
                    <div className="col-11 col-md-9 col-lg-7 py-5">
                        <AccordionMenuGrid
                            items={instructionItems}
                            className='Property-Form-Card-Grid'
                            minCardWidthRem={11}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PropertyManagementInstructions