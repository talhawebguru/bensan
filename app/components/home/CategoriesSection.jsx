import React from "react";
import Image from "next/image";
import Category1Img from "@/public/images/Category1.png";
import Category2Img from "@/public/images/Category2.png";
import Category3Img from "@/public/images/Category3.png";

const CategoriesSection = () => {
  return (
    <section className="2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 xl:px-[90px] sm:px-10 xs:px-5 xl:mt-[100px] md:mt-20 mt-10">
      <div className="flex justify-between items-center">
        <h2 className="text-light-black text-4xl font-semibold font-primary capitalize">
          Categories
        </h2>
        <p className="text-grey text-lg font-semibold font-primary capitalize">
          see all
        </p>
      </div>
      <div className="mt-10 grid lg:grid-cols-2 gap-7">
        <article className="bg-primary h-fit rounded-xl relative">
          <div className="mb-20 ml-11 absolute bottom-0">
            <p className="text-grey text-lg font-semibold font-primary capitalize">
              Bensan
            </p>
            <h2 className="mt-4 text-light-black text-2xl font-semibold font-primary capitalize">
              surgical site preparation
            </h2>
            <button
              className="w-32 h-10 mt-6 text-white text-base font-semibold font-primary capitalize bg-secondary-primary rounded-xl justify-center items-center gap-3 flex"
              aria-label="View more about surgical site preparation"
            >
              view more
            </button>
          </div>
          <div className="flex justify-end items-end">
            <Image
              src={Category1Img}
              alt="Surgical site preparation category"
              className="h-full flex justify-end items-end"
            />
          </div>
        </article>
        <div className="flex flex-col gap-6">
          <article className="grid grid-cols-2 items-end bg-primary rounded-xl">
            <div className="mb-7 ml-11">
              <p className="text-grey text-lg font-semibold font-primary capitalize">
                Bensan
              </p>
              <h2 className="mt-4 text-light-black text-2xl font-semibold font-primary capitalize">
                Skin & hands
              </h2>
              <button
                className="w-32 h-10 mt-6 text-white text-base font-semibold font-primary capitalize bg-secondary-primary rounded-xl justify-center items-center gap-3 flex"
                aria-label="View more about skin & hands"
              >
                view more
              </button>
            </div>
            <div className="flex justify-end items-end">
              <Image
                src={Category2Img}
                alt="Skin & hands category"
              />
            </div>
          </article>
          <article className="grid grid-cols-2 items-end bg-primary rounded-xl">
            <div className="mb-7 ml-11">
              <p className="text-grey text-lg font-semibold font-primary capitalize">
                Bensan
              </p>
              <h2 className="mt-4 text-light-black text-2xl font-semibold font-primary capitalize">
                Dental Care
              </h2>
              <button
                className="mt-6 w-32 h-10 text-white text-base font-semibold font-primary capitalize bg-secondary-primary rounded-xl justify-center items-center gap-3 flex"
                aria-label="View more about dental care"
              >
                view more
              </button>
            </div>
            <div className="flex justify-end items-end">
              <Image
                src={Category3Img}
                alt="Dental care category"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
