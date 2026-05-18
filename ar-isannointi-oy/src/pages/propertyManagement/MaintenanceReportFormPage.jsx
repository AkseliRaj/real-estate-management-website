import React from 'react';
import FormPageBanner from '../../components/FormPageBanner';
import FormIntroductionSection from '../../components/FormIntroductionSection';
import MaintenanceReportUserInformationSection from '../../components/maintenanceReportForm/MaintenanceReportUserInformationSection';
import MaintenanceReportApartmentInformationSection from '../../components/maintenanceReportForm/MaintenanceReportApartmentInformationSection';
import MaintenanceReportMaintenanceDescriptionSection from '../../components/maintenanceReportForm/MaintenanceReportMaintenanceDescriptionSection';
import MaintenanceReportOtherInformationSection from '../../components/maintenanceReportForm/MaintenanceReportOtherInformationSection';
import MaintenanceReportTermsSection from '../../components/maintenanceReportForm/MaintenanceReportTermsSection';
import { useTranslation } from 'react-i18next';

const MaintenanceReportFormPage = () => {
    const { t } = useTranslation();

    return (
        <div className="container-fluid px-0">
            <FormPageBanner headingKey='Maintenance-Request-Form-Page.Banner-Title' />

            <FormIntroductionSection
                title={t('Maintenance-Request-Form-Page.Prefix-Section.title')}
                paragraphs={[
                    t('Maintenance-Request-Form-Page.Prefix-Section.paragraph1'),
                    t('Maintenance-Request-Form-Page.Prefix-Section.paragraph2'),
                ]}
                rowJustify={'center'}
            />

            <MaintenanceReportUserInformationSection />

            <MaintenanceReportApartmentInformationSection />

            <MaintenanceReportMaintenanceDescriptionSection />

            <MaintenanceReportOtherInformationSection />

            <MaintenanceReportTermsSection />

        </div>
    );
};

export default MaintenanceReportFormPage;
