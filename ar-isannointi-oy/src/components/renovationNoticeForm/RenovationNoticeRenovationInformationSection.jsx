import React from 'react';
import { useTranslation } from 'react-i18next';
import RenovationNoticeSectionWrapper from './RenovationNoticeSectionWrapper';
import { CONTRACTOR_FIELDS, RENOVATION_WORK_TYPES } from './renovationNoticeConstants';

const RenovationNoticeRenovationInformationSection = ({ selectedRenovationTypes }) => {
    const { t } = useTranslation();
    const translationKey = 'Renovation-Notice-Form-Page.Form-Labels.Renovation-Information';
    const selectedWorkTypes = RENOVATION_WORK_TYPES.filter(({ value }) => selectedRenovationTypes.includes(value));

    if (selectedWorkTypes.length === 0) {
        return null;
    }

    return (
        <>
            {selectedWorkTypes.map(({ value, titleKey }) => (
                <RenovationNoticeSectionWrapper
                    key={value}
                    title={t(`${translationKey}.${titleKey}`)}
                >
                    {CONTRACTOR_FIELDS.map(({ field, labelKey, type = 'text' }) => {
                        const id = `renovation${value.charAt(0).toUpperCase()}${value.slice(1)}Contractor${field.charAt(0).toUpperCase()}${field.slice(1)}`;

                        return (
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
                        );
                    })}

                    <div className="col-12 mb-3">
                        <label htmlFor={`renovation${value.charAt(0).toUpperCase()}${value.slice(1)}WorkDescription`} className="form-label">
                            {t(`${translationKey}.Work-Description`)} <span className='Required-Asterisk'>*</span>
                        </label>
                        <textarea
                            className="form-control"
                            id={`renovation${value.charAt(0).toUpperCase()}${value.slice(1)}WorkDescription`}
                            rows="8"
                        />
                    </div>
                </RenovationNoticeSectionWrapper>
            ))}
        </>
    );
};

export default RenovationNoticeRenovationInformationSection;
