import React, { useMemo, useState } from 'react';
import '../css/RentalApplicationPage.css';
import FormPageBanner from '../components/FormPageBanner';
import FormIntroductionSection from '../components/FormIntroductionSection';
import RentalSearchSection from '../components/RentalSearchSection';
import RentalApplicantGeneralInfoSection from '../components/RentalApplicantGeneralInfoSection';
import RentalEducationBackgroundSection from '../components/RentalEducationBackgroundSection';
import RentalEmploymentSection from '../components/RentalEmploymentSection';
import RentalPetsAndSmokingSection from '../components/RentalPetsAndSmokingSection';
import RentalOtherApplicantsSection from '../components/RentalOtherApplicantsSection';
import RentalOtherInformationSection from '../components/RentalOtherInformationSection';
import RentalApplicationStartDateSection from '../components/RentalApplicationStartDateSection';
import RentalTermsSection from '../components/RentalTermsSection';
import RentalSampleImage from '../assets/webp/RealEstatePropertyImage.webp';
import { useTranslation } from 'react-i18next';

const PropertyManagementQuotePage = () => {
    const { t } = useTranslation();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRentalOptionIds, setSelectedRentalOptionIds] = useState([]);
    const [additionalApplicantIds, setAdditionalApplicantIds] = useState([]);

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

    const addApplicant = () => {
        setAdditionalApplicantIds((previousIds) => [...previousIds, crypto.randomUUID()]);
    };

    const removeApplicant = (applicantIdToRemove) => {
        setAdditionalApplicantIds((previousIds) => (
            previousIds.filter((applicantId) => applicantId !== applicantIdToRemove)
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

            <RentalApplicantGeneralInfoSection idPrefix="main-applicant" showTitle />
            <RentalEducationBackgroundSection idPrefix="main-applicant" />
            <RentalEmploymentSection idPrefix="main-applicant" />
            <RentalPetsAndSmokingSection idPrefix="main-applicant" />

            {additionalApplicantIds.map((applicantId, applicantIndex) => {
                const idPrefix = `additional-applicant-${applicantId}`;
                return (
                    <div key={applicantId} className='employment-fields-enter'>
                        <RentalApplicantGeneralInfoSection idPrefix={idPrefix} showTitle={false} />
                        <RentalEducationBackgroundSection idPrefix={idPrefix} />
                        <RentalEmploymentSection idPrefix={idPrefix} />
                        <RentalPetsAndSmokingSection idPrefix={idPrefix} />
                        <div className='container'>
                            <div className='row justify-content-center pb-5'>
                                <div className='col-11 col-lg-8 col-xxl-8'>
                                    <button type="button" className="Color-Button" onClick={() => removeApplicant(applicantId)}>
                                        {t('Rental-Application-Page.Form-Labels.Other-Applicants.Remove-button')} #{applicantIndex + 1}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}

            {additionalApplicantIds.length === 0 && (
                <RentalOtherApplicantsSection onAddApplicant={addApplicant} />
            )}

            <RentalOtherInformationSection idPrefix="main-applicant" />
            <RentalApplicationStartDateSection idPrefix="main-applicant" />
            <RentalTermsSection idPrefix="main-applicant" />

        </div>
    );
};

export default PropertyManagementQuotePage;