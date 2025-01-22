"use client"
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Pagination,Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import * as motion from "framer-motion/client";
import Customer1Img from "@/public/images/Customer1.png";
import CustomerArrow from "@/public/images/CustomerArrow.png";
import { GoArrowLeft } from "react-icons/go";

const CustomerSaySlider = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const swiperRef = useRef(null);
  
    // Since currentSlideIndex is not used anywhere, we can remove the state and simplify handleSlideChange
    const handleSlideChange = () => {}; 
  
    const handleNextSlide = () => {
      if (swiperRef.current?.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    };
  
    const handlePrevSlide = () => {
      if (swiperRef.current?.swiper) {
        swiperRef.current.swiper.slidePrev();
      }
    };

    const testimonials = [
      {
        name: "Eleea Thomson",
        role: "CEO of Markman Pvt. Ltd.",
        testimonial: "Using Bensan's innovative products has greatly improved our infection control processes. Their ease of use and focus on safety ensures our team works efficiently and confidently."
      },
      {
        name: "Eleea Thomson", 
        role: "CEO of Lakman Pvt. Ltd.",
        testimonial: "Using Bensan's innovative products has greatly improved our infection control processes. Their ease of use and focus on safety ensures our team works efficiently and confidently."
      }
    ];

    return (
      <>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              duration: 1,
              bounce: 0.4,
              opacity: { duration: 1.2, delay: 0.8},
            },
          }}
          viewport={{ margin: "-5%" }}
          className="relative xl:px-[90px] lg:px-[40px] px-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0"
        >
          <Swiper
            ref={swiperRef}
            navigation={false}
            modules={[Navigation,Autoplay]}
            className="mySwiper relative"
            onSlideChange={handleSlideChange}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-12">
                  <div className="lg:col-span-5 col-span-12 relative place-items-start place-content-start">
                    <Image src={Customer1Img} alt="Customer1" className="place-self-start text-left" />
                    <div className="absolute xl:w-[300px] w-[280px] left-[60%]  bottom-20 translate-x-[-50%] translate-y-[50%] p-5 px-7 bg-white rounded-xl shadow flex-col justify-center items-center gap-2.5 flex">
                      <h2 className="text-light-black text-2xl font-semibold font-secondary">
                        {testimonial.name}
                      </h2>
                      <p className="text-grey mt-1 text-sm font-medium font-primary">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="lg:col-span-7 col-span-12 place-content-start place-items-start">
                    <h2 className="text-[#222823] text-2xl sm:text-4xl font-semibold font-primary leading-[66px] text-left">
                      What our Customers Say?
                    </h2>
                    <p className="text-[#6c757d] text-lg sm:text-2xl font-normal font-primary leading-9 text-left">
                      {testimonial.testimonial}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div
            className="w-[63px] hidden h-[63px] absolute right-20 lg:bottom-0 -bottom-20 z-20 sm:block"
            onClick={handlePrevSlide}
          >
            <div className="w-14 h-14 bg-secondary-primary flex items-center justify-center rounded-md shadow-lg hover:shadow-2xl cursor-pointer transition duration-300 group">
              <GoArrowLeft
                className="text-white group-hover:text-white transition duration-300"
                size={22}
              />
            </div>
          </div>
          <div
            className="w-[63px] h-[63px] absolute right-0 lg:bottom-0 -bottom-20 z-20 hidden sm:block"
            onClick={handleNextSlide}
          >
            <div className="w-14 h-14 bg-secondary-primary flex items-center justify-center rounded-md shadow-lg hover:shadow-2xl cursor-pointer transition duration-300 group">
              <GoArrowLeft
                className="text-white group-hover:text-white transition duration-300 -rotate-180"
                size={22}
              />
            </div>
          </div>
        </motion.div>
      </>
    )
}

export default CustomerSaySlider