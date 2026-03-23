import React from 'react';
import Logo from '../assets/webp/Logo.webp'

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src={Logo} alt="AR-Logo" height="55"/>
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarContent">
                    <ul class="navbar-nav mx-auto gap-5">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                Menu 1
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                Menu 2
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Something</a></li>
                                <li><a class="dropdown-item" href="#">Something else</a></li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                Menu 3
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Option</a></li>
                                <li><a class="dropdown-item" href="#">Option 2</a></li>
                            </ul>
                        </li>
                    </ul>

                    <div class="d-flex align-items-center">
                        <a href="#" class="nav-link me-3">Login</a>
                        <a href="#" class="btn btn-primary">Sign Up</a>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default NavBar;