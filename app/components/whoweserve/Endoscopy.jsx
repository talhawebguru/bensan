import React from "react";
import * as motion from "framer-motion/client";
import endoscopyImg from "@/public/images/endoscopyImg.png";
import Image from "next/image";
const Endoscopy = () => {
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
        <motion.div variants={itemVariants}>
          <Image 
            src={endoscopyImg} 
            alt="Endoscopy" 
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true , amount: 0.5 }}
          />
        </motion.div>
        <motion.div className="flex flex-col gap-10" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true , amount: 0.5 }}>
          <h2 className="text-[#222823] border-l-4 border-secondary-primary pl-2 text-4xl font-semibold font-primary capitalize">
          Endoscopy / Gastroenterology
          </h2>
          <p className="sm:w-[541px] text-[#222823] text-lg font-normal font-primary leading-[27px]">
          Endoscopy processing ensures safety and effectiveness by cleaning, disinfecting, and sterilizing endoscopes. Our consumables, including specialized cleaning solutions in liquid and pre-moistened forms, help maintain hygiene without damaging delicate instruments. We are committed to high-quality products and excellent customer service for smooth endoscopy procedures. Contact us for more information or to place an order.          </p>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Endoscopy