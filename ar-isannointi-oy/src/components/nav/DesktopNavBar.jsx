import React from 'react';

import Logo from '../../assets/webp/Logo.webp';
import DropDownIcon from '../../assets/svg/DropdownArrowDown.svg';

import { NAV_SECTIONS } from './navData';

const DesktopNavBar = () => {
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
                                    <span>{section.title}</span>
                                    <img src={DropDownIcon} alt="" className="nav-dropdown-arrow" aria-hidden="true" />
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <div className="row g-0 align-items-center justify-content-center">
                                            <ul className="list-unstyled mb-0 py-3 col-4">
                                                <li><img src={section.icon} alt="DropdownMenuIcon" className="NavBarIcon pb-5" /></li>
                                                <li><a className="dropdown-item" id="Header" href="#">{section.title}</a></li>
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
                        <a href="#" className="nav-link me-3">In English</a>
                        <a href="#" className="btn btn-primary">Yhteystiedot</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default DesktopNavBar;
