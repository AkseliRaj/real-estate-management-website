import React, { useMemo, useState } from 'react';
import '../css/RentalApplicationPage.css';
import FormPageBanner from '../components/FormPageBanner';
import FormIntroductionSection from '../components/FormIntroductionSection';
import ArrowButton from '../components/ArrowButtonOrange';
import RentalSearchSection from '../components/RentalSearchSection';
import RentalSampleImage from '../assets/webp/RealEstatePropertyImage.webp';
import { useTranslation } from 'react-i18next';

const PropertyManagementQuotePage = () => {
    const { t } = useTranslation();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRentalOptionIds, setSelectedRentalOptionIds] = useState([]);

    const mockRentalOptions = [
        {
            id: 1,
            address: 'Keskuskatu 35 B, Kankaanpaa 38700',
            squareMeters: '34m2',
            monthlyRent: '340,00EUR / kk',
            image: RentalSampleImage
        },
        {
            id: 2,
            address: 'Torikatu 12 A, Pori 28100',
            squareMeters: '45m2',
            monthlyRent: '520,00EUR / kk',
            image: RentalSampleImage
        },
        {
            id: 3,
            address: 'Asemakatu 4 C, Tampere 33100',
            squareMeters: '62m2',
            monthlyRent: '760,00EUR / kk',
            image: RentalSampleImage
        }
    ];

    const filteredRentalOptions = useMemo(() => {
        const normalizedSearchTerm = searchTerm.trim().toLowerCase();

        if (!normalizedSearchTerm) {
            return [];
        }

        return mockRentalOptions.filter((rentalOption) => (
            rentalOption.address.toLowerCase().includes(normalizedSearchTerm)
            || rentalOption.squareMeters.toLowerCase().includes(normalizedSearchTerm)
            || rentalOption.monthlyRent.toLowerCase().includes(normalizedSearchTerm)
        ));
    }, [searchTerm]);

    const selectedRentalOptions = useMemo(
        () => mockRentalOptions.filter((rentalOption) => selectedRentalOptionIds.includes(rentalOption.id)),
        [mockRentalOptions, selectedRentalOptionIds]
    );

    const toggleRentalOptionSelection = (rentalOptionId) => {
        setSelectedRentalOptionIds((previousSelectedIds) => (
            previousSelectedIds.includes(rentalOptionId)
                ? previousSelectedIds.filter((selectedId) => selectedId !== rentalOptionId)
                : [...previousSelectedIds, rentalOptionId]
        ));
    };

    return (
        <div className="container-fluid px-0">
            <FormPageBanner headingKey='Rental-Application-Page.Banner' />

            <FormIntroductionSection
                title={t('Rental-Application-Page.Prefix.title')}
                paragraphs={[
                    t('Rental-Application-Page.Prefix.paragraph1'),
                    t('Rental-Application-Page.Prefix.paragraph2'),
                    t('Rental-Application-Page.Prefix.paragraph3')
                ]}
                rowJustify={'center'}
            />


            <RentalSearchSection
                searchTerm={searchTerm}
                onSearchTermChange={setSearchTerm}
                filteredRentalOptions={filteredRentalOptions}
                selectedRentalOptionIds={selectedRentalOptionIds}
                selectedRentalOptions={selectedRentalOptions}
                onToggleRentalOptionSelection={toggleRentalOptionSelection}
            />

            {/* Form sender information */}
            <div className='container'>
                <div className='row justify-content-center py-5'>

                    <div className='col-11 col-lg-8 col-xxl-8 py-0 py-md-3'>
                        <h3 className='d-none d-md-block pb-1 pb-sm-2 pb-lg-3'>
                            {t('Rental-Application-Page.Form-Labels.Applicant-Information.title')}
                        </h3>
                        <h4 className='d-block d-md-none pb-1 pb-sm-2 pb-lg-3'>
                            {t('Rental-Application-Page.Form-Labels.Applicant-Information.title')}
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