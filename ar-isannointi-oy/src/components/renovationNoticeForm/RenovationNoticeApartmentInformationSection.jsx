import React from 'react';
import { useTranslation } from 'react-i18next';
import RenovationNoticeSectionWrapper from './RenovationNoticeSectionWrapper';

const APARTMENT_INFORMATION_FIELDS = [
    { id: 'renovationAddress', labelKey: 'Address' },
    { id: 'renovationPostcode', labelKey: 'Postcode' },
    { id: 'renovationCity', labelKey: 'City' },
    { id: 'renovationHousingCompanyName', labelKey: 'Housing-Company-Name' },
];

const RenovationNoticeApartmentInformationSection = () => {
    const { t } = useTranslation();
    const translationKey = 'Renovation-Notice-Form-Page.Form-Labels.Apartment-Information';

    return (
        <RenovationNoticeSectionWrapper title={t(`${translationKey}.title`)}>
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
        </RenovationNoticeSectionWrapper>
    );
};

export default RenovationNoticeApartmentInformationSection;
