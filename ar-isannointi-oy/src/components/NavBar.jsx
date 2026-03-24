import React, { useEffect, useState } from 'react';
import '../css/NavBar.css';
import DesktopNavBar from './nav/DesktopNavBar';
import MobileNavBar from './nav/MobileNavBar';

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
    return isDesktop ? <DesktopNavBar /> : <MobileNavBar />;
};

export default NavBar;