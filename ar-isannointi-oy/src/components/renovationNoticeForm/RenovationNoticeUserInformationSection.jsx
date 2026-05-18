import React from 'react';
import { useTranslation } from 'react-i18next';
import RenovationNoticeSectionWrapper from './RenovationNoticeSectionWrapper';

const USER_INFORMATION_FIELDS = [
    { id: 'renovationFirstNames', type: 'text', labelKey: 'Firsnames' },
    { id: 'renovationLastName', type: 'text', labelKey: 'Lastname' },
    { id: 'renovationPhoneNumber', type: 'tel', labelKey: 'Phonenumber' },
    { id: 'renovationEmail', type: 'email', labelKey: 'Email' },
];

const RenovationNoticeUserInformationSection = () => {
    const { t } = useTranslation();
    const translationKey = 'Renovation-Notice-Form-Page.Form-Labels.User-Information';

    return (
        <RenovationNoticeSectionWrapper title={t(`${translationKey}.title`)}>
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
        </RenovationNoticeSectionWrapper>
    );
};

export default RenovationNoticeUserInformationSection;
