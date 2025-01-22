import React from "react";
import CategoryProductSlug from "@/app/components/dynamicProduct/CategoryProductSlug";
import { getProductBySlug } from "@/app/services/api";

export async function generateMetadata({ params }) {
  const { productslug } = params;
  let metaTitle = "Default Title";
  let metaDescription = "Default description";
  let metaRobots = "noindex, nofollow";

  try {
    const data = await getProductBySlug(productslug);
    const product = data.data[0];
    if (product) {
      metaTitle = product.metaTitle || metaTitle;
      metaDescription = product.metaDescripition || metaDescription;
    }
  } catch (error) {
    console.error(`Error fetching product with slug ${productslug}:`, error);
  }

  return {
    title: metaTitle,
    description: metaDescription,
    robots: metaRobots,
  };
}
const page = ({params}) => {
  return (
    <>
      <CategoryProductSlug params={params} />
    </>
  );
};

export default page;
