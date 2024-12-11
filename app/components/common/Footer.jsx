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

const Footer = () => {
  return (
    <footer className="bg-secondary xl:px-[90px] sm:px-10 xs:px-5 sm:pt-12 xs:pt-10">
      <div className="2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0">
        <div className="grid md:grid-cols-12 grid-cols-1 xs:gap-12 sm:gap-14">
          <div className="xl:col-span-5 md:col-span-6  flex flex-col gap-6">
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
          </div>
          <div className="xl:col-span-2 md:col-span-6 flex flex-col gap-4">
            <h2 className="text-[#222823] text-lg font-semibold font-primary capitalize">
              Quick Links
            </h2>
            <ul className="inline-flex flex-col gap-[18px]">
              <li className="text-grey text-base font-normal font-primary">
                Home
              </li>
              <li className="text-grey text-base font-normal font-primary">
                About
              </li>
              <li className="text-grey text-base font-normal font-primary">
                Product
              </li>
              <li className="text-grey text-base font-normal font-primary">
                Resource Center
              </li>
            </ul>
          </div>
          <div className="xl:col-span-2 md:col-span-6  flex flex-col gap-4">
            <h2 className="text-[#222823] text-lg font-semibold font-primary capitalize">
              Support
            </h2>
            <ul className="flex flex-col gap-[18px]">
              <li className="text-grey text-base font-normal font-primary">
                FAQ
              </li>
              <li className="text-grey text-base font-normal font-primary">
                Privacy policy
              </li>
              <li className="text-grey text-base font-normal font-primary">
                Help & support
              </li>
              <li className="text-grey text-base font-normal font-primary">
                Cookie policy
              </li>
            </ul>
          </div>
          <div className="xl:col-span-3 md:col-span-6  flex flex-col gap-4">
            <h2 className="text-[#222823] text-lg font-semibold font-primary capitalize">
              Contact Info
            </h2>
            <div className="flex flex-col gap-[18px]">
              <ContactInfo
                icon={<FaLocationDot />}
                info="Safecare Medical Industries KHIA-8-18 Abu Dhabi UAE"
                className={"text-grey"}
              />
              <ContactInfo icon={<IoCall />} info="+97125067333 " className={"text-grey"}
              />
              <ContactInfo icon={<IoMailSharp />} info="info@bensano.com " className={"text-grey"}
 />
            </div>
          </div>
        </div>
        <div>
          <p className="text-grey text-sm font-normal font-primary text-center py-4 mt-16 border-t border-hr-line">
            Copyright ©2023 Bensan | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
