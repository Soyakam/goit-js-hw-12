import{a as f,S as g,i as l}from"./assets/vendor-f736e62a.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function c(i,r){const s="https://pixabay.com/api/",e={key:"43032370-bcf3e6db34194155efa6e28b4",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,language:"en",pageSize:15,page:r};return(await f.get(s,{params:e})).data}const m=document.querySelector(".gallery");function y(i){const r=i.map(o=>`<li class="gallery-item">
  <a class="gallery-link"
    href="${o.largeImageURL}"
    ><img
      src="${o.webformatURL}"
      alt="${o.tags}"
  />
  <ul class="img-dscr">
    <li>
      <p><b>Likes</b> ${o.likes}</p>
    </li>
    <li>
      <p><b>Views</b> ${o.views}</p>
    </li>
    <li>
      <p><b>Comments</b> ${o.comments}</p>
    </li>
    <li>
      <p><b>Downloads</b> ${o.downloads}</p>
    </li>
  </ul>
  </a>
</li>

`).join("");m.insertAdjacentHTML("beforeend",r),new g(".gallery-link",{captionsData:"alt",captionDelay:250})}const u=document.querySelector(".form"),n=document.querySelector("input"),d=document.querySelector(".loader"),p=document.querySelector(".load-more-button");u.addEventListener("submit",async i=>{i.preventDefault();const r=n.value.trim();s(),u.addEventListener("submit",async e=>{r=n.value.trim(),n.innerHTML=" ";const t=await c(r,1);renderImages(t.images),s()}),p.addEventListener("click",o);async function o(){const e=await c(r,1);renderImages(e.images),s()}if(r==="")return l.warning({title:"Caution",message:"Please complete the field!",position:"topRight"});function s(){p.classList.remove("hidden")}d.classList.add("is-open"),m.innerHTML="";try{const e=await c(r);e.hits.length===0?l.info({title:"Sorry",message:"There are no images matching your search query. Please try again!",position:"topRight"}):y(e.hits)}catch(e){console.error("Error fetching images:",e),l.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topRight"})}finally{d.classList.remove("is-open"),n.value=""}});
//# sourceMappingURL=commonHelpers.js.map
