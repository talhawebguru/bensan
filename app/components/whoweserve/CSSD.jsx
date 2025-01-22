import React from "react";
import * as motion from "framer-motion/client";
import cssd1 from "@/public/images/cssd1.png";
import Image from "next/image";

const CSSD = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <motion.div 
        className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-12 mt-10 xl:px-[90px] sm:px-10 xs:px-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true , amount: 0.2 }}
      >
        <motion.div variants={itemVariants}>
          <Image 
            src={cssd1} 
            alt="CSSD" 
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true , amount: 0.2 }}
          />
        </motion.div>
        <motion.div className="flex flex-col gap-10" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true , amount: 0.5 }}>
          <h2 className="text-[#222823] text-4xl font-semibold font-primary capitalize sm:w-[80%]">
            Central Sterile Supply Department (CSSD)
          </h2>
          <p className="sm:w-[541px] text-[#222823] text-lg font-normal font-primary leading-[27px]">
            The Central Sterile Supply Department (CSSD) ensures safe cleaning, reprocessing, storage, and distribution of sterile and non-sterile instruments to prevent cross-infections and optimize patient safety. Using quality chemical cleaners, CSSD enhances equipment integrity, instrument longevity, and safe handling. We provide reliable consumables to meet all your sterile processing needs.
          </p>
        </motion.div>
      </motion.div>

      <motion.div 
        className="flex flex-wrap justify-center items-center gap-10 mt-20 xl:px-[90px] sm:px-10 xs:px-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true , amount: 0.2 }}
      >
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true , amount: 0.2 }}
          className="flex flex-col gap-7 px-8 py-11 sm:h-[260px] w-[380px] bg-white shadow-lg transition-all duration-700 hover:bg-[#A8366F] group border border-[#e9ecef] rounded-xl hover:scale-105"
        >
          <h2 className="text-[#222823] transition-colors duration-700 group-hover:text-white text-[22px] font-semibold font-primary capitalize leading-[33px]">
            Sterilization Wrap :
          </h2>
          <p className="text-[#222823] transition-colors duration-700 group-hover:text-white text-lg font-normal font-primary leading-[27px]">
            Our sterilization wrap offers durable, high-quality protection and comes in various sizes and thicknesses to meet your needs.
          </p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true , amount: 0.2 }}
          className="flex flex-col gap-7 px-8 py-11 sm:h-[260px] w-[380px] bg-white shadow-lg transition-all duration-700 hover:bg-[#A8366F] group border border-[#e9ecef] rounded-xl hover:scale-105"
        >
          <h2 className="text-[#222823] transition-colors duration-700 group-hover:text-white text-[22px] font-semibold font-primary capitalize leading-[33px]">
            Sterilization Pouches:
          </h2>
          <p className="text-[#222823] transition-colors duration-700 group-hover:text-white text-lg font-normal font-primary leading-[27px]">
            Our sterilization pouches are durable, securely sealed, and available in various sizes.
          </p>
        </motion.div>
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true , amount: 0.2 }}
          className="flex flex-col gap-7 px-8 py-11 sm:h-[260px] w-[380px] bg-white shadow-lg transition-all duration-700 hover:bg-[#A8366F] group border border-[#e9ecef] rounded-xl hover:scale-105"
        >
          <h2 className="text-[#222823] transition-colors duration-700 group-hover:text-white text-[22px] font-semibold font-primary capitalize leading-[33px]">
          Sterilization Indicators : 
          </h2>
          <p className="text-[#222823] transition-colors duration-700 group-hover:text-white text-lg font-normal font-primary leading-[27px]">
          Our sterilization indicators are accurate, easy to use, and available in paper, chemical, and biological formats.
          </p>
        </motion.div>
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true , amount: 0.2 }}
          className="flex flex-col gap-7 px-8 py-11 sm:h-[260px] w-[380px] bg-white shadow-lg transition-all duration-700 hover:bg-[#A8366F] group border border-[#e9ecef] rounded-xl hover:scale-105"
        >
          <h2 className="text-[#222823] transition-colors duration-700 group-hover:text-white text-[22px] font-semibold font-primary capitalize leading-[33px]">
          Reprocessing Products : 
          </h2>
          <p className="text-[#222823] transition-colors duration-700 group-hover:text-white text-lg font-normal font-primary leading-[27px]">
          Our reprocessing products, including detergents, disinfectants, and lubricants, ensure quick and effective cleaning.
          </p>
        </motion.div>
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true , amount: 0.2 }}
          className="flex flex-col gap-7 px-8 py-11 sm:h-[260px] w-[380px] bg-white shadow-lg transition-all duration-700 hover:bg-[#A8366F] group border border-[#e9ecef] rounded-xl hover:scale-105"
        >
          <h2 className="text-[#222823] transition-colors duration-700 group-hover:text-white text-[22px] font-semibold font-primary capitalize leading-[33px]">
          Packaging and Labeling : 
          </h2>
          <p className="text-[#222823] transition-colors duration-700 group-hover:text-white text-lg font-normal font-primary leading-[27px]">
          We offer packaging and labeling products, including labels, tape, and bags, to keep your instruments organized.
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default CSSD;
