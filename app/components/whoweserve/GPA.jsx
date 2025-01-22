import React from "react";
import * as motion from "framer-motion/client";
import gpaImg from "@/public/images/gpaImg.png";
import Image from "next/image";

const GPA = () => {
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
        className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-12 md:mt-28 mt-10 xl:px-[90px] sm:px-10 xs:px-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true , amount: 0.5 }}
      >
        <motion.div className="flex flex-col gap-10" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true , amount: 0.5 }}>
          <h2 className="text-[#222823] border-l-4 border-secondary-primary pl-2 text-4xl font-semibold font-primary capitalize">
          General Patient Areas
          </h2>
          <p className="sm:w-[541px] text-[#222823] text-lg font-normal font-primary leading-[27px]">
          General patient areas are key points for nosocomial infection transmission. Bensan surface disinfectant provides a multi-tiered approach to break the transmission chain, addressing risks at their source, including floors, infrastructure, and medical instruments.
          </p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Image 
            src={gpaImg} 
            alt="General Patient Areas" 
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true , amount: 0.5 }}
          />
        </motion.div>
      </motion.div>
    </>
  )
}

export default GPA