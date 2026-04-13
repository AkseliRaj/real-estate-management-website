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
    const AquireWhenCardsSection = t('Public-Deed-Page.When-to-acquire-cards', {
        returnObjects: true,
        defaultValue: t('Public-Deed-Page.When-to-aquire-cards', { returnObjects: true }),
    });
    const DeedOfTransferCTA = t('Public-Deed-Page.Deed-Of-Transfer-CTA', { returnObjects: true });
    const acquireWhenNote = AquireWhenCardsSection?.['Not-Needed-Card']?.['note-paragraph'] || '';
    const biddingExplanationCards = Object.entries(AquireWhenCardsSection || {})
        .filter(
            ([key, value]) => (
                (key.startsWith('card') || key.endsWith('-Card'))
                && typeof value === 'object'
                && value !== null
            ),
        )
        .map(([key, value]) => ({
            id: key,
            title: value.title,
            items: [
                ...Object.entries(value)
                    .filter(
                        ([itemKey, itemValue]) => (
                            itemKey.startsWith('list-item')
                            && typeof itemValue === 'object'
                            && itemValue !== null
                        ),
                    )
                    .map(([itemKey, itemValue]) => ({
                        id: itemKey,
                        boldWord: itemValue['bold-word'] || '',
                        paragraph: itemValue.paragraph || '',
                    })),
                ...Object.entries(value['bullet-point-list'] || {})
                    .filter(
                        ([itemKey, itemValue]) => (
                            itemKey.startsWith('bullet-point-paragraph')
                            && typeof itemValue === 'string'
                        ),
                    )
                    .map(([itemKey, itemValue]) => ({
                        id: itemKey,
                        boldWord: '',
                        paragraph: itemValue,
                    })),
            ],
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

            <FormIntroductionSection
                title={prefixSection.title}
                contentItems={buildFormContentItems(prefixSection)}
            />

            <FormIntroductionSection
                title={realEstateSpecificationsSection.title}
                contentItems={buildFormContentItems(realEstateSpecificationsSection)}
            />

            <IconListCardsSection
                title={AquireWhenCardsSection.title}
                cards={biddingExplanationCards}
                iconSrc={FormIcon}
                listClassName="Bidding-Quote-Card-List"
            />

            {acquireWhenNote && (
                <div className="container-fluid px-0 pb-5">
                    <div className="row mx-0 d-flex text-center align-items-center justify-content-center">
                        <div className="col-11 col-xl-8">
                            <p>{acquireWhenNote}</p>
                        </div>
                    </div>
                </div>
            )}

            <FormIntroductionSection
                title={DeedOfTransferCTA.title}
                contentItems={buildFormContentItems(DeedOfTransferCTA)}
            />
        </div>
    );
};

export default PublicDeedConfirmationsPage;