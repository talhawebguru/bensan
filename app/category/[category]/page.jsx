import CategoryPage from "@/app/components/dynamicProduct/CategoryPage";
import { getCategories } from "@/app/services/api";

import React from "react";


export async function generateStaticParams() {
  const data = await getCategories();
  
  return data.data.map((category) => ({
    category: category.slug,
  }));
}

const Page= ({params}) => {


  return (
    <>
    <CategoryPage params={params}/>
    </>
  );
};

export default Page;