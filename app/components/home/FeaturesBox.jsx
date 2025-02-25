import React from "react";
import Image from "next/image";

const FeaturesBox = ({ icon, title, para }) => {
  return (
    <article className="flex flex-col items-center">
      <Image src={icon} alt={`${title} icon`} />
      <h2 className="mt-6 text-center text-[#222823] text-lg font-semibold font-primary capitalize leading-[27px]">
        {title}
      </h2>
      <p className="mt-4 text-center text-[#6c757d] text-base font-normal font-primary capitalize leading-normal xs:w-[89%] w-[75%] ">
        {para}
      </p>
    </article>
  );
};



export default FeaturesBox;
