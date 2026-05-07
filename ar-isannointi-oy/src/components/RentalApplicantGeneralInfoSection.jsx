import React from 'react';
import { useTranslation } from 'react-i18next';

const RentalApplicantGeneralInfoSection = ({ idPrefix = 'main', showTitle = true }) => {
    const { t } = useTranslation();

    return (
        <div className='container'>
            <div className='row justify-content-center py-5'>
                {showTitle && (
                    <div className='col-11 col-lg-8 col-xxl-8 py-0 py-md-3'>
                        <h3 className='d-none d-md-block pb-1 pb-sm-2 pb-lg-3'>
                            {t('Rental-Application-Page.Form-Labels.Applicant-Information.title')}
                        </h3>
                        <h4 className='d-block d-md-none pb-1 pb-sm-2 pb-lg-3'>
                            {t('Rental-Application-Page.Form-Labels.Applicant-Information.title')}
                        </h4>
                    </div>
                )}

                <div className='col-11 col-lg-8 col-xxl-8'>
                    <div className='row Quote-Form-Section g-4'>
                        <div className='col-12 mb-3'>
                            <label htmlFor={`${idPrefix}-applicantFirstName`} className="form-label">
                                {t('Rental-Application-Page.Form-Labels.Applicant-Information.General-Information.Firstname')} <span className='Required-Asterisk'>*</span>
                            </label>
                            <input type="text" className="form-control" id={`${idPrefix}-applicantFirstName`} />
                        </div>

                        <div className='col-12 mb-3'>
                            <label htmlFor={`${idPrefix}-applicantLastName`} className="form-label">
                                {t('Rental-Application-Page.Form-Labels.Applicant-Information.General-Information.Lastname')}
                            </label>
                            <input type="text" className="form-control" id={`${idPrefix}-applicantLastName`} />
                        </div>

                        <div className='col-12 mb-3'>
                            <label htmlFor={`${idPrefix}-applicantEmail`} className="form-label">
                                {t('Rental-Application-Page.Form-Labels.Applicant-Information.General-Information.Email')}
                            </label>
                            <input type="text" className="form-control" id={`${idPrefix}-applicantEmail`} />
                        </div>

                        <div className='col-12 mb-3'>
                            <label htmlFor={`${idPrefix}-applicantPhoneNumber`} className="form-label">
                                {t('Rental-Application-Page.Form-Labels.Applicant-Information.General-Information.Phonenumber')}
                            </label>
                            <input type="text" className="form-control" id={`${idPrefix}-applicantPhoneNumber`} />
                        </div>

                        <div className='col-12 mb-3'>
                            <label htmlFor={`${idPrefix}-applicantCurrentAddress`} className="form-label">
                                {t('Rental-Application-Page.Form-Labels.Applicant-Information.General-Information.Address')}
                            </label>
                            <input type="text" className="form-control" id={`${idPrefix}-applicantCurrentAddress`} />
                        </div>

                        <div className='col-12 mb-3'>
                            <label htmlFor={`${idPrefix}-applicantPersonalId`} className="form-label">
                                {t('Rental-Application-Page.Form-Labels.Applicant-Information.General-Information.PersonalID')}
                            </label>
                            <input type="text" className="form-control" id={`${idPrefix}-applicantPersonalId`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RentalApplicantGeneralInfoSection;
