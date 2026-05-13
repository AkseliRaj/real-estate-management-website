import React from 'react';
import { useTranslation } from 'react-i18next';
import ConsumptionReadingsSectionWrapper from './ConsumptionReadingsSectionWrapper';

const USER_INFORMATION_FIELDS = [
    { id: 'consumptionFirstNames', type: 'text', labelKey: 'Firsnames' },
    { id: 'consumptionLastName', type: 'text', labelKey: 'Lastname' },
    { id: 'consumptionPhoneNumber', type: 'tel', labelKey: 'Phonenumber' },
    { id: 'consumptionEmail', type: 'email', labelKey: 'Email' },
];

const ConsumptionUserInformationSection = () => {
    const { t } = useTranslation();
    const translationKey = 'Consumption-Readings-Form-Page.Form-Labels.User-Information';

    return (
        <ConsumptionReadingsSectionWrapper title={t(`${translationKey}.title`)}>
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
        </ConsumptionReadingsSectionWrapper>
    );
};

export default ConsumptionUserInformationSection;
