"use client";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { getCategories } from "../../services/api";

const CategoryList = ({ onCategorySelect, selectedCategory }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

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
        <div
          className="flex gap-3 mx-4 mt-4 cursor-pointer"
          key={category.id}
          onClick={() => onCategorySelect(category.name)}
        >
          <div
            className={`w-6 h-6 border ${
              selectedCategory === category.name
                ? "border-secondary-primary"
                : "border-divi-gray-300"
            } rounded-full flex justify-center items-center content-center`}
          >
            <div
              className={`w-4 h-4 border ${
                selectedCategory === category.name
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
        </div>
      ))}
    </div>
  );
};

export default CategoryList;