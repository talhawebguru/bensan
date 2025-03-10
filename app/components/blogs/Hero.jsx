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
        Insights & Innovations in Infection Control
      </motion.h1>
      <motion.p
        className="text-[#111111] text-base font-normal font-primary leading-normal mt-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Stay informed with the latest trends, research, and advancements in infection control. Explore expert insights, industry updates, and innovative solutions designed to create a safer, healthier future for modern healthcare.
      </motion.p>
    </div>
  );
};

export default Hero;