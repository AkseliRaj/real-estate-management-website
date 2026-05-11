import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LandingPropertyCarousel from './LandingPropertyCarousel.jsx';
import ArrowIcon from '../assets/svg/rightArrowIconDark.svg';

const RentalPropertiesCarouselSection = ({
    properties,
    linkTo = '/vuokraus/kohteet',
    titleKey = 'Rental-Properties-Page.Banner-Title',
    linkLabel = 'common.allProperties',
}) => {
    const { t } = useTranslation();

    return (
        <div className='row gx-0 justify-content-center Rental-Cards-Carousel'>
            <div className='col-11 d-flex align-items-center justify-content-center justify-content-md-between'>
                <h3 className='d-none d-md-block mb-0'>
                    {t(titleKey)}
                </h3>
                <h4 className='d-block d-md-none text-center mb-0'>
                    {t(titleKey)}
                </h4>
                <div className='d-none d-md-flex align-items-center gap-2'>
                    <Link className='link' to={linkTo}>
                        {t(linkLabel)}
                        <img src={ArrowIcon} alt={t('common.arrowIconAlt')} className='link-arrow-icon ps-3' />
                    </Link>
                </div>
            </div>
            <div className='col-11 d-flex align-items-center'>
                <LandingPropertyCarousel properties={properties} />
            </div>
            <div className='col-11 d-flex d-md-none justify-content-center align-items-center'>
                <Link className='link' to={linkTo}>
                    {t(linkLabel)}
                    <img src={ArrowIcon} alt={t('common.arrowIconAlt')} className='link-arrow-icon ps-3' />
                </Link>
            </div>
        </div>
    );
};

export default RentalPropertiesCarouselSection;
