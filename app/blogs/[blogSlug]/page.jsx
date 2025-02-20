import BlogContent from '@/app/components/singleblogpage/BlogContent'
import Header from '@/app/components/singleblogpage/Header'
import React from 'react'

const page = ({params}) => {
  return (
    <>
        <Header />
        <BlogContent params={params} />
        
    </>
  )
}

export default page