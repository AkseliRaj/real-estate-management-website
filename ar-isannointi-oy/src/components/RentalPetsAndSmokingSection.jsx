import React from 'react';
import { useTranslation } from 'react-i18next';

const RentalPetsAndSmokingSection = ({ idPrefix = 'main' }) => {
    const { t } = useTranslation();

    return (
        <div className='container'>
            <div className='row justify-content-center pb-5'>
                <div className='col-11 col-lg-8 col-xxl-8'>
                    <div className='row Quote-Form-Section g-4'>
                        <div className='col-12 mb-3'>
                            <label className="form-label d-block">
                                {t('Rental-Application-Page.Form-Labels.Applicant-Information.Pets-And-Smoking.Smoking-Radiobutton')}
                            </label>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name={`${idPrefix}-isSmoking`} id={`${idPrefix}-isSmokingYes`} value="yes" />
                                <label className="form-check-label" htmlFor={`${idPrefix}-isSmokingYes`}>
                                    {t('Rental-Application-Page.Form-Labels.Applicant-Information.Pets-And-Smoking.Yes-Button')}
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name={`${idPrefix}-isSmoking`} id={`${idPrefix}-isSmokingNo`} value="no" />
                                <label className="form-check-label" htmlFor={`${idPrefix}-isSmokingNo`}>
                                    {t('Rental-Application-Page.Form-Labels.Applicant-Information.Pets-And-Smoking.No-Button')}
                                </label>
                            </div>
                        </div>

                        <div className='col-12 mb-3'>
                            <label className="form-label d-block">
                                {t('Rental-Application-Page.Form-Labels.Applicant-Information.Pets-And-Smoking.Pets-Radiobutton')}
                            </label>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name={`${idPrefix}-hasPets`} id={`${idPrefix}-hasPetsYes`} value="yes" />
                                <label className="form-check-label" htmlFor={`${idPrefix}-hasPetsYes`}>
                                    {t('Rental-Application-Page.Form-Labels.Applicant-Information.Pets-And-Smoking.Yes-Button')}
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name={`${idPrefix}-hasPets`} id={`${idPrefix}-hasPetsNo`} value="no" />
                                <label className="form-check-label" htmlFor={`${idPrefix}-hasPetsNo`}>
                                    {t('Rental-Application-Page.Form-Labels.Applicant-Information.Pets-And-Smoking.No-Button')}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RentalPetsAndSmokingSection;
