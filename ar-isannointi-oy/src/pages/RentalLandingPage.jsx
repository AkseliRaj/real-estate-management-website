import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HeroWrapper from '../components/HeroWrapper.jsx';
import LandingPropertyCarousel from '../components/LandingPropertyCarousel.jsx';
import ArrowButton from '../components/ArrowButtonOrange.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import IntroductionSectionWithImage from '../components/IntroductionSectionWithImage.jsx';
import NewsSection from '../components/NewsSection.jsx';
import ArrowIcon from '../assets/svg/rightArrowIconDark.svg';
import FormIcon from '../assets/svg/FilePenIcon.svg';
import HumanIcon from '../assets/svg/HumanIcon.svg';
import MoneyIcon from '../assets/svg/MoneyIcon.svg';
import BiddingQuotePageImage from '../assets/webp/BiddingQuotePageImage.webp';
import '../css/RealEstateProperties.css';
import '../css/RealEstateLanding.css'

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
    navigate('/vuokraus/kohteet');
  };

  const serviceCards = [
    {
      iconSrc: FormIcon,
      iconAlt: 'Form Icon',
      title: t('Real-Estate-Landing.Card-Section.card1.title'),
      paragraph: t('Real-Estate-Landing.Card-Section.card1.paragraph'),
    },
    {
      iconSrc: HumanIcon,
      iconAlt: 'Human Icon',
      title: t('Real-Estate-Landing.Card-Section.card2.title'),
      paragraph: t('Real-Estate-Landing.Card-Section.card2.paragraph'),
    },
    {
      iconSrc: MoneyIcon,
      iconAlt: 'Money Icon',
      title: t('Real-Estate-Landing.Card-Section.card3.title'),
      paragraph: t('Real-Estate-Landing.Card-Section.card3.paragraph'),
    },
  ];
  const newsItems = t('propertyLanding.IL-News-Section.items', { returnObjects: true, defaultValue: [] });

  return (
    <div className='container-fluid px-0 main-layout'>
      <HeroWrapper
        headerText={t('Rental-Landing-Page.Banner.title')}
        buttonText={t('Rental-Landing-Page.Banner.CTA-button')}
        onButtonClick={handleCtaClick}
      />

      <IntroductionSectionWithImage
        title={t('Rental-Landing-Page.Introduction-Section.title')}
        paragraphs={[
          t('Rental-Landing-Page.Introduction-Section.paragraph1'),
          t('Rental-Landing-Page.Introduction-Section.paragraph2')
        ]}
        imageSrc={BiddingQuotePageImage}
        imageAlt={t('Real-Estate-Landing.About-Us-Section.title')}
        buttonText={t('Rental-Landing-Page.Introduction-Section.CTA-button')}
        onButtonClick={handleCtaClick}
        showBottomBorder={false}
      />

      <div className='row gx-0 justify-content-center Rental-Cards-Carousel'>
        <div className='col-11 d-flex align-items-center justify-content-center justify-content-md-between'>
          <h3 className='d-none d-md-block mb-0'>
            {t('Real-Estate-Landing.Propertie-Carousel.title')}
          </h3>
          <h4 className='d-block d-md-none text-center mb-0'>
            {t('Real-Estate-Landing.Propertie-Carousel.title')}
          </h4>
          <div className='d-none d-md-flex align-items-center gap-2'>
            <Link className='link' to='/vuokraus/kohteet'>Kaikki kohteet
              <img src={ArrowIcon} alt="Arrow-Icon" className="link-arrow-icon ps-3" />
            </Link>
          </div>

        </div>
        <div className='col-11 d-flex align-items-center'>
          <LandingPropertyCarousel properties={temporaryProperties} />
        </div>
        <div className='col-11 d-flex d-md-none justify-content-center align-items-center'>
          <Link className='link' to='/kiinteistonvalitys/kohteet'>Kaikki kohteet
            <img src={ArrowIcon} alt="Arrow-Icon" className="link-arrow-icon ps-3" />
          </Link>
        </div>
      </div>

      <IntroductionSectionWithImage
        title={t('Rental-Landing-Page.Business-Rental-Advertisement.title')}
        paragraphs={[
          t('Rental-Landing-Page.Business-Rental-Advertisement.paragraph'),
        ]}
        imageSrc={BiddingQuotePageImage}
        imageAlt={t('Real-Estate-Landing.About-Us-Section.title')}
        buttonText={t('Rental-Landing-Page.Business-Rental-Advertisement.CTA-Button')}
        onButtonClick={handleCtaClick}
        showBottomBorder={false}
      />

    </div>
  );
}

export default RealEstateLandingPage;