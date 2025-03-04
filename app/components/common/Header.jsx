"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/images/Logo.svg";
import InfoAction from "./InfoAction";
import { IoCallOutline, IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import MarqueeSlider from "./MarqueeSlider";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    toggleMenu();
  };

  return (
    <>
      {/* Marquee */}
      <MarqueeSlider />
      {/* Navbar start Here */}

      <header className="xl:px-[90px] sm:px-10 xs:px-5 xl:pt-[19px] lg:pt-2.5 bg-white">
        <div className="2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0">
          <div className="lg:flex hidden items-center justify-start">
            <div className="flex items-center gap-5">
              <InfoAction
                icon={<IoCallOutline />}
                trigger="tel:+97125067333"
                action="Call : "
                message=" +97125067333"
              />
              <InfoAction
                icon={<MdOutlineEmail />}
                trigger="mailto:info@bensano.com"
                action=""
                message="info@bensano.com"
              />
            </div>
          </div>
          <hr className="mt-5 mb-1 border border-black/10 hidden lg:block" />
          <nav className="flex justify-between items-center bg-white rounded-xl">
            <ul className="lg:flex items-center gap-11 hidden">
              <li>
                <Link
                  href="/about"
                  aria-label="About"
                  className="text-nav-color text-[13px] font-semibold font-primary capitalize"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/product"
                  aria-label="Product"
                  className="text-nav-color text-[13px] font-semibold font-primary capitalize"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/who-we-serve"
                  aria-label="who we serve"
                  className="text-nav-color text-[13px] font-semibold font-primary capitalize"
                >
                  Who We Serve
                </Link>
              </li>
            </ul>
            <Link href="/" aria-label="Bensan Logo" className="">
              <Image
                src={Logo}
                alt="Bensan Logo"
                aria-label="Bensan Logo"
                priority
                className=""
              />
            </Link>
            <ul className="items-center gap-11 hidden lg:flex">
              <li>
                <Link
                  href="/blogs"
                  aria-label="Blogs"
                  className="text-nav-color text-[13px] font-semibold font-primary capitalize lg:flex items-center hidden"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/resource-center"
                  aria-label="Resource Center"
                  className="text-nav-color text-[13px] font-semibold font-primary capitalize lg:flex items-center hidden"
                >
                  Resource Center
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  aria-label="Contact"
                  className="text-nav-color text-[13px] font-semibold font-primary capitalize"
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className="lg:hidden">
              <button onClick={toggleMenu} className="">
                {isOpen ? (
                  <IoMdClose
                    size={28}
                    className="text-secondary-primary"
                    aria-label="Menu Close Icon"
                  />
                ) : (
                  <IoMenu
                    size={28}
                    className="text-secondary-primary"
                    aria-label="Menu Open Icon"
                  />
                )}
              </button>
            </div>
          </nav>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:hidden absolute z-30 w-full h-[100vh] left-0 bg-white flex items-center flex-col"
            >
              <ul className="flex items-center w-full flex-col gap-8 pt-4 text-black text-base font-normal font-primary leading-tight">
                <li>
                  <Link href="/" onClick={handleLinkClick}>
                    Home
                  </Link>
                </li>
                <div className="w-full h-[0px] opacity-40 border border-[#0000004D]"></div>
                <li>
                  <Link href="/about" onClick={handleLinkClick}>
                    About Us
                  </Link>
                </li>
                <div className="w-full h-[0px] opacity-40 border border-[#0000004D]"></div>
                <li>
                  <Link href="/who-we-serve" onClick={handleLinkClick}>
                    Who We Serve
                  </Link>
                </li>
                <div className="w-full h-[0px] opacity-40 border border-[#0000004D]"></div>
                <li>
                  <Link href="/product" onClick={handleLinkClick}>
                    Product
                  </Link>
                </li>
                <div className="w-full h-[0px] opacity-40 border border-[#0000004D]"></div>
                <li>
                  <Link href="/resource-center" onClick={handleLinkClick}>
                    Resource Center
                  </Link>
                </li>
                <div className="w-full h-[0px] opacity-40 border border-[#0000004D]"></div>
                <li>
                  <Link href="/contact" onClick={handleLinkClick}>
                    Contact Us
                  </Link>
                </li>
                <div className="w-full h-[0px] opacity-40 border border-[#0000004D]"></div>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
