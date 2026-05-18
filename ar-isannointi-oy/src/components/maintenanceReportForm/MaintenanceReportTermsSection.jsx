import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ArrowButton from '../ArrowButtonOrange';
import MaintenanceReportSectionWrapper from './MaintenanceReportSectionWrapper';

const MaintenanceReportTermsSection = () => {
    const { t } = useTranslation();
    const [isAccepted, setIsAccepted] = useState(false);

    return (
        <MaintenanceReportSectionWrapper bottomPadding>
            <div className='col-12 mb-2'>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="maintenance-report-tosAccepted"
                        checked={isAccepted}
                        onChange={(event) => setIsAccepted(event.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="maintenance-report-tosAccepted">
                        {t('Maintenance-Request-Form-Page.Form-Labels.TOS')}
                    </label>
                </div>
            </div>

            <div className='col-12 mb-3'>
                <ArrowButton
                    label={t('Maintenance-Request-Form-Page.Form-Labels.Send-Button')}
                    variant="orange"
                    showArrow
                    disabled={!isAccepted}
                />
            </div>
        </MaintenanceReportSectionWrapper>
    );
};

export default MaintenanceReportTermsSection;
