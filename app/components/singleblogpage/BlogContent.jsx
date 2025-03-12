"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProfilePhoto from "@/public/images/profileComments.png";
import PostComment from "./PostComment";
import RelatedBlogs from "./RelatedBlogs";
import { CiSearch } from "react-icons/ci";
import {
  getBlogBySlug,
  getLatestBlogs,
  getRelatedBlogs,
} from "@/app/services/api";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import RichTextRender from "./RixhTextRender";
import { motion } from "framer-motion";
import SocialShare from "./SocialShare";
import { usePathname } from "next/navigation"; // Add this import
import Link from "next/link";

const BlogContent = ({ params }) => {
  const { blogSlug } = params;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const pathname = usePathname();
  const blogUrl =
    typeof window !== "undefined" ? `${window.location.origin}${pathname}` : "";

  useEffect(() => {
    if (blogSlug) {
      const fetchBlog = async () => {
        try {
          const data = await getBlogBySlug(blogSlug);
          if (data.data) {
            const blogData = data.data[0];
            setBlog(blogData);
            // Fetch related blogs based on the first category of the blog
            if (blogData.categories && blogData.categories.length > 0) {
              const categorySlug = blogData.categories[0].slug;
              const relatedBlogsData = await getRelatedBlogs(
                categorySlug,
                blogData.slug
              );
              setRelatedBlogs(relatedBlogsData.data);
            }
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

  useEffect(() => {
    const fetchLatestBlogs = async () => {
      try {
        const data = await getLatestBlogs();
        setLatestBlogs(data.data);
      } catch (error) {
        console.error("Error fetching latest blogs:", error);
      }
    };

    fetchLatestBlogs();
  }, []);

  console.log(relatedBlogs);

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
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div
            className="flex lg:col-span-2 flex-col "
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}${blog.FeatureImage.url}`}
                alt={blog.FeatureImage.alternativeText || blog.Title}
                className="w-full md:h-[390px] object-contain"
                width={800}
                height={390}
              />
            </motion.div>
            <motion.h1
              className="text-[#222823] text-4xl font-semibold font-primary capitalize mt-12"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {blog.Title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <RichTextRender content={blog.content2} />
            </motion.div>
            <div className="flex items-center gap-4 flex-wrap mt-16">
              <SocialShare
                socialColor={"bg-[#3f5796]"}
                socialName={"Facebook"}
                url={blogUrl}
                title={blog.Title}
              />
              <SocialShare
                socialColor={"bg-[#12D26B]"}
                socialName={"WhatsApp"}
                url={blogUrl}
                title={blog.Title}
              />
              <SocialShare
                socialColor={"bg-[#2f9eee]"}
                socialName={"Twitter"}
                url={blogUrl}
                title={blog.Title}
              />
              <SocialShare
                socialColor={"bg-[#1775b2]"}
                socialName={"Linkedin"}
                url={blogUrl}
                title={blog.Title}
              />
              <SocialShare
                socialColor={"bg-[#be2329]"}
                socialName={"Pinterest"}
                url={blogUrl}
                title={blog.Title}
                image={`${process.env.NEXT_PUBLIC_API_URL}${blog.FeatureImage.url}`}
              />
            </div>
          </motion.div>
          <motion.div
            className=""
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Recent Post */}
            <div className="mt-5 bg-[#F9F9F9] rounded ">
              <div className="flex justify-center mb-5">
                <div className="h-[37px] px-[21px] py-[13px] bg-white border border-black/5 justify-center items-center inline-flex mt-10 mx-auto">
                  <h2 className="text-[#222823]/80 text-base font-semibold font-primary capitalize">
                    Recent Posts
                  </h2>
                </div>
              </div>
              {latestBlogs.map((latestBlog) => (
                <Link
                  key={latestBlog.id}
                  href={`/blogs/${latestBlog.Slug}`}
                  className=""
                >
                  <div className="flex flex-wrap md:flex-nowrap justify-center lg:justify-normal gap-4 items-center pl-4 py-6 border-b cursor-pointer">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_API_URL}${latestBlog.FeatureImage.url}`}
                      alt={
                        latestBlog.FeatureImage.alternativeText ||
                        latestBlog.Title
                      }
                      className="w-full sm:w-[85px] h-[85px] object-contain"
                      width={85}
                      height={85}
                    />
                    <div>
                      <h3 className="max-w-[289px] text-[#222823] text-lg font-semibold font-primary capitalize line-clamp-2">
                        {latestBlog.Title}
                      </h3>
                      <p className="h-4 text-[#9d9996] text-[13px] font-normal font-primary leading-tight mt-4">
                        {new Date(latestBlog.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {/* Recent Post End here */}
          </motion.div>
        </motion.div>
        <hr className="border border-[#EAE9E8] w-full mt-32" />
        <RelatedBlogs relatedBlogs={relatedBlogs} />
      </div>
    </>
  );
};

export default BlogContent;
