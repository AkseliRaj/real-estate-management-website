import React, { useEffect, useState } from 'react';
import BannerAnimation from './BannerAnimation.jsx';
import ArrowButton from './ArrowButtonOrange.jsx';
import BannerAnimationSmall from '../assets/animations/BannerAnimationSmall.json';
import '../css/HeroWrapper.css';

function HeroWrapper({
  headerText,
  buttonText,
  onButtonClick,
}) {
  const [isSmallViewport, setIsSmallViewport] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1145px)');

    const updateViewportState = () => {
      setIsSmallViewport(mediaQuery.matches);
    };

    updateViewportState();
    mediaQuery.addEventListener('change', updateViewportState);

    return () => {
      mediaQuery.removeEventListener('change', updateViewportState);
    };
  }, []);

  return (
    <div className="hero-wrapper">
      <div className="hero-bg">
        <BannerAnimation
          animationData={isSmallViewport ? BannerAnimationSmall : undefined}
        />
      </div>
      <div className="col-12 hero-content text-white">
        <div className="col-12 col-sm-10 hero-content-inner">
          <h1 className='hero-content-header d-none d-md-block pb-2 pb-md-4'>{headerText}</h1>
          <h4 className='hero-content-header d-block d-md-none pb-2 pb-md-4'>{headerText}</h4>
          <ArrowButton
            label={buttonText}
            onClick={onButtonClick}
            variant="white"
            showArrow={true}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroWrapper;
