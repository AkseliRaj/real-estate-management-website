import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import IntroductionSectionWithImage from '../components/IntroductionSectionWithImage';
import FormsPageIntroductionImage from '../assets/webp/FormPageIntroductionImage.webp';
import FormIntroductionSection from '../components/FormIntroductionSection';
import SearchCategoryFilterSection from '../components/SearchCategoryFilterSection';
import FormCardsSection from '../components/FormCardsSection';
import formDataEn from '../data/FormDataEn';
import formDataFi from '../data/FormDataFi';
import buildFormContentItems from '../utils/buildFormContentItems';


const PropertyManagementFormsPage = () => {
    const { t, i18n } = useTranslation();
    const prefixSection = t('Forms-Page.Prefix-Section', { returnObjects: true });
    const currentLanguage = i18n.resolvedLanguage || i18n.language || 'en';
    const isFinnish = currentLanguage.startsWith('fi');
    const forms = isFinnish ? formDataFi : formDataEn;
    const [searchInputValue, setSearchInputValue] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const contentItems = buildFormContentItems(prefixSection);

    const categoryLabels = useMemo(
        () => (isFinnish ? {
            all: 'Kaikki',
            certificates: 'Todistukset',
            requests: 'Tarjoukset ja pyynnöt',
            notifications: 'Ilmoitukset',
            extracts: 'Otteet',
            reports: 'Ilmoitukset ja raportit',
            permits: 'Luvat',
        } : {
            all: 'All',
            certificates: 'Certificates',
            requests: 'Requests',
            notifications: 'Notices',
            extracts: 'Extracts',
            reports: 'Reports',
            permits: 'Permits',
        }),
        [isFinnish],
    );

    const categoryButtons = useMemo(() => {
        const ids = Array.from(new Set(forms.map((item) => item.category).filter(Boolean)));
        return [
            { id: 'all', label: categoryLabels.all },
            ...ids.map((id) => ({ id, label: categoryLabels[id] || id })),
        ];
    }, [forms, categoryLabels]);

    const filteredForms = useMemo(() => {
        const normalizedSearch = searchTerm.trim().toLowerCase();

        return forms.filter((form) => {
            const matchesCategory = selectedCategory === 'all' || form.category === selectedCategory;
            if (!matchesCategory) {
                return false;
            }

            if (!normalizedSearch) {
                return true;
            }

            return `${form.title} ${form.description}`.toLowerCase().includes(normalizedSearch);
        });
    }, [forms, searchTerm, selectedCategory]);

    const handleSearch = () => {
        setSearchTerm(searchInputValue);
    };

    const handleReset = () => {
        setSearchInputValue('');
        setSearchTerm('');
        setSelectedCategory('all');
    };

    return (
        <div className="container-fluid px-0">

            <IntroductionSectionWithImage
                title={t('Forms-Page.Introduction-Section.title')}
                paragraphs={[
                    t('Forms-Page.Introduction-Section.paragraph1'),
                ]}
                imageSrc={FormsPageIntroductionImage}
                imageAlt={t('propertyLanding.images.introductionAlt')}
            />

            <FormIntroductionSection
                title={prefixSection.title}
                contentItems={contentItems}
                innerContainer={false}
                rowJustify="center"
            />

            <SearchCategoryFilterSection
                searchInputId="form-search"
                instructionNameLabel={isFinnish ? 'Lomakkeen nimi' : 'Form name'}
                categoriesLabel={isFinnish ? 'Kategoriat' : 'Categories'}
                searchValue={searchInputValue}
                onSearchChange={(event) => setSearchInputValue(event.target.value)}
                onSearch={handleSearch}
                onReset={handleReset}
                searchButtonLabel={isFinnish ? 'Hae' : 'Search'}
                resetButtonLabel={isFinnish ? 'Tyhjennä' : 'Reset'}
                categoryButtons={categoryButtons}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />

            <FormCardsSection forms={filteredForms} />

        </div>
    );
};

export default PropertyManagementFormsPage;