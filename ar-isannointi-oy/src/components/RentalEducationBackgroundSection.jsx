import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const RentalEducationBackgroundSection = ({ idPrefix = 'main' }) => {
    const { t } = useTranslation();
    const [isStudent, setIsStudent] = useState(null);

    return (
        <div className='container'>
            <div className='row justify-content-center pb-5'>
                <div className='col-11 col-lg-8 col-xxl-8'>
                    <div className='row Quote-Form-Section g-4'>
                        <div className='col-12 mb-3'>
                            <label className="form-label d-block">
                                {t('Rental-Application-Page.Form-Labels.Applicant-Information.Education-Background.Radiobutton-label')}
                            </label>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name={`${idPrefix}-isStudent`}
                                    id={`${idPrefix}-isStudentYes`}
                                    value="yes"
                                    checked={isStudent === 'yes'}
                                    onChange={(event) => setIsStudent(event.target.value)}
                                />
                                <label className="form-check-label" htmlFor={`${idPrefix}-isStudentYes`}>
                                    {t('Rental-Application-Page.Form-Labels.Applicant-Information.Education-Background.Yes-Button')}
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name={`${idPrefix}-isStudent`}
                                    id={`${idPrefix}-isStudentNo`}
                                    value="no"
                                    checked={isStudent === 'no'}
                                    onChange={(event) => setIsStudent(event.target.value)}
                                />
                                <label className="form-check-label" htmlFor={`${idPrefix}-isStudentNo`}>
                                    {t('Rental-Application-Page.Form-Labels.Applicant-Information.Education-Background.No-Button')}
                                </label>
                            </div>
                        </div>

                        {isStudent === 'yes' && (
                            <>
                                <div className='col-12 mb-3 employment-fields-enter'>
                                    <label htmlFor={`${idPrefix}-schoolName`} className="form-label">
                                        {t('Rental-Application-Page.Form-Labels.Applicant-Information.Education-Background.School-Name')}
                                    </label>
                                    <input type="text" className="form-control" id={`${idPrefix}-schoolName`} />
                                </div>

                                <div className='col-12 mb-3 employment-fields-enter'>
                                    <label htmlFor={`${idPrefix}-degreeName`} className="form-label">
                                        {t('Rental-Application-Page.Form-Labels.Applicant-Information.Education-Background.Degree-Name')}
                                    </label>
                                    <input type="text" className="form-control" id={`${idPrefix}-degreeName`} />
                                </div>

                                <div className='col-12 mb-3 employment-fields-enter'>
                                    <label htmlFor={`${idPrefix}-degreeStartYear`} className="form-label">
                                        {t('Rental-Application-Page.Form-Labels.Applicant-Information.Education-Background.Start-Year')}
                                    </label>
                                    <input type="text" className="form-control" id={`${idPrefix}-degreeStartYear`} />
                                </div>

                                <div className='col-12 mb-3 employment-fields-enter'>
                                    <label htmlFor={`${idPrefix}-estimatedGraduationYear`} className="form-label">
                                        {t('Rental-Application-Page.Form-Labels.Applicant-Information.Education-Background.End-Year')}
                                    </label>
                                    <input type="text" className="form-control" id={`${idPrefix}-estimatedGraduationYear`} />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RentalEducationBackgroundSection;
