import React, { useState, useEffect } from 'react';

import Logo from '../../assets/webp/Logo.webp';
import DropDownIcon from '../../assets/svg/DropdownArrowDown.svg';
import MenuCloseToggleIcon from '../../assets/svg/MenuCloseToggleIcon.svg';
import MenuOpenToggleIcon from '../../assets/svg/MenuOpenToggleIcon.svg';

import { NAV_SECTIONS } from './navData';

const MobileNavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

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

    return (
        <nav className={`navbar navbar-expand-lg navbar-light${isMenuOpen ? ' mobile-menu-open' : ''}`}>
            <div className="container-fluid px-2 px-sm-4 mobile-nav-top">
                <a className="navbar-brand" href="#">
                    <img src={Logo} alt="AR-Logo" height="60" />
                </a>

                <div className="d-flex align-items-center ms-auto">
                    <a href="#" className="nav-link me-3">In English</a>
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
                                    <span>{section.title}</span>
                                    <img src={DropDownIcon} alt="" className="nav-dropdown-arrow" aria-hidden="true" />
                                </a>
                                <ul className={`dropdown-menu mobile-dropdown-menu${isDropdownOpen(section.key) ? ' show' : ''}`}>
                                    <li>
                                        <div className="row g-0 align-items-center justify-content-start">
                                            <ul className="list-unstyled mb-0 py-3 col-4">
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href={section.href || '#'}
                                                    >
                                                        {section.title}
                                                    </a>
                                                </li>
                                                {section.links.map((link) => (
                                                    <li key={link.label}>
                                                        <a
                                                            className="dropdown-item"
                                                            href={link.href}
                                                            target={link.target}
                                                            rel={link.rel}
                                                        >
                                                            {link.label}
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
                            <a className="dropdown-item" id="Header" href="#">Yhteystiedot</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default MobileNavBar;
