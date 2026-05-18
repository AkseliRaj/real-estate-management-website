import React from 'react';
import { useTranslation } from 'react-i18next';
import HouseRegisterExtractSectionWrapper from './HouseRegisterExtractSectionWrapper';

const USER_INFORMATION_FIELDS = [
    { id: 'houseRegisterFirstNames', type: 'text', labelKey: 'Firsnames' },
    { id: 'houseRegisterLastName', type: 'text', labelKey: 'Lastname' },
    { id: 'houseRegisterPhoneNumber', type: 'tel', labelKey: 'Phonenumber' },
    { id: 'houseRegisterEmail', type: 'email', labelKey: 'Email' },
];

const HouseRegisterExtractUserInformationSection = () => {
    const { t } = useTranslation();
    const translationKey = 'House-Register-Extract-Form-Page.Form-Labels.User-Information';

    return (
        <HouseRegisterExtractSectionWrapper title={t(`${translationKey}.title`)}>
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
        </HouseRegisterExtractSectionWrapper>
    );
};

export default HouseRegisterExtractUserInformationSection;
