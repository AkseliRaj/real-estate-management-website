import '../css/Footer.css'
import { useTranslation } from 'react-i18next';
import Logo from '../assets/webp/BigLogoNegative.webp';
import { FOOTER_SECTIONS } from '../data/siteLinks';

const Footer = () => {
    const { t } = useTranslation()

    return (
        <footer className="Site-Footer">
            <div className="container-fluid">

                <div className="row pt-5 mb-5 px-5">
                    <div className="col">
                        <a className="navbar-brand" href="#">
                            <img src={Logo} alt="AR-Logo" height="65" />
                        </a>
                    </div>
                </div>

                <div className="row justify-content-between p-5">
                    {FOOTER_SECTIONS.map((section) => (
                        <div key={section.titleKey} className="col-12 col-md-6 col-lg-3 mb-5">
                            <h5 className='pb-1 pb-md-3'>{t(section.titleKey)}</h5>
                            <ul className="nav flex-column">
                                {section.links.map((link) => (
                                    <li key={link.labelKey} className="nav-item mb-2">
                                        <a href={link.href} className="nav-link p-0 text-body-secondary">
                                            {t(link.labelKey)}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className='text-center pb-3'>
                made by <a href="https://akselirajahalme.fi/" target="_blank">Akseli Rajahalme</a>
            </div>
        </footer>
    );
};

export default Footer;