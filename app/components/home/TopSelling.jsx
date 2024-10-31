import React from "react";
import TopSellingData from "@/data/TopSellingData";
import Image from "next/image";

const TopSelling = () => {
  return (
    <section>
      <h2 className="text-center text-light-black text-4xl font-semibold font-primary capitalize mt-24">
        Top selling products
      </h2>
      <div className="2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 xl:px-[90px] sm:px-10 xs:px-5 mt-16">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {TopSellingData.map((product) => (
            <article
              className="bg-white py-10 px-6 rounded-xl shadow border border-white-card-border flex flex-col items-center"
              key={product.id}
            >
              <Image
                src={product.productImg}
                alt={product.name}
                className="w-[110px] h-[228px]"
              />
              <h3 className="mt-8 text-center text-light-black text-2xl font-semibold font-primary capitalize">
                {product.name}
              </h3>
              <p className="text-center text-grey text-base font-normal font-primary mt-4 capitalize">
                {product.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSelling;
