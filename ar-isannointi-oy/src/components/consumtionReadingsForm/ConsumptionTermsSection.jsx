import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ArrowButton from '../ArrowButtonOrange';
import ConsumptionReadingsSectionWrapper from './ConsumptionReadingsSectionWrapper';

const ConsumptionTermsSection = () => {
    const { t } = useTranslation();
    const [isAccepted, setIsAccepted] = useState(false);

    return (
        <ConsumptionReadingsSectionWrapper bottomPadding>
            <div className='col-12 mb-2'>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="consumption-readings-tosAccepted"
                        checked={isAccepted}
                        onChange={(event) => setIsAccepted(event.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="consumption-readings-tosAccepted">
                        {t('Consumption-Readings-Form-Page.TOS')}
                    </label>
                </div>
            </div>

            <div className='col-12 mb-3'>
                <ArrowButton
                    label={t('Consumption-Readings-Form-Page.Send-Button')}
                    variant="orange"
                    showArrow
                    disabled={!isAccepted}
                />
            </div>
        </ConsumptionReadingsSectionWrapper>
    );
};

export default ConsumptionTermsSection;
