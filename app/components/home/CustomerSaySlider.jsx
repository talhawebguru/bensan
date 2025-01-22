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
          className="relative xl:px-[90px] lg:px-[40px] px-5 2xl:max-w-[1440px] 2xl:mx-auto"
        >
          <Swiper
            ref={swiperRef}
            navigation={false}
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{
              clickable: true,
            }}
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
                <Image
                  src={CustomerArrow}
                  alt="Customer Arrow"
                  aria-label="Customer Arrow"
                  className="relative left-[34%] top-5 -translate-x-[50%] hidden lg:block"
                />
                <div className="grid grid-cols-12">
                  <div className="lg:col-span-5 col-span-12 relative">
                    <Image src={Customer1Img} alt="Customer1" />
                    <div className="absolute left-[40%] bottom-0 p-5 px-7 bg-white rounded-xl shadow flex-col justify-center items-center gap-2.5 flex">
                      <h2 className="text-light-black text-2xl font-semibold font-secondary">
                        {testimonial.name}
                      </h2>
                      <p className="text-grey mt-1 text-sm font-medium font-primary">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="lg:col-span-7 col-span-12">
                    <h2 className="text-light-black text-4xl font-semibold font-primary leading-[66px]">
                      What our Customers Say?
                    </h2>
                    <p className="text-grey mt-8 text-2xl font-normal font-primary leading-9">
                      {testimonial.testimonial}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div
            className="w-[63px] hidden h-[63px] absolute top-[50%] xs:top-[49%] xl:ml-4 left-0 z-20 sm:block"
            onClick={handlePrevSlide}
          >
            <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full shadow-lg hover:shadow-2xl cursor-pointer hover:bg-primary transition duration-300 group">
              <GoArrowLeft
                className="text-secondary-primary group-hover:text-secondary-primary transition duration-300"
                size={22}
              />
            </div>
          </div>
          <div
            className="w-[63px] h-[63px] absolute top-[50%] xs:top-[49%] xl:mr-4 right-0 z-20 hidden sm:block"
            onClick={handleNextSlide}
          >
            <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full shadow-lg hover:shadow-2xl cursor-pointer hover:bg-primary transition duration-300 group">
              <GoArrowLeft
                className="text-secondary-primary group-hover:text-secondary-primary transition duration-300 -rotate-180"
                size={22}
              />
            </div>
          </div>
        </motion.div>
      </>
    )
}

export default CustomerSaySlider