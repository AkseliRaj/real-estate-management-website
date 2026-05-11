import '../../css/PropertyPage.css';
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import PropertyStatsRow from "../../components/PropertyStatsRow";
import ArrowButton from '../../components/ArrowButtonOrange';
import BackArrowIcon from '../../assets/svg/rightArrowIconDark.svg'
import PublicDeedImage from '../../assets/webp/PublicDeedImage.webp';
import RealEstateDropdownImage from '../../assets/webp/RealEstateDropdownImage.webp';
import RealEstatePropertyImage from '../../assets/webp/RealEstatePropertyImage.webp';
import { navigateToRoute } from '../../utils/navigation.js';

const Page = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [slideCount, setSlideCount] = useState(0);

    const carouselImages = [
        PublicDeedImage,
        RealEstateDropdownImage,
        RealEstatePropertyImage,
    ];

    const handleBackLinkClick = () => navigateToRoute(navigate, '/vuokraus/kohteet');
    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) {
            return;
        }

        setSelectedIndex(emblaApi.selectedScrollSnap());
        setSlideCount(emblaApi.scrollSnapList().length);
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) {
            return;
        }

        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);

        return () => {
            emblaApi.off('select', onSelect);
            emblaApi.off('reInit', onSelect);
        };
    }, [emblaApi, onSelect]);

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
                    <div className="row d-flex justify-content-around">
                        <div className="col-12 col-lg-5 pb-5 Image-Carousel-Section">
                            <div className="Rental-Embla">
                                <div className="Rental-Embla__viewport" ref={emblaRef}>
                                    <div className="Rental-Embla__container">
                                        {carouselImages.map((image, index) => (
                                            <div className="Rental-Embla__slide" key={image}>
                                                <div className="Rental-Embla__slide-inner">
                                                    <img
                                                        src={image}
                                                        alt={`Property image ${index + 1}`}
                                                        className="Rental-Embla__slide-image"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="Rental-Embla__controls">
                                    <button
                                        type="button"
                                        className="Rental-Embla__arrow"
                                        onClick={scrollPrev}
                                        aria-label="Previous image"
                                        disabled={selectedIndex === 0}
                                    >
                                        <img
                                            src={BackArrowIcon}
                                            alt=""
                                            aria-hidden="true"
                                            className="Rental-Embla__arrow-icon Rental-Embla__arrow-icon--prev"
                                        />
                                    </button>
                                    <span className="Rental-Embla__counter">
                                        {slideCount > 0 ? `${selectedIndex + 1} / ${slideCount}` : `1 / ${carouselImages.length}`}
                                    </span>
                                    <button
                                        type="button"
                                        className="Rental-Embla__arrow"
                                        onClick={scrollNext}
                                        aria-label="Next image"
                                        disabled={selectedIndex === Math.max(slideCount - 1, 0)}
                                    >
                                        <img
                                            src={BackArrowIcon}
                                            alt=""
                                            aria-hidden="true"
                                            className="Rental-Embla__arrow-icon"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-xxl-5 text-center text-lg-start Header-Content-Section">
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