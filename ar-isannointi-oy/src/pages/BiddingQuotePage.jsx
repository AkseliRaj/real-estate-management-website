import { useTranslation } from 'react-i18next';
import IntroductionSectionWithImage from '../components/IntroductionSectionWithImage';
import FormIntroductionSection from '../components/FormIntroductionSection';
import BiddingQuotePageImage from '../assets/webp/BiddingQuotePageImage.webp';

const BiddingQuotePage = () => {
    const { t } = useTranslation();

    return (
        <div className="container-fluid px-0">
            <IntroductionSectionWithImage
                title={t('Bidding-Quote-Page.Introduction-Section.title')}
                paragraphs={[
                    t('Bidding-Quote-Page.Introduction-Section.paragraph1'),
                ]}
                imageSrc={BiddingQuotePageImage}
                imageAlt={t('propertyLanding.images.introductionAlt')}
                buttonText={t('Bidding-Quote-Page.Introduction-Section.CTA-button')}
            />

            <div className='row gx-0 d-flex justify-content-center py-5'>
                <div className='div col-11 col-xxl-9'>
                    <p>{t('Bidding-Quote-Page.Introduction-Section.paragraph2')}</p>
                </div>
            </div>

            <FormIntroductionSection 
                
            />

        </div>
    );
};

export default BiddingQuotePage;