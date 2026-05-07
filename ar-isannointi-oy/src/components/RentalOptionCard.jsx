import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const labelKey = 'Rental-Application-Page.Form-Labels.Property-Options';

const RentalOptionCard = ({ rentalOption, actionContent, onAction, isInteractive = true, isLoading = false }) => {
    const { t } = useTranslation();
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        setImageLoaded(false);
    }, [rentalOption.image]);

    const handleImageLoad = useCallback(() => {
        setImageLoaded(true);
    }, []);

    if (isLoading) {
        return (
            <div className='col-12 mb-3'>
                <div className='p-3 Rental-Card text-start row g-3 align-items-center d-flex justify-content-around' aria-hidden>
                    <div className='Rental-Image col-12 col-md-5'>
                        <div className='placeholder placeholder-glow bg-secondary border-0 Rental-Card-Image Rental-Card-Image-Skeleton' />
                        <span className='placeholder placeholder-glow col-7 mt-4 d-none d-md-block Rental-Card-Button-Skeleton' />
                    </div>
                    <div className='col-12 col-md-6'>
                        <span className='placeholder placeholder-glow col-4 mb-2 d-block' />
                        <span className='placeholder placeholder-glow col-10 mb-3 d-block' />
                        <span className='placeholder placeholder-glow col-5 mb-2 d-block' />
                        <span className='placeholder placeholder-glow col-8 mb-3 d-block' />
                        <span className='placeholder placeholder-glow col-5 mb-2 d-block' />
                        <span className='placeholder placeholder-glow col-7 mb-0 d-block' />
                        <span className='placeholder placeholder-glow col-7 mt-4 d-block d-md-none Rental-Card-Button-Skeleton' />
                    </div>
                </div>
            </div>
        );
    }

    return (
    <div className='col-12 mb-3'>
        {isInteractive ? (
            <div className={`p-3 Rental-Card text-start row g-3 align-items-center d-flex justify-content-around ${actionContent.isSelected ? 'opacity-75' : ''}`}>
                <div className='Rental-Image col-12 col-md-5'>
                    {!imageLoaded && (
                        <div
                            className='placeholder w-100 placeholder-glow bg-secondary border-0 Rental-Card-Image Rental-Card-Image-Skeleton'
                            aria-hidden
                        />
                    )}
                    <img
                        src={rentalOption.image}
                        className={`Rental-Card-Image ${imageLoaded ? 'opacity-100' : 'opacity-0 pe-none'}`}
                        style={{ transition: 'opacity 0.30s ease-in' }}
                        onLoad={handleImageLoad}
                        alt={rentalOption.address}
                    />
                    <button
                        type='button'
                        className='Color-Button align-self-start mt-4 d-none d-md-block'
                        onClick={onAction}
                    >
                        {actionContent.label}
                    </button>
                </div>
                <div className='col-12 col-md-6'>
                    <span className='Bold-Text'>{t(`${labelKey}.Card-Address-Label`)}</span><p>{rentalOption.address}</p>
                    <span className='Bold-Text'>{t(`${labelKey}.Card-Square-Meters-Label`)}</span><p>{rentalOption.squareMeters}</p>
                    <span className='Bold-Text'>{t(`${labelKey}.Card-Monthly-Rent-Label`)}</span><p className='m-0'>{rentalOption.monthlyRent}</p>
                    <button
                        type='button'
                        className='Color-Button align-self-start mt-4 d-block d-md-none'
                        onClick={onAction}
                    >
                        {actionContent.label}
                    </button>
                </div>
            </div>
        ) : (
            <div className='p-4 Rental-Card text-start row g-3 align-items-start'>
                <div className='Rental-Image col-12 col-md-5'>
                    {!imageLoaded && (
                        <div
                            className='placeholder w-100 placeholder-glow bg-secondary border-0 Rental-Card-Image Rental-Card-Image-Skeleton'
                            aria-hidden
                        />
                    )}
                    <img
                        src={rentalOption.image}
                        className={`Rental-Card-Image ${imageLoaded ? 'opacity-100' : 'opacity-0 pe-none'}`}
                        style={{ transition: 'opacity 0.30s ease-in' }}
                        onLoad={handleImageLoad}
                        alt={rentalOption.address}
                    />
                </div>
                <div className='col-12 col-md-7'>
                    <span className='Bold-Text'>{t(`${labelKey}.Card-Address-Label`)}</span><p>{rentalOption.address}</p>
                    <span className='Bold-Text'>{t(`${labelKey}.Card-Square-Meters-Label`)}</span><p>{rentalOption.squareMeters}</p>
                    <span className='Bold-Text'>{t(`${labelKey}.Card-Monthly-Rent-Label`)}</span><p className='m-0'>{rentalOption.monthlyRent}</p>
                    <button
                        type='button'
                        className='btn btn-sm btn-outline-secondary mt-2'
                        onClick={onAction}
                    >
                        {actionContent.label}
                    </button>
                </div>
            </div>
        )}
    </div>
    );
};

export default RentalOptionCard;
