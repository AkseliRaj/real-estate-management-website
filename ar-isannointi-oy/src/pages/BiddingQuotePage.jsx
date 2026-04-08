import { useTranslation } from 'react-i18next';
import IntroductionSectionWithImage from '../components/IntroductionSectionWithImage';
import FormIntroductionSection from '../components/FormIntroductionSection';
import IconListCardsSection from '../components/IconListCardsSection';
import BiddingQuotePageImage from '../assets/webp/BiddingQuotePageImage.webp';
import buildFormContentItems from '../utils/buildFormContentItems';
import FormIcon from '../assets/svg/FilePenIcon.svg';
import '../css/BiddingPage.css'

const BiddingQuotePage = () => {
    const { t } = useTranslation();
    const prefixSection = t('Bidding-Quote-Page.Prefix-Section', { returnObjects: true });
    const biddingExplainedSection = t('Bidding-Quote-Page.Bidding-Explained', { returnObjects: true });
    const biddingExplanationCardsSection = t('Bidding-Quote-Page.Bidding-Explanation-Cards', { returnObjects: true });
    const biddingExplanationCards = Object.entries(biddingExplanationCardsSection)
        .filter(([key, value]) => key.startsWith('card') && typeof value === 'object' && value !== null)
        .map(([key, value]) => ({
            id: key,
            title: value.title,
            items: Object.entries(value)
                .filter(
                    ([itemKey, itemValue]) => (
                        itemKey.startsWith('list-item')
                        && typeof itemValue === 'object'
                        && itemValue !== null
                    ),
                )
                .map(([itemKey, itemValue]) => ({
                    id: itemKey,
                    boldWord: itemValue['bold-word'],
                    paragraph: itemValue.paragraph,
                })),
        }));

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

            <IconListCardsSection
                title={biddingExplanationCardsSection.title}
                cards={biddingExplanationCards}
                iconSrc={FormIcon}
                listClassName="Bidding-Quote-Card-List"
            />
        </div>
    );
};

export default BiddingQuotePage;