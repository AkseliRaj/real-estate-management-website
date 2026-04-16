import React, { useState } from 'react';
import '../css/PropertyManagementQuotePage.css';
import FormPageBanner from '../components/FormPageBanner';
import FormIntroductionSection from '../components/FormIntroductionSection';
import ArrowButton from '../components/ArrowButtonOrange';
import { useTranslation } from 'react-i18next';
import buildFormContentItems from '../utils/buildFormContentItems';

const RealEstateQuotePage = () => {
    const { t } = useTranslation();
    const [formValues, setFormValues] = useState({
        contactName: '',
        contactPhone: '',
        contactEmail: '',
        propertyName: '',
        propertyAddress: '',
        buildYear: '',
        apartmentCount: '',
        squareFootage: '',
        additionalInfo: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState({ type: '', text: '' });

    const realEstateRequestQuoteSection = t('Real-Estate-Request-Quote', { returnObjects: true });
    const requestQuoteBanner = realEstateRequestQuoteSection.banner || {};
    const requestQuotePrefixSection = realEstateRequestQuoteSection['Prefix-Section'] || {};
    const requestQuoteServicesSection = realEstateRequestQuoteSection['Services-Explained'] || {};
    const formIntroductionSection = realEstateRequestQuoteSection['Form-Introduction'] || {};
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

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
    };

    const handleFakeSubmit = async () => {
        const requiredFields = [
            'contactName',
            'contactPhone',
            'contactEmail',
            'propertyName',
            'propertyAddress',
        ];

        const hasMissingRequiredField = requiredFields.some(
            (field) => !String(formValues[field]).trim(),
        );

        if (hasMissingRequiredField) {
            setSubmitMessage({
                type: 'error',
                text: 'Täytä kaikki pakolliset kentät ennen lähettämistä.',
            });
            return;
        }

        setSubmitMessage({ type: '', text: '' });
        setIsSubmitting(true);

        await new Promise((resolve) => {
            setTimeout(resolve, 1400);
        });

        setIsSubmitting(false);
        setSubmitMessage({
            type: 'success',
            text: 'Lomake lähetetty onnistuneesti (testilähetys).',
        });
    };

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

            <FormIntroductionSection
                title={formIntroductionSection.title}
                contentItems={buildFormContentItems(formIntroductionSection)}
            />

            {/* Form sender information */}
            <div className='container'>
                <div className='row justify-content-start py-5'>

                    <div className='col-11 col-lg-8 col-xxl-8 py-0 py-md-3'>
                        <h3 className='d-none d-md-block pb-1 pb-sm-2 pb-lg-3'>
                            {t('Real-Estate-Request-Quote.Form-Fields.Contact-Information.title')}
                        </h3>
                        <h4 className='d-block d-md-none pb-1 pb-sm-2 pb-lg-3'>
                            {t('Real-Estate-Request-Quote.Form-Fields.Contact-Information.title')}
                        </h4>
                    </div>

                    <div className='col-11 col-lg-8 col-xxl-8'>
                        <div className='row Quote-Form-Section g-4'>

                            <div className="col-12 mb-3">
                                <label htmlFor="contactName" className="form-label">
                                    {t('Real-Estate-Request-Quote.Form-Fields.Contact-Information.form-field-1')} <span className='Required-Asterisk'>*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="contactName"
                                    value={formValues.contactName}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className='col-12 mb-3'>
                                <label htmlFor="contactPhone" className="form-label">
                                    {t('Real-Estate-Request-Quote.Form-Fields.Contact-Information.form-field-2')} <span className='Required-Asterisk'>*</span>
                                </label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="contactPhone"
                                    value={formValues.contactPhone}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className='col-12'>
                                <label htmlFor="contactEmail" className="form-label">
                                    {t('Real-Estate-Request-Quote.Form-Fields.Contact-Information.form-field-3')} <span className='Required-Asterisk'>*</span>
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="contactEmail"
                                    value={formValues.contactEmail}
                                    onChange={handleInputChange}
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
                            {t('Real-Estate-Request-Quote.Form-Fields.House-Information.title')}
                        </h3>
                        <h4 className='d-block d-md-none pb-1 pb-sm-2 pb-lg-3'>
                            {t('Real-Estate-Request-Quote.Form-Fields.House-Information.title')}
                        </h4>
                    </div>

                    <div className='col-11 col-lg-8 col-xxl-8'>
                        <div className='row Quote-Form-Section g-4'>

                            <div className="col-12 mb-3">
                                <label htmlFor="propertyName" className="form-label">
                                    {t('Real-Estate-Request-Quote.Form-Fields.House-Information.form-field-1')} <span className='Required-Asterisk'>*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="propertyName"
                                    value={formValues.propertyName}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className='col-12 mb-3'>
                                <label htmlFor="propertyAddress" className="form-label">
                                    {t('Real-Estate-Request-Quote.Form-Fields.House-Information.form-field-1')} <span className='Required-Asterisk'>*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="propertyAddress"
                                    value={formValues.propertyAddress}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className='col-12 mb-3'>
                                <label htmlFor="buildYear" className="form-label">
                                    {t('Real-Estate-Request-Quote.Form-Fields.House-Information.form-field-2')}
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="buildYear"
                                    value={formValues.buildYear}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className='col-12 mb-3'>
                                <label htmlFor="apartmentCount" className="form-label">
                                    {t('Real-Estate-Request-Quote.Form-Fields.House-Information.form-field-3')}
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="apartmentCount"
                                    value={formValues.apartmentCount}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className='col-12 mb-3'>
                                <label htmlFor="squareFootage" className="form-label">
                                    {t('Real-Estate-Request-Quote.Form-Fields.House-Information.form-field-4')}
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="squareFootage"
                                    value={formValues.squareFootage}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className='col-12 mb-3'>
                                <label htmlFor="additionalInfo" className="form-label">
                                    {t('Real-Estate-Request-Quote.Form-Fields.House-Information.form-field-5')}
                                </label>
                                <textarea
                                    className="form-control"
                                    id="additionalInfo"
                                    rows="4"
                                    value={formValues.additionalInfo}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className='col-12 mb-3'>
                                <ArrowButton
                                    label={t('Real-Estate-Request-Quote.Form-Fields.Form-Send-Button.title')}
                                    variant="orange"
                                    isLoading={isSubmitting}
                                    spinnerVariant="light"
                                    showArrow={true}
                                    onClick={handleFakeSubmit}
                                />

                            </div>

                            <div className='Form-Submitted-Message col-12 mb-3'>
                                {!!submitMessage.text && (
                                    <p className={submitMessage.type === 'error' ? 'text-danger mb-0' : 'text-success mb-0'}>
                                        {submitMessage.text}
                                    </p>
                                )}
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default RealEstateQuotePage;