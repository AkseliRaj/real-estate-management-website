import '../../css/PropertyPage.css';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import PropertyStatsRow from "../../components/PropertyStatsRow";
import ArrowButton from '../../components/ArrowButtonOrange';
import BackArrowIcon from '../../assets/svg/rightArrowIconDark.svg'
import { navigateToRoute } from '../../utils/navigation.js';

const Page = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleBackLinkClick = () => navigateToRoute(navigate, '/vuokraus/kohteet');

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

            <div className="row g-0 d-flex justify-content-center py-5">
                <div className="col-11 py-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-lg-5 Image-Carousel-Section">
                            
                        </div>
                        <div className="col-12 col-lg-6 text-center text-lg-start Header-Content-Section">
                            <div className="col-12 pb-2 pb-sm-3">
                                <h3 className="mb-1 d-none d-md-inline-block Property-Address">Keskuskatu 62 A 5</h3>
                                <h4 className="mb-1 d-block d-md-none Property-Address">Keskuskatu 62 A 5</h4>
                            </div>
                            <div className="col-auto">
                                <h5 className="m-0 d-none d-md-inline-block Price-Stat">440,00 € / kk</h5>
                                <h6 className="m-0 d-inline-block d-md-none Price-Stat">440,00 € / kk</h6>
                            </div>
                            <PropertyStatsRow />
                            <div className='col-12'>
                                <ArrowButton label={t('RentalPropertyPage.CTA-Button')} variant="orange" showArrow={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Page;