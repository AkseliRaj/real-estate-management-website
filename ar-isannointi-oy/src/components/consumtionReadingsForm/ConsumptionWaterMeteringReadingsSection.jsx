import React from 'react';
import { useTranslation } from 'react-i18next';
import ConsumptionReadingsSectionWrapper from './ConsumptionReadingsSectionWrapper';

const WATER_READING_FIELDS = [
    { id: 'waterReadingDate', type: 'date', labelKey: 'Reading-Date', required: true },
    { id: 'coldWaterReading', type: 'number', labelKey: 'Cold-Water-Reading' },
    { id: 'warmWaterReading', type: 'number', labelKey: 'Warm-Water-Reading' },
];

const ConsumptionWaterMeteringReadingsSection = () => {
    const { t } = useTranslation();
    const translationKey = 'Consumption-Readings-Form-Page.Form-Labels.Water-Metering-Readings';

    return (
        <ConsumptionReadingsSectionWrapper title={t(`${translationKey}.title`)}>
            {WATER_READING_FIELDS.map(({ id, type, labelKey, required }) => (
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

export default ConsumptionWaterMeteringReadingsSection;
