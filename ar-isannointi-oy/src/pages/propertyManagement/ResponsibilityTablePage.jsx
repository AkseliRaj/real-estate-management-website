import '../../css/ResponsibilityTablePage.css'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import FormIntroductionSection from '../../components/FormIntroductionSection';
import IntroductionSectionWithImage from '../../components/IntroductionSectionWithImage';
import ResponsibilityTable from '../../components/ResponsibilityTable';
import SearchCategoryFilterSection from '../../components/SearchCategoryFilterSection';
import ResidentInstructionsImage from '../../assets/webp/RenovationImage.webp'



const ResponsibilityTablePage = () => {
    const { t, i18n } = useTranslation();
    const isEnglish = i18n.resolvedLanguage?.startsWith('en');
    const activeLanguage = i18n.resolvedLanguage ?? undefined;

    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchInput, setSearchInput] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const categoryButtons = [
        { id: 'all', label: isEnglish ? 'All' : 'Kaikki' },
        { id: 'structures', label: isEnglish ? 'Structures' : 'Rakenteet' },
        { id: 'coatings', label: isEnglish ? 'Surface finishes' : 'Pinnoitteet' },
        { id: 'doors', label: isEnglish ? 'Doors' : 'Ovet' },
        { id: 'windows', label: isEnglish ? 'Windows' : 'Ikkunat' },
        { id: 'hvac_fixtures', label: isEnglish ? 'HVAC fixtures' : 'LVI' },
        { id: 'ventilation', label: isEnglish ? 'Ventilation' : 'Ilmanvaihto' },
        { id: 'electrical', label: isEnglish ? 'Electrical' : 'Sähkö' },
        { id: 'antenna_gas_other', label: isEnglish ? 'Other systems' : 'Muut järjestelmät' },
    ];

    const handleSearch = () => {
        setSearchTerm(searchInput.trim().toLocaleLowerCase(activeLanguage));
    };

    const handleResetSearch = () => {
        setSearchInput('');
        setSearchTerm('');
    };

    return (
        <div className="container-fluid px-0">

            <IntroductionSectionWithImage
                title={t('ResponsibilityTable.Introduction-Section.title')}
                paragraphs={[
                    t('ResponsibilityTable.Introduction-Section.paragraph1'),
                ]}
                imageSrc={ResidentInstructionsImage}
                imageAlt={t('propertyLanding.images.introductionAlt')}
            />

            <FormIntroductionSection
                title={t('ResponsibilityTable.Prefix-Section.title')}
                paragraphs={[
                    t('ResponsibilityTable.Prefix-Section.paragraph1'),
                    t('ResponsibilityTable.Prefix-Section.paragraph2'),
                ]}
                innerContainer={false}
                rowJustify="center"
            />

            <SearchCategoryFilterSection
                searchInputId="responsibilityTableSearch"
                instructionNameLabel={isEnglish ? 'Instruction name' : 'Ohjeen nimi'}
                categoriesLabel={isEnglish ? 'Categories:' : 'Kategoriat:'}
                searchValue={searchInput}
                onSearchChange={(event) => setSearchInput(event.target.value)}
                onSearch={handleSearch}
                onReset={handleResetSearch}
                searchButtonLabel={isEnglish ? 'Search' : 'Hae'}
                resetButtonLabel={isEnglish ? 'Reset search' : 'Tyhjennä haku'}
                categoryButtons={categoryButtons}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />

            <ResponsibilityTable
                tableCategoryId={selectedCategory}
                rowSearchTerm={searchTerm}
            />

        </div>
    );
};

export default ResponsibilityTablePage;
