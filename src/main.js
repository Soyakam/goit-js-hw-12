import { getImages } from "./js/pixabay-api";
import { createMarkUp, galleryEl } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const formEl = document.querySelector(".form");
const inputEl = document.querySelector("input");
const loaderEl = document.querySelector(".loader");
const  btnLoadMore = document.querySelector('.load-more-button')

let query;

formEl.addEventListener("submit", async event => {
    event.preventDefault();
    
    const query = inputEl.value.trim();
    showLoadMore() 

formEl.addEventListener('submit', async event => {
    
   
query = inputEl.value.trim();
    inputEl.innerHTML = ' ';
    const data = await getImages(query, 1);
    renderImages(data.images); 
        showLoadMore() 

})
    
    btnLoadMore.addEventListener('click', onLoadMoreClick)
     async function onLoadMoreClick() {
        const data = await getImages(query,1)
renderImages(data.images); 
        showLoadMore() 

   }

    if (query === "") {
      return iziToast.warning({
      title: "Caution",
      message: "Please complete the field!",
        position: "topRight",
      });
    }


    function showLoadMore() {
        btnLoadMore.classList.remove('hidden')
    }
     function hideLoadMore() { 
        btnLoadMore.classList.add('hidden') 
    } 
   loaderEl.classList.add("is-open");
  galleryEl.innerHTML = "";

  try {
    const response = await getImages(query);
    if (response.hits.length === 0) {
      iziToast.info({
        title: "Sorry",
        message:
          "There are no images matching your search query. Please try again!",
        position: "topRight",
      });
    } else {
      createMarkUp(response.hits);
    }
  } catch (error) {
    console.error("Error fetching images:", error);
    iziToast.error({
      title: "Error",
      message: "An error occurred while fetching images. Please try again later.",
      position: "topRight",
    });
  } finally {
    loaderEl.classList.remove("is-open");
    inputEl.value = "";
  }
});