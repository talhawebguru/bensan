import React from "react";
import * as motion from "framer-motion/client"

const SocialMedia = ({ icon }) => {
  return (
    <motion.div 
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ 
        duration: 0.2,
        type: "spring",
        stiffness: 300
      }}
      className="w-9 h-9 flex justify-center items-center bg-white rounded-[100px] border border-white text-secondary-primary cursor-pointer" 
      aria-label="Social Icons"
    >
      {icon}
    </motion.div>
  );
};

export default SocialMedia;
