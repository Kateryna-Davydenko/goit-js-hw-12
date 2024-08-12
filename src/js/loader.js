// export function toggleLoader(isVisible) {
//   const loader = document.querySelector('.loader');
//   if (loader) {
//     if (isVisible) {
//       loader.style.display = 'inline-block';
//     } else {
//       loader.style.display = 'none';
//     }
//   }
// }

import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '45091921-bafbe55c990439d7032dec8c8';

axios.defaults.baseURL = BASE_URL;

function getNews({ page = 1, pageSize = 15, q = '' } = {}) {
  return axios
    .get({
      params: {
        page,
        pageSize,
        q,
        apiKey: API_KEY,
      },
    })
    .then(({ data }) => data);
}
export { getNews };
