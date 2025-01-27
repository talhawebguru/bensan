"use client";
import React, { useEffect, useState, useRef } from "react";
import { useRouter} from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/thumbs";
import { getProductBySlug } from "@/app/services/api";
import RichTextRender from "../../components/product/RichTextRender";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion } from "framer-motion";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import Popup from "./Popup";
import { BsDownload } from "react-icons/bs";
import { LuDownload } from "react-icons/lu";
import { FaFilePdf } from "react-icons/fa";

const Page = ({params}) => {
  const router = useRouter();
  const { category, productslug } = params;
  const [product, setProduct] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (productslug) {
      const fetchProduct = async () => {
        try {
          const data = await getProductBySlug(productslug);
          setProduct(data.data[0]);
        } catch (error) {
          console.error(
            `Error fetching product with slug ${productslug}:`,
            error
          );
        } finally {
          setLoading(false);
        }
      };

      fetchProduct();
    }
  }, [productslug]);

  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleGlobalClick = (e) => {
      // Only close if clicking outside the download menu
      if (
        !e.target.closest(".download-menu") &&
        !e.target.closest(".download-button")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleGlobalClick);
    return () => document.removeEventListener("click", handleGlobalClick);
  }, []);

  if (loading) {
    return (
      <div className="xl:px-[90px] sm:px-10 xs:px-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0">
        <Skeleton height={40} width={300} className="my-10" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:px-[62px] px-5 py-10 bg-white rounded-xl shadow border border-[#e9ecef] mb-20">
          <Skeleton height={450} />
          <div className="mt-32 lg:mt-0 min-h-[600px]">
            <Skeleton height={40} width={200} />
            <div className="mt-8">
              <Skeleton count={5} />
            </div>
            <div className="flex flex-wrap justify-center gap-5 mt-3">
              <Skeleton height={56} width={164} />
              <Skeleton height={56} width={164} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const {
    Name,
    title,
    Descripition,
    Image: Images,
  } = product;

  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible">
      <motion.div
        variants={contentVariants}
        className="xl:px-[90px] sm:px-10 xs:px-5"
      >
        <h2 className="py-10 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 text-[#6c757d] text-lg font-semibold font-primary capitalize">
          {category} / products / {Name}
        </h2>
      </motion.div>
      <div className="xl:px-[90px] sm:px-10 xs:px-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0">
        <motion.div
          variants={contentVariants}
          className="grid grid-cols-1 h-auto lg:grid-cols-2 gap-10 md:px-[62px] px-5 py-10 rounded-xl  mb-20"
        >
          <motion.div variants={contentVariants} className="">
            <Swiper
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Thumbs]}
              className="mySwiper2 !h-[550px] bg-white rounded-xl shadow-[0px_4px_16px_0px_rgba(0,0,0,0.10)] border border-[#e9ecef] "
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
              {Images.map((img, index) => (
                <SwiperSlide
                  key={index}
                  className="flex justify-center items-center !h-[550px] !py-10"
                >
                  <InnerImageZoom
                    src={`${process.env.NEXT_PUBLIC_API_URL}${img.url}`}
                    alt={product.Name || `Product image ${index + 1}`}
                    imgAttributes={{
                      alt: product.Name || `Product image ${index + 1}`,
                    }}
                    className="sm:aspect-[1/1] flex justify-center items-center"
                    width={500}
                    height={550}
                    zoomType="hover"
                    zoomPreload={true}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              modules={[Thumbs]}
              className="mySwiper"
            >
              {Images.map((img, index) => (
                <SwiperSlide
                  key={index}
                  className={`!w-[100px] !h-[100px] cursor-pointer p-2.5 rounded-xl shadow-[0px_4px_16px_0px_rgba(0,0,0,0.10)] border ${
                    activeIndex === index
                      ? "bg-white border-[#e9ecef]"
                      : "!bg-[#e9ecef] border-[#e9ecef]"
                  }`}
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}${img.formats.thumbnail.url}`}
                    alt={product.Name || `Product image ${index + 1}`}
                    aria-label={product.Name || `Product image ${index + 1}`}
                    title={product.Name || `Product image ${index + 1}`}
                    className="aspect-[1/1] object-contain flex justify-center items-center"
                    width={100}
                    height={100}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
          <motion.div
            variants={contentVariants}
            className="mt-32 lg:mt-0 min-h-[600px]"
          >
            <motion.h3
              variants={contentVariants}
              className="text-[#a8366f] text-lg font-semibold font-primary capitalize mt-5"
            >
              Bensan
            </motion.h3>
            <motion.h1
              variants={contentVariants}
              className="text-black text-[32px] font-semibold font-primary capitalize "
            >
              {Name}
            </motion.h1>
            <motion.h2
              variants={contentVariants}
              className="text-black text-xl font-normal font-primary capitalize mt-5"
            >
              {title}
            </motion.h2>
            <motion.div
              variants={contentVariants}
              className="text-black text-base font-normal font-primary capitalize mt-6"
            >
              <RichTextRender content={Descripition} />
            </motion.div>
            <motion.div
              variants={contentVariants}
              className="flex flex-wrap justify-center gap-7 mt-8"
            >
              <button
                onClick={() => setIsPopupOpen(true)}
                className="w-[205px] h-[38px]  flex justify-center items-center bg-[#a8366f] rounded text-white text-base font-semibold font-primary capitalize"
              >
                Request for quote
              </button>
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMenuToggle();
                  }}
                  className="download-button w-[129px] h-[38px] bg-[#e1e1e1] rounded justify-center items-center gap-3 inline-flex text-black text-base font-semibold font-primary capitalize"
                >
                  <BsDownload /> Resource
                </button>
                {isMenuOpen && (
                  <motion.div
                    className="download-menu absolute z-50 left-0 top-9 translate-x-[-50%] translate-y-[-50%] mt-2 w-48 py-1 bg-white border border-black/10 shadow-[-26px_50px_14.100000381469727px_0px_rgba(0,0,0,0.06)] rounded-md"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ul>
                      {product.downloadTDS ? (
                        <a
                          href={`${process.env.NEXT_PUBLIC_API_URL}${product.downloadTDS.url}`}
                          rel="noopener noreferrer"
                          target="_blank"
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsMenuOpen(false); // Close menu after clicking download
                          }}
                        >
                          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between border-b border-[#dddddd]">
                            <div className="flex items-center justify-center gap-2">
                              <FaFilePdf />
                              <p className="text-light-black text-sm font-normal font-primary leading-[21px]">
                                TDS
                              </p>
                            </div>
                            <LuDownload />
                          </li>
                        </a>
                      ) : (
                        <li className="px-4 py-2 flex items-center justify-between border-b border-[#dddddd] opacity-50">
                          <div className="flex items-center justify-center gap-2">
                            <FaFilePdf />
                            <p className="text-light-black text-sm font-normal font-primary leading-[21px]">
                              TDS
                            </p>
                          </div>
                          <p className="text-sm text-gray-500">Not available</p>
                        </li>
                      )}
                      {product.downloadSDS ? (
                        <a
                          href={`${process.env.NEXT_PUBLIC_API_URL}${product.downloadSDS.url}`}
                          rel="noopener noreferrer"
                          target="_blank"
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsMenuOpen(false); // Close menu after clicking download
                          }}
                        >
                          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between border-b border-[#dddddd]">
                            <div className="flex items-center justify-center gap-2">
                              <FaFilePdf />
                              <p className="text-light-black text-sm font-normal font-primary leading-[21px]">
                                SDS
                              </p>
                            </div>
                            <LuDownload />
                          </li>
                        </a>
                      ) : (
                        <li className="px-4 py-2 flex items-center justify-between border-b border-[#dddddd] opacity-50">
                          <div className="flex items-center justify-center gap-2">
                            <FaFilePdf />
                            <p className="text-light-black text-sm font-normal font-primary leading-[21px]">
                              SDS
                            </p>
                          </div>
                          <p className="text-sm text-gray-500">Not available</p>
                        </li>
                      )}
                      {product.downloadCatalog ? (
                        <a
                          href={`${process.env.NEXT_PUBLIC_API_URL}${product.downloadCatalog.url}`}
                          rel="noopener noreferrer"
                          target="_blank"
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsMenuOpen(false); // Close menu after clicking download
                          }}
                        >
                          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between">
                            <div className="flex items-center justify-center gap-2">
                              <FaFilePdf />
                              <p className="text-light-black text-sm font-normal font-primary leading-[21px]">
                                Catalog
                              </p>
                            </div>
                            <LuDownload />
                          </li>
                        </a>
                      ) : (
                        <li className="px-4 py-2 flex items-center justify-between opacity-50">
                          <div className="flex items-center justify-center gap-2">
                            <FaFilePdf />
                            <p className="text-light-black text-sm font-normal font-primary leading-[21px]">
                              Catalog
                            </p>
                          </div>
                          <p className="text-sm text-gray-500">Not available</p>
                        </li>
                      )}
                    </ul>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        productName={Name}
      />
    </motion.div>
  );
};

export default Page;
