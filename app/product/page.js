import React, { Suspense } from "react";
import { getProducts } from "@/app/services/api.js";
import ProductList from "@/app/components/product/ProductList";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const metadata = {
  robots: "index, follow",
  title: "Bensan Infection Control | Body Care & Surgical Solutions",
  description:
    "Discover Bensan's wide selection of infection control products, including body care, dental solutions, high-level instrument disinfection, surgical site preparation, and more.",
  alternates: {
    canonical: "https://bensano.com/product",
  },
};

export async function generateStaticParams() {
  try {
    const data = await getProducts(1, 100);
    return data.data.map((product) => ({
      productslug: product.slug,
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

const Page = async () => {
  const initialData = await getProducts(1, 100);
  return (
    <Suspense
      fallback={
        <>
          <hr className="border border-black/10 mt-1 xl:px-[90px] sm:px-10 xs:px-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0" />
          <h1 className="md:my-16 my-10 text-[#222823] text-4xl font-semibold font-primary capitalize  xl:px-[90px] sm:px-10 xs:px-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0">
            our Products
          </h1>
          <div className="flex flex-wrap justify-center md:justify-normal  md:flex-nowrap  gap-10 xl:px-[90px] sm:px-10 xs:px-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 ">
            <div className="flex justify-center md:justify-normal gap-10 w-full md:w-auto">
              <div className="lg:w-[350px] md:w-[300px] pb-4 h-fit bg-white shadow w-full">
                <form className="flex mb-3">
                  <input
                    type="text"
                    className="w-full xl:w-[350px] outline-none h-14 px-[16px] py-4 bg-white shadow justify-start items-start gap-2.5 inline-flex text-black text-[13px] font-normal font-primary leading-tight"
                    placeholder="Search"
                  />
                </form>
                <div className="flex items-center content-center justify-between pt-6 mx-4 cursor-pointer">
                  <h2 className="text-divi-gray text-2xl font-normal font-nohemi leading-[28.80px]">
                    Categories
                  </h2>
                </div>
                <div className="w-full h-[0px] border border-[#eae9e8] mt-6"></div>
                <div className={`transition-all duration-300 block`}>
                  <div className="pb-4 max-h-fit lg:pb-0">
                    {[...Array(9)].map((_, index) => (
                      <div className="flex gap-3 mx-4 mt-4" key={index}>
                        <Skeleton circle={true} height={24} width={24} />
                        <Skeleton height={24} width={150} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                {[...Array(8)].map((_, index) => (
                  <div
                    key={index}
                    className="bg-white w-[256px] shadow border border-[#e9ecef]"
                  >
                    <Skeleton height={256} width={256} />
                    <div className="pt-4 flex justify-center pb-5">
                      <Skeleton height={20} width={100} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      }
    >
      <ProductList initialData={initialData} />
    </Suspense>
  );
};

export default Page;
