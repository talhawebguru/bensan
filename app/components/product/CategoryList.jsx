"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useCategories } from "@/app/context/CategoryContext";
import { motion } from "framer-motion";

const CategoryList = ({ onCategorySelect, selectedCategory }) => {
  const { categories, loading } = useCategories();
  const router = useRouter();

  const handleCategoryClick = (category) => {
    router.push(`/category/${category.slug}`, { scroll: false });
    onCategorySelect(category.slug);
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  if (loading) {
    return (
      <div className="pb-4 max-h-fit lg:pb-0">
        {[...Array(9)].map((_, index) => (
          <div className="flex gap-3 mx-4 mt-4" key={index}>
            <Skeleton circle={true} height={24} width={24} />
            <Skeleton height={24} width={150} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <motion.div 
      className="pb-4 lg:pb-0"
      variants={listVariants}
      initial="hidden"
      animate="visible"
    >
      {categories.map((category) => (
        <div
          className="flex gap-3 mx-4 mt-4 cursor-pointer"
          key={category.id}
          onClick={() => handleCategoryClick(category)}
        >
          <div
            className={`w-6 h-6 border ${
              selectedCategory === category.slug
                ? "border-secondary-primary"
                : "border-divi-gray-300"
            } rounded-full flex justify-center items-center content-center`}
          >
            <div
              className={`w-4 h-4 border ${
                selectedCategory === category.slug
                  ? "border-secondary-primary bg-secondary-primary"
                  : "border-white"
              } rounded-full`}
            ></div>
          </div>
          <div>
            <h2 className="text-[#716b66] text-base font-normal font-primary leading-normal">
              {category.name}
            </h2>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default CategoryList;