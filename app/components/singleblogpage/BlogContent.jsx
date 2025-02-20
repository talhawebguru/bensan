"use client"
import React, { useEffect, useState } from "react";
import Blog1 from "@/public/images/Blog1.png";
import Image from "next/image";
import ProfilePhoto from "@/public/images/profileComments.png";
import PostComment from "./PostComment";
import RelatedBlogs from "./RelatedBlogs";
import { CiSearch } from "react-icons/ci";
import { getBlogBySlug } from "@/app/services/api";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import RichTextRender from "./RixhTextRender";

const BlogContent = ({params}) => {

  const { blogSlug } = params;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (blogSlug) {
      const fetchBlog = async () => {
        try {
          const data = await getBlogBySlug(blogSlug);
          if (data.data && data.data.length > 0) {
            setBlog(data.data[0]);
          }
        } catch (error) {
          console.error("Error fetching blog:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchBlog();
    }
  }, [blogSlug]);


  if (loading) {
    return (
      <div className="xl:px-[90px] sm:px-10 xs:px-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 my-16">
        <Skeleton height={40} width="60%" />
        <Skeleton height={530} className="mt-4" />
        <Skeleton height={24} width="80%" className="mt-4" />
        <Skeleton height={24} width="80%" className="mt-2" />
        <Skeleton height={24} width="80%" className="mt-2" />
      </div>
    );
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <>
      <div className="xl:px-[90px] sm:px-10 xs:px-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 my-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="flex lg:col-span-2  flex-col gap-6">
            <h1 className="text-[#222823] text-2xl md:text-4xl font-semibold font-primary capitalize">
              {blog.Title}
            </h1>
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}${blog.FeatureImage.url}`}
              alt={blog.FeatureImage.alternativeText || blog.Title}
              className="w-full md:h-[530px]"
              width={800}
              height={530}
            />
            <RichTextRender content={blog.content2} /> 
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
                placeholder="Search Posts"
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
          </div>
        </div>
        <RelatedBlogs />
      </div>
    </>
  );
};

export default BlogContent;
