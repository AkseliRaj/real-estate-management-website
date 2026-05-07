import React from 'react';
import { useTranslation } from 'react-i18next';

const RentalOtherApplicantsSection = ({ onAddApplicant }) => {
    const { t } = useTranslation();

    return (
        <div className='container'>
            <div className='row justify-content-center pb-5'>
                <div className='col-11 col-lg-8 col-xxl-8'>
                    <div className='row Quote-Form-Section g-4'>
                        <div className='col-12 mb-3'>
                            <p className='mb-4'>
                                {t('Rental-Application-Page.Form-Labels.Other-Applicants.prefix')}
                            </p>
                            <button type="button" className="Color-Button" onClick={onAddApplicant}>
                                {t('Rental-Application-Page.Form-Labels.Other-Applicants.Add-button')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RentalOtherApplicantsSection;
