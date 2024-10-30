import React from "react";
import Image from "next/image";
import Logo from "@/public/images/Logo.svg";
import InfoAction from "./InfoAction";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";

const Header = () => {
  return (
    <header className="xl:px-[90px] xl:pt-6 bg-primary">
        <div className="2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0">
      <div className="flex items-center justify-between">
        <Image src={Logo} alt="Bensan Logo" aria-label="Bensan Logo" priority />
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
      <nav className="xl:mx-[110px] mt-3 px-8 py-6 bg-white rounded-xl">
        <ul className="flex items-center gap-11">
          <li>
            <Link href="/" aria-label="Home" className="text-[#222823] text-lg font-semibold font-primary capitalize">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" aria-label="About" className="text-[#222823] text-lg font-semibold font-primary capitalize">
              About
            </Link>
          </li>
          <li>
            <Link href="/product" aria-label="Product" className="text-[#222823] text-lg font-semibold font-primary capitalize">
              Product
            </Link>
          </li>
          <li>
            <Link href="/contact" aria-label="Contact" className="text-[#222823] text-lg font-semibold font-primary capitalize">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default Header;
