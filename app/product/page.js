import React from "react";

const page = () => {
  return (
    <>
      <div classname="xl:px-[90px] sm:px-10 xs:px-5">
        <h2 className=" py-10 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 text-[#6c757d] text-lg font-semibold font-primary capitalize">
          products / skin & hands / spiritus
        </h2>
      </div>

      <div className="xl:px-[90px] sm:px-10 xs:px-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0">
        <div className="grid grid-cols-2  px-[62px] py-10 bg-white rounded-xl shadow border border-[#e9ecef]">
          <div>image</div>
          <div>Descri</div>
        </div>
      </div>
    </>
  );
};

export default page;
