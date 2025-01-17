import React from "react";
import doubleLine from "@/public/images/doubleLine.png";
import Image from "next/image";
import About1Img from "@/public/images/about1.png";
import About2Img from "@/public/images/about2.png";
import * as motion from "framer-motion/client"

const Page = () => {
  // Add animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.1 , delay: 0.4 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <main>
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative flex justify-center mt-16 md:mt-32">
          <h2 className="w-full max-w-[923px] text-center px-4  text-[#222823] text-2xl md:text-4xl font-semibold font-primary capitalize">
            about
            <span className="block md:inline mx-3 text-[#a8366f] text-2xl md:text-4xl font-semibold font-primary capitalize">
              Safecare
            </span>
            Medical Industries
          </h2>
          <Image
            src={doubleLine}
            alt="doubleLine"
            aria-label="Double Line"
            className="absolute top-12 left-[45%] transform -translate-x-1/2"
          />
        </motion.div>
        <motion.div 
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-130px" }}
          className="lg:mt-28 mt-14 grid lg:grid-cols-2 grid-cols-1 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0  xl:pl-[90px] sm:px-10 xs:px-5">
          <motion.div variants={fadeInUp} className="2xl:max-w-[1440px]">
            <h2 className="text-[#222823] text-lg font-semibold font-primary capitalize leading-[27px] 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 ">
              Safecare Medical Industries was conceived and established in the
              year of 2016 by Bin Ali Group. The goal is to give a different
              dimension to the medical industries all across the Middle East.
            </h2>
            <div className="w-full relative bg-[#f6ebf1] md:py-20 py-7 md:px-10 px-5 mt-3">
              <h2 className=" text-[#6c757d] text-lg font-normal font-primary capitalize leading-[27px]">
                With a production area of 6000 square meters, we manufacture all
                of our products in a controlled environment called clean room of
                class 10000 (IS0 7) and 100000 (ISO 8). Patient-centric care is
                important for the health and quick recovery of the patient.
                Bensan and Denfiz Products are designed to break the chain of
                nosocomial infections, accelerate patient recovery and provide
                premium care for healthcare staff and patients while protecting
                sensitive healthcare equipment. The Bensan and Denfiz range of
                infection control products is designed for all kinds of patient
                ecosystems including hospitals, dentists, nursing homes, home
                care and even for domestic use. The wide range of optimized to
                serve the personal needs of patients and to ease the nursing
                effort. Bensan and Denfiz listed products are developed and
                manufactured in our state-of-the-art facility in Abu Dhabi,
                United Arab Emirates and are marketed globally through our
                subsidiary companies and a network of valued distribution
                partners.
              </h2>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className="h-full relative">
            <Image
              src={About1Img}
              alt="about 1 image"
              className="h-[100%] object-cover w-full"
            />
            <div className="lg:w-[419px] lg:h-[203px] p-6 bg-[#a8366f] rounded-xl absolute lg:left-[14%] lg:-bottom-14 bottom-0 text-center text-white text-base font-normal font-primary capitalize leading-normal">
              Headquartered in Abu Dhabi UAE, SafeCare is a domestic for profit
              corporation providing quality medical and dental infection control
              and prevention products across the globe under the Bensan and
              Denfiz brands. Safecare operates subsidiaries operations across
              the UK, USA, Germany, and China.
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true , margin: "-130px" }}
          className="relative flex justify-center mt-16 md:mt-32">
          <h2 className="w-full max-w-[923px] text-center px-4  text-[#222823] text-2xl md:text-4xl font-semibold font-primary capitalize">
            Building Safer
            <span className="block md:inline mx-3 text-[#a8366f] text-2xl md:text-4xl font-semibold font-primary capitalize">
              Healthcare
            </span>
            Environments Together
          </h2>
          <Image
            src={doubleLine}
            alt="doubleLine"
            aria-label="Double Line"
            className="absolute top-12 left-[37%] transform -translate-x-1/2"
          />
        </motion.div>
        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="lg:mt-28 mt-14 grid lg:grid-cols-3 grid-cols-1 gap-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0  xl:px-[90px] sm:px-10 xs:px-5 pb-40">
          <motion.div variants={fadeInUp}>
            <h2 className="text-[#222823] text-2xl font-semibold font-primary capitalize leading-9">
              <span className="text-[#a8366f] text-4xl font-semibold font-primary capitalize leading-[54px] mr-2 mt-10">
                Our mission
              </span>
              is to transform our company into an admired, customer-friendly,
              and innovative medical solutions provider.
            </h2>
          </motion.div>
          <motion.div variants={fadeInUp} className="relative">
            <Image
              src={About2Img}
              alt="about 2 image"
              className=" object-cover w-full"
            />
            <div className="w-[280px] h-[280px] bg-[#f6ebf1] rounded-full absolute -bottom-20 -z-10 -left-32 hidden lg:block" />
            <div className="w-[280px] h-[280px] bg-[#f6ebf1] rounded-full absolute -top-20 -z-10 -right-40 hidden lg:block" />
          </motion.div>
          <motion.div variants={fadeInUp} className="place-self-end mb-10 ml-4">
          <h2 className="text-[#222823] text-2xl font-semibold font-primary capitalize leading-9">
              <span className="text-[#a8366f] text-4xl font-semibold font-primary capitalize leading-[54px] mr-2">
              Safecare
              </span>
              Medical Industries exists to improve the quality of human life by providing affordable, reliable, and innovative products.
            </h2>
          </motion.div>
        </motion.div>
      </main>
    </>
  );
};

export default Page;
