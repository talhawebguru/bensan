import React from "react";
import Image from "next/image";
import Logo from "@/public/images/Logo.svg";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { IoCall, IoMailSharp } from "react-icons/io5";
import SocialMedia from "./SocialMedia";
import ContactInfo from "./ContactInfo";
import Link from "next/link";
import * as motion from "framer-motion/client"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Add animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeInOut" },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <footer className="bg-secondary mt-20 xl:px-[90px] sm:px-10 xs:px-5 sm:pt-12 xs:pt-10">
      <div className="2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0">
        <motion.div 
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true , margin: "-100px" }}
          className="grid md:grid-cols-12 grid-cols-1 xs:gap-12 sm:gap-14"
        >
          <motion.div 
            variants={fadeInUp}
            className="xl:col-span-5 md:col-span-6  flex flex-col gap-6">
            <Image
              src={Logo}
              alt="Bensan Logo"
              aria-label="Bensan Logo"
              priority
            />
            <p className="text-light-black text-lg font-semibold font-primary w-auto">
              Get all the latest information on your email
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <input
                type="email"
                className="w-[281px] h-12 px-4 py-3.5 rounded-xl border border-border-color/25 text-light-black text-sm font-normal font-primary leading-tight"
                placeholder="Enter Your Email"
                aria-label="Enter Your Email"
              />
              <button
                className="w-[106px] h-12 bg-secondary-primary rounded-xl inline-flex items-center justify-center text-white text-base font-semibold font-primary leading-tight"
                aria-label="Subscribe"
              >
                Subscribe
              </button>
            </div>
            <div className="flex gap-2.5">
              <SocialMedia icon={<AiFillInstagram size={24} />} />
              <SocialMedia icon={<IoLogoFacebook size={24} />} />
              <SocialMedia icon={<FaTwitter size={24} />} />
              <SocialMedia icon={<FaLinkedin size={24} />} />
            </div>
          </motion.div>
          <motion.div 
            variants={fadeInUp}
            className="xl:col-span-2 md:col-span-6 flex flex-col gap-4">
            <h2 className="text-[#222823] text-lg font-semibold font-primary capitalize">
              Quick Links
            </h2>
            <ul className="inline-flex flex-col gap-[18px]">
              <li className="text-grey text-base font-normal font-primary">
                <Link href="/">
                Home
                </Link>
              </li>
              <li className="text-grey text-base font-normal font-primary">
                <Link href="/about">
                About
                </Link>
              </li>
              <li className="text-grey text-base font-normal font-primary">
                <Link href="/product">
                Product
                </Link>
              </li>
              <li className="text-grey text-base font-normal font-primary">
                <Link href="/resource-center">
                 Resource Center
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div 
            variants={fadeInUp}
            className="xl:col-span-2 md:col-span-6  flex flex-col gap-4">
            <h2 className="text-[#222823] text-lg font-semibold font-primary capitalize">
              Support
            </h2>
            <ul className="flex flex-col gap-[18px]">
           
              <li className="text-grey text-base font-normal font-primary">
               <Link href="/privacy-policy">
               Privacy policy
               </Link>
              </li>
             
              <li className="text-grey text-base font-normal font-primary">
                <Link href="/cookie-policy">
                Cookie policy
                </Link>
              </li>
              <li className="text-grey text-base font-normal font-primary">
                <Link href="/contact">
                Contact
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div 
            variants={fadeInUp}
             className="xl:col-span-3 md:col-span-6  flex flex-col gap-4">
            <h2 className="text-[#222823] text-lg font-semibold font-primary capitalize">
              Contact Info
            </h2>
            <div className="flex flex-col gap-[18px]">
              <ContactInfo
                icon={<FaLocationDot />}
                info="Safecare Medical Industries KHIA-8-18 Abu Dhabi UAE"
                className={"text-grey"}
              />
              <ContactInfo
                icon={<IoCall />}
                info="+97125067333 "
                className={"text-grey"}
              />
              <ContactInfo
                icon={<IoMailSharp />}
                info="info@bensano.com "
                className={"text-grey"}
              />
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 , duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: true }}
          >
          <p className="text-grey text-sm font-normal font-primary text-center py-4 mt-16 border-t border-hr-line">
            Copyright ©{currentYear} Bensan | All rights reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
