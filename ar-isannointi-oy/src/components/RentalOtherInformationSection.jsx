import React from 'react';
import { useTranslation } from 'react-i18next';

const RentalOtherInformationSection = ({ idPrefix = 'main-applicant' }) => {
    const { t } = useTranslation();

    return (
        <div className='container'>
            <div className='row justify-content-center pb-5'>
                <div className='col-11 col-lg-8 col-xxl-8'>
                    <div className='row Quote-Form-Section g-4'>
                        <div className='col-12 mb-3'>
                            <h3 className='d-none d-md-block pb-1 pb-sm-2'>
                                {t('Rental-Application-Page.Form-Labels.Other-Information.title')}
                            </h3>
                            <h4 className='d-block d-md-none pb-1 pb-sm-2'>
                                {t('Rental-Application-Page.Form-Labels.Other-Information.title')}
                            </h4>
                            <p className='mb-3'>
                                {t('Rental-Application-Page.Form-Labels.Other-Information.prefix')}
                            </p>
                            <textarea
                                className="form-control"
                                id={`${idPrefix}-otherInformation`}
                                rows="10"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RentalOtherInformationSection;
