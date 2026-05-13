import React from 'react';
import { useTranslation } from 'react-i18next';
import ConsumptionReadingsSectionWrapper from './ConsumptionReadingsSectionWrapper';

const ELECTRICITY_READING_FIELDS = [
    { id: 'electricityReadingDate', type: 'date', labelKey: 'Reading-Date', required: true },
    { id: 'electricityReading', type: 'number', labelKey: 'Electricity-Reading' },
    { id: 'daytimeElectricityReading', type: 'number', labelKey: 'Daytime-Electricity-Reading' },
    { id: 'nightTimeElectricityReading', type: 'number', labelKey: 'NightTime-Electricity-Reading' },
];

const ConsumptionElectricityReadingsSection = () => {
    const { t } = useTranslation();
    const translationKey = 'Consumption-Readings-Form-Page.Form-Labels.Electricity-Readings';

    return (
        <ConsumptionReadingsSectionWrapper title={t(`${translationKey}.title`)}>
            {ELECTRICITY_READING_FIELDS.map(({ id, type, labelKey, required }) => (
                <div className="col-12 mb-3" key={id}>
                    <label htmlFor={id} className="form-label">
                        {t(`${translationKey}.${labelKey}`)} {required && <span className='Required-Asterisk'>*</span>}
                    </label>
                    <input
                        type={type}
                        className="form-control"
                        id={id}
                        min={type === 'number' ? '0' : undefined}
                        step={type === 'number' ? '0.01' : undefined}
                    />
                </div>
            ))}
        </ConsumptionReadingsSectionWrapper>
    );
};

export default ConsumptionElectricityReadingsSection;
