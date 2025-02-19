import React from "react";
import Blog1 from "@/public/images/Blog1.png";
import Image from "next/image";
import ProfilePhoto from "@/public/images/profileComments.png";
import PostComment from "./PostComment";
import RelatedBlogs from "./RelatedBlogs";
import { CiSearch } from "react-icons/ci";

const BlogContent = () => {
  return (
    <>
      <div className="xl:px-[90px] sm:px-10 xs:px-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 my-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="flex lg:col-span-2  flex-col gap-6">
            <h1 className="text-[#222823] text-2xl md:text-4xl font-semibold font-primary capitalize">
              Central Sterile Supply Department (CSSD)
            </h1>
            <Image
              src={Blog1}
              alt="Central Sterile Supply Department (CSSD)"
              className="w-full md:h-[530px]"
            />
            <p className="text-[#222823] text-base font-normal font-primary leading-normal">
              Traditionally, the BWE has been studied in serial supply chains.
              That is also the setting of the famous beer game, where the
              typical demand pattern across the supply chain looks like this:
              for a relatively small change in demand seen by the retailer, the
              demand variability progressively increases at the more upstream
              wholesaler, distributor, and factory (see the figure below). This
              leads to capacity shortages, stockouts, excess inventory, and
              increased operational costs. No wonder BWE has received a lot of
              attention among academics and practitioners alike.
            </p>
            <p className="text-[#222823] text-base font-normal font-primary leading-normal">
              Traditionally, the BWE has been studied in serial supply chains.
              That is also the setting of the famous beer game, where the
              typical demand pattern across the supply chain looks like this:
              for a relatively small change in demand seen by the retailer, the
              demand variability progressively increases at the more upstream
              wholesaler, distributor, and factory (see the figure below). This
              leads to capacity shortages, stockouts, excess inventory, and
              increased operational costs. No wonder BWE has received a lot of
              attention among academics and practitioners alike.
            </p>
            <div className="flex flex-wrap lg:flex-nowrap gap-7">
              <Image
                src={Blog1}
                alt="Central Sterile Supply Department (CSSD)"
                className="w-full"
              />
              <Image
                src={Blog1}
                alt="Central Sterile Supply Department (CSSD)"
                className="w-full"
              />
            </div>
            <p className="text-[#222823] text-base font-normal font-primary leading-normal">
              Traditionally, the BWE has been studied in serial supply chains.
              That is also the setting of the famous beer game, where the
              typical demand pattern across the supply chain looks like this:
              for a relatively small change in demand seen by the retailer, the
              demand variability progressively increases at the more upstream
              wholesaler, distributor, and factory (see the figure below). This
              leads to capacity shortages, stockouts, excess inventory, and
              increased operational costs. No wonder BWE has received a lot of
              attention among academics and practitioners alike.
            </p>
            <p className="text-[#222823] text-base font-normal font-primary leading-normal">
              Traditionally, the BWE has been studied in serial supply chains.
              That is also the setting of the famous beer game, where the
              typical demand pattern across the supply chain looks like this:
              for a relatively small change in demand seen by the retailer, the
              demand variability progressively increases at the more upstream
              wholesaler, distributor, and factory (see the figure below). This
              leads to capacity shortages, stockouts, excess inventory, and
              increased operational costs. No wonder BWE has received a lot of
              attention among academics and practitioners alike.
            </p>

            <p className=" text-[#222823] text-xl font-semibold font-primary leading-[30px] ">
              Tags:{" "}
              <span className="text-[#0e0e0e] text-base font-normal font-primary leading-normal">
                Suppliers, Welding Engineering
              </span>
            </p>

            {/* Comment Section */}
            <div>
              <hr className="border-[#EAE9E8] my-8" />
              <h2 className="text-[#2b221b] text-[32px] font-semibold font-primary leading-[38.40px]">
                3 Comments
              </h2>
              {/* Comment View */}
              <div className="my-5">
                <div className="flex gap-4">
                  <div className="w-20">
                    <Image
                      src={ProfilePhoto}
                      alt="Profile Photo"
                      className=" object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#1a191d] text-xl font-medium font-arial leading-[30px]">
                      Robert Fox
                    </h3>
                    <p className="w-[80%] text-[#222823] text-base font-normal font-primary leading-normal">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatum accusantium aperiam maiores nam nobis
                      blanditiis dolorem aut totam praesentium officiis
                      sapiente, provident.
                    </p>
                  </div>
                </div>
                <hr className="border-[#EAE9E8] my-8" />
              </div>
              {/* Leave a Comment */}
              <div className="mt-5">
                <h2 className=" text-[#2b221b] text-[32px] font-medium font-primary leading-[38.40px]">
                  Leave a Comment
                </h2>

                <div>
                  <PostComment />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            {/* Search Post */}
            <div className="h-[60px] flex justify-start pl-4 items-center bg-[#a8366f] rounded">
              <p className=" text-white text-xl font-semibold font-primary leading-[30px]">
                Search Posts
              </p>
            </div>
            <div className="relative mt-5">
              <input
                type="text"
                placeholder="Search Keywords"
                className="w-full pl-4 pr-10 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <button className="absolute inset-y-0 right-0.5 flex items-center px-3 bg-gray-100  border-gray-300 rounded-r-md">
                <CiSearch size={24} />
              </button>
            </div>
            {/* Recent POst */}
            <div className="mt-5 bg-white rounded border">
              <div className="h-[60px] flex justify-start pl-4 items-center bg-[#a8366f] rounded">
                <h2 className=" text-white text-xl font-semibold font-primary leading-[30px]">
                  Recent Posts
                </h2>
              </div>
              <div className="flex gap-4 items-center pl-4 my-6">
                <Image
                  src={Blog1}
                  alt="Central Sterile Supply Department (CSSD)"
                  className="w-[85px] h-[85px] "
                />
                <div>
                  <h3 className="w-[257px] h-14 text-[#1f1813] text-base font-medium font-primary leading-normal">
                    Central Sterile Supply Department (CSSD)
                  </h3>
                  <p className="w-[216px] h-4 text-[#9d9996] text-[13px] font-normal font-['Open Sans'] leading-tight">
                    John Attack - December 10, 2020
                  </p>
                </div>
              </div>
            </div>
            {/* Recent Post End here */}
            {/* Tags */}
            <div className="mt-5 bg-white rounded border">
              <div className="h-[60px] flex justify-start pl-4 items-center bg-[#a8366f] rounded">
                <h2 className=" text-white text-xl font-semibold font-primary leading-[30px]">
                  Tags
                </h2>
              </div>
              <div className="my-6 pl-4 flex gap-3 flex-wrap">
                <span className="px-4 py-2.5 bg-gray-200 rounded text-[#716b66] text-[13px] font-normal font-primary leading-tight">
                  Bridge Construction
                </span>
                <span className="px-4 py-2.5 bg-gray-200 rounded text-[#716b66] text-[13px] font-normal font-primary leading-tight">
                  Fuel & Gas
                </span>
                <span className="px-4 py-2.5 bg-gray-200 rounded text-[#716b66] text-[13px] font-normal font-primary leading-tight">
                  Power & Energy Sector
                </span>
                <span className="px-4 py-2.5 bg-gray-200 rounded text-[#716b66] text-[13px] font-normal font-primary leading-tight">
                  Suppliers
                </span>
                <span className="px-4 py-2.5 bg-gray-200 rounded text-[#716b66] text-[13px] font-normal font-primary leading-tight">
                  Civil Engineering
                </span>
              </div>
            </div>
            {/* Tags End here */}
          </div>
        </div>
        <RelatedBlogs />
      </div>
    </>
  );
};

export default BlogContent;
