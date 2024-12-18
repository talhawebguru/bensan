import React from "react";
import Marquee from "react-fast-marquee";


const MarqueeSlider = () => {
  return (
    <Marquee
      autoFill
      className="bg-secondary-primary flex items-center py-[5px] text-white text-xl font-normal font-primary leading-[30px] "
    >
      <div className="w-[7px] h-[7px] bg-white rounded-full mr-6 ml-6" />
      <p>Get 20% off on www.Jurhy.com</p>
    </Marquee>
  );
};

export default MarqueeSlider;
