import '../../css/PropertyPage.css';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import PropertyStatsRow from "../../components/PropertyStatsRow.jsx";
import ArrowButton from '../../components/ArrowButtonOrange.jsx';
import IntroductionSectionWithImage from '../../components/IntroductionSectionWithImage.jsx';
import BackArrowIcon from '../../assets/svg/rightArrowIconDark.svg'
import PublicDeedImage from '../../assets/webp/PublicDeedImage.webp';
import RealEstateDropdownImage from '../../assets/webp/RealEstateDropdownImage.webp';
import RealEstatePropertyImage from '../../assets/webp/RealEstatePropertyImage.webp';
import HouseForestImage from '../../assets/webp/HouseForestImage.webp';
import { navigateToRoute } from '../../utils/navigation.js';
import RentalImageCarousel from '../../components/RentalImageCarousel.jsx';
import GoogleMapsEmbed from '../../components/GoogleMapsEmbed.jsx';
import RentalPropertiesCarouselSection from '../../components/RentalPropertiesCarouselSection.jsx';

const RealEstatePropertyPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const carouselImages = [
        PublicDeedImage,
        RealEstateDropdownImage,
        RealEstatePropertyImage,
    ];
    const temporaryProperties = Array.from({ length: 3 }, () => ({
        address: 'Keskuskatu 56 A 4',
        city: 'Kankaanpää',
        specifications: '2H+K+KPH',
        squares: '30 m2',
        price: '40 000 €',
    }));

    const handleBackLinkClick = () => navigateToRoute(navigate, '/kiinteistonvalitys/kohteet');
    const handleContactPageCtaClick = () => navigateToRoute(navigate, '/yhteystiedot');


    return (
        <div className="container-fluid px-0">

            <div className='row g-0 d-flex justify-content-center pt-5'>
                <div
                    className='col-11 d-flex justify-content-start align-items-center gap-3'
                    onClick={handleBackLinkClick}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                            handleBackLinkClick();
                        }
                    }}
                >
                    <img
                        src={BackArrowIcon}
                        alt={t('propertyLanding.images.introductionAlt')}
                        className="Back-Arrow-Icon d-block"
                    />
                    <p className='Back-Link m-0'>{t('RentalPropertyPage.Return-Link')}</p>
                </div>
            </div>

            <div className="row g-0 d-flex justify-content-center py-3 py-lg-5 Header-Section">
                <div className="col-11 py-5">
                    <div className="row d-flex justify-content-around">
                        <div className="col-12 col-lg-5 pb-5 Image-Carousel-Section">
                            <RentalImageCarousel images={carouselImages} />
                        </div>
                        <div className="col-12 col-lg-6 col-xxl-5 text-center text-lg-start Header-Content-Section">
                            <div className="col-12 pb-2 pb-sm-3">
                                <h3 className="mb-1 d-none d-md-inline-block Property-Address">Keskuskatu 62 A 5</h3>
                                <h4 className="mb-1 d-block d-md-none Property-Address">Keskuskatu 62 A 5</h4>
                            </div>
                            <div className="col-auto">
                                <h5 className="m-0 d-none d-md-inline-block Price-Stat">40 000 €</h5>
                                <h6 className="m-0 d-inline-block d-md-none Price-Stat">40 000 €</h6>
                            </div>
                            <PropertyStatsRow />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row g-0 d-flex justify-content-center py-3 py-lg-5 More-Information-Section">
                <div className="col-11 pt-5">
                    <div className="row d-flex justify-content-between">
                        <div className='col-12 col-lg-6 col-xxl-5 pb-4 pb-sm-5 pb-lg-0'>
                            <h3 className="pb-3 d-none d-md-inline-block Property-Address">{t('RentalPropertyPage.Section-Titles.Property-Description')}</h3>
                            <h4 className="pb-1 d-block d-md-none Property-Address">{t('RentalPropertyPage.Section-Titles.Property-Description')}</h4>
                            <p>Tämä kaunis ja hyvin pidetty asunto tarjoaa käytännöllisen pohjaratkaisun sekä runsaasti luonnonvaloa suurista ikkunoista. Keittiö on moderni ja varusteltu kaikilla tarvittavilla kodinkoneilla, ja olohuoneesta on käynti omalle parvekkeelle, josta avautuu vehreä näkymä pihapiiriin. Makuuhuoneessa on reilusti säilytystilaa kaapistoissa, ja kylpyhuoneessa on paikka pesukoneelle.
                                Asunto sijaitsee rauhallisella ja arvostetulla alueella, josta on hyvät kulkuyhteydet keskustaan sekä läheisiin palveluihin. Lähikauppa, ulkoilumaastot ja bussipysäkki löytyvät kävelyetäisyydeltä.
                            </p>
                        </div>
                        <div className='col-12 col-lg-5'>
                            <div>
                                <h3 className="pb-3 d-none d-md-inline-block Property-Address">{t('RentalPropertyPage.Section-Titles.Location-On-Map')}</h3>
                                <h4 className="pb-1 d-block d-md-none Property-Address">{t('RentalPropertyPage.Section-Titles.Location-On-Map')}</h4>
                            </div>
                            <GoogleMapsEmbed />
                        </div>
                        <div className="col-12 pt-5 text-center text-lg-start">
                            <div>
                                <h3 className="m-0 d-none d-md-inline-block Property-Address">{t('RentalPropertyPage.Section-Titles.Additional-Information')}</h3>
                                <h4 className="m-0 d-block d-md-none Property-Address">{t('RentalPropertyPage.Section-Titles.Additional-Information')}</h4>
                            </div>
                            <div className="row d-flex justify-content-around">
                                <PropertyStatsRow />
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <IntroductionSectionWithImage
                title={t('RealEstatePropertyPage.CTA-Section.title')}
                paragraphs={[
                    t('RealEstatePropertyPage.CTA-Section.paragraph'),
                ]}
                imageSrc={HouseForestImage}
                imageAlt={t('Real-Estate-Landing.About-Us-Section.title')}
                buttonText={t('RealEstatePropertyPage.CTA-Section.CTA-Button')}
                onButtonClick={handleContactPageCtaClick}
                showBottomBorder={true}
            />

            <div className='py-5'>
                <RentalPropertiesCarouselSection properties={temporaryProperties} variant='realEstate' />
            </div>
        </div>
    );
};

export default RealEstatePropertyPage;