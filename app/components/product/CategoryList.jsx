"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { getCategories } from "../../services/api";
import { motion } from "framer-motion";

const CategoryList = ({ onCategorySelect, selectedCategory }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
    router.push(`/category/${category.slug}`);
    onCategorySelect(category.slug);
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
    <div className="pb-4 max-h-fit lg:pb-0">
      {categories.map((category) => (
        <motion.div
          className="flex gap-3 mx-4 mt-4 cursor-pointer"
          key={category.id}
          onClick={() => handleCategoryClick(category)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
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
            <h2 className="text-divi-gray-300 text-base font-normal font-primary leading-normal">
              {category.name}
            </h2>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CategoryList;