import React from "react";
import Image from "next/image";
import dental from "@/public/images/dental.png";
import * as motion from "framer-motion/client";

const Dental = () => {
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

  return (
    <>
      <motion.div 
        className="xl:px-[90px] sm:px-10 xs:px-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 md:mt-40 mt-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <Image
          src={dental}
          alt="dental"
          className="w-full rounded-lg shadow-md h-[300px] sm:h-auto"
        />
      </motion.div>
      <motion.div 
        className="flex flex-col gap-10 mx-5 xl:px-[90px] sm:px-10 xs:px-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-10 sm:-mt-44 mt-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h1 
          variants={itemVariants}
          className="text-[#222823] text-[32px] font-semibold font-primary leading-[48px] border-l-8 border-secondary-primary pl-2"
        >
          Dental
        </motion.h1>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-10"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex flex-col gap-7 px-8 py-11 sm:h-[240px]  bg-white shadow-lg transition-all duration-700 hover:bg-[#A8366F] group border border-[#e9ecef] rounded-xl hover:scale-105">
            <p className="text-[#222823] transition-colors duration-700 group-hover:text-white text-lg font-normal font-primary leading-[27px]">
              Dental processing chemicals ensure hygiene and safety by cleaning,
              disinfecting, and sterilizing instruments and surfaces to prevent
              cross-contamination and infection.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col gap-7 px-8 py-11 sm:h-[240px]  bg-white shadow-lg transition-all duration-700 hover:bg-[#A8366F] group border border-[#e9ecef] rounded-xl hover:scale-105">
            <p className="text-[#222823] transition-colors duration-700 group-hover:text-white text-lg font-normal font-primary leading-[27px]">
            Our Dental Processing Chemicals effectively remove contaminants without damaging instruments. They include cleaning solutions, disinfectants, and sterilants for specific microorganisms.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col gap-7 px-8 py-11 sm:h-[240px]  bg-white shadow-lg transition-all duration-700 hover:bg-[#A8366F] group border border-[#e9ecef] rounded-xl hover:scale-105">
            <p className="text-[#222823] transition-colors duration-700 group-hover:text-white text-lg font-normal font-primary leading-[27px]">
            Our cleaning solutions remove debris and stains from dental instruments, available in liquid and powder form, and compatible with most models.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col gap-7 px-8 py-11 sm:h-[240px]  bg-white shadow-lg transition-all duration-700 hover:bg-[#A8366F] group border border-[#e9ecef] rounded-xl hover:scale-105">
            <p className="text-[#222823] transition-colors duration-700 group-hover:text-white text-lg font-normal font-primary leading-[27px]">
            Our disinfectants kill bacteria, viruses, and fungi, available in liquid and pre-moistened forms, and compatible with most dental instruments.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col gap-7 px-8 py-11 sm:h-[240px]  bg-white shadow-lg transition-all duration-700 hover:bg-[#A8366F] group border border-[#e9ecef] rounded-xl hover:scale-105">
            <p className="text-[#222823] transition-colors duration-700 group-hover:text-white text-lg font-normal font-primary leading-[27px]">
            Our sterilants eliminate all microorganisms, including spores, and are available in liquid form, compatible with most dental instruments.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col gap-7 px-8 py-11 sm:h-[240px] bg-white shadow-lg transition-all duration-700 hover:bg-[#A8366F] group border border-[#e9ecef] rounded-xl hover:scale-105">
            <p className="text-[#222823] transition-colors duration-700 group-hover:text-white text-lg font-normal font-primary leading-[27px]">
            We offer ultrasonic cleaners, lubricants, and rust inhibitors to help maintain and extend the life of your dental instruments.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Dental;
