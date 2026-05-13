import React from 'react';
import { useTranslation } from 'react-i18next';
import ConsumptionReadingsSectionWrapper from './ConsumptionReadingsSectionWrapper';

const USER_ADDRESS_FIELDS = [
    { id: 'consumptionAddress', labelKey: 'Address' },
    { id: 'consumptionPostcode', labelKey: 'Postcode' },
    { id: 'consumptionCity', labelKey: 'City' },
    { id: 'consumptionHousingCompanyName', labelKey: 'Housing-Company-Name' },
];

const ConsumptionUserAddressSection = () => {
    const { t } = useTranslation();
    const translationKey = 'Consumption-Readings-Form-Page.Form-Labels.User-Address';

    return (
        <ConsumptionReadingsSectionWrapper title={t(`${translationKey}.title`)}>
            {USER_ADDRESS_FIELDS.map(({ id, labelKey }) => (
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
        </ConsumptionReadingsSectionWrapper>
    );
};

export default ConsumptionUserAddressSection;
