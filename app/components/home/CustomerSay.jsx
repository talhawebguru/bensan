import React from "react";
import Image from "next/image";
import Customer1Img from "@/public/images/Customer1.png";
import CustomerArrow from "@/public/images/CustomerArrow.png";
import CustomerSaySlider from "./CustomerSaySlider";
 
const CustomerSay = () => {
  return (
    <section className="2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 xl:px-[90px] sm:px-10 xs:px-5 xl:mt-[150px] md:mt-20 mt-10 xl:mb-[100px] md:mb-20 mb-10">
        <CustomerSaySlider/>
    </section>
  );
};

export default CustomerSay;
