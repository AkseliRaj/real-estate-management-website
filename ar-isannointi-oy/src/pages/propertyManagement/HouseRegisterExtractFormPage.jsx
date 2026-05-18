import React from 'react';
import FormPageBanner from '../../components/FormPageBanner';
import FormIntroductionSection from '../../components/FormIntroductionSection';
import HouseRegisterExtractUserInformationSection from '../../components/houseRegisterExtractForm/HouseRegisterExtractUserInformationSection';
import HouseRegisterExtractApartmentDescriptionSection from '../../components/houseRegisterExtractForm/HouseRegisterExtractApartmentDescriptionSection';
import HouseRegisterExtractDocumentDeliverySection from '../../components/houseRegisterExtractForm/HouseRegisterExtractDocumentDeliverySection';
import HouseRegisterExtractTermsSection from '../../components/houseRegisterExtractForm/HouseRegisterExtractTermsSection';
import { useTranslation } from 'react-i18next';

const HouseRegisterExtractFormPage = () => {
    const { t } = useTranslation();

    return (
        <div className="container-fluid px-0">
            <FormPageBanner headingKey='House-Register-Extract-Form-Page.Banner-Title' />

            <FormIntroductionSection
                title={t('House-Register-Extract-Form-Page.Prefix-Section.title')}
                paragraphs={[
                    t('House-Register-Extract-Form-Page.Prefix-Section.paragraph1'),
                ]}
                rowJustify={'center'}
            />

            <HouseRegisterExtractUserInformationSection />

            <HouseRegisterExtractApartmentDescriptionSection />

            <HouseRegisterExtractDocumentDeliverySection />

            <HouseRegisterExtractTermsSection />

        </div>
    );
};

export default HouseRegisterExtractFormPage;
