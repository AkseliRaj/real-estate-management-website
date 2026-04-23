import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HeroWrapper from '../components/HeroWrapper.jsx';
import LandingPropertyCarousel from '../components/LandingPropertyCarousel.jsx';
import ArrowButton from '../components/ArrowButtonOrange.jsx';
import ArrowIcon from '../assets/svg/rightArrowIconDark.svg';
import '../css/RealEstateProperties.css';

function RealEstateLandingPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const temporaryProperties = Array.from({ length: 3 }, () => ({
    address: 'Keskuskatu 56 A 4',
    city: 'Kankaanpää',
    specifications: '2H+K+KPH',
    squares: '30 m2',
    price: '40 000 €',
  }));

  const handleCtaClick = () => {
    navigate('/kiinteistonvalitys/kohteet');
  };

  return (
    <div className='container-fluid px-0 main-layout'>
      <HeroWrapper
        headerText={t('Real-Estate-Landing.Banner.title')}
        buttonText={t('Real-Estate-Landing.Banner.CTA-button')}
        onButtonClick={handleCtaClick}
      />

      <div className='row justify-content-center'>

        <div className='col-11 d-flex align-items-center justify-content-center justify-content-md-between'>
          <h3 className='d-none d-md-block mb-0'>
            {t('Real-Estate-Landing.Propertie-Carousel.title')}
          </h3>
          <h4 className='d-block d-md-none text-center mb-0'>
            {t('Real-Estate-Landing.Propertie-Carousel.title')}
          </h4>
          <div className='d-none d-md-flex align-items-center gap-2'>
            <Link className='link' to='/kiinteistonvalitys/kohteet'>Kaikki kohteet
              <img src={ArrowIcon} alt="Arrow-Icon" className="link-arrow-icon ps-3" />
            </Link>
          </div>

        </div>
        <div className='col-11 d-flex align-items-center'>
          <LandingPropertyCarousel properties={temporaryProperties} />
        </div>
        <div className='col-11 d-flex d-md-none justify-content-center align-items-center'>
          <ArrowButton
            label={t('Real-Estate-Landing.Banner.CTA-button')}
            onClick={handleCtaClick}
            variant="orange"
            showArrow={true}
          />
        </div>

      </div>

    </div>
  );
}

export default RealEstateLandingPage;
