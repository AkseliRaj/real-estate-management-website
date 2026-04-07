import React from 'react';
import { useTranslation } from 'react-i18next';
import IntroductionSectionWithImage from '../components/IntroductionSectionWithImage';
import FormsPageIntroductionImage from '../assets/webp/FormPageIntroductionImage.webp';
import FormIntroductionSection from '../components/FormIntroductionSection';

const PropertyManagementFormsPage = () => {
    const { t } = useTranslation();
    const prefixSection = t('Forms-Page.Prefix-Section', { returnObjects: true });

    const contentItems = Object.entries(prefixSection)
        .filter(([key]) => key !== 'title')
        .map(([key, value]) => {
            if (key.startsWith('paragraph') && typeof value === 'string') {
                return {
                    type: 'paragraph',
                    text: value,
                };
            }

            if (key === 'bullet-point-list' && typeof value === 'object' && value !== null) {
                return {
                    type: 'bulletList',
                    intro: value.paragraph1,
                    items: Object.entries(value)
                        .filter(([bulletKey, bulletValue]) => bulletKey.startsWith('bullet-point-paragraph') && typeof bulletValue === 'string')
                        .map(([, bulletValue]) => bulletValue),
                };
            }

            return null;
        })
        .filter(Boolean);

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

        </div>
    );
};

export default PropertyManagementFormsPage;