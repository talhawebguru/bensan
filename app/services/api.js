import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getProducts = async () => {
  try {
    const response = await api.get('/api/products?populate=*');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getProductBySlug = async (slug) => {
  try {
    const response = await api.get(`/api/products?filters[slug][$eq]=${slug}&populate=*`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with slug ${slug}:`, error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await api.get('/api/categories?sort=id:desc');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const getTopSellingProducts = async () => {
  try{
    const response = await api.get('/api/top-selling-products?populate[products][populate]=Image');
    return response.data;
  }
  catch(error){
    console.error('Error fetching top selling products:', error);
    throw error;
  }
}
export const getNewArrivalsProduct = async() =>{
  try{
    const response =  await api.get('/api/new-arrivals?populate[products][populate]=Image');
    return response.data;
  }
  catch(error){
    console.error('Error fetching New Arrivals products:', error);
    throw error;
  }
}