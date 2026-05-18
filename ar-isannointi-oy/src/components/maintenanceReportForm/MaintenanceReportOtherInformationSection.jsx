import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MaintenanceReportSectionWrapper from './MaintenanceReportSectionWrapper';

const YES_NO_OPTIONS = [
    { value: 'yes', labelKey: 'Yes-Label' },
    { value: 'no', labelKey: 'No-Label' },
];

const MaintenanceReportOtherInformationSection = () => {
    const { t } = useTranslation();
    const translationKey = 'Maintenance-Request-Form-Page.Form-Labels.Other-Information';
    const [masterKeyAllowed, setMasterKeyAllowed] = useState('');
    const [hasPets, setHasPets] = useState('');

    const renderYesNoFieldset = (name, legendLabel, value, onChange) => (
        <fieldset>
            <legend className="form-label float-none w-auto p-0 mb-2">
                {legendLabel} <span className='Required-Asterisk'>*</span>
            </legend>
            <div className="d-flex flex-column gap-2">
                {YES_NO_OPTIONS.map(({ value: optionValue, labelKey }) => (
                    <div className="form-check" key={optionValue}>
                        <input
                            type="radio"
                            className="form-check-input"
                            name={name}
                            id={`${name}-${optionValue}`}
                            value={optionValue}
                            checked={value === optionValue}
                            onChange={(event) => onChange(event.target.value)}
                        />
                        <label className="form-check-label" htmlFor={`${name}-${optionValue}`}>
                            {t(`${translationKey}.${labelKey}`)}
                        </label>
                    </div>
                ))}
            </div>
        </fieldset>
    );

    return (
        <MaintenanceReportSectionWrapper title={t(`${translationKey}.title`)}>
            <div className='col-12 mb-3'>
                {renderYesNoFieldset(
                    'maintenanceMasterKeyAllowed',
                    t(`${translationKey}.Master-Key`),
                    masterKeyAllowed,
                    setMasterKeyAllowed,
                )}
            </div>

            <div className='col-12 mb-3'>
                {renderYesNoFieldset(
                    'maintenanceHasPets',
                    t(`${translationKey}.House-Pets`),
                    hasPets,
                    setHasPets,
                )}
            </div>

            <div className='col-12 mb-3'>
                <label htmlFor="maintenanceOtherInformation" className="form-label">
                    {t(`${translationKey}.Text-Area-Label`)}
                </label>
                <textarea
                    className="form-control"
                    id="maintenanceOtherInformation"
                    rows="8"
                />
            </div>
        </MaintenanceReportSectionWrapper>
    );
};

export default MaintenanceReportOtherInformationSection;
