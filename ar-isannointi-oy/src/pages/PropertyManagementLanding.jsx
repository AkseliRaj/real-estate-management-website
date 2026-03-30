import '../css/PropertyManagementLanding.css';
import { useTranslation } from 'react-i18next';

import ArrowButton from '../components/ArrowButtonOrange.jsx';
import HouseImage from '../assets/svg/HouseMagnifierImage.svg';
import ResponsibilityImage from '../assets/webp/ResponsibilitySectionImage.webp';

import HeroWrapper from '../components/HeroWrapper.jsx';
import LogoCarousel from '../components/MarqueeCarousel.jsx';
import FormCardGrid from '../components/FormCardGrid.jsx';


function PropertyManagementLanding() {

  const { t } = useTranslation()

  const formCardItems = [
    { heading: t('propertyLanding.forms.cards.consumptionReading') },
    { heading: t('propertyLanding.forms.cards.alterationAndRepairNotice') },
    { heading: t('propertyLanding.forms.cards.faultReport') }
  ];

  const handleQuoteRequest = () => {
    console.log("Tarjouspyyntö lähetetty!");
  };

  return (
    <div className='container-fluid px-0 main-layout'>

      <HeroWrapper
        headerText={t('propertyLanding.hero.header')}
        buttonText={t('propertyLanding.hero.button')}
        onButtonClick={handleQuoteRequest}
      />

      <div className='Introduction-Section row gx-0 d-flex justify-content-center'>
        <div className='col-11 col-xl-10'>
          <div className='row gx-0 align-items-center justify-content-center'>
            <div className='col-12 col-lg-6'>
              <h3 className='pb-1 pb-sm-2 pb-lg-3'>{t('propertyLanding.introduction.title')}</h3>
              <p>{t('propertyLanding.introduction.paragraph1')}</p>
              <p className='pb-1 pb-sm-2 pb-lg-3'>{t('propertyLanding.introduction.paragraph2')}</p>
              <ArrowButton
                label={t('propertyLanding.introduction.cta')}
                onClick={handleQuoteRequest}
                variant="orange"
              />
            </div>
            <div className='col-lg-5 col-xl-6 d-none d-lg-flex justify-content-center'>
              <img src={HouseImage} alt={t('propertyLanding.images.introductionAlt')} className="Introduction-Image" />
            </div>
          </div>
        </div>
      </div>

      <div className='Logo-Marquee-Section row gx-0 d-flex justify-content-center'>
        <div className='col-12'>
          <div className='row gx-0 d-flex justify-content-center'>
            <div className='col-12 col-md-10 col-xl-8 text-center pb-5'>
              <h3 className='pb-3'>{t('propertyLanding.partners.title')}</h3>
              <p>{t('propertyLanding.partners.paragraph1')}</p>
            </div>
          </div>
          <div className='col-12 d-flex justify-content-center'>
            <LogoCarousel />
          </div>
        </div>
      </div>

      <div className='Logo-Marquee-Section row gx-0 d-flex justify-content-center'>
        <div className='col-11'>
          <div className='row gx-0 d-flex justify-content-start'>
            <div className='col-11 col-xl-8 pb-5'>
              <h3 className='pb-3'>{t('propertyLanding.forms.title')}</h3>
              <p>{t('propertyLanding.forms.paragraph1')}</p>
              <p>{t('propertyLanding.forms.paragraph2')}</p>
            </div>
          </div>
          <div className='col-12 d-flex justify-content-start'>
            <FormCardGrid items={formCardItems} />
          </div>
        </div>
      </div>

      <div className='Text-Picture-Section row gx-0 d-flex justify-content-end'>
        <div className='col-11'>
          <div className='row gx-0 justify-content-between align-items-center'>
            <div className='col-12 col-sm-11 col-lg-5 col-xl-6 col-xxl-5'>
              <h3 className='pb-3'>{t('propertyLanding.CTA-Responsibility-Section.title')}</h3>
              <p className='pb-3'>{t('propertyLanding.CTA-Responsibility-Section.paragraph1')}</p>
              <ArrowButton
                label={t('propertyLanding.CTA-Responsibility-Section.cta')}
                onClick={handleQuoteRequest}
                variant="orange"
              />
            </div>
            <div className='d-none d-lg-flex justify-content-end col-lg-5'>
              <img src={ResponsibilityImage} alt={t('propertyLanding.images.introductionAlt')} className="Responsibility-Image" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PropertyManagementLanding
