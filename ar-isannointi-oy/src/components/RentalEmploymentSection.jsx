import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const RentalEmploymentSection = ({ idPrefix = 'main' }) => {
    const { t } = useTranslation();
    const [isEmployed, setIsEmployed] = useState(null);

    return (
        <div className='container'>
            <div className='row justify-content-center pb-5'>
                <div className='col-11 col-lg-8 col-xxl-8'>
                    <div className='row Quote-Form-Section g-4'>
                        <div className='col-12 mb-3'>
                            <label className="form-label d-block">
                                {t('Rental-Application-Page.Form-Labels.Applicant-Information.Employment.Radiobutton-Label')}
                            </label>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name={`${idPrefix}-isEmployed`}
                                    id={`${idPrefix}-isEmployedYes`}
                                    value="yes"
                                    checked={isEmployed === 'yes'}
                                    onChange={(event) => setIsEmployed(event.target.value)}
                                />
                                <label className="form-check-label" htmlFor={`${idPrefix}-isEmployedYes`}>
                                    {t('Rental-Application-Page.Form-Labels.Applicant-Information.Employment.Yes-Button')}
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name={`${idPrefix}-isEmployed`}
                                    id={`${idPrefix}-isEmployedNo`}
                                    value="no"
                                    checked={isEmployed === 'no'}
                                    onChange={(event) => setIsEmployed(event.target.value)}
                                />
                                <label className="form-check-label" htmlFor={`${idPrefix}-isEmployedNo`}>
                                    {t('Rental-Application-Page.Form-Labels.Applicant-Information.Employment.No-Button')}
                                </label>
                            </div>
                        </div>

                        {isEmployed === 'yes' && (
                            <>
                                <div className='col-12 mb-3 employment-fields-enter'>
                                    <label htmlFor={`${idPrefix}-employerName`} className="form-label">
                                        {t('Rental-Application-Page.Form-Labels.Applicant-Information.Employment.Employer-Name')}
                                    </label>
                                    <input type="text" className="form-control" id={`${idPrefix}-employerName`} />
                                </div>

                                <div className='col-12 mb-3 employment-fields-enter'>
                                    <label htmlFor={`${idPrefix}-workTitle`} className="form-label">
                                        {t('Rental-Application-Page.Form-Labels.Applicant-Information.Employment.Work-Title')}
                                    </label>
                                    <input type="text" className="form-control" id={`${idPrefix}-workTitle`} />
                                </div>

                                <div className='col-12 mb-3 employment-fields-enter'>
                                    <label htmlFor={`${idPrefix}-workStartDate`} className="form-label">
                                        {t('Rental-Application-Page.Form-Labels.Applicant-Information.Employment.Work-Start-Date')}
                                    </label>
                                    <input type="text" className="form-control" id={`${idPrefix}-workStartDate`} />
                                </div>

                                <div className='col-12 mb-3 employment-fields-enter'>
                                    <label htmlFor={`${idPrefix}-workEndDate`} className="form-label">
                                        {t('Rental-Application-Page.Form-Labels.Applicant-Information.Employment.Work-End-Date')}
                                    </label>
                                    <input type="text" className="form-control" id={`${idPrefix}-workEndDate`} />
                                </div>

                                <div className='col-12 mb-3 employment-fields-enter'>
                                    <label htmlFor={`${idPrefix}-grossIncome`} className="form-label">
                                        {t('Rental-Application-Page.Form-Labels.Applicant-Information.Employment.Gross-Income')}
                                    </label>
                                    <input type="text" className="form-control" id={`${idPrefix}-grossIncome`} />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RentalEmploymentSection;
