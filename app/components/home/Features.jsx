import React from 'react';
import InnovationIcon from "@/public/images/Innovation.svg";
import EasyToUseIcon from "@/public/images/EasyToUseIcon.svg";
import SafetyIcon from "@/public/images/SafetyIcon.svg";
import SustainabilityIcon from "@/public/images/SustainabilityIcon.svg";
import FeaturesBox from './FeaturesBox';

const Features = () => {
  return (
    <section className='2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 xl:px-[90px] sm:px-10 xs:px-5 mt-16'>
      <div className='grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-16'>
        <FeaturesBox 
          icon={InnovationIcon} 
          title="Innovation" 
          para="Developing advanced solutions that redefine healthcare practices for improved outcomes." 
        />
        <FeaturesBox 
          icon={EasyToUseIcon} 
          title="Ease of Use" 
          para="Providing simple and effective tools designed for seamless healthcare workflows" 
        />
        <FeaturesBox 
          icon={SafetyIcon} 
          title="Safety and Compliance" 
          para="Adhering to the highest safety standards and regulatory requirements to provide trusted solutions." 
        />
        <FeaturesBox 
          icon={SustainabilityIcon} 
          title="Sustainability" 
          para="Committed to reducing environmental impact with eco-friendly innovations." 
        />
      </div>
    </section>
  );
};

export default Features;