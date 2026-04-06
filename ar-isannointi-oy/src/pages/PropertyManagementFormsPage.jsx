import React from 'react';
import { useTranslation } from 'react-i18next';
import IntroductionSectionWithImage from '../components/IntroductionSectionWithImage';
import FormsPageIntroductionImage from '../assets/webp/FormPageIntroductionImage.webp';

const PropertyManagementFormsPage = () => {
    const { t } = useTranslation();

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

        </div>
    );
};

export default PropertyManagementFormsPage;