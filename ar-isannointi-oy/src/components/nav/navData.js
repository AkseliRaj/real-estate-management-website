import RealEstateIcon from '../../assets/svg/RealEstateNavIcon.svg';
import RentalBrokerageIcon from '../../assets/svg/RentalBrokerageNavIcon.svg';
import PropertyManagementIcon from '../../assets/svg/PropertyManagementNavIcon.svg';

import RealEstateDropdownImage from '../../assets/webp/RealEstateDropdownImage.webp';
import RentalBrokerageDropdownImage from '../../assets/webp/RentalBrokerageDropdownImage.jpg';
import PropertyManagementDropdownImage from '../../assets/webp/PropertyManagementDropdownImage.webp';
import { NAV_SECTIONS_BASE } from '../../data/siteLinks';

const NAV_ASSETS_BY_KEY = {
    propertyManagement: {
        icon: PropertyManagementIcon,
        image: PropertyManagementDropdownImage
    },
    realEstate: {
        icon: RealEstateIcon,
        image: RealEstateDropdownImage
    },
    rental: {
        icon: RentalBrokerageIcon,
        image: RentalBrokerageDropdownImage
    }
};

export const NAV_SECTIONS = NAV_SECTIONS_BASE.map((section) => ({
    ...section,
    ...NAV_ASSETS_BY_KEY[section.key]
}));
