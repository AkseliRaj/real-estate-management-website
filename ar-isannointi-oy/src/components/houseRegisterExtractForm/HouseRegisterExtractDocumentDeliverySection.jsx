import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import HouseRegisterExtractSectionWrapper from './HouseRegisterExtractSectionWrapper';

const DELIVERY_OPTIONS = [
    { value: 'by-email', labelKey: 'By-Email' },
    { value: 'for-pickup', labelKey: 'For-Pickup' },
];

const HouseRegisterExtractDocumentDeliverySection = () => {
    const { t } = useTranslation();
    const translationKey = 'House-Register-Extract-Form-Page.Form-Labels.Delivery-Method';
    const [deliveryMethod, setDeliveryMethod] = useState('');

    return (
        <HouseRegisterExtractSectionWrapper title={t(`${translationKey}.title`)}>
            <div className='col-12 mb-3'>
                <fieldset>
                    <legend className="form-label float-none w-auto p-0 mb-2">
                        {t(`${translationKey}.Radio-Button-Label`)} <span className='Required-Asterisk'>*</span>
                    </legend>
                    <div className="d-flex flex-column gap-2">
                        {DELIVERY_OPTIONS.map(({ value, labelKey }) => (
                            <div className="form-check" key={value}>
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    name="houseRegisterDeliveryMethod"
                                    id={`houseRegisterDeliveryMethod-${value}`}
                                    value={value}
                                    checked={deliveryMethod === value}
                                    onChange={(event) => setDeliveryMethod(event.target.value)}
                                />
                                <label className="form-check-label" htmlFor={`houseRegisterDeliveryMethod-${value}`}>
                                    {t(`${translationKey}.${labelKey}`)}
                                </label>
                            </div>
                        ))}
                    </div>
                </fieldset>
            </div>
        </HouseRegisterExtractSectionWrapper>
    );
};

export default HouseRegisterExtractDocumentDeliverySection;
