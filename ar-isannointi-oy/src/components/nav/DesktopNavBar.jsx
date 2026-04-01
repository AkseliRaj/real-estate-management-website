import React from 'react';
import { useTranslation } from 'react-i18next';
import Logo from '../../assets/webp/Logo.webp';
import DropDownIcon from '../../assets/svg/DropdownArrowDown.svg';
import ArrowButton from '../ArrowButtonOrange';

import { NAV_SECTIONS } from './navData';

const DesktopNavBar = () => {
    const { t, i18n } = useTranslation()
    const isEnglish = i18n.language?.startsWith('en')

    const handleLanguageToggle = (e) => {
        e.preventDefault()
        const nextLng = isEnglish ? 'fi' : 'en'
        i18n.changeLanguage(nextLng)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid px-3">
                <a className="navbar-brand" href="#">
                    <img src={Logo} alt="AR-Logo" height="60" />
                </a>

                <div className="navbar-collapse collapse show" id="navbarContentDesktop">
                    <ul className="navbar-nav mx-auto gap-5">
                        {NAV_SECTIONS.map((section) => (
                            <li key={section.key} className="nav-item dropdown">
                                <a className="nav-link nav-dropdown-toggle" href="#">
                                    <span>{t(section.titleKey)}</span>
                                    <img src={DropDownIcon} alt="" className="nav-dropdown-arrow" aria-hidden="true" />
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <div className="row g-0 align-items-center justify-content-center">
                                            <ul className="list-unstyled mb-0 py-3 col-4">
                                                <li><img src={section.icon} alt="DropdownMenuIcon" className="NavBarIcon pb-5" /></li>
                                                <li><a className="dropdown-item" id="Header" href={section.href || '#'}>{t(section.titleKey)}</a></li>
                                                {section.links.map((link) => (
                                                    <li key={link.labelKey}>
                                                        <a
                                                            className="dropdown-item"
                                                            href={link.href}
                                                            target={link.target}
                                                            rel={link.rel}
                                                        >
                                                            {t(link.labelKey)}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="DropdownImageSection col-5 col-xl-4 col-xxl-3 d-flex justify-content-center">
                                                <img src={section.image} alt="DropDownMenuImage" className="DropDownMenuImage" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        ))}
                    </ul>

                    <div className="d-flex align-items-center">
                        <a
                            href="#"
                            className="nav-link me-3"
                            onClick={handleLanguageToggle}
                            aria-label={isEnglish ? t('language.switchToFinnish') : t('language.switchToEnglish')}
                        >
                            {isEnglish ? t('language.switchToFinnish') : t('language.switchToEnglish')}
                        </a>
                        <ArrowButton
                            label={t('nav.contactDetails')}
                            variant="orange"
                            showArrow={false}
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default DesktopNavBar;
