import { useCallback, useState } from 'react';

export default function HeroImageBanner({ title, imageSrc, imageAlt }) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const handleImageLoad = useCallback(() => setImageLoaded(true), []);

    return (
        <div className='row'>
            <div className='col-12 p-0'>
                <div className='Banner-Section bg-white'>
                    {!imageLoaded && (
                        <div
                            className='placeholder w-100 h-100 placeholder-glow bg-secondary border-0 Banner-Image-Placeholder'
                            aria-hidden
                        />
                    )}
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className={`Banner-Image ${imageLoaded ? 'opacity-100' : 'opacity-0 pe-none'}`}
                        style={{ transition: 'opacity 0.30s ease-in' }}
                        onLoad={handleImageLoad}
                    />
                    <div className='Banner-Mask' />
                    <div className='Banner-Content'>
                        <h1 className='hero-banner-header d-none d-md-block m-0'>{title}</h1>
                        <h3 className='hero-banner-header d-none d-sm-block d-md-none m-0'>{title}</h3>
                        <h4 className='hero-banner-header d-block d-sm-none m-0'>{title}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
