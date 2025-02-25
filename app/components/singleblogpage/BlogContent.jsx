"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProfilePhoto from "@/public/images/profileComments.png";
import PostComment from "./PostComment";
import RelatedBlogs from "./RelatedBlogs";
import { CiSearch } from "react-icons/ci";
import { getBlogBySlug, getLatestBlogs, getRelatedBlogs } from "@/app/services/api";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import RichTextRender from "./RixhTextRender";
import { motion } from "framer-motion";

const BlogContent = ({ params }) => {
  const { blogSlug } = params;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

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
              const relatedBlogsData = await getRelatedBlogs(categorySlug, blogData.slug);
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

  console.log(relatedBlogs)

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
            className="flex lg:col-span-2 flex-col gap-6"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h1
              className="text-[#222823] text-2xl md:text-4xl font-semibold font-primary capitalize"
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
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}${blog.FeatureImage.url}`}
                alt={blog.FeatureImage.alternativeText || blog.Title}
                className="w-full md:h-[530px] object-contain"
                width={800}
                height={530}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <RichTextRender content={blog.content2} />
            </motion.div>
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
            <div className="mt-5 bg-white rounded border">
              <div className="h-[60px] flex justify-start pl-4 items-center bg-[#a8366f] rounded">
                <h2 className="text-white text-xl font-semibold font-primary leading-[30px]">
                  Recent Posts
                </h2>
              </div>
              {latestBlogs.map((latestBlog) => (
                <div key={latestBlog.id} className="flex gap-4 items-center pl-4 py-6 border-b">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}${latestBlog.FeatureImage.url}`}
                    alt={latestBlog.FeatureImage.alternativeText || latestBlog.Title}
                    className="w-[85px] h-[85px]"
                    width={85}
                    height={85}
                  />
                  <div>
                    <h3 className="w-[257px] h-12 text-[#1f1813] text-base font-medium font-primary leading-normal line-clamp-2 text-ellipsis overflow-hidden">
                      {latestBlog.Title}
                    </h3>
                    <p className="w-[216px] h-4 text-[#9d9996] text-[13px] font-normal font-primary leading-tight">
                      {new Date(latestBlog.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Recent Post End here */}
          </motion.div>
        </motion.div>
        <RelatedBlogs relatedBlogs={relatedBlogs} />
      </div>
    </>
  );
};

export default BlogContent;