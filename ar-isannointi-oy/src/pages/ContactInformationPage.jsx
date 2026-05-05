import { useTranslation } from 'react-i18next';
import IntroductionSectionWithImage from '../components/IntroductionSectionWithImage';
import BiddingQuotePageImage from '../assets/webp/BiddingQuotePageImage.webp';
import PersonIcon from '../assets/svg/PersonIcon.svg';
import '../css/ContactInformationPage.css'

const ContactInformationPage = () => {
    const { t } = useTranslation();

    return (
        <div className="container-fluid px-0">
            <IntroductionSectionWithImage
                title={t('Contact-Information-Page.Banner.title')}
                paragraphs={[
                    t('Contact-Information-Page.Banner.paragraph'),
                ]}
                imageSrc={BiddingQuotePageImage}
                imageAlt={t('propertyLanding.images.introductionAlt')}
                buttonText={t('Contact-Information-Page.Banner.CTA-Button')}
            />

            <div className='row d-flex justify-content-center Contact-Information-Section py-5 px-0'>
                <div className='col-11'>
                    <div className='row d-flex justify-content-center justify-content-md-around align-items-center px-0'>
                        <div className='col-12 col-md-6 col-xl-5 p-2 p-md-5 Google-Maps-Block'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1791.8176664894227!2d22.39316957716332!3d61.80490997590653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4688e323c5141bb5%3A0xbcd839b5e4221da6!2zQVIgSXPDpG5uw7ZpbnRpIE95!5e1!3m2!1sen!2sfi!4v1777370555707!5m2!1sen!2sfi"
                                style={{
                                    border: '1px solid #BEBEBE',
                                    borderRadius: '1rem',
                                    width: '100%',
                                    maxWidth: '600px',
                                    aspectRatio: '4 / 3',
                                    height: 'auto',
                                }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div className='col-12 col-md-5 col-xl-6 pt-5 pt-md-0'>
                            <div className='Business-Hours-Section pb-5'>
                                <h3 className="pb-3 d-none d-md-block">{t('Contact-Information-Page.Operation-Information.Business-Hours-Title.title')}</h3>
                                <h4 className="pb-1 d-block d-md-none">{t('Contact-Information-Page.Operation-Information.Business-Hours-Title.title')}</h4>
                                <p>{t('Contact-Information-Page.Operation-Information.Business-Hours-Title.paragraph1')}</p>
                                <p>{t('Contact-Information-Page.Operation-Information.Business-Hours-Title.paragraph2')} <a href='https://www.facebook.com/profile.php?id=100057221720630' target="_blank">{t('Contact-Information-Page.Operation-Information.Business-Hours-Title.link')}</a></p>
                            </div>
                            <div className='Address-Section'>
                                <h3 className="pb-3 d-none d-md-block">{t('Contact-Information-Page.Operation-Information.Location.title')}</h3>
                                <h4 className="pb-1 d-block d-md-none">{t('Contact-Information-Page.Operation-Information.Location.title')}</h4>
                                <p>{t('Contact-Information-Page.Operation-Information.Location.address')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row d-flex justify-content-center Staff-Information-Section py-5 px-0'>
                <div className='col-11'>
                    <img
                        src={PersonIcon}
                        alt={t('propertyLanding.images.introductionAlt')}
                        className="Person-Image pb-5 d-block mx-auto"
                    />
                    <div className='row justify-content-center'>
                        <div className='col-11 col-md-8 text-center Prefix-Section'>
                            <h3 className="pb-3 d-none d-md-block">{t('Contact-Information-Page.Staff-Information.Prefix.title')}</h3>
                            <h4 className="pb-1 d-block d-md-none">{t('Contact-Information-Page.Staff-Information.Prefix.title')}</h4>
                            <p>{t('Contact-Information-Page.Staff-Information.Prefix.paragraph')}</p>
                        </div>
                    </div>
                    <div className='row justify-content-center pt-5'>
                        <div className='col-4 Staff-Card text-center p-5'>
                            <h3 className="pb-3 d-none d-md-block">Aki Rajahalme</h3>
                            <h4 className="pb-1 d-block d-md-none">Aki Rajahalme</h4>
                            <div className='Profession-Title'>
                                <p>{t('Contact-Information-Page.Staff-Information.Profession-Titles.Aki-Rajahalme')}</p>
                            </div>
                            <p className='my-3'>044 - 503 7793</p>
                            <p>aki@arisannoinit.fi</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactInformationPage;