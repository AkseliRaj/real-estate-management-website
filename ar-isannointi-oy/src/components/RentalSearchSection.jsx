import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import RentalOptionCard from './RentalOptionCard';

const RentalSearchSection = ({
    searchTerm,
    onSearchTermChange,
    filteredRentalOptions,
    selectedRentalOptionIds,
    selectedRentalOptions,
    onToggleRentalOptionSelection
}) => {
    const { t } = useTranslation();
    const [searchInputValue, setSearchInputValue] = useState(searchTerm);
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        setSearchInputValue(searchTerm);
    }, [searchTerm]);

    useEffect(() => {
        setIsSearching(false);
    }, [filteredRentalOptions, searchTerm]);

    const handleSearch = () => {
        setIsSearching(true);
        onSearchTermChange(searchInputValue);
    };

    return (
        <div className='container'>
        <div className='row justify-content-center py-5'>
            <div className='col-11 col-lg-8 col-xxl-8 py-0 py-md-3'>
                <h3 className='d-none d-md-block pb-1 pb-sm-2 pb-lg-3'>
                    {t('Rental-Application-Page.Form-Labels.Property-Options.title')}
                </h3>
                <h4 className='d-block d-md-none pb-1 pb-sm-2 pb-lg-3'>
                    {t('Rental-Application-Page.Form-Labels.Property-Options.title')}
                </h4>
            </div>

            <div className='col-11 col-lg-8 col-xxl-8'>
                <div className='row Quote-Form-Section g-4'>
                    <div className="col-12 mb-3">
                        <label htmlFor="rentalSearch" className="form-label">
                            {t('Rental-Application-Page.Form-Labels.Property-Options.Option')} <span className='Required-Asterisk'>*</span>
                        </label>
                        <div className="d-flex flex-column flex-md-row gap-3">
                            <input
                                type="text"
                                className="form-control flex-grow-1"
                                id="rentalSearch"
                                placeholder={t('Rental-Application-Page.Form-Labels.Property-Options.Search-Placeholder')}
                                value={searchInputValue}
                                onChange={(event) => setSearchInputValue(event.target.value)}
                            />
                            <button
                                type="button"
                                className="Color-Button align-self-start"
                                onClick={handleSearch}
                            >
                                {t('Rental-Application-Page.Form-Labels.Property-Options.Search-Button')}
                            </button>
                        </div>
                    </div>

                    {isSearching
                        ? Array.from({ length: 3 }, (_, index) => (
                            <RentalOptionCard
                                key={`rental-skeleton-${index}`}
                                rentalOption={{ image: '', address: '', squareMeters: '', monthlyRent: '' }}
                                actionContent={{ label: '' }}
                                onAction={() => {}}
                                isLoading
                            />
                        ))
                        : filteredRentalOptions.map((rentalOption) => (
                            <RentalOptionCard
                                key={rentalOption.id}
                                rentalOption={rentalOption}
                                actionContent={{
                                    label: selectedRentalOptionIds.includes(rentalOption.id)
                                        ? t('Rental-Application-Page.Form-Labels.Property-Options.Deselect-Option')
                                        : t('Rental-Application-Page.Form-Labels.Property-Options.Select-Option'),
                                    isSelected: selectedRentalOptionIds.includes(rentalOption.id)
                                }}
                                onAction={() => onToggleRentalOptionSelection(rentalOption.id)}
                            />
                        ))}

                    {!isSearching && searchTerm.trim() && filteredRentalOptions.length === 0 && (
                        <div className='col-12 mb-3'>
                            <p className='m-0'>{t('Rental-Application-Page.Form-Labels.Property-Options.No-Results')}</p>
                        </div>
                    )}
                </div>
            </div>

            {selectedRentalOptions.length > 0 && (
                <>
                    <div className='col-11 col-lg-8 col-xxl-8 py-4 py-md-5'>
                        <h3 className='d-none d-md-block pb-1 pb-sm-2 pb-lg-3'>
                            {t('Rental-Application-Page.Form-Labels.Property-Options.Selected-Properties-Title')}
                        </h3>
                        <h4 className='d-block d-md-none pb-3 pb-sm-3 pb-lg-3'>
                            {t('Rental-Application-Page.Form-Labels.Property-Options.Selected-Properties-Title')}
                        </h4>
                    </div>

                    <div className='col-11 col-lg-8 col-xxl-8'>
                        <div className='row g-4'>
                            {selectedRentalOptions.map((rentalOption) => (
                                <div key={rentalOption.id} className='selected-rental-card-enter'>
                                    <RentalOptionCard
                                        rentalOption={rentalOption}
                                        actionContent={{
                                            label: t('Rental-Application-Page.Form-Labels.Property-Options.Deselect-Option')
                                        }}
                                        onAction={() => onToggleRentalOptionSelection(rentalOption.id)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
        </div>
    );
};

export default RentalSearchSection;
