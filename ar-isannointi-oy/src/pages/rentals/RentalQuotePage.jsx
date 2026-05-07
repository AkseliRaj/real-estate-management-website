import React from 'react';
import '../../css/PropertyManagementQuotePage.css';
import FormPageBanner from '../../components/FormPageBanner';
import FormIntroductionSection from '../../components/FormIntroductionSection';
import ArrowButton from '../../components/ArrowButtonOrange';
import { useTranslation } from 'react-i18next';

const PropertyManagementQuotePage = () => {
    const { t } = useTranslation();

    return (
        <div className="container-fluid px-0">
            <FormPageBanner headingKey='Rent-Your-Property-Page.Banner' />

            <FormIntroductionSection
                title={t('Rent-Your-Property-Page.Prefix.title')}
                paragraphs={[
                    t('Rent-Your-Property-Page.Prefix.paragraph1'),
                    t('Rent-Your-Property-Page.Prefix.paragraph2'),
                ]}
                rowJustify = {'center'}
            />


            {/* Form sender information */}
            <div className='container'>
                <div className='row justify-content-center py-5'>

                    <div className='col-11 col-lg-8 col-xxl-8 py-0 py-md-3'>
                        <h3 className='d-none d-md-block pb-1 pb-sm-2 pb-lg-3'>
                            {t('Rent-Your-Property-Page.Form-Labels.Property-Owner-Information.title')}
                        </h3>
                        <h4 className='d-block d-md-none pb-1 pb-sm-2 pb-lg-3'>
                            {t('Rent-Your-Property-Page.Form-Labels.Property-Owner-Information.title')}
                        </h4>
                    </div>

                    <div className='col-11 col-lg-8 col-xxl-8'>
                        <div className='row Quote-Form-Section g-4'>

                            <div className="col-12 mb-3">
                                <label htmlFor="contactName" className="form-label">
                                    {t('Rent-Your-Property-Page.Form-Labels.Property-Owner-Information.Name')} <span className='Required-Asterisk'>*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="contactName"
                                />
                            </div>

                            <div className='col-12 mb-3'>
                                <label htmlFor="contactPhone" className="form-label">
                                    {t('Rent-Your-Property-Page.Form-Labels.Property-Owner-Information.Phone-Number')} <span className='Required-Asterisk'>*</span>
                                </label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="contactPhone"
                                />
                            </div>

                            <div className='col-12'>
                                <label htmlFor="contactEmail" className="form-label">
                                    {t('Rent-Your-Property-Page.Form-Labels.Property-Owner-Information.Email')} <span className='Required-Asterisk'>*</span>
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="contactEmail"
                                />
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* Property information */}
            <div className='container'>
                <div className='row justify-content-center py-5'>

                    <div className='col-11 col-lg-8 col-xxl-8 py-0 py-md-3'>
                        <h3 className='d-none d-md-block pb-1 pb-sm-2 pb-lg-3'>
                            {t('Rent-Your-Property-Page.Form-Labels.Property-Information.title')}
                        </h3>
                        <h4 className='d-block d-md-none pb-1 pb-sm-2 pb-lg-3'>
                            {t('Rent-Your-Property-Page.Form-Labels.Property-Information.title')}
                        </h4>
                    </div>

                    <div className='col-11 col-lg-8 col-xxl-8'>
                        <div className='row Quote-Form-Section g-4'>

                            <div className='col-12 mb-3'>
                                <label htmlFor="propertyAddress" className="form-label">
                                    {t('Rent-Your-Property-Page.Form-Labels.Property-Information.Address')} <span className='Required-Asterisk'>*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="propertyAddress"
                                />
                            </div>

                            <div className='col-12 mb-3'>
                                <label htmlFor="squareFootage" className="form-label">
                                    {t('Rent-Your-Property-Page.Form-Labels.Property-Information.Square-Meters')}
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="squareFootage"
                                />
                            </div>

                            <div className='col-12 mb-3'>
                                <label htmlFor="layoutDescription" className="form-label">
                                    {t('Rent-Your-Property-Page.Form-Labels.Property-Information.Layout-Description')}
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="layoutDescription"
                                />
                            </div>

                            <div className='col-12 mb-3'>
                                <label htmlFor="additionalInfo" className="form-label">
                                    {t('Rent-Your-Property-Page.Form-Labels.Property-Information.More-Information')}
                                </label>
                                <textarea
                                    className="form-control"
                                    id="additionalInfo"
                                    rows="4"
                                />
                            </div>

                            <div className='col-12 mb-3'>
                                <ArrowButton
                                    label={t('Rent-Your-Property-Page.Form-Labels.Send-Button')}
                                    variant="orange"
                                    showArrow={true}
                                />
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default PropertyManagementQuotePage;