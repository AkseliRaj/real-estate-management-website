import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from '../../assets/webp/Logo.webp';
import DropDownIcon from '../../assets/svg/DropdownArrowDown.svg';
import ArrowButton from '../ArrowButtonOrange';

import { NAV_SECTIONS } from './navData';
import RoutedNavLink from './RoutedNavLink';

const DesktopNavBar = () => {
    const location = useLocation()
    const navRef = useRef(null)
    const isFirstPathRef = useRef(true)
    const [megaMenusSuppressed, setMegaMenusSuppressed] = useState(false)
    const { t, i18n } = useTranslation()
    const isEnglish = i18n.language?.startsWith('en')

    const suppressMegaMenus = useCallback(() => setMegaMenusSuppressed(true), [])
    const allowMegaMenus = useCallback(() => setMegaMenusSuppressed(false), [])

    useEffect(() => {
        if (isFirstPathRef.current) {
            isFirstPathRef.current = false
            return
        }
        setMegaMenusSuppressed(true)
        const nav = navRef.current
        const active = document.activeElement
        if (active && nav?.contains(active) && typeof active.blur === 'function') {
            active.blur()
        }
    }, [location.pathname])

    const handleLanguageToggle = (e) => {
        e.preventDefault()
        const nextLng = isEnglish ? 'fi' : 'en'
        i18n.changeLanguage(nextLng)
    }

    return (
        <nav
            ref={navRef}
            className={`navbar navbar-expand-lg navbar-light${megaMenusSuppressed ? ' desktop-mega-suppressed' : ''}`}
        >
            <div className="container-fluid px-3">
                <Link className="navbar-brand" to="/" onClick={suppressMegaMenus}>
                    <img src={Logo} alt="AR-Logo" height="60" />
                </Link>

                <div className="navbar-collapse collapse show" id="navbarContentDesktop">
                    <ul className="navbar-nav mx-auto gap-5" onMouseEnter={allowMegaMenus}>
                        {NAV_SECTIONS.map((section) => (
                            <li
                                key={section.key}
                                className="nav-item dropdown"
                                onMouseLeave={allowMegaMenus}
                            >
                                <a className="nav-link nav-dropdown-toggle" href="#">
                                    <span>{t(section.titleKey)}</span>
                                    <img src={DropDownIcon} alt="" className="nav-dropdown-arrow" aria-hidden="true" />
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <div className="row g-0 align-items-center justify-content-center">
                                            <ul className="list-unstyled mb-0 py-3 col-4">
                                                <li><img src={section.icon} alt="DropdownMenuIcon" className="NavBarIcon pb-5" /></li>
                                                <li>
                                                    <RoutedNavLink
                                                        className="dropdown-item"
                                                        id="Header"
                                                        href={section.href || '#'}
                                                        onClick={suppressMegaMenus}
                                                    >
                                                        {t(section.titleKey)}
                                                    </RoutedNavLink>
                                                </li>
                                                {section.links.map((link) => (
                                                    <li key={link.labelKey}>
                                                        <RoutedNavLink
                                                            className="dropdown-item"
                                                            href={link.href}
                                                            target={link.target}
                                                            rel={link.rel}
                                                            onClick={suppressMegaMenus}
                                                        >
                                                            {t(link.labelKey)}
                                                        </RoutedNavLink>
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
