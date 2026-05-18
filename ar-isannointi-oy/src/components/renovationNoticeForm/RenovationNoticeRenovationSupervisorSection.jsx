import React from 'react';
import { useTranslation } from 'react-i18next';
import RenovationNoticeSectionWrapper from './RenovationNoticeSectionWrapper';
import { CONTRACTOR_FIELDS, RENOVATION_WORK_TYPES } from './renovationNoticeConstants';

const YES_NO_OPTIONS = [
    { value: 'yes', labelKey: 'Yes-Radio-Button' },
    { value: 'no', labelKey: 'No-Radio-Button' },
];

const RenovationNoticeRenovationSupervisorSection = ({
    selectedRenovationTypes,
    supervisorSameAsContractor,
    onSupervisorSameAsContractorChange,
}) => {
    const { t } = useTranslation();
    const translationKey = 'Renovation-Notice-Form-Page.Form-Labels.Renovation-Supervisor';
    const selectedWorkTypes = RENOVATION_WORK_TYPES.filter(({ value }) => selectedRenovationTypes.includes(value));

    if (selectedWorkTypes.length === 0) {
        return null;
    }

    const renderSupervisorFields = (workType) => (
        CONTRACTOR_FIELDS.map(({ field, labelKey, type = 'text' }) => {
            const id = `renovation${workType.charAt(0).toUpperCase()}${workType.slice(1)}Supervisor${field.charAt(0).toUpperCase()}${field.slice(1)}`;

            return (
                <div className="col-12 mb-3" key={id}>
                    <label htmlFor={id} className="form-label">
                        {t(`Renovation-Notice-Form-Page.Form-Labels.Renovation-Information.${labelKey}`)}{' '}
                        <span className='Required-Asterisk'>*</span>
                    </label>
                    <input
                        type={type}
                        className="form-control"
                        id={id}
                    />
                </div>
            );
        })
    );

    return (
        <RenovationNoticeSectionWrapper title={t(`${translationKey}.title`)}>
            <div className='col-12 mb-4'>
                <p className='mb-0'>{t(`${translationKey}.prefix-paragraph`)}</p>
            </div>

            {selectedWorkTypes.map(({ value, supervisorRadioLabelKey, supervisorTitleKey }) => (
                <div className='col-12 mb-4' key={value}>
                    <fieldset className='mb-3'>
                        <legend className="form-label float-none w-auto p-0 mb-2">
                            {t(`${translationKey}.${supervisorRadioLabelKey}`)}{' '}
                            <span className='Required-Asterisk'>*</span>
                        </legend>
                        <div className="d-flex flex-column gap-2">
                            {YES_NO_OPTIONS.map(({ value: optionValue, labelKey }) => (
                                <div className="form-check" key={optionValue}>
                                    <input
                                        type="radio"
                                        className="form-check-input"
                                        name={`renovationSupervisorSameAsContractor-${value}`}
                                        id={`renovationSupervisorSameAsContractor-${value}-${optionValue}`}
                                        value={optionValue}
                                        checked={supervisorSameAsContractor[value] === optionValue}
                                        onChange={(event) => onSupervisorSameAsContractorChange(value, event.target.value)}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor={`renovationSupervisorSameAsContractor-${value}-${optionValue}`}
                                    >
                                        {t(`${translationKey}.${labelKey}`)}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </fieldset>

                    {supervisorSameAsContractor[value] === 'no' && (
                        <>
                            <h5 className='mb-3'>{t(`${translationKey}.${supervisorTitleKey}`)}</h5>
                            <div className='row g-0'>
                                {renderSupervisorFields(value)}
                            </div>
                        </>
                    )}
                </div>
            ))}
        </RenovationNoticeSectionWrapper>
    );
};

export default RenovationNoticeRenovationSupervisorSection;
