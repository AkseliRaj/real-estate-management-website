import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ArrowButton from './ArrowButtonOrange';

const RentalTermsSection = ({ idPrefix = 'main-applicant' }) => {
    const { t } = useTranslation();
    const [isAccepted, setIsAccepted] = useState(false);

    return (
        <div className='container'>
            <div className='row justify-content-center pb-5'>
                <div className='col-11 col-lg-8 col-xxl-8'>
                    <div className='row Quote-Form-Section g-4'>
                        <div className='col-12 mb-2'>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id={`${idPrefix}-tosAccepted`}
                                    checked={isAccepted}
                                    onChange={(event) => setIsAccepted(event.target.checked)}
                                />
                                <label className="form-check-label" htmlFor={`${idPrefix}-tosAccepted`}>
                                    {t('Rental-Application-Page.Form-Labels.TOS')}
                                </label>
                            </div>
                        </div>

                        <div className='col-12 mb-3'>
                            <ArrowButton
                                label={t('Rental-Application-Page.Form-Labels.Send-Button')}
                                variant="orange"
                                showArrow
                                disabled={!isAccepted}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RentalTermsSection;
