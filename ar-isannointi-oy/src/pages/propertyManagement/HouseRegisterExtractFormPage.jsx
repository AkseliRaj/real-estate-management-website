import React, { useState } from 'react';
import FormPageBanner from '../../components/FormPageBanner';
import FormIntroductionSection from '../../components/FormIntroductionSection';
import ConsumptionReadingTypesSection from '../../components/consumtionReadingsForm/ConsumptionReadingTypesSection';
import ConsumptionUserInformationSection from '../../components/consumtionReadingsForm/ConsumptionUserInformationSection';
import ConsumptionUserAddressSection from '../../components/consumtionReadingsForm/ConsumptionUserAddressSection';
import ConsumptionElectricityReadingsSection from '../../components/consumtionReadingsForm/ConsumptionElectricityReadingsSection';
import ConsumptionWaterMeteringReadingsSection from '../../components/consumtionReadingsForm/ConsumptionWaterMeteringReadingsSection';
import ConsumptionMoreInformationSection from '../../components/consumtionReadingsForm/ConsumptionMoreInformationSection';
import ConsumptionTermsSection from '../../components/consumtionReadingsForm/ConsumptionTermsSection';
import { useTranslation } from 'react-i18next';


const HouseRegisterExtractFormPage = () => {
    const { t } = useTranslation();
    const [selectedReadingTypes, setSelectedReadingTypes] = useState([]);

    const onReadingTypeChange = (readingType, isSelected) => {
        setSelectedReadingTypes((previousTypes) => {
            if (isSelected) {
                return previousTypes.includes(readingType)
                    ? previousTypes
                    : [...previousTypes, readingType];
            }

            return previousTypes.filter((type) => type !== readingType);
        });
    };

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

            <ConsumptionReadingTypesSection
                selectedReadingTypes={selectedReadingTypes}
                onReadingTypeChange={onReadingTypeChange}
            />

            <ConsumptionUserInformationSection />

            <ConsumptionUserAddressSection />

            {selectedReadingTypes.includes('electricity') && (
                <ConsumptionElectricityReadingsSection />
            )}

            {selectedReadingTypes.includes('water') && (
                <ConsumptionWaterMeteringReadingsSection />
            )}

            <ConsumptionMoreInformationSection />

            <ConsumptionTermsSection />

        </div>
    );
};

export default HouseRegisterExtractFormPage;
