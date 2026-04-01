import '../css/PropertyManagementLanding.css';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import ArrowButton from '../components/ArrowButtonOrange.jsx';
import HouseImage from '../assets/svg/HouseMagnifierImage.svg';
import ResponsibilityImage from '../assets/webp/ResponsibilitySectionImage.webp';
import AccordionMenuGrid from '../components/AccordionMenuGrid.jsx';
import ArticleGrid from '../components/ArticleGrid.jsx';

import HeroWrapper from '../components/HeroWrapper.jsx';
import LogoCarousel from '../components/MarqueeCarousel.jsx';
import FormCardGrid from '../components/FormCardGrid.jsx';

const RSS_FEED_URL = '/api/isannointiliitto-rss';
const RSS_ITEMS_LIMIT = 3;

function htmlToPlainText(html = '') {
  const parser = new DOMParser();
  const htmlDoc = parser.parseFromString(html, 'text/html');
  const text = htmlDoc.body?.textContent ?? '';
  const cleaned = text.replace(/\s+/g, ' ').trim();
  return cleaned.split(/The post /i)[0].trim();
}

function getElementText(parent, selector) {
  return parent.querySelector(selector)?.textContent?.trim() ?? '';
}

function parseRssItems(xmlText, limit = RSS_ITEMS_LIMIT) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
  const hasParseError = xmlDoc.querySelector('parsererror');
  if (hasParseError) return [];

  return Array.from(xmlDoc.querySelectorAll('item'))
    .slice(0, limit)
    .map((item, index) => {
      const heading = getElementText(item, 'title');
      const ctaHref = getElementText(item, 'link');
      const descriptionHtml = getElementText(item, 'description');
      const pubDate = getElementText(item, 'pubDate');
      const bodyText = htmlToPlainText(descriptionHtml);

      return {
        id: getElementText(item, 'guid') || ctaHref || `rss-news-${index + 1}`,
        heading,
        mobileHeading: heading,
        body: pubDate ? `${bodyText} (${new Date(pubDate).toLocaleDateString('fi-FI')})` : bodyText,
        ctaHref,
      };
    })
    .filter((item) => item.heading && item.ctaHref);
}


function PropertyManagementLanding() {

  const { t } = useTranslation()
  const [rssNewsItems, setRssNewsItems] = useState([]);

  const formCardItems = [
    { heading: t('propertyLanding.forms.cards.consumptionReading') },
    { heading: t('propertyLanding.forms.cards.faultReport') },
    { heading: t('propertyLanding.forms.cards.alterationAndRepairNotice') }
  ];

  const faqItems = t('propertyLanding.FAQ-Section.items', { returnObjects: true, defaultValue: [] });
  const fallbackNewsItems = t('propertyLanding.IL-News-Section.items', { returnObjects: true, defaultValue: [] });

  useEffect(() => {
    let isMounted = true;

    const fetchRssNews = async () => {
      try {
        const response = await fetch(RSS_FEED_URL);
        if (!response.ok) throw new Error('RSS request failed');

        const xmlText = await response.text();
        const parsedItems = parseRssItems(xmlText);
        if (isMounted && parsedItems.length > 0) {
          setRssNewsItems(parsedItems);
        }
      } catch {
        if (isMounted) {
          setRssNewsItems([]);
        }
      }
    };

    fetchRssNews();

    return () => {
      isMounted = false;
    };
  }, []);

  const newsItems = rssNewsItems.length > 0 ? rssNewsItems : fallbackNewsItems;

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
              <h3 className='d-none d-md-block pb-1 pb-sm-2 pb-lg-3'>{t('propertyLanding.introduction.title')}</h3>
              <h4 className='d-block d-md-none pb-1 pb-sm-2 pb-lg-3'>{t('propertyLanding.introduction.title')}</h4>
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
            <div className='col-11 col-md-10 col-xl-8 text-start text-md-center pb-3 pb-sm-4 pb-md-5'>
              <h3 className='pb-3 d-none d-md-block'>{t('propertyLanding.partners.title')}</h3>
              <h4 className='pb-2 d-block d-md-none'>{t('propertyLanding.partners.title')}</h4>
              <p>{t('propertyLanding.partners.paragraph1')}</p>
            </div>
          </div>
          <div className='col-12 d-flex justify-content-center'>
            <LogoCarousel />
          </div>
        </div>
      </div>

      <div className='Logo-Marquee-Section row gx-0 d-flex justify-content-center'>
        <div className='col-11 col-xxl-9'>
          <div className='row gx-0 d-flex justify-content-start pb-3 pb-sm-4 pb-md-5'>
            <div className='col-11 col-xl-8'>
              <h3 className='pb-3 d-none d-md-block'>{t('propertyLanding.forms.title')}</h3>
              <h4 className='pb-3 d-block d-md-none'>{t('propertyLanding.forms.title')}</h4>
              <p>{t('propertyLanding.forms.paragraph1')}</p>
              <p>{t('propertyLanding.forms.paragraph2')}</p>
            </div>
          </div>
          <div className='col-12 d-flex justify-content-start'>
            <FormCardGrid
              items={formCardItems}
              className='Property-Form-Card-Grid'
              minCardWidthRem={11}
            />
          </div>
        </div>
      </div>

      <div className='Text-Picture-Section row gx-0 d-flex justify-content-center'>
        <div className='col-11 col-xxl-9'>
          <div className='d-block d-md-none col-12 col-sm-11 pb-5'>
            <img src={ResponsibilityImage} alt={t('propertyLanding.images.introductionAlt')} className="Responsibility-Image" />
          </div>
          <div className='row gx-0 justify-content-between align-items-center'>
            <div className='col-12 col-sm-11 col-md-6 col-lg-5 col-xl-6 col-xxl-5'>
              <h3 className='pb-3 d-none d-md-block'>{t('propertyLanding.CTA-Responsibility-Section.title')}</h3>
              <h4 className='pb-1 d-block d-md-none'>{t('propertyLanding.CTA-Responsibility-Section.title')}</h4>
              <p className='pb-1 pb-md-3'>{t('propertyLanding.CTA-Responsibility-Section.paragraph1')}</p>
              <ArrowButton
                label={t('propertyLanding.CTA-Responsibility-Section.cta')}
                onClick={handleQuoteRequest}
                variant="orange"
              />
            </div>
            <div className='d-none d-md-flex justify-content-end col-5'>
              <img src={ResponsibilityImage} alt={t('propertyLanding.images.introductionAlt')} className="Responsibility-Image" />
            </div>
          </div>
        </div>
      </div>

      <div className='FAQ-Section row gx-0 d-flex justify-content-center'>
        <div className='col-11 col-xxl-9'>
          <div className='row gx-0 d-flex justify-content-between gap-5 pb-3 pb-sm-4 pb-md-5'>
            <div className='col-12 col-sm-11 col-md-5 col-lg-4 col-xl-5 col-xxl-5'>
              <h3 className='pb-3 d-none d-md-block'>{t('propertyLanding.FAQ-Section.title')}</h3>
              <h4 className='pb-1 d-block d-md-none'>{t('propertyLanding.FAQ-Section.title')}</h4>
              <p className='pb-1 pb-md-3'>{t('propertyLanding.FAQ-Section.paragraph1')}</p>
              <ArrowButton
                label={t('propertyLanding.FAQ-Section.cta')}
                onClick={handleQuoteRequest}
                variant="orange"
              />
            </div>
            <div className='col-12 col-md-5'>
              <AccordionMenuGrid items={faqItems} />
            </div>
          </div>
        </div>
      </div>

      <div className='News-Section row gx-0 d-flex justify-content-center'>
        <div className='col-12'>
          <div className='row gx-0 d-flex justify-content-center'>
            <div className='col-11 col-md-10 col-xl-8 text-start text-md-center pb-3 pb-sm-4 pb-md-5'>
              <h3 className='pb-3 d-none d-md-block'>{t('propertyLanding.IL-News-Section.title')}</h3>
              <h4 className='pb-2 d-block d-md-none'>{t('propertyLanding.IL-News-Section.title')}</h4>
            </div>
            <div className='col-11 col-md-10 col-xl-8 d-flex justify-content-center'>
              <ArticleGrid
                items={newsItems}
                defaultImage={ResponsibilityImage}
                defaultImageAlt={t('propertyLanding.images.introductionAlt')}
                ctaLabel={t('propertyLanding.IL-News-Section.CTA')}
                onCtaClick={handleQuoteRequest}
              />
            </div>
          </div>
        </div>

    
    </div>

    </div >
  )
}

export default PropertyManagementLanding