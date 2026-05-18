import React from 'react';
import { useTranslation } from 'react-i18next';
import MaintenanceReportSectionWrapper from './MaintenanceReportSectionWrapper';

const USER_INFORMATION_FIELDS = [
    { id: 'maintenanceFirstNames', type: 'text', labelKey: 'Firsnames' },
    { id: 'maintenanceLastName', type: 'text', labelKey: 'Lastname' },
    { id: 'maintenancePhoneNumber', type: 'tel', labelKey: 'Phonenumber' },
    { id: 'maintenanceEmail', type: 'email', labelKey: 'Email' },
];

const MaintenanceReportUserInformationSection = () => {
    const { t } = useTranslation();
    const translationKey = 'Maintenance-Request-Form-Page.Form-Labels.User-Information';

    return (
        <MaintenanceReportSectionWrapper title={t(`${translationKey}.title`)}>
            {USER_INFORMATION_FIELDS.map(({ id, type, labelKey }) => (
                <div className="col-12 mb-3" key={id}>
                    <label htmlFor={id} className="form-label">
                        {t(`${translationKey}.${labelKey}`)} <span className='Required-Asterisk'>*</span>
                    </label>
                    <input
                        type={type}
                        className="form-control"
                        id={id}
                    />
                </div>
            ))}
        </MaintenanceReportSectionWrapper>
    );
};

export default MaintenanceReportUserInformationSection;
