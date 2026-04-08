import { useTranslation } from 'react-i18next';
import IntroductionSectionWithImage from '../components/IntroductionSectionWithImage';
import FormIntroductionSection from '../components/FormIntroductionSection';
import BiddingQuotePageImage from '../assets/webp/BiddingQuotePageImage.webp';
import buildFormContentItems from '../utils/buildFormContentItems';

const BiddingQuotePage = () => {
    const { t } = useTranslation();
    const prefixSection = t('Bidding-Quote-Page.Prefix-Section', { returnObjects: true });
    const biddingExplainedSection = t('Bidding-Quote-Page.Bidding-Explained', { returnObjects: true });

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

            <FormIntroductionSection
                title={prefixSection.title1}
                contentItems={buildFormContentItems(prefixSection)}
            />

            <FormIntroductionSection
                title={biddingExplainedSection.title}
                contentItems={buildFormContentItems(biddingExplainedSection)}
            />

        </div>
    );
};

export default BiddingQuotePage;