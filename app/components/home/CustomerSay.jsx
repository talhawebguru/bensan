import React from "react";
import Image from "next/image";
import Customer1Img from "@/public/images/customer1.png";
import CustomerArrow from "@/public/images/CustomerArrow.png";

const CustomerSay = () => {
  return (
    <section className="2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 xl:px-[90px] sm:px-10 xs:px-5 xl:mt-[150px] md:mt-20 mt-10 xl:mb-[100px] md:mb-20 mb-10">
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
              Eleea Thomson
            </h2>
            <p className="text-grey mt-1 text-sm font-medium font-primary">
              CEO of Markman Pvt. Ltd.
            </p>
          </div>
        </div>
        <div className="lg:col-span-7 col-span-12">
          <h2 className="text-light-black text-4xl font-semibold font-primary leading-[66px]">
            What our Customers Say?
          </h2>
          <p className="text-grey mt-8 text-2xl font-normal font-primary leading-9">
            Lorem ipsum dolor sit amet consectetur. Risus adipiscing cursus
            dignissim sapien sit viverra mauris. Laoreet vulputate nullam
            donec nulla consequat pretium non.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomerSay;
