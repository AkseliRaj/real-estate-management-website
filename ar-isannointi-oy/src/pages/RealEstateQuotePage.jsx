import React from 'react';
import '../css/PropertyManagementQuotePage.css';
import FormPageBanner from '../components/FormPageBanner';
import FormIntroductionSection from '../components/FormIntroductionSection';
import ArrowButton from '../components/ArrowButtonOrange';
import { useTranslation } from 'react-i18next';
import buildFormContentItems from '../utils/buildFormContentItems';

const RealEstateQuotePage = () => {
    const { t } = useTranslation();
    const realEstateRequestQuoteSection = t('Real-Estate-Request-Quote', { returnObjects: true });
    const requestQuoteBanner = realEstateRequestQuoteSection.banner || {};
    const requestQuotePrefixSection = realEstateRequestQuoteSection['Prefix-Section'] || {};
    const requestQuoteServicesSection = realEstateRequestQuoteSection['Services-Explained'] || {};
    const requestQuoteServicesContentItems = Object.entries(requestQuoteServicesSection)
        .filter(([key]) => key !== 'title')
        .map(([key, value]) => {
            if (typeof key === 'string' && key.startsWith('paragraph') && typeof value === 'string') {
                return {
                    type: 'paragraph',
                    text: value,
                };
            }

            if (
                typeof key === 'string'
                && key.startsWith('bullet-point-list')
                && typeof value === 'object'
                && value !== null
            ) {
                return {
                    type: 'bulletList',
                    intro: value.paragraph1 || '',
                    items: Object.entries(value)
                        .filter(
                            ([itemKey, itemValue]) => (
                                itemKey.startsWith('list-item')
                                && typeof itemValue === 'object'
                                && itemValue !== null
                            ),
                        )
                        .map(([itemKey, itemValue]) => (
                            <span key={itemKey}>
                                <span className='bolded-text'>{itemValue['bold-word'] || ''}</span>
                                {itemValue.paragraph || ''}
                            </span>
                        )),
                };
            }

            return null;
        })
        .filter(Boolean);

    return (
        <div className="container-fluid px-0">
            <FormPageBanner
                headingText={requestQuoteBanner.heading}
                imageAlt={requestQuoteBanner.imageAlt}
            />

            <FormIntroductionSection
                title={requestQuotePrefixSection.title}
                contentItems={buildFormContentItems(requestQuotePrefixSection)}
            />

            <FormIntroductionSection
                title={requestQuoteServicesSection.title}
                contentItems={requestQuoteServicesContentItems}
            />

            {/* Form sender information */}
            <div className='container'>
                <div className='row justify-content-start py-5'>

                    <div className='col-11 col-lg-8 col-xxl-8 py-0 py-md-3'>
                        <h3 className='d-none d-md-block pb-1 pb-sm-2 pb-lg-3'>
                            {t('PropertyManagementQuote.contactSection.heading')}
                        </h3>
                        <h4 className='d-block d-md-none pb-1 pb-sm-2 pb-lg-3'>
                            {t('PropertyManagementQuote.contactSection.heading')}
                        </h4>
                    </div>

                    <div className='col-11 col-lg-8 col-xxl-8'>
                        <div className='row Quote-Form-Section g-4'>

                            <div className="col-12 mb-3">
                                <label htmlFor="contactName" className="form-label">
                                    {t('PropertyManagementQuote.contactSection.nameLabel')} <span className='Required-Asterisk'>*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="contactName"
                                />
                            </div>

                            <div className='col-12 mb-3'>
                                <label htmlFor="contactPhone" className="form-label">
                                    {t('PropertyManagementQuote.contactSection.phoneLabel')} <span className='Required-Asterisk'>*</span>
                                </label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="contactPhone"
                                />
                            </div>

                            <div className='col-12'>
                                <label htmlFor="contactEmail" className="form-label">
                                    {t('PropertyManagementQuote.contactSection.emailLabel')} <span className='Required-Asterisk'>*</span>
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
                <div className='row justify-content-start py-5'>

                    <div className='col-11 col-lg-8 col-xxl-8 py-0 py-md-3'>
                        <h3 className='d-none d-md-block pb-1 pb-sm-2 pb-lg-3'>
                            {t('PropertyManagementQuote.propertySection.heading')}
                        </h3>
                        <h4 className='d-block d-md-none pb-1 pb-sm-2 pb-lg-3'>
                            {t('PropertyManagementQuote.propertySection.heading')}
                        </h4>
                    </div>

                    <div className='col-11 col-lg-8 col-xxl-8'>
                        <div className='row Quote-Form-Section g-4'>

                            <div className="col-12 mb-3">
                                <label htmlFor="propertyName" className="form-label">
                                    {t('PropertyManagementQuote.propertySection.nameLabel')} <span className='Required-Asterisk'>*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="propertyName"
                                />
                            </div>

                            <div className='col-12 mb-3'>
                                <label htmlFor="propertyAddress" className="form-label">
                                    {t('PropertyManagementQuote.propertySection.addressLabel')} <span className='Required-Asterisk'>*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="propertyAddress"
                                />
                            </div>

                            <div className='col-12 mb-3'>
                                <label htmlFor="buildYear" className="form-label">
                                    {t('PropertyManagementQuote.propertySection.buildYearLabel')}
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="buildYear"
                                />
                            </div>

                            <div className='col-12 mb-3'>
                                <label htmlFor="apartmentCount" className="form-label">
                                    {t('PropertyManagementQuote.propertySection.apartmentCountLabel')}
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="apartmentCount"
                                />
                            </div>

                            <div className='col-12 mb-3'>
                                <label htmlFor="squareFootage" className="form-label">
                                    {t('PropertyManagementQuote.propertySection.squareFootageLabel')}
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="squareFootage"
                                />
                            </div>

                            <div className='col-12 mb-3'>
                                <label htmlFor="additionalInfo" className="form-label">
                                    {t('PropertyManagementQuote.propertySection.additionalInfoLabel')}
                                </label>
                                <textarea
                                    className="form-control"
                                    id="additionalInfo"
                                    rows="4"
                                />
                            </div>

                            <div className='col-12 mb-3'>
                                <ArrowButton
                                    label={t('PropertyManagementQuote.form.submitButton')}
                                    variant="orange"
                                    showArrow={true}
                                />
                            </div>

                            <div className='col-12 mb-3'>
                                <p>{t('PropertyManagementQuote.form.submittedMessage')}</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default RealEstateQuotePage;