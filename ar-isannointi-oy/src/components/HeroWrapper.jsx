import React from 'react';
import BannerAnimation from './BannerAnimation.jsx';
import ArrowButton from './ArrowButtonOrange.jsx';

function HeroWrapper({
  headerText,
  buttonText,
  onButtonClick,
}) {
  return (
    <div className="hero-wrapper">
      <div className="hero-bg">
        <BannerAnimation />
      </div>
      <div className="col-8 hero-content text-white">
        <h1 className='hero-content-header pb-3'>{headerText}</h1>
        <ArrowButton
          label={buttonText}
          onClick={onButtonClick}
          variant="white"
          showArrow={true}
        />
      </div>
    </div>
  );
}

export default HeroWrapper;
