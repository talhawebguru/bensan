import React from 'react'
import OperatingRoom from '../components/whoweserve/OperatingRoom'
import CSSD from '../components/whoweserve/CSSD'
import Dental from '../components/whoweserve/Dental'
import CustomerSaySlider from '../components/home/CustomerSaySlider'
import GPA from '../components/whoweserve/GPA'
import Endoscopy from '../components/whoweserve/Endoscopy'

export const metadata = {
  title: "Who We Serve | Bensan Infection Control Solutions",
  description: "Bensan serves hospitals, dental clinics, endoscopy units, operating rooms, CSSD, and patient areas with advanced infection control solutions for safety and hygiene.",
  alternates: {
    canonical: 'https://bensano.com/who-we-serve',
  },
  robots: "index, follow"
};

const page = () => {
  return (
    <>
        <OperatingRoom />
        <CSSD />
        <GPA />
        <Endoscopy />
        <Dental />
        <div className='lg:my-40 sm:my-20 my-10'>
        <CustomerSaySlider/>
        </div> 
    </>
  )
}

export default page