import CategoryPage from "@/app/components/dynamicProduct/CategoryPage";
import { getCategories } from "@/app/services/api";


export async function generateStaticParams() {
  try {
    const data = await getCategories();
    return data?.data?.map((category) => ({
      category: category.slug,
    })) || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}


export async function generateMetadata({ params }) {
  const { category } = params;
  let metaTitle;
  let metaDescription;
  let metaRobots = "index, follow";
  let canonicalUrl = "https://bensano.com/category/" + category;
  let metaKeywords;

  try {
    const data = await getCategories();
    // Find the matching category by slug
    const categoryData = data.data.find(cat => cat.slug === category);
    
    if (categoryData) {
      metaTitle = categoryData.metaTitle;
      metaDescription = categoryData.metaDescripition;
      metaKeywords = categoryData.metaKeyword;
    }
  } catch (error) {
    console.error(`Error fetching category metadata:`, error);
  }

  return {
    title: metaTitle,
    description: metaDescription,
    robots: metaRobots,
    keywords: metaKeywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      siteName: 'Bensan',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@bensano',
      title: metaTitle,
      description: metaDescription,
    },
  };
}

async function Page({params}){
    // Fetch category data
    let categoryData = null;
  
    try {
      const data = await getCategories();
      // Find the matching category by slug
      categoryData = data.data.find(cat => cat.slug == params.category);
    } catch (error) {
      console.error(`Error fetching category data:`, error);
    }
  return (
    <>
    <CategoryPage params={params} categoryData={categoryData} />
    </>
  );
};

export default Page;