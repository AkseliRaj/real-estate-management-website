import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import BackArrowIcon from '../assets/svg/rightArrowIconDark.svg';

const RentalImageCarousel = ({ images }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [slideCount, setSlideCount] = useState(0);

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
        <div className="Rental-Embla">
            <div className="Rental-Embla__viewport" ref={emblaRef}>
                <div className="Rental-Embla__container">
                    {images.map((image, index) => (
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
                    {slideCount > 0 ? `${selectedIndex + 1} / ${slideCount}` : `1 / ${images.length}`}
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
    );
};

export default RentalImageCarousel;
