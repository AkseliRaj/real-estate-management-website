import React from 'react';
import FormPageBanner from '../../components/FormPageBanner';
import FormIntroductionSection from '../../components/FormIntroductionSection';
import MovingNoticeBasicInformationSection from '../../components/movingNoticeForm/MovingNoticeBasicInformationSection';
import MovingNoticeMoverInformationSection from '../../components/movingNoticeForm/MovingNoticeMoverInformationSection';
import MovingNoticeAddressSection from '../../components/movingNoticeForm/MovingNoticeAddressSection';
import MovingNoticeOtherMoversSection from '../../components/movingNoticeForm/MovingNoticeOtherMoversSection';
import MovingNoticeTermsSection from '../../components/movingNoticeForm/MovingNoticeTermsSection';
import { useTranslation } from 'react-i18next';


const MovingNoticeFormPage = () => {
    const { t } = useTranslation();

    return (
        <div className="container-fluid px-0">
            <FormPageBanner headingKey='Moving-Notice-Page.Banner-Title' />

            <FormIntroductionSection
                title={t('Moving-Notice-Page.Prefix-Section.title')}
                paragraphs={[
                    t('Moving-Notice-Page.Prefix-Section.paragraph1'),
                    t('Moving-Notice-Page.Prefix-Section.paragraph2'),
                ]}
                rowJustify={'center'}
            />

            <MovingNoticeBasicInformationSection />

            <MovingNoticeMoverInformationSection />

            <MovingNoticeAddressSection
                translationKey='Moving-Notice-Page.Form-Labels.Old-Address'
                idPrefix='old'
            />

            <MovingNoticeAddressSection
                translationKey='Moving-Notice-Page.Form-Labels.New-Address'
                idPrefix='new'
            />

            <MovingNoticeOtherMoversSection />

            <MovingNoticeTermsSection />

        </div>
    );
};

export default MovingNoticeFormPage;
