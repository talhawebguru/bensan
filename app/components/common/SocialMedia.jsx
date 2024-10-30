import React from "react";

const SocialMedia = ({ icon }) => {
  return (
    <div className="w-9 h-9 flex justify-center items-center bg-white rounded-[100px] border border-white text-secondary-primary" aria-label="Social Icons">
      {icon}
    </div>
  );
};

export default SocialMedia;
