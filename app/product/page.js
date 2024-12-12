"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/thumbs";
import product1Img from "@/public/images/product1.png";
import { IoDownloadOutline } from "react-icons/io5";

const Page = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="xl:px-[90px] sm:px-10 xs:px-5">
        <h2 className="py-10 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 text-[#6c757d] text-lg font-semibold font-primary capitalize">
          products / skin & hands / spiritus
        </h2>
      </div>

      <div className="xl:px-[90px] sm:px-10 xs:px-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:px-[62px] px-5 py-10 bg-white rounded-xl shadow border border-[#e9ecef] mb-20">
          <div className="h-[450px]">
            <Swiper
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Thumbs]}
              className="mySwiper2"
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
              <SwiperSlide>
                <Image
                  src={product1Img}
                  alt="product 1 img"
                  className="object-contain h-full w-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={product1Img}
                  alt="product 1 img"
                  className="object-contain h-full w-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={product1Img}
                  alt="product 1 img"
                  className="object-contain h-full w-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={product1Img}
                  alt="product 1 img"
                  className="object-contain h-full w-full"
                />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              watchSlidesProgress
              modules={[Thumbs]}
              className="mySwiper"
            >
              {[product1Img, product1Img, product1Img, product1Img].map(
                (img, index) => (
                  <SwiperSlide
                    key={index}
                    className={`cursor-pointer p-2.5 rounded-xl shadow border ${
                      activeIndex === index
                        ? "bg-white border-[#e9ecef]"
                        : "!bg-[#e9ecef] border-[#e9ecef]"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-[100px] h-[100px] object-contain"
                    />
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>
          <div className="mt-32 lg:mt-0">
            <h2 className="text-[#a8366f] text-lg font-semibold font-['Open Sans'] capitalize">
              Bensan
            </h2>
            <h2 className="text-[#222823] text-[32px] font-semibold font-['Open Sans'] capitalize mt-3">
              Spiritus
            </h2>
            <h2 className="text-[#222823] text-lg font-semibold font-['Open Sans'] capitalize mt-4">
              Denatured Rubbing Alcohol
            </h2>
            <p className="text-[#6c757d] text-base font-normal font-['Open Sans'] capitalize leading-normal mt-8">
              Bensan Spiritus is an Ethanol Methanol-based Quick-Action Skin and
              Surface Disinfectant solution. Intended uses include:
            </p>
            <div className="mt-6">
              <ul className="flex flex-col gap-4 text-[#6c757d] text-base font-normal font-['Open Sans'] capitalize leading-normal list-disc">
                <li>Disinfection of infusion or injection points</li>
                <li>Treatment of minor cuts and bruises</li>
                <li>
                  Cleansing of instrumentation prior to surgical procedures
                </li>
                <li>Quick-action hand sanitizer</li>
                <li>General environmental surface disinfectant</li>
              </ul>
            </div>
            <hr className="border-[#dee2e6] mt-8" />
            <h2 className="text-[#222823] text-lg font-semibold font-['Open Sans'] capitalize my-5">
              Specifications
            </h2>
            <hr className="border-[#dee2e6]" />

            <div>
              <div className="text-[#222823] text-lg font-semibold font-['Open Sans'] capitalize mt-5">
                Items
              </div>
              <div className="text-[#222823] text-base font-semibold font-['Open Sans'] capitalize">
                Bensan spiritus
              </div>
              <div className="flex flex-wrap justify-center gap-5 mt-3">
                <div className="w-[164px] h-14 bg-[#a8366f] rounded-xl flex justify-center items-center gap-3">
                  <IoDownloadOutline
                    className="relative text-white"
                    size={24}
                  />
                  <div className="text-white text-lg font-semibold font-['Open Sans'] capitalize">
                    Catalog
                  </div>
                </div>
                <div className="w-[164px] h-14 bg-[#124984] rounded-xl flex justify-center items-center gap-3">
                  <IoDownloadOutline
                    className="relative text-white"
                    size={24}
                  />
                  <div className="text-white text-lg font-semibold font-['Open Sans'] capitalize">
                    TDS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
