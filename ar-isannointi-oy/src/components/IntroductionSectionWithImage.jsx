import { useCallback, useState } from 'react';
import ArrowButton from './ArrowButtonOrange.jsx';
import '../css/PropertyManagementInstructions.css';

function IntroductionImageWithPlaceholder({ imageSrc, imageAlt, loaded, onLoad }) {
    return (
        <div className="ratio ratio-4x3 position-relative introduction-image-ratio w-100 bg-white">
            {!loaded && (
                <div
                    className="placeholder w-100 h-100 placeholder-glow bg-secondary border-0 introduction-image-placeholder-skeleton"
                    aria-hidden
                />
            )}
            <img
                src={imageSrc}
                alt={imageAlt}
                onLoad={onLoad}
                className={`Responsibility-Image object-fit-contain d-block ${loaded ? 'opacity-100' : 'opacity-0 pe-none'}`}
                style={{ transition: 'opacity 0.30s ease-in' }}
            />
        </div>
    );
}

export default function IntroductionSectionWithImage({
    title,
    paragraphs = [],
    imageSrc,
    imageAlt,
    buttonText,
    onButtonClick,
    showBottomBorder = true,
}) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const handleImageLoad = useCallback(() => setImageLoaded(true), []);

    return (
        <div
            className={`container-fluid Instruction-Introduction-Section ${showBottomBorder ? '' : 'Instruction-Introduction-Section--no-border'}`.trim()}
        >
            <div className="row gx-0 d-flex justify-content-center py-5">
                <div className="col-11 col-xxl-9">
                    <div className="d-block d-md-none col-12 col-sm-11 pb-3 pb-md-5">
                        <IntroductionImageWithPlaceholder
                            imageSrc={imageSrc}
                            imageAlt={imageAlt}
                            loaded={imageLoaded}
                            onLoad={handleImageLoad}
                        />
                    </div>
                    <div className="row gx-0 justify-content-between align-items-center">
                        <div className="col-12 col-sm-11 col-md-6 col-lg-5 col-xl-6 col-xxl-5">
                            <h3 className="pb-3 d-none d-md-block">{title}</h3>
                            <h4 className="pb-1 d-block d-md-none">{title}</h4>
                            {paragraphs.map((text, index) => (
                                <p
                                    key={index}
                                    className={
                                        index === paragraphs.length - 1 ? 'pb-1 pb-md-3' : undefined
                                    }
                                >
                                    {text}
                                </p>
                            ))}
                            {buttonText ? (
                                <div className="pt-2">
                                    <ArrowButton
                                        label={buttonText}
                                        onClick={onButtonClick}
                                    />
                                </div>
                            ) : null}
                        </div>
                        <div className="d-none d-md-flex justify-content-end col-5">
                            <IntroductionImageWithPlaceholder
                                imageSrc={imageSrc}
                                imageAlt={imageAlt}
                                loaded={imageLoaded}
                                onLoad={handleImageLoad}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
