import axios from 'axios';


export async function getImages(query, currentPage) {

  const baseURL = "https://pixabay.com/api/";
  const  url = baseURL
 
  const params = {
    key: '43032370-bcf3e6db34194155efa6e28b4',
    q: query,
    image_type: "photo",
    orientation: "horizontal",
      safesearch: true,
      language: 'en',
      pageSize: 15,
      page: currentPage,
  };
   

  const apiRes = await axios.get(url,{params});
  return apiRes.data;
};