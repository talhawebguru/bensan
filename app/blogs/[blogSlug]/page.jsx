import BlogContent from '@/app/components/singleblogpage/BlogContent'
import Header from '@/app/components/singleblogpage/Header'
import React from 'react'
import { getBlogBySlug, getBlogs } from '@/app/services/api'

export async function generateMetadata({ params }) {
  const { blogSlug } = params;
  const data = await getBlogBySlug(blogSlug);

  if (data.data && data.data.length > 0) {
    const blog = data.data[0];
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
        site: '@bensano',
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
    title: 'Wait 5 min not found Now',
    description: 'The requested blog could not be found. wait 5 min',
  };
}

export async function generateStaticParams() {
  try {
    const data = await getBlogs();
    return data.data.map((blog) => ({
      blogSlug: blog.Slug,
    }));
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}



const page = async ({params}) => {
  const { blogSlug } = params;
  let blogData = null;

  try {
    const data = await getBlogBySlug(blogSlug);
    if (data.data && data.data.length > 0) {
      blogData = data.data[0];
    }
  } catch (error) {
    console.error('Error fetching blog data:', error);
  }

  // Generate Article Schema
  const generateArticleSchema = () => {
    if (!blogData) return null;

    const baseUrl = "https://bensano.com";
    const blogUrl = `${baseUrl}/blogs/${blogSlug}`;
    
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": blogData.Title,
      "description": blogData.metaDescripition || blogData.content2?.substring(0, 160) || `Read about ${blogData.Title} on Bensan's blog.`,
      "url": blogUrl,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": blogUrl
      },
      "publisher": {
        "@type": "Organization",
        "name": "Bensan",
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/_next/static/media/Logo.ddeb78f7.svg`
        }
      },
      "author": {
        "@type": "Person",
        "name": blogData.author || "Saqib Naveed Mirza",
        "sameAs": blogData.authorLink || "https://www.linkedin.com/in/saqib-naveed-mirza/"
      },
      "datePublished": blogData.publishedAt || blogData.createdAt,
      "dateModified": blogData.updatedAt || blogData.publishedAt || blogData.createdAt,
      "image": blogData.FeatureImage ? `${process.env.NEXT_PUBLIC_API_URL}${blogData.FeatureImage.url}` : `${baseUrl}/_next/static/media/Logo.ddeb78f7.svg`
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
      />
    );
  };

  // Generate BreadcrumbList Schema
  const generateBreadcrumbSchema = () => {
    if (!blogData) return null;

    const baseUrl = "https://bensano.com";
    const blogUrl = `${baseUrl}/blogs/${blogSlug}`;
    
    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": baseUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blogs",
          "item": `${baseUrl}/blogs`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": blogData.Title,
          "item": blogUrl
        }
      ]
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
      />
    );
  };

  // Generate FAQ Schema
  const generateFAQSchema = () => {
    if (!blogData || !blogData.faqs || blogData.faqs.length === 0) return null;

    const baseUrl = "https://bensano.com";
    const blogUrl = `${baseUrl}/blogs/${blogSlug}`;
    
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${blogUrl}#faq`,
      "url": blogUrl,
      "name": `${blogData.Title} FAQ`,
      "mainEntity": blogData.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
      />
    );
  };

  return (
    <>
        {generateArticleSchema()}
        {generateBreadcrumbSchema()}
        {generateFAQSchema()}
        <Header />
        <BlogContent params={params} />
        
    </>
  )
}

export default page