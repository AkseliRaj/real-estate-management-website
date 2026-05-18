import React from 'react';
import { useTranslation } from 'react-i18next';
import MaintenanceReportSectionWrapper from './MaintenanceReportSectionWrapper';

const APARTMENT_INFORMATION_FIELDS = [
    { id: 'maintenanceAddress', labelKey: 'Address' },
    { id: 'maintenancePostcode', labelKey: 'Postcode' },
    { id: 'maintenanceCity', labelKey: 'City' },
    { id: 'maintenanceHousingCompanyName', labelKey: 'Housing-Company-Name' },
];

const MaintenanceReportApartmentInformationSection = () => {
    const { t } = useTranslation();
    const translationKey = 'Maintenance-Request-Form-Page.Form-Labels.Apartment-Information';

    return (
        <MaintenanceReportSectionWrapper title={t(`${translationKey}.title`)}>
            {APARTMENT_INFORMATION_FIELDS.map(({ id, labelKey }) => (
                <div className="col-12 mb-3" key={id}>
                    <label htmlFor={id} className="form-label">
                        {t(`${translationKey}.${labelKey}`)} <span className='Required-Asterisk'>*</span>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id={id}
                    />
                </div>
            ))}
        </MaintenanceReportSectionWrapper>
    );
};

export default MaintenanceReportApartmentInformationSection;
