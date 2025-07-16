import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  // headers: {
  //   'ngrok-skip-browser-warning': 'true'
  // }
});

export const getProducts = async (page = 1, pageSize, searchQuery = '') => {
  try {
    const searchFilter = searchQuery ? `&filters[Name][$containsi]=${searchQuery}` : '';
    const response = await api.get(`/api/products?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}${searchFilter}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getProductBySlug = async (slug) => {
  try {
    const response = await api.get(`/api/products`, {
      params: {
        'filters[slug][$eq]': slug,
        'populate[0]': 'Image',
        'populate[1]': 'categories',
        'populate[2]': 'downloadCatalog',
        'populate[3]': 'downloadTDS',
        'populate[4]': 'downloadSDS',
        'populate[5]': 'materialCompatibility',
        'populate[6]': 'variations',
        'populate[7]': 'variations.productImg'
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with slug ${slug}:`, error);
    throw error;
  }
};

export const getProductsByCategory = async (categorySlug, page = 1, pageSize = 25, searchQuery = '') => {
  try {
    const searchFilter = searchQuery ? `&filters[Name][$containsi]=${searchQuery}` : '';
    const response = await api.get(`/api/products?populate=*&filters[categories][slug][$eq]=${categorySlug}&pagination[page]=${page}&pagination[pageSize]=${pageSize}${searchFilter}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching products for category ${categorySlug}:`, error);
    throw error;
  }
};

export const getRelatedProductsByCategory = async (categorySlug, excludeProductSlug, limit = 5) => {
  try {
    const response = await api.get(`/api/products`, {
      params: {
        'populate': '*',
        'filters[categories][slug][$eq]': categorySlug,
        'filters[slug][$ne]': excludeProductSlug,
        'pagination[limit]': limit,
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching products for category ${categorySlug}:`, error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await api.get('/api/categories?sort=name:asc');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const getTopSellingProducts = async () => {
  try {
    const response = await api.get('/api/top-selling-products?populate[products][populate]=Image');
    return response.data;
  } catch (error) {
    console.error('Error fetching top selling products:', error);
    throw error;
  }
};

export const getNewArrivalsProduct = async () => {
  try {
    const response = await api.get('/api/new-arrivals?populate[products][populate]=Image');
    return response.data;
  } catch (error) {
    console.error('Error fetching New Arrivals products:', error);
    throw error;
  }
};

export const getBlogs = async (page = 1, pageSize = 25, searchQuery = '') => {
  try {
    const searchFilter = searchQuery ? `&filters[Title][$containsi]=${searchQuery}` : '';
    const response = await api.get(`/api/blogs?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}${searchFilter}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};
export const getLatestBlogs = async (limit = 3) => {
  try {
    const response = await api.get(`/api/blogs?populate=*&sort=createdAt:desc&pagination[limit]=${limit}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching latest blogs:', error);
    throw error;
  }
};

export const getRelatedBlogs = async (categorySlug, excludeBlogSlug, limit = 3) => {
  try {
    // Check if categorySlug exists
    if (!categorySlug) {
      console.warn('No category slug provided for related blogs');
      return { data: [] };
    }
    
    const response = await api.get(`/api/blogs`, {
      params: {
        'populate': '*',
        'filters[category][slug][$eq]': categorySlug,
        'filters[Slug][$ne]': excludeBlogSlug,
        'pagination[limit]': limit,
        'sort': 'createdAt:desc'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching related blogs:', error);
    console.error('Error details:', error.response?.data || error.message);
    return { data: [] }; // Return empty data instead of throwing
  }
};

export const getBlogBySlug = async (slug) => {
  try {
    const response = await api.get(`/api/blogs`, {
      params: {
        'populate': '*',
        'filters[Slug][$eq]': slug
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching blog with slug ${slug}:`, error);
    throw error;
  }
};


export const sendEmail = async (formData) => {
  try {
    const response = await api.post('/api/contact/send-email', formData);
    return response.data;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
export const inquirySendEmail = async (formData) => {
  try {
    const response = await api.post('/api/inquiry/send-email', formData);
    return response.data;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

export const marqueetext = async () =>{
  try{
    const response = await api.get('/api/marquee-text');
    return response.data;
  }catch(error){
    console.error('Error fetching marquee text:', error);
    throw error;
  }
}
