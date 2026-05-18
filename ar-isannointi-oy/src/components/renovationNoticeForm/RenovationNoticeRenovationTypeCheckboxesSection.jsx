import React from 'react';
import { useTranslation } from 'react-i18next';
import RenovationNoticeSectionWrapper from './RenovationNoticeSectionWrapper';
import { RENOVATION_TYPE_OPTIONS } from './renovationNoticeConstants';

const RenovationNoticeRenovationTypeCheckboxesSection = ({
    selectedRenovationTypes,
    onRenovationTypeChange,
}) => {
    const { t } = useTranslation();
    const translationKey = 'Renovation-Notice-Form-Page.Form-Labels.Renovation-Type-Checkboxes';

    return (
        <RenovationNoticeSectionWrapper title={t(`${translationKey}.title`)}>
            <div className='col-12 mb-3'>
                <fieldset>
                    <legend className="form-label float-none w-auto p-0 mb-2">
                        {t(`${translationKey}.Checkbox-Label`)} <span className='Required-Asterisk'>*</span>
                    </legend>
                    <div className="d-flex flex-column gap-2">
                        {RENOVATION_TYPE_OPTIONS.map(({ value, labelKey }) => (
                            <div className="form-check" key={value}>
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="renovationTypes"
                                    id={`renovationType-${value}`}
                                    value={value}
                                    checked={selectedRenovationTypes.includes(value)}
                                    onChange={(event) => onRenovationTypeChange(value, event.target.checked)}
                                />
                                <label className="form-check-label" htmlFor={`renovationType-${value}`}>
                                    {t(`${translationKey}.${labelKey}`)}
                                </label>
                            </div>
                        ))}
                    </div>
                </fieldset>
            </div>
        </RenovationNoticeSectionWrapper>
    );
};

export default RenovationNoticeRenovationTypeCheckboxesSection;
