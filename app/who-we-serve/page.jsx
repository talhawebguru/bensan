import React from 'react'
import OperatingRoom from '../components/whoweserve/OperatingRoom'
import CSSD from '../components/whoweserve/CSSD'
import Dental from '../components/whoweserve/Dental'
import CustomerSaySlider from '../components/home/CustomerSaySlider'

const page = () => {
  return (
    <>
        <OperatingRoom />
        <CSSD />
        <Dental />
        <div className='lg:my-40 sm:my-20 my-10'>
        <CustomerSaySlider/>
        </div>
       
    </>
  )
}

export default page