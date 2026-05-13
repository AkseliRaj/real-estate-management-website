import React from 'react';
import { useTranslation } from 'react-i18next';
import ConsumptionReadingsSectionWrapper from './ConsumptionReadingsSectionWrapper';

const ConsumptionMoreInformationSection = () => {
    const { t } = useTranslation();
    const translationKey = 'Consumption-Readings-Form-Page.Form-Labels.More-Information-TextArea';

    return (
        <ConsumptionReadingsSectionWrapper title={t(`${translationKey}.title`)}>
            <div className='col-12 mb-3'>
                <label htmlFor="consumptionMoreInformation" className="form-label">
                    {t(`${translationKey}.label`)}
                </label>
                <textarea
                    className="form-control"
                    id="consumptionMoreInformation"
                    rows="8"
                />
            </div>
        </ConsumptionReadingsSectionWrapper>
    );
};

export default ConsumptionMoreInformationSection;
