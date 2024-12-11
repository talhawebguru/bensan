import React from "react";
import PageNameBanner from "../components/common/PageNameBanner";
import doubleLine from "@/public/images/doubleLine.png";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <main>
        <div className="py-10 bg-secondary-secondary">
          <PageNameBanner />
        </div>
        <div className="relative flex justify-center mt-16 md:mt-32">
          <h2 className="w-full max-w-[923px] text-center px-4  text-[#222823] text-2xl md:text-4xl font-semibold font-['Open Sans'] capitalize">
            about
            <span className="block md:inline mx-3 text-[#a8366f] text-2xl md:text-4xl font-semibold font-['Open Sans'] capitalize">
              safecare
            </span>
            medical industries
          </h2>
          <Image
            src={doubleLine}
            alt="doubleLine"
            aria-label="Double Line"
            className="absolute top-12 left-[45%] transform -translate-x-1/2"
          />
        </div>
        <div className="mt-28 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 xl:px-[90px] sm:px-10 xs:px-5">
          <div>
            <h2 className="text-[#222823] text-lg font-semibold font-['Open Sans'] capitalize leading-[27px]">
              Safecare Medical Industries was conceived and established in the
              year of 2016 by Bin Ali Group. The goal is to give a different
              dimension to the medical industries all across the Middle East.
            </h2>
            <div className="h-[522px] pl-[90px] pr-10 py-[79px] bg-[#f6ebf1] justify-center items-center gap-2.5 inline-flex">
        <h2></h2>
            </div>
          </div>
          <div></div>
        </div>
      </main>
    </>
  );
};

export default Page;
