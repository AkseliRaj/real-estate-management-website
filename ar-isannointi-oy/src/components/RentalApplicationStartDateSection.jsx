import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const RentalApplicationStartDateSection = ({ idPrefix = 'main-applicant' }) => {
    const { t } = useTranslation();
    const [applicationType, setApplicationType] = useState('open-ended');

    return (
        <div className='container'>
            <div className='row justify-content-center pb-5'>
                <div className='col-11 col-lg-8 col-xxl-8'>
                    <div className='row Quote-Form-Section g-4'>
                        <div className='col-12 mb-3'>
                            <label className="form-label d-block">
                                {t('Rental-Application-Page.Form-Labels.Application-Start-Date.Radio-button-Label:')}
                            </label>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name={`${idPrefix}-applicationType`}
                                    id={`${idPrefix}-applicationTypeFixed`}
                                    value="fixed"
                                    checked={applicationType === 'fixed'}
                                    onChange={(event) => setApplicationType(event.target.value)}
                                />
                                <label className="form-check-label" htmlFor={`${idPrefix}-applicationTypeFixed`}>
                                    {t('Rental-Application-Page.Form-Labels.Application-Start-Date.Fixed-Term-Radiobutton')}
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name={`${idPrefix}-applicationType`}
                                    id={`${idPrefix}-applicationTypeOpenEnded`}
                                    value="open-ended"
                                    checked={applicationType === 'open-ended'}
                                    onChange={(event) => setApplicationType(event.target.value)}
                                />
                                <label className="form-check-label" htmlFor={`${idPrefix}-applicationTypeOpenEnded`}>
                                    {t('Rental-Application-Page.Form-Labels.Application-Start-Date.Open-Ended-Radiobutton')}
                                </label>
                            </div>
                        </div>

                        <div className='col-12 mb-3'>
                            <label htmlFor={`${idPrefix}-applicationStartDate`} className="form-label">
                                {t('Rental-Application-Page.Form-Labels.Application-Start-Date.Start-Date-Label')}
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id={`${idPrefix}-applicationStartDate`}
                            />
                        </div>

                        {applicationType === 'fixed' && (
                            <div className='col-12 mb-3 employment-fields-enter'>
                                <label htmlFor={`${idPrefix}-applicationEndDate`} className="form-label">
                                    {t('Rental-Application-Page.Form-Labels.Application-Start-Date.End-Date-Label')}
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id={`${idPrefix}-applicationEndDate`}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RentalApplicationStartDateSection;
