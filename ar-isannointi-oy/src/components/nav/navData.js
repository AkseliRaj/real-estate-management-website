import RealEstateIcon from '../../assets/svg/RealEstateNavIcon.svg';
import RentalBrokerageIcon from '../../assets/svg/RentalBrokerageNavIcon.svg';
import PropertyManagementIcon from '../../assets/svg/PropertyManagementNavIcon.svg';

import RealEstateDropdownImage from '../../assets/webp/RealEstateDropdownImage.webp';
import RentalBrokerageDropdownImage from '../../assets/webp/RentalBrokerageDropdownImage.jpg';
import PropertyManagementDropdownImage from '../../assets/webp/PropertyManagementDropdownImage.webp';

export const NAV_SECTIONS = [
    {
        key: 'propertyManagement',
        titleKey: 'nav.propertyManagement.title',
        icon: PropertyManagementIcon,
        image: PropertyManagementDropdownImage,
        links: [
            { labelKey: 'nav.propertyManagement.links.instructionsForResidents', href: '#' },
            { labelKey: 'nav.propertyManagement.links.responsibilitySplitTable', href: '#' },
            { labelKey: 'nav.propertyManagement.links.forms', href: '#' },
            { labelKey: 'nav.propertyManagement.links.requestQuote', href: '#' },
            {
                labelKey: 'nav.propertyManagement.links.clientPages',
                href: 'https://huoneistotieto.fi/fi-FI/account/app/login',
                target: '_blank',
                rel: 'noreferrer'
            }
        ]
    },
    {
        key: 'realEstate',
        titleKey: 'nav.realEstate.title',
        icon: RealEstateIcon,
        image: RealEstateDropdownImage,
        links: [
            { labelKey: 'nav.realEstate.links.ourPropertiesForSale', href: '#' },
            { labelKey: 'nav.realEstate.links.requestEstimate', href: '#' },
            { labelKey: 'nav.realEstate.links.publicDeeds', href: '#' },
            { labelKey: 'nav.realEstate.links.offerDeals', href: '#' }
        ]
    },
    {
        key: 'rental',
        titleKey: 'nav.rental.title',
        icon: RentalBrokerageIcon,
        image: RentalBrokerageDropdownImage,
        links: [
            { labelKey: 'nav.rental.links.rentalProperties', href: '#' },
            { labelKey: 'nav.rental.links.rentalApplication', href: '#' },
            { labelKey: 'nav.rental.links.rentYourHome', href: '#' }
        ]
    }
];
