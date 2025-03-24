"use client"
import React, {useState, useEffect} from "react";
import Marquee from "react-fast-marquee";
import {marqueetext} from '../../services/api';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const MarqueeSlider = () => {
  const [marqueeText, setMarqueeText] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    marqueetext().then((response)=>{
      setMarqueeText(response.data);
      setLoading(false);
    }).catch((error)=>{
      console.error('Error fetching marquee text:', error);
      setLoading(false);
      throw error;
    })
  }, []);

  if(loading){
    return(
      <div  className="bg-secondary-primary flex items-center py-[5px] text-white text-xl font-normal font-primary leading-[30px] ">
        <Skeleton height={30} width="100%"/>
      </div>
    )
  }

  return (
    <Marquee
      autoFill
      className="bg-secondary-primary flex items-center py-[5px] text-white text-xl font-normal font-primary leading-[30px] "
    >
      <div className="w-[7px] h-[7px] bg-white rounded-full mr-6 ml-6" />
      <p>
        {marqueeText.title}
      </p>
    </Marquee>
  );
};

export default MarqueeSlider;
