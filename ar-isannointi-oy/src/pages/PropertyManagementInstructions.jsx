import '../css/PropertyManagementInstructions.css'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import ResidentInstructionsImage from '../assets/webp/ResidentInstructionsImage.webp'
import AccordionMenuGrid from '../components/AccordionMenuGrid';
import IntroductionSectionWithImage from '../components/IntroductionSectionWithImage';
import SearchCategoryFilterSection from '../components/SearchCategoryFilterSection';
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

            <IntroductionSectionWithImage
                title={t('PropertyManagementInstructions.Introduction-Section.title')}
                paragraphs={[
                    t('PropertyManagementInstructions.Introduction-Section.paragraph1'),
                    t('PropertyManagementInstructions.Introduction-Section.paragraph2'),
                ]}
                imageSrc={ResidentInstructionsImage}
                imageAlt={t('propertyLanding.images.introductionAlt')}
            />

            <SearchCategoryFilterSection
                searchInputId="instructionSearch"
                instructionNameLabel={t('PropertyManagementInstructions.Filtering-Section.Instruction-Name')}
                categoriesLabel={isEnglish ? 'Categories:' : 'Kategoriat:'}
                searchValue={searchInput}
                onSearchChange={(event) => setSearchInput(event.target.value)}
                onSearch={handleSearch}
                onReset={handleResetSearch}
                searchButtonLabel={isEnglish ? 'Search instruction' : 'Hae ohje'}
                resetButtonLabel={isEnglish ? 'Reset search' : 'Tyhjennä haku'}
                categoryButtons={categoryButtons}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />

            <div className='container-fluid Instruction-Accordion-Section'>
                <div className='row justify-content-center'>
                    <div className="col-11 col-md-9 col-lg-8 py-5">
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