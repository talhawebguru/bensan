import React from "react";
import Image from "next/image";
import HeroImg from "@/public/images/HeroImg.png";
import Link from "next/link";
import * as motion from "framer-motion/client"

const Hero = () => {
  return (
    <>
      <div className="bg-primary overflow-x-hidden">
        <section className="2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 xl:pl-[90px] sm:pl-10 xs:pl-5 pt-0 bg-primary">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-light-black text-4xl font-semibold font-primary capitalize leading-10 xl:mt-32 lg:mt-16 mt-6 lg:w-[55%] w-[90%]">
                Revolutionizing Infection Control for a Safer Tomorrow
              </h1>
              <p className="text-light-black text-base font-normal font-primary capitalize leading-normal mt-5 lg:w-[70%] w-[90%]">
                Providing Trusted, High-Performance Products to Meet the Demands
                of Modern Healthcare.
              </p>
              <Link href={"/about"}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-[133px] h-[42px] mt-9 mb-5 bg-secondary-primary rounded justify-center items-center flex text-white text-base font-semibold font-primary capitalize"
                >
                  Learn more
                </motion.button>
              </Link>
            </motion.div>
            <motion.div
              className="flex justify-end w-full h-full"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={HeroImg}
                alt="Hero Image"
                className="w-full h-full"
                priority
              />
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
