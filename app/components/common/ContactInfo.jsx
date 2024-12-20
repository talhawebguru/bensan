import React from "react";

const ContactInfo = ({ icon, info, className }) => {
  return (
    <div className="flex gap-3">
      <div className="w-[27px] h-[27px] p-1.5 bg-white text-secondary-primary rounded-[30px] justify-center items-center gap-2.5 inline-flex">
        {icon}
      </div>
      <p className={`${className} text-base font-normal font-primary  leading-normal w-auto`}>
        {info}
      </p>
    </div>
  );
};

export default ContactInfo;
