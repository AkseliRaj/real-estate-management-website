import '../css/FormPageBanner.css';
import PaperPenIcon from '../assets/svg/PaperPenIcon.svg';
import { useTranslation } from 'react-i18next';

export default function FormPageBanner({
    headingText,
    headingTextMd,
    headingTextSm,
    headingTextXs,
    headingKey = 'PropertyManagementQuote.banner.heading',
    headingKeyMd,
    headingKeySm,
    headingKeyXs,
    imageAlt,
    imageAltKey = 'PropertyManagementQuote.banner.imageAlt'
}) {
    const { t } = useTranslation();

    const fallbackHeading = 'Pyydä tarjous isännöinnistä';
    const resolvedHeading = headingText ?? t(headingKey, { defaultValue: fallbackHeading });
    const mdText = headingTextMd ?? (headingKeyMd ? t(headingKeyMd, { defaultValue: resolvedHeading }) : resolvedHeading);
    const smText = headingTextSm ?? (headingKeySm ? t(headingKeySm, { defaultValue: resolvedHeading }) : resolvedHeading);
    const xsText = headingTextXs ?? (headingKeyXs ? t(headingKeyXs, { defaultValue: resolvedHeading }) : resolvedHeading);
    const resolvedImageAlt = imageAlt ?? t(imageAltKey, { defaultValue: 'Pen and paper icon' });

    return (
        <div className='container-fluid FormPageBanner'>
            <div className='row d-flex justify-content-center'>
                <div className='col-11 col-lg-5 col-xl-6 col-xxl-5 d-flex align-items-center justify-content-center justify-content-lg-start text-center text-lg-start'>                    <h1 className='form-banner-header d-none d-xl-block mb-0'>{resolvedHeading}</h1>
                    <h2 className='form-banner-header d-none d-md-block d-xl-none mb-0'>{mdText}</h2>
                    <h3 className='form-banner-header d-none d-sm-block d-md-none mb-0'>{smText}</h3>
                    <h4 className='form-banner-header d-block d-sm-none mb-0'>{xsText}</h4>
                </div>
                <div className='col-6 col-lg-5 d-none d-lg-flex justify-content-center'>
                    <div className='Pen-Paper-Icon-Mask'>
                        <img src={PaperPenIcon} alt={resolvedImageAlt} className='Pen-Paper-Icon' />
                    </div>
                </div>
            </div>
        </div>
    );
}