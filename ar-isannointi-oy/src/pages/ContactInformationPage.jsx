import { useTranslation } from 'react-i18next';
import IntroductionSectionWithImage from '../components/IntroductionSectionWithImage';
import FormIcon from '../assets/svg/FilePenIcon.svg';
import BiddingQuotePageImage from '../assets/webp/BiddingQuotePageImage.webp';
import '../css/BiddingPage.css'

const ContactInformationPage = () => {
    const { t } = useTranslation();

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
        </div>
    );
};

export default ContactInformationPage;