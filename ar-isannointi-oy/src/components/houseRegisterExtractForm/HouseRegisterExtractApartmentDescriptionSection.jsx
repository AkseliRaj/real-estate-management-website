import React from 'react';
import { useTranslation } from 'react-i18next';
import HouseRegisterExtractSectionWrapper from './HouseRegisterExtractSectionWrapper';

const APARTMENT_DESCRIPTION_FIELDS = [
    { id: 'houseRegisterAddress', labelKey: 'Address' },
    { id: 'houseRegisterPostcode', labelKey: 'Postcode' },
    { id: 'houseRegisterCity', labelKey: 'City' },
    { id: 'houseRegisterHousingCompanyName', labelKey: 'Housing-Company-Name' },
];

const HouseRegisterExtractApartmentDescriptionSection = () => {
    const { t } = useTranslation();
    const translationKey = 'House-Register-Extract-Form-Page.Form-Labels.Apartment-Information';

    return (
        <HouseRegisterExtractSectionWrapper title={t(`${translationKey}.title`)}>
            {APARTMENT_DESCRIPTION_FIELDS.map(({ id, labelKey }) => (
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
        </HouseRegisterExtractSectionWrapper>
    );
};

export default HouseRegisterExtractApartmentDescriptionSection;
