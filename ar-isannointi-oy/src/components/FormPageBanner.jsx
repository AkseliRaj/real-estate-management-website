import '../css/FormPageBanner.css';
import PaperPenIcon from '../assets/svg/PaperPenIcon.svg';

export default function FormPageBanner({
    headingText = 'Pyydä tarjous isännöinnistä',
    headingTextMd,
    headingTextSm,
    headingTextXs
}) {
    const mdText = headingTextMd ?? headingText;
    const smText = headingTextSm ?? headingText;
    const xsText = headingTextXs ?? headingText;

    return (
        <div className='container-fluid FormPageBanner'>
            <div className='row d-flex justify-content-center'>
                <div className='col-11 col-lg-5 col-xl-6 col-xxl-5 d-flex align-items-center'>
                    <h1 className='form-banner-header d-none d-xl-block mb-0'>{headingText}</h1>
                    <h2 className='form-banner-header d-none d-md-block d-xl-none mb-0'>{mdText}</h2>
                    <h3 className='form-banner-header d-none d-sm-block d-md-none mb-0'>{smText}</h3>
                    <h4 className='form-banner-header d-block d-sm-none mb-0'>{xsText}</h4>
                </div>
                <div className='col-6 col-lg-5 d-none d-lg-flex justify-content-center'>
                    <div className='Pen-Paper-Icon-Mask'>
                        <img src={PaperPenIcon} alt="Pen-Paper-Icon" className='Pen-Paper-Icon' />
                    </div>
                </div>
            </div>
        </div>
    );
}