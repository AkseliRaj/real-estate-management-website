import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ArrowButton from '../ArrowButtonOrange';
import HouseRegisterExtractSectionWrapper from './HouseRegisterExtractSectionWrapper';

const HouseRegisterExtractTermsSection = () => {
    const { t } = useTranslation();
    const [isAccepted, setIsAccepted] = useState(false);

    return (
        <HouseRegisterExtractSectionWrapper bottomPadding>
            <div className='col-12 mb-2'>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="house-register-extract-tosAccepted"
                        checked={isAccepted}
                        onChange={(event) => setIsAccepted(event.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="house-register-extract-tosAccepted">
                        {t('House-Register-Extract-Form-Page.TOS')}
                    </label>
                </div>
            </div>

            <div className='col-12 mb-3'>
                <ArrowButton
                    label={t('House-Register-Extract-Form-Page.Send-Button')}
                    variant="orange"
                    showArrow
                    disabled={!isAccepted}
                />
            </div>
        </HouseRegisterExtractSectionWrapper>
    );
};

export default HouseRegisterExtractTermsSection;
