"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/thumbs";
import { IoDownloadOutline } from "react-icons/io5";
import { getProductBySlug } from "@/app/services/api";
import RichTextRender from "@/app/components/product/RichTextRender";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion } from "framer-motion";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

const Page = ({ params }) => {
  const router = useRouter();
  const { category, productslug } = params;
  const [product, setProduct] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

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

  const {
    Name,
    title,
    Descripition,
    Image: Images,
    downloadCatalog,
    downloadTDS,
  } = product;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="xl:px-[90px] sm:px-10 xs:px-5">
        <h2 className="py-10 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 text-[#6c757d] text-lg font-semibold font-primary capitalize">
          products / {Name}
        </h2>
      </div>

      <div className="xl:px-[90px] sm:px-10 xs:px-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:px-[62px] px-5 py-10 bg-white rounded-xl shadow border border-[#e9ecef] mb-20">
          <div className="h-[450px]">
            <Swiper
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Thumbs]}
              className="mySwiper2"
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
              {Images.map((img, index) => (
                <SwiperSlide key={index}>
                  <InnerImageZoom
                    src={`${process.env.NEXT_PUBLIC_API_URL}${img.url}`}
                    zoomSrc={`${process.env.NEXT_PUBLIC_API_URL}${img.url}`}
                    alt={img.alternativeText || `Product image ${index + 1}`}
                    className="!object-contain"
                    width={500}
                    height={500}
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
              watchSlidesProgress
              modules={[Thumbs]}
              className="mySwiper"
            >
              {Images.map((img, index) => (
                <SwiperSlide
                  key={index}
                  className={`cursor-pointer p-2.5 rounded-xl shadow border ${
                    activeIndex === index
                      ? "bg-white border-[#e9ecef]"
                      : "!bg-[#e9ecef] border-[#e9ecef]"
                  }`}
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}${img.formats.thumbnail.url}`}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-[100px] h-[100px] object-contain"
                    width={100}
                    height={100}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="mt-32 lg:mt-0 min-h-[600px]">
            <h2 className="text-[#a8366f] text-lg font-semibold font-primary capitalize">
              {Name}
            </h2>
            <h3 className="text-[#a8366f] mt-2 text-sm font-semibold font-primary capitalize">
              {title}
            </h3>
            <div className="text-[#6c757d] text-base font-normal font-primary capitalize leading-normal mt-4">
              <RichTextRender content={Descripition} />
            </div>
            <div className="flex flex-wrap justify-center gap-5 mt-3">
              {downloadCatalog && (
                <a
                  target="_blank"
                  href={`${process.env.NEXT_PUBLIC_API_URL}${downloadCatalog.url}`}
                  className="w-[164px] h-14 bg-[#a8366f] rounded-xl flex justify-center items-center gap-3"
                  download
                >
                  <IoDownloadOutline
                    className="relative text-white"
                    size={24}
                  />
                  <div className="text-white text-lg font-semibold font-primary capitalize">
                    Catalog
                  </div>
                </a>
              )}
              {downloadTDS && (
                <a
                  target="_blank"
                  href={`${process.env.NEXT_PUBLIC_API_URL}${downloadTDS.url}`}
                  className="w-[164px] h-14 bg-[#124984] rounded-xl flex justify-center items-center gap-3"
                  download
                >
                  <IoDownloadOutline
                    className="relative text-white"
                    size={24}
                  />
                  <div className="text-white text-lg font-semibold font-primary capitalize">
                    TDS
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
