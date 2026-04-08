import { useTranslation } from 'react-i18next';
import IntroductionSectionWithImage from '../components/IntroductionSectionWithImage';
import FormIntroductionSection from '../components/FormIntroductionSection';
import IconListCardsSection from '../components/IconListCardsSection';
import BiddingQuotePageImage from '../assets/webp/PublicDeedImage.webp';
import buildFormContentItems from '../utils/buildFormContentItems';
import FormIcon from '../assets/svg/FilePenIcon.svg';
import '../css/BiddingPage.css'

const PublicDeedConfirmationsPage = () => {
    const { t } = useTranslation();
    const prefixSection = t('Public-Deed-Page.Prefix', { returnObjects: true });
    const realEstateSpecificationsSection = t('Public-Deed-Page.Real-Estate-Specifications', { returnObjects: true });
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
                title={t('Public-Deed-Page.Introduction-Section.title')}
                paragraphs={[
                    t('Public-Deed-Page.Introduction-Section.paragraph1'),
                ]}
                imageSrc={BiddingQuotePageImage}
                imageAlt={t('propertyLanding.images.introductionAlt')}
                buttonText={t('Public-Deed-Page.Introduction-Section.CTA-button')}
            />

            {/*Here Public-Deed-Page.prefix*/}
            <FormIntroductionSection
                title={prefixSection.title}
                contentItems={buildFormContentItems(prefixSection)}
            />

            {/*Here Public-Deed-Page.Real-Estate-Specifications*/}
            <FormIntroductionSection
                title={realEstateSpecificationsSection.title}
                contentItems={buildFormContentItems(realEstateSpecificationsSection)}
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

export default PublicDeedConfirmationsPage;