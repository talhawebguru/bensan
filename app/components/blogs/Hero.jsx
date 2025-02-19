import React from 'react';
import * as motion from "framer-motion/client";

const Hero = () => {
  return (
    <div className="xl:px-[90px] sm:px-10 xs:px-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 mt-2">
      <motion.h2
        className="text-[#a8366f] text-xl font-normal font-primary leading-[30px]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Latest Blogs
      </motion.h2>
      <motion.h1
        className="text-[#001331] sm:text-5xl text-3xl font-semibold font-primary leading-[52.80px] mt-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Discover Nice Articles Here
      </motion.h1>
      <motion.p
        className="text-[#111111] text-base font-normal font-primary leading-normal mt-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module.
      </motion.p>
    </div>
  );
};

export default Hero;