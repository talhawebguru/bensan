import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Placeholder from "@/public/placeholder.png"; // Adjust the path as necessary

const VariationProducts = ({ variations }) => {
  const [selectedVariation, setSelectedVariation] = useState(0);

  // Add check to prevent errors if variations is undefined or empty
  if (!variations || variations.length === 0) {
    return null;
  }

  const handleVariationClick = (index) => {
    setSelectedVariation(index);
  };

  return (
    <motion.div
      className="bg-[#f7f9fc] my-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="py-14 xl:px-[90px] sm:px-10 xs:px-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0">
        <motion.h2
          className="text-black text-3xl font-semibold font-primary capitalize mb-5 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          Ordering Information
        </motion.h2>
        <motion.div
          className="flex flex-col md:flex-row gap-10 justify-center place-items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Variations List */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-3 w-full">
              {variations.map((variation, index) => (
                <motion.div
                  key={variation.id}
                  onClick={() => handleVariationClick(index)}
                  className={`cursor-pointer w-full max-w-[505px] h-[78px] flex flex-col justify-center px-4 border ${
                    selectedVariation === index
                      ? "bg-[#A8366F] text-white border-[#A8366F]"
                      : "bg-neutral-50 text-black border-[#b4b4b4]"
                  } rounded-md`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  viewport={{ once: true }}
                >
                  <h2
                    className={`text-lg font-normal font-primary capitalize ${
                      selectedVariation === index ? "text-white" : "text-black"
                    }`}
                  >
                    {variation.content}
                  </h2>
                  <h3
                    className={`text-sm ${
                      selectedVariation === index
                        ? "text-white"
                        : "text-[#6c757d]"
                    }`}
                  >
                    Reorder No: {variation.reorderNo}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Product Image */}
          <motion.div
            className="flex-1 flex justify-center items-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedVariation}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex justify-center items-center"
              >
                <Image
                  src={
                    variations[selectedVariation]?.productImg?.url
                      ? `${process.env.NEXT_PUBLIC_API_URL}${variations[selectedVariation]?.productImg?.url}`
                      : Placeholder
                  }
                  alt={
                    variations[selectedVariation]?.productImg
                      ?.alternativeText || "Product Image"
                  }
                  width={500}
                  height={500}
                  className="object-contain max-w-full h-[450px] transition-transform duration-300 ease-in-out hover:scale-105"
                  priority
                  placeholder={
                    variations[selectedVariation]?.productImg?.url
                      ? undefined
                      : "blur"
                  }
                  blurDataURL={
                    variations[selectedVariation]?.productImg?.url
                      ? undefined
                      : Placeholder.src
                  }
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default VariationProducts;
