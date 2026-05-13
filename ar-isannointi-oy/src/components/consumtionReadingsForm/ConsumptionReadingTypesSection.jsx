import React from 'react';
import { useTranslation } from 'react-i18next';
import ConsumptionReadingsSectionWrapper from './ConsumptionReadingsSectionWrapper';

const READING_TYPES = [
    {
        value: 'electricity',
        labelKey: 'Consumption-Readings-Form-Page.Form-Labels.Reading-Types.Electricity-Checkbox',
    },
    {
        value: 'water',
        labelKey: 'Consumption-Readings-Form-Page.Form-Labels.Reading-Types.Water-Meterings-Checkbox',
    },
];

const ConsumptionReadingTypesSection = ({ selectedReadingTypes, onReadingTypeChange }) => {
    const { t } = useTranslation();

    return (
        <ConsumptionReadingsSectionWrapper title={t('Consumption-Readings-Form-Page.Form-Labels.Reading-Types.title')}>
            <div className='col-12 mb-3'>
                <fieldset>
                    <legend className="form-label float-none w-auto p-0 mb-2">
                        {t('Consumption-Readings-Form-Page.Form-Labels.Reading-Types.Checkbox-Label')} <span className='Required-Asterisk'>*</span>
                    </legend>
                    <div className="d-flex flex-column gap-2">
                        {READING_TYPES.map(({ value, labelKey }) => (
                            <div className="form-check" key={value}>
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="consumptionReadingTypes"
                                    id={`consumptionReadingType-${value}`}
                                    value={value}
                                    checked={selectedReadingTypes.includes(value)}
                                    onChange={(event) => onReadingTypeChange(value, event.target.checked)}
                                />
                                <label className="form-check-label" htmlFor={`consumptionReadingType-${value}`}>
                                    {t(labelKey)}
                                </label>
                            </div>
                        ))}
                    </div>
                </fieldset>
            </div>
        </ConsumptionReadingsSectionWrapper>
    );
};

export default ConsumptionReadingTypesSection;
