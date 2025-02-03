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

  try {
    const data = await getCategories();
    // Find the matching category by slug
    const categoryData = data.data.find(cat => cat.slug === category);
    
    if (categoryData) {
      metaTitle = categoryData.metaTitle;
      metaDescription = categoryData.metaDescripition;
    }
  } catch (error) {
    console.error(`Error fetching category metadata:`, error);
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
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
    },
  };
}

const Page= ({params}) => {
  return (
    <>
    <CategoryPage params={params}/>
    </>
  );
};

export default Page;