import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import Logo from '../../assets/webp/Logo.webp';
import DropDownIcon from '../../assets/svg/DropdownArrowDown.svg';
import MenuCloseToggleIcon from '../../assets/svg/MenuCloseToggleIcon.svg';
import MenuOpenToggleIcon from '../../assets/svg/MenuOpenToggleIcon.svg';

import { NAV_SECTIONS } from './navData';

const MobileNavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isNavHidden, setIsNavHidden] = useState(false);
    const { t, i18n } = useTranslation()
    const isEnglish = i18n.language?.startsWith('en')
    const lastScrollYRef = useRef(0);

    const handleMenuToggle = () => {
        setIsMenuOpen((prev) => {
            const next = !prev;
            if (!next) {
                setOpenDropdown(null);
            }
            return next;
        });
    };

    const handleDropdownToggle = (dropdownKey) => (event) => {
        event.preventDefault();
        setOpenDropdown((prev) => (prev === dropdownKey ? null : dropdownKey));
    };

    const isDropdownOpen = (dropdownKey) => openDropdown === dropdownKey;

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // This cleanup runs if the component unmounts (e.g., resizing to desktop)
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const isDesktop = window.innerWidth >= 992;
            const isNearTop = currentScrollY <= 24;

            if (isDesktop || isMenuOpen || isNearTop) {
                setIsNavHidden(false);
                lastScrollYRef.current = currentScrollY;
                return;
            }

            const isScrollingDown = currentScrollY > lastScrollYRef.current;
            setIsNavHidden(isScrollingDown);
            lastScrollYRef.current = currentScrollY;
        };

        lastScrollYRef.current = window.scrollY;
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMenuOpen]);

    const handleLanguageToggle = (e) => {
        e.preventDefault()
        const nextLng = isEnglish ? 'fi' : 'en'
        i18n.changeLanguage(nextLng)

        // Close menu so the language change is immediately visible
        setIsMenuOpen(false)
        setOpenDropdown(null)
    }

    return (
        <nav className={`navbar navbar-expand-lg navbar-light${isMenuOpen ? ' mobile-menu-open' : ''}${isNavHidden ? ' mobile-nav-hidden' : ''}`}>
            <div className="container-fluid px-2 px-sm-4 mobile-nav-top">
                <a className="navbar-brand" href="#">
                    <img src={Logo} alt="AR-Logo" height="60" />
                </a>

                <div className="d-flex align-items-center ms-auto">
                    <a
                        href="#"
                        className="nav-link me-3"
                        onClick={handleLanguageToggle}
                        aria-label={isEnglish ? t('language.switchToFinnish') : t('language.switchToEnglish')}
                    >
                        {isEnglish ? t('language.switchToFinnish') : t('language.switchToEnglish')}
                    </a>
                    <button
                        className="navbar-toggler nav-menu-toggle"
                        type="button"
                        onClick={handleMenuToggle}
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle navigation menu"
                    >
                        <img
                            className={`nav-menu-toggle-icon${isMenuOpen ? ' is-open' : ''}`}
                            src={isMenuOpen ? MenuCloseToggleIcon : MenuOpenToggleIcon}
                            alt="Menu toggle"
                            width="30"
                            height="30"
                        />
                    </button>
                </div>

                <div className={`navbar-collapse mobile-nav-collapse${isMenuOpen ? ' show' : ''}`} id="navbarContentMobile">
                    <ul className="navbar-nav mx-auto gap-4 py-3 px-2">
                        {NAV_SECTIONS.map((section) => (
                            <li key={section.key} className={`nav-item dropdown d-flex flex-column align-items-start${isDropdownOpen(section.key) ? ' show' : ''}`}>
                                <a
                                    className={`nav-link nav-dropdown-toggle dropdown-toggle${isDropdownOpen(section.key) ? ' show' : ''}`}
                                    href="#"
                                    role="button"
                                    id="Header"
                                    aria-expanded={isDropdownOpen(section.key)}
                                    onClick={handleDropdownToggle(section.key)}
                                >
                                    <span>{t(section.titleKey)}</span>
                                    <img src={DropDownIcon} alt="" className="nav-dropdown-arrow" aria-hidden="true" />
                                </a>
                                <ul className={`dropdown-menu mobile-dropdown-menu${isDropdownOpen(section.key) ? ' show' : ''}`}>
                                    <li>
                                        <div className="row g-0 align-items-center justify-content-start">
                                            <ul className="list-unstyled mb-0 py-3 col-12">
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href={section.href || '#'}
                                                    >
                                                        {t(section.titleKey)}
                                                    </a>
                                                </li>
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
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        ))}
                        <li className="nav-item">
                            <a className="dropdown-item" id="Header" href="#">{t('nav.contactDetails')}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default MobileNavBar;
