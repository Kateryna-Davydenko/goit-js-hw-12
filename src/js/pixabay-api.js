const URL = 'https://pixabay.com/api/';
const API_KEY = '45091921-bafbe55c990439d7032dec8c8';

export async function searchGalleryQuery(query, page = 1) {
  try {
    const response = await axios.get(URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: 15,
      },
    });
    return response.data;
  } catch (error) {
    iziToast.error('Error fetching images:', error);
    throw error;
  }
}
