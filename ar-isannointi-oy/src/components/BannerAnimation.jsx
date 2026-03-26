import React from "react";
import LottieImport from "lottie-react";
import BannerAnimationData from '../assets/animations/BannerAnimation.json';

const Lottie = LottieImport?.default ?? LottieImport;

export default function BannerAnimation({ animationData = BannerAnimationData }) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Lottie
        animationData={animationData}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}