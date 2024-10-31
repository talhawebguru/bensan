import React from 'react'
import Image from 'next/image'
import NewArrivalsData from '@/data/NewArrivalsData'
const NewArrivals = () => {
  return (
    <section className="2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 xl:px-[90px] sm:px-10 xs:px-5 xl:mt-[100px] md:mt-20 mt-10">
      <h2 className="text-center text-light-black text-4xl font-semibold font-primary capitalize">
        New Arrivals
      </h2>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-16">
        {NewArrivalsData.map((product) => (
          <article
            key={product.id}
            className="px-6 py-10 gap-8 bg-white rounded-xl shadow border border-white-card-border flex flex-col justify-center items-center"
          >
            <div>
              <Image
                src={product.productImg}
                alt={product.name}
                className="h-full"
              />
            </div>
            <div>
              <h2 className="text-light-black text-center text-lg font-semibold font-primary capitalize">
                {product.name}
              </h2>
              <p className="text-center mt-4 text-grey text-base font-normal font-primary capitalize">
                {product.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};


export default NewArrivals;