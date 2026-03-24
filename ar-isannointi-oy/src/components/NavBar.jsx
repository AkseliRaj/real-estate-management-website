import React from 'react';
import '../css/NavBar.css'

import Logo from '../assets/webp/Logo.webp'
import RealEstateIcon from '../assets/svg/RealEstateNavIcon.svg'
import RentalBrokerageIcon from '../assets/svg/RealEstateNavIcon.svg'
import PropertyManagementIcon from '../assets/svg/PropertyManagementNavIcon.svg'

const NavBar = () => {
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
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                Isännöinti
                            </a>
                            <ul className="dropdown-menu">
                                <li><img src={PropertyManagementIcon} alt="PropertyManagementIcon" className="NavBarIcon" /></li>
                                <li><a className="dropdown-item" id='Header' href="#">Isännöinti</a></li>
                                <li><a className="dropdown-item" href="#">Ohjeita taloyhtiön asukkaille</a></li>
                                <li><a className="dropdown-item" href="#">Vastuunjakotaulukko</a></li>
                                <li><a className="dropdown-item" href="#">Lomakkeet</a></li>
                                <li><a className="dropdown-item" href="#">Pyydä tarjous isännöinnistä</a></li>
                                <li><a className="dropdown-item" href="https://huoneistotieto.fi/fi-FI/account/app/login">Asiakasssivut</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                Kiinteistönvälitys
                            </a>
                            <ul className="dropdown-menu">
                                <li><img src={RentalBrokerageIcon} alt="PropertyManagementIcon" className="NavBarIcon" /></li>
                                <li><a className="dropdown-item" id='Header' href="#">Kiinteistönvälitys</a></li>
                                <li><a className="dropdown-item" href="#">Myyntikohteemme</a></li>
                                <li><a className="dropdown-item" href="#">Pyydä arvio kohteestasi</a></li>
                                <li><a className="dropdown-item" href="#">Julkiset kaupanvahvistukset</a></li>
                                <li><a className="dropdown-item" href="#">Tarjouskaupat</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                Vuokraus
                            </a>
                            <ul className="dropdown-menu">
                                <li><img src={RealEstateIcon} alt="PropertyManagementIcon" className="NavBarIcon" /></li>
                                <li><a className="dropdown-item" id='Header' href="#">Vuokraus</a></li>
                                <li><a className="dropdown-item" href="#">Vuokrakohteemme</a></li>
                                <li><a className="dropdown-item" href="#">Vuokrahakemus</a></li>
                                <li><a className="dropdown-item" href="#">Vuokraa asuntosi</a></li>
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