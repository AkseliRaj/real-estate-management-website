import React from 'react';
import { useTranslation } from 'react-i18next';

const labelKey = 'Rental-Application-Page.Form-Labels.Property-Options';

const RentalOptionCard = ({ rentalOption, actionContent, onAction, isInteractive = true }) => {
    const { t } = useTranslation();

    return (
    <div className='col-12 mb-3'>
        {isInteractive ? (
            <div className={`p-3 Rental-Card text-start row g-3 align-items-center d-flex justify-content-around ${actionContent.isSelected ? 'opacity-75' : ''}`}>
                <div className='Rental-Image col-12 col-md-5'>
                    <img src={rentalOption.image} className='Rental-Card-Image' />
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
                    <img src={rentalOption.image} className='Rental-Card-Image' />
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
