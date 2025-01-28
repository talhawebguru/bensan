import React from 'react'
import ResourceCenter from '@/app/components/resource-center/ResourceCenter'

export const metadata = {
  title: "Resource Center | TDS & SDS for Bensan Products",
  description: "Access the Resource Center for Bensan by Safecare Industry. Download TDS and SDS files for all products, ensuring safe and informed usage across healthcare environments.",
  alternates: {
    canonical: 'https://bensano.com/resource-center',
  },
};

const page = () => {
  return (
    <>
    <ResourceCenter />
    </>
  )
}

export default page