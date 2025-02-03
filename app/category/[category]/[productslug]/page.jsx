import React from "react";
import CategoryProductSlug from "@/app/components/dynamicProduct/CategoryProductSlug";
import { getProducts, getProductBySlug, getCategories, getProductsByCategory } from "@/app/services/api";

export async function generateMetadata({ params }) {
  const { category, productslug } = params;
  let metaTitle;
  let metaDescription;
  let metaRobots = "noindex, nofollow";
  let canonicalUrl = `https://bensano.com/category/${category}/${productslug}`;
  let defaultOgImage;
  let imageAlt;

  try {
    const data = await getProductBySlug(productslug);
    const product = data.data[0];
    if (product) {
      metaTitle = product.metaTitle;
      metaDescription = product.metaDescripition;
      defaultOgImage = product.Image[0].url;
      imageAlt = product.Name;
    }
  } catch (error) {
    console.error(`Error fetching product with slug ${productslug}:`, error);
  }

  return {
    title: metaTitle,
    description: metaDescription,
    robots: metaRobots,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      siteName: 'Bensan',
      type: 'website',
      images: [
        {
          url: `https://admin.bensano.com${defaultOgImage}`,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [`https://admin.bensano.com${defaultOgImage}`],
    },
  };
}

export async function generateStaticParams() {
  try {
    const categoriesData = await getCategories();
    const categories = categoriesData.data;

    const paths = [];

    for (const category of categories) {
      const productsData = await getProductsByCategory(category.slug, 1, 100); // Fetch all products for each category
      const products = productsData.data;

      products.forEach((product) => {
        paths.push({
          category: category.slug,
          productslug: product.slug,
        });
      });
    }

    return paths;
  } catch (error) {
    console.error('Error fetching categories or products:', error);
    return [];
  }
}

const Page = ({ params }) => {
  return (
    <>
      <CategoryProductSlug params={params} />
    </>
  );
};

export default Page;