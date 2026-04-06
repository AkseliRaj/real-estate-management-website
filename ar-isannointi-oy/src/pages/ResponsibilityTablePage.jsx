import '../css/ResponsibilityTablePage.css'
import { useTranslation } from 'react-i18next';

import FormIntroductionSection from '../components/FormIntroductionSection';
import IntroductionSectionWithImage from '../components/IntroductionSectionWithImage';
import ResponsibilityTable from '../components/ResponsibilityTable';
import ResidentInstructionsImage from '../assets/webp/RenovationImage.webp'



const ResponsibilityTablePage = () => {
    const { t } = useTranslation();

    return (
        <div className="container-fluid px-0">

            <IntroductionSectionWithImage
                title={t('ResponsibilityTable.Introduction-Section.title')}
                paragraphs={[
                    t('ResponsibilityTable.Introduction-Section.paragraph1'),
                ]}
                imageSrc={ResidentInstructionsImage}
                imageAlt={t('propertyLanding.images.introductionAlt')}
            />

            <FormIntroductionSection
                title={t('ResponsibilityTable.Prefix-Section.title')}
                paragraphs={[
                    t('ResponsibilityTable.Prefix-Section.paragraph1'),
                    t('ResponsibilityTable.Prefix-Section.paragraph2'),
                ]}
                innerContainer={false}
                rowJustify="center"
            />

            <ResponsibilityTable />

        </div>
    );
};

export default ResponsibilityTablePage;
