const SITE_LINKS = {
    address: '#',
    phone: '#',
    email: '#',
    privacyPolicy: '#',
    propertyManagement: '/',
    instructionsForResidents: '/ohjeet-taloyhtion-asukkaille',
    responsibilitySplitTable: '/vastuunjakotaulukko',
    forms: '/lomakkeet',
    requestQuote: '/tarjous-isannoinnista',
    clientPages: 'https://huoneistotieto.fi/fi-FI/account/app/login',
    realEstate: '/kiinteistonvalitys',
    ourPropertiesForSale: '/kiinteistonvalitys/kohteet',
    requestEstimate: '/arvio-kohteestasi',
    publicDeeds: '/julkiset-kaupanvahvistukset',
    offerDeals: '/tarjouskaupat',
    rental: '#',
    rentalProperties: '#',
    rentalApplication: '#',
    rentYourHome: '#'
};

export const NAV_SECTIONS_BASE = [
    {
        key: 'propertyManagement',
        titleKey: 'nav.propertyManagement.title',
        href: SITE_LINKS.propertyManagement,
        links: [
            { labelKey: 'nav.propertyManagement.links.instructionsForResidents', href: SITE_LINKS.instructionsForResidents },
            { labelKey: 'nav.propertyManagement.links.responsibilitySplitTable', href: SITE_LINKS.responsibilitySplitTable },
            { labelKey: 'nav.propertyManagement.links.forms', href: SITE_LINKS.forms },
            { labelKey: 'nav.propertyManagement.links.requestQuote', href: SITE_LINKS.requestQuote },
            {
                labelKey: 'nav.propertyManagement.links.clientPages',
                href: SITE_LINKS.clientPages,
                target: '_blank',
                rel: 'noreferrer'
            }
        ]
    },
    {
        key: 'realEstate',
        titleKey: 'nav.realEstate.title',
        href: SITE_LINKS.realEstate,
        links: [
            { labelKey: 'nav.realEstate.links.ourPropertiesForSale', href: SITE_LINKS.ourPropertiesForSale },
            { labelKey: 'nav.realEstate.links.requestEstimate', href: SITE_LINKS.requestEstimate },
            { labelKey: 'nav.realEstate.links.publicDeeds', href: SITE_LINKS.publicDeeds },
            { labelKey: 'nav.realEstate.links.offerDeals', href: SITE_LINKS.offerDeals }
        ]
    },
    {
        key: 'rental',
        titleKey: 'nav.rental.title',
        href: SITE_LINKS.rental,
        links: [
            { labelKey: 'nav.rental.links.rentalProperties', href: SITE_LINKS.rentalProperties },
            { labelKey: 'nav.rental.links.rentalApplication', href: SITE_LINKS.rentalApplication },
            { labelKey: 'nav.rental.links.rentYourHome', href: SITE_LINKS.rentYourHome }
        ]
    }
];

export const FOOTER_SECTIONS = [
    {
        titleKey: 'footer.contact.title',
        links: [
            { labelKey: 'footer.contact.links.address', href: SITE_LINKS.address },
            { labelKey: 'footer.contact.links.phone', href: SITE_LINKS.phone },
            { labelKey: 'footer.contact.links.email', href: SITE_LINKS.email },
            { labelKey: 'footer.contact.links.privacyPolicy', href: SITE_LINKS.privacyPolicy }
        ]
    },
    {
        titleKey: 'footer.propertyManagement.title',
        links: [
            { labelKey: 'footer.propertyManagement.links.propertyManagement', href: SITE_LINKS.propertyManagement },
            { labelKey: 'footer.propertyManagement.links.instructionsForResidents', href: SITE_LINKS.instructionsForResidents },
            { labelKey: 'footer.propertyManagement.links.responsibilitySplitTable', href: SITE_LINKS.responsibilitySplitTable },
            { labelKey: 'footer.propertyManagement.links.forms', href: SITE_LINKS.forms },
            { labelKey: 'footer.propertyManagement.links.requestQuote', href: SITE_LINKS.requestQuote }
        ]
    },
    {
        titleKey: 'footer.realEstate.title',
        links: [
            { labelKey: 'footer.realEstate.links.realEstate', href: SITE_LINKS.realEstate },
            { labelKey: 'footer.realEstate.links.ourPropertiesForSale', href: SITE_LINKS.ourPropertiesForSale },
            { labelKey: 'footer.realEstate.links.requestEstimate', href: SITE_LINKS.requestEstimate },
            { labelKey: 'footer.realEstate.links.publicDeeds', href: SITE_LINKS.publicDeeds },
            { labelKey: 'footer.realEstate.links.offerDeals', href: SITE_LINKS.offerDeals }
        ]
    },
    {
        titleKey: 'footer.rental.title',
        links: [
            { labelKey: 'footer.rental.links.rental', href: SITE_LINKS.rental },
            { labelKey: 'footer.rental.links.rentalProperties', href: SITE_LINKS.rentalProperties },
            { labelKey: 'footer.rental.links.rentalApplication', href: SITE_LINKS.rentalApplication },
            { labelKey: 'footer.rental.links.rentYourHome', href: SITE_LINKS.rentYourHome }
        ]
    }
];

export { SITE_LINKS };
