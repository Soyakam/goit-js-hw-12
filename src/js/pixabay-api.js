export function getImages(query) {
  const API_KEY = "43032370-bcf3e6db34194155efa6e28b4";
  const baseURL = "https://pixabay.com/api/?";
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  });
  const URL = baseURL + params;
  return fetch(URL).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}