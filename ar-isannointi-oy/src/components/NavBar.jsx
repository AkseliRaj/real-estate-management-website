import React, { useEffect, useState } from 'react';
import '../css/NavBar.css'

import Logo from '../assets/webp/Logo.webp'
import RealEstateIcon from '../assets/svg/RealEstateNavIcon.svg'
import RentalBrokerageIcon from '../assets/svg/RentalBrokerageNavIcon.svg'
import PropertyManagementIcon from '../assets/svg/PropertyManagementNavIcon.svg'
import RealEstateDropdownImage from '../assets/webp/RealEstateDropdownImage.webp'
import RentalBrokerageDropdownImage from '../assets/webp/RentalBrokerageDropdownImage.jpg'
import PropertyManagementDropdownImage from '../assets/webp/PropertyManagementDropdownImage.webp'

const NavBar = () => {
    const [isDesktop, setIsDesktop] = useState(
        typeof window !== 'undefined' ? window.innerWidth >= 992 : false
    );

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        const mediaQuery = window.matchMedia('(min-width: 992px)');
        const handleViewportChange = (event) => {
            setIsDesktop(event.matches);
        };

        setIsDesktop(mediaQuery.matches);

        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', handleViewportChange);
            return () => mediaQuery.removeEventListener('change', handleViewportChange);
        }

        mediaQuery.addListener(handleViewportChange);
        return () => mediaQuery.removeListener(handleViewportChange);
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid px-3">
                <a className="navbar-brand" href="#">
                    <img src={Logo} alt="AR-Logo" height="60"/>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav mx-auto gap-5">
                        <li className="nav-item dropdown">
                            <a
                                className={`nav-link${isDesktop ? '' : ' dropdown-toggle'}`}
                                href="#"
                                role={isDesktop ? undefined : 'button'}
                                data-bs-toggle={isDesktop ? undefined : 'dropdown'}
                            >
                                Isännöinti
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <div className="row g-0 align-items-center justify-content-center">
                                        <ul className="list-unstyled mb-0 py-3 col-4">
                                            <li><img src={PropertyManagementIcon} alt="DropdownMenuIcon" className="NavBarIcon pb-5" /></li>
                                            <li><a className="dropdown-item" id='Header' href="#">Isännöinti</a></li>
                                            <li><a className="dropdown-item" href="#">Ohjeita taloyhtiön asukkaille</a></li>
                                            <li><a className="dropdown-item" href="#">Vastuunjakotaulukko</a></li>
                                            <li><a className="dropdown-item" href="#">Lomakkeet</a></li>
                                            <li><a className="dropdown-item" href="#">Pyydä tarjous isännöinnistä</a></li>
                                            <li><a className="dropdown-item" href="https://huoneistotieto.fi/fi-FI/account/app/login" target="_blank">Asiakasssivut</a></li>
                                        </ul>
                                        <div className="DropdownImageSection col-5 col-xl-4 col-xxl-3 d-flex justify-content-center">
                                            <img src={PropertyManagementDropdownImage} alt="DropDownMenuImage" className="DropDownMenuImage" />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className={`nav-link${isDesktop ? '' : ' dropdown-toggle'}`}
                                href="#"
                                role={isDesktop ? undefined : 'button'}
                                data-bs-toggle={isDesktop ? undefined : 'dropdown'}
                            >
                                Kiinteistönvälitys
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <div className="row g-0 align-items-center justify-content-center">
                                        <ul className="list-unstyled mb-0 py-3 col-4">
                                            <li><img src={RealEstateIcon} alt="DropdownMenuIcon" className="NavBarIcon pb-5" /></li>
                                            <li><a className="dropdown-item" id='Header' href="#">Kiinteistönvälitys</a></li>
                                            <li><a className="dropdown-item" href="#">Myyntikohteemme</a></li>
                                            <li><a className="dropdown-item" href="#">Pyydä arvio kohteestasi</a></li>
                                            <li><a className="dropdown-item" href="#">Julkiset kaupanvahvistukset</a></li>
                                            <li><a className="dropdown-item" href="#">Tarjouskaupat</a></li>
                                        </ul>
                                        <div className="DropdownImageSection col-5 col-xl-4 col-xxl-3 d-flex justify-content-center">
                                            <img src={RealEstateDropdownImage} alt="DropDownMenuImage" className="DropDownMenuImage" />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a
                                className={`nav-link${isDesktop ? '' : ' dropdown-toggle'}`}
                                href="#"
                                role={isDesktop ? undefined : 'button'}
                                data-bs-toggle={isDesktop ? undefined : 'dropdown'}
                            >
                                Vuokraus
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <div className="row g-0 align-items-center justify-content-center">
                                        <ul className="list-unstyled mb-0 py-3 col-4">
                                            <li><img src={RentalBrokerageIcon} alt="DropdownMenuIcon" className="NavBarIcon pb-5" /></li>
                                            <li><a className="dropdown-item" id='Header' href="#">Vuokraus</a></li>
                                            <li><a className="dropdown-item" href="#">Vuokrakohteemme</a></li>
                                            <li><a className="dropdown-item" href="#">Vuokrahakemus</a></li>
                                            <li><a className="dropdown-item" href="#">Vuokraa asuntosi</a></li>
                                        </ul>
                                        <div className="DropdownImageSection col-5 col-xl-4 col-xxl-3 d-flex justify-content-center">
                                            <img src={RentalBrokerageDropdownImage} alt="DropDownMenuImage" className="DropDownMenuImage" />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
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

export default NavBar;