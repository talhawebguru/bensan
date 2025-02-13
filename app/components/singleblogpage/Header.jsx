import React from 'react'
import * as motion from "framer-motion/client"
import Image from 'next/image'
import whoWeServeImg from "@/public/images/blogs.png"



const Header = () => {
  return (
     <div className="xl:px-[90px] sm:px-10 xs:px-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 my-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Image 
                src={whoWeServeImg} 
                alt="Operating Room Solutions" 
                className="w-full rounded-lg shadow-md"
                priority={true}
              />
            </motion.div>
        
     </div>
  )
}

export default Header