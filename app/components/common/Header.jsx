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

  // Animation variants
  const headerVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
    },
  };

  const mobileMenuVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      {/* Marquee */}
      <MarqueeSlider />
      {/* Navbar start Here */}

      <motion.header 
        className="xl:px-[90px] sm:px-10 xs:px-5 xl:pt-[19px] lg:pt-2.5 bg-white relative z-40"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
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
                  className="text-nav-color text-[13px] font-semibold font-primary capitalize hover:text-secondary-primary transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/product"
                  aria-label="Product"
                  className="text-nav-color text-[13px] font-semibold font-primary capitalize hover:text-secondary-primary transition-colors duration-200"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/who-we-serve"
                  aria-label="who we serve"
                  className="text-nav-color text-[13px] font-semibold font-primary capitalize hover:text-secondary-primary transition-colors duration-200"
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
                  className="text-nav-color text-[13px] font-semibold font-primary capitalize lg:flex items-center hidden hover:text-secondary-primary transition-colors duration-200"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/resource-center"
                  aria-label="Resource Center"
                  className="text-nav-color text-[13px] font-semibold font-primary capitalize lg:flex items-center hidden hover:text-secondary-primary transition-colors duration-200"
                >
                  Resource Center
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  aria-label="Contact"
                  className="text-nav-color text-[13px] font-semibold font-primary capitalize hover:text-secondary-primary transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className="lg:hidden">
              <button onClick={toggleMenu} aria-label="Toggle mobile menu">
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
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/20 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu} // Close on overlay click
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 p-6 lg:hidden overflow-y-auto"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex justify-between items-center mb-8">
              <Link
                href="/"
                className="flex items-center"
                onClick={handleLinkClick}
              >
                <Image
                  src={Logo}
                  alt="Bensan Logo"
                  width={120}
                  height={40}
                  className="h-8 w-32 object-contain"
                />
              </Link>
              <button onClick={toggleMenu} aria-label="Close mobile menu">
                <IoMdClose size={24} />
              </button>
            </div>
            
            {/* Contact Info in Mobile */}
            <motion.div 
              className="mb-6 pb-6 border-b border-gray-200"
              variants={mobileLinkVariants}
            >
              <div className="flex flex-col gap-3">
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
            </motion.div>

            <motion.nav
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              <ul className="flex flex-col gap-2 text-base font-normal font-primary text-black">
                <motion.li
                  variants={mobileLinkVariants}
                  className="py-3 border-b border-gray-200"
                >
                  <Link
                    href="/"
                    className="hover:text-secondary-primary cursor-pointer block transition-colors duration-200"
                    onClick={handleLinkClick}
                  >
                    Home
                  </Link>
                </motion.li>
                <motion.li
                  variants={mobileLinkVariants}
                  className="py-3 border-b border-gray-200"
                >
                  <Link
                    href="/about"
                    className="hover:text-secondary-primary cursor-pointer block transition-colors duration-200"
                    onClick={handleLinkClick}
                  >
                    About Us
                  </Link>
                </motion.li>
                <motion.li
                  variants={mobileLinkVariants}
                  className="py-3 border-b border-gray-200"
                >
                  <Link
                    href="/who-we-serve"
                    className="hover:text-secondary-primary cursor-pointer block transition-colors duration-200"
                    onClick={handleLinkClick}
                  >
                    Who We Serve
                  </Link>
                </motion.li>
                <motion.li
                  variants={mobileLinkVariants}
                  className="py-3 border-b border-gray-200"
                >
                  <Link
                    href="/product"
                    className="hover:text-secondary-primary cursor-pointer block transition-colors duration-200"
                    onClick={handleLinkClick}
                  >
                    Products
                  </Link>
                </motion.li>
                <motion.li
                  variants={mobileLinkVariants}
                  className="py-3 border-b border-gray-200"
                >
                  <Link
                    href="/blogs"
                    className="hover:text-secondary-primary cursor-pointer block transition-colors duration-200"
                    onClick={handleLinkClick}
                  >
                    Blogs
                  </Link>
                </motion.li>
                <motion.li
                  variants={mobileLinkVariants}
                  className="py-3 border-b border-gray-200"
                >
                  <Link
                    href="/resource-center"
                    className="hover:text-secondary-primary cursor-pointer block transition-colors duration-200"
                    onClick={handleLinkClick}
                  >
                    Resource Center
                  </Link>
                </motion.li>
                <motion.li
                  variants={mobileLinkVariants}
                  className="py-3"
                >
                  <Link
                    href="/contact"
                    className="hover:text-secondary-primary cursor-pointer block transition-colors duration-200"
                    onClick={handleLinkClick}
                  >
                    Contact Us
                  </Link>
                </motion.li>
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
