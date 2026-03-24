import RealEstateIcon from '../../assets/svg/RealEstateNavIcon.svg';
import RentalBrokerageIcon from '../../assets/svg/RentalBrokerageNavIcon.svg';
import PropertyManagementIcon from '../../assets/svg/PropertyManagementNavIcon.svg';

import RealEstateDropdownImage from '../../assets/webp/RealEstateDropdownImage.webp';
import RentalBrokerageDropdownImage from '../../assets/webp/RentalBrokerageDropdownImage.jpg';
import PropertyManagementDropdownImage from '../../assets/webp/PropertyManagementDropdownImage.webp';

export const NAV_SECTIONS = [
    {
        key: 'propertyManagement',
        title: 'Isännöinti',
        icon: PropertyManagementIcon,
        image: PropertyManagementDropdownImage,
        links: [
            { label: 'Ohjeita taloyhtiön asukkaille', href: '#' },
            { label: 'Vastuunjakotaulukko', href: '#' },
            { label: 'Lomakkeet', href: '#' },
            { label: 'Pyydä tarjous isännöinnistä', href: '#' },
            {
                label: 'Asiakasssivut',
                href: 'https://huoneistotieto.fi/fi-FI/account/app/login',
                target: '_blank',
                rel: 'noreferrer'
            }
        ]
    },
    {
        key: 'realEstate',
        title: 'Kiinteistönvälitys',
        icon: RealEstateIcon,
        image: RealEstateDropdownImage,
        links: [
            { label: 'Myyntikohteemme', href: '#' },
            { label: 'Pyydä arvio kohteestasi', href: '#' },
            { label: 'Julkiset kaupanvahvistukset', href: '#' },
            { label: 'Tarjouskaupat', href: '#' }
        ]
    },
    {
        key: 'rental',
        title: 'Vuokraus',
        icon: RentalBrokerageIcon,
        image: RentalBrokerageDropdownImage,
        links: [
            { label: 'Vuokrakohteemme', href: '#' },
            { label: 'Vuokrahakemus', href: '#' },
            { label: 'Vuokraa asuntosi', href: '#' }
        ]
    }
];
