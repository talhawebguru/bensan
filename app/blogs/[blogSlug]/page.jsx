import BlogContent from '@/app/components/singleblogpage/BlogContent'
import Header from '@/app/components/singleblogpage/Header'
import React from 'react'
import { getBlogBySlug } from '@/app/services/api'

export async function generateMetadata({ params }) {
  const { blogSlug } = params;
  const data = await getBlogBySlug(blogSlug);

  if (data.data && data.data.length > 0) {
    const blog = data.data[0];
    console.log(blog.Keywords)
    return {
      title: blog.metaTitle || blog.Title,
      description: blog.metaDescripition,
      alternates: {
        canonical: `https://bensano.com/blogs/${blogSlug}`,
      },
      keywords: blog.keywords
        ? blog.keywords.split(",").map(keyword => keyword.trim()) // Convert to array
        : [],
      robots: "index, follow",
      openGraph: {
        title: blog.metaTitle || blog.Title,
        description: blog.metaDescripition,
        url: `https://bensano.com/blogs/${blogSlug}`,
        type: 'article',
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_API_URL}${blog.FeatureImage.url}`,
            width: blog.FeatureImage.width,
            height: blog.FeatureImage.height,
            alt: blog.FeatureImage.alternativeText,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: blog.metaTitle || blog.Title,
        description: blog.metaDescripition || blog.content2.substring(0, 160),
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_API_URL}${blog.FeatureImage.url}`,
            alt: blog.FeatureImage.alternativeText,
          },
        ],
      },
    };
  }

  return {
    title: 'Blog not found',
    description: 'The requested blog could not be found.',
  };
}


const page = ({params}) => {
  return (
    <>
        <Header />
        <BlogContent params={params} />
        
    </>
  )
}

export default page