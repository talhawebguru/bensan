import CategoryPage from "@/app/components/dynamicProduct/CategoryPage";
import { getCategories, getProductsByCategory, getProducts } from "@/app/services/api";


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
      images: [
        {
          url: 'https://bensano.com/_next/static/media/Logo.ddeb78f7.svg',
          width: 800,
          height: 600,
          alt: 'Bensan Logo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@bensano',
      title: metaTitle,
      description: metaDescription,
      images: ['https://bensano.com/_next/static/media/Logo.ddeb78f7.svg'],
    },
  };
}

async function Page({params}){
    // Fetch category data
    let categoryData = null;
    let productsData = null;
  
    try {
      const data = await getCategories();
      // Find the matching category by slug
      categoryData = data.data.find(cat => cat.slug == params.category);
      
      // Fetch products for schema markup
      if (params.category === "all-products") {
        const productsResponse = await getProducts(1, 10);
        productsData = productsResponse.data;
      } else {
        const productsResponse = await getProductsByCategory(params.category, 1, 10);
        productsData = productsResponse.data;
      }
    } catch (error) {
      console.error(`Error fetching category data:`, error);
    }

  // Generate schema markup
  const generateSchemaMarkup = () => {
    if (!productsData || productsData.length === 0) return null;

    const baseUrl = "https://bensano.com";
    const categoryUrl = `${baseUrl}/category/${params.category}`;
    
    // Handle category name for all-products case
    const categoryName = params.category === "all-products" 
      ? "All Products" 
      : (categoryData?.name || categoryData?.slug?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || params.category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()));
    
    const categoryDescription = params.category === "all-products"
      ? "Explore Bensan's complete range of high-quality healthcare solutions designed to ensure safety and infection control in healthcare environments."
      : (categoryData?.metaDescripition || categoryData?.description || `Explore Bensan's high-quality ${categoryName.toLowerCase()} solutions designed to ensure safety and infection control in healthcare environments.`);
    
    const schema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": categoryUrl,
      "url": categoryUrl,
      "name": categoryName,
      "description": categoryDescription,
      "publisher": {
        "@type": "Organization",
        "name": "Bensan",
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/_next/static/media/Logo.ddeb78f7.svg`
        }
      },
      "mainEntity": {
        "@type": "ItemList",
        "itemListOrder": "https://schema.org/ItemListOrderAscending",
        "numberOfItems": productsData.length,
        "itemListElement": productsData.map((product, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "url": `${baseUrl}/category/${params.category}/${product.slug}`,
          "item": {
            "@type": "Product",
            "name": product.Name,
            "image": product.Image && product.Image[0] ? `${process.env.NEXT_PUBLIC_API_URL}${product.Image[0].url}` : `${baseUrl}/images/placeholder.png`,
            "description": product.metaDescripition || product.title || product.description || `High-quality ${product.Name} from Bensan for healthcare applications.`,
            "sku": product.sku || product.SKU || `BEN-${product.id}`,
            "brand": { 
              "@type": "Brand", 
              "name": "Bensan" 
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "13"
            }
          }
        }))
      }
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
      {generateSchemaMarkup()}
      <CategoryPage params={params} categoryData={categoryData} />
    </>
  );
};

export default Page;