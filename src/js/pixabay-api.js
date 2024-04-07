

import axios from 'axios';


export async function getImages(query,currentPage){
  const BASE_URL = 'https://pixabay.com/api/';
  const url = BASE_URL;

  const params= {
    key: '43032370-bcf3e6db34194155efa6e28b4',
    q: query,
    lang: 'en',
    per_page: 15,
    page: currentPage,

  };
  const apiRes = await axios.get(url,{params});
  return apiRes.data;
};