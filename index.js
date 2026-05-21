import{i as u,a as g,S as O,N as F,P as _,A as z,R as U}from"./assets/vendor-FZmXOfZN.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const x=document.querySelector(".order-backdrop"),W=document.querySelector(".order-modal-btn"),C=document.querySelector(".order-modal-form"),d=document.querySelector(".send-button"),c=document.querySelector("#user-name"),i=document.querySelector("#user_phone"),B=c.closest(".order-modal-form-field").querySelector(".error-message"),P=i.closest(".order-modal-form-field").querySelector(".error-message");function E(){x.classList.remove("is-open"),document.body.classList.remove("no-scroll"),C.reset(),p(c,B),p(i,P),k()}W.addEventListener("click",E);x.addEventListener("click",e=>{e.target===x&&E()});document.addEventListener("keydown",e=>{e.key==="Escape"&&E()});function w(e,t,s="Error"){e.classList.add("error"),t.textContent=s}function p(e,t){e.classList.remove("error"),t.textContent=""}d.disabled=!0;d.classList.add("disabled");function k(){const e=c.value.trim()!=="",t=/^380\d{9}$/.test(i.value.trim());d.disabled=!(e&&t),d.disabled?d.classList.add("disabled"):d.classList.remove("disabled")}function K(){let e=!0;return c.value.trim()?p(c,B):(w(c,B,"Введіть ім'я"),e=!1),/^380\d{9}$/.test(i.value.trim())?p(i,P):(w(i,P,"Введіть 12-значний номер телефону, починаючи з 380"),e=!1),k(),e}[c,i].forEach(e=>{const t=e.closest(".order-modal-form-field, .order-modal-form-comment").querySelector(".error-message");e.addEventListener("blur",()=>{e===i?/^380\d{9}$/.test(e.value.trim())||w(e,t,"Невірний формат телефону"):e.value.trim()===""?w(e,t,"Поле обов'язкове"):p(e,t),k()}),e.addEventListener("input",()=>{p(e,t),k()})});C.addEventListener("submit",async e=>{e.preventDefault();let t=null;if(t=document.querySelector(".pet-card-btn").dataset.id,!K())return;if(!t){u.error({title:"Помилка",message:"Не обрано тварину",position:"topRight"});return}const{name:s,phone:a,comment:r}=C.elements,o={name:s.value.trim(),phone:a.value.trim(),comment:r.value.trim()||void 0,animalId:t};try{await g.post("https://paw-hut.b.goit.study/api/orders",o),u.success({title:"Успішно",message:"Заявку відправлено",position:"topRight"}),E()}catch{u.error({title:"Помилка",message:"Не вдалося відправити заявку",position:"topRight"})}});const b=document.querySelector(".header-burger-btn"),l=document.querySelector(".mobile-menu-backdrop"),A=document.querySelector(".mobile-menu-close"),G=document.querySelectorAll(".mobile-menu-link, .mobile-menu-btn");if(b&&l&&A){const e=()=>{l.classList.add("is-open"),document.body.classList.add("menu-open"),b.setAttribute("aria-expanded","true")},t=()=>{l.classList.remove("is-open"),document.body.classList.remove("menu-open"),b.setAttribute("aria-expanded","false")};b.addEventListener("click",e),A.addEventListener("click",t),l.addEventListener("click",s=>{s.target===l&&t()}),G.forEach(s=>{s.addEventListener("click",t)}),document.addEventListener("keydown",s=>{s.key==="Escape"&&l.classList.contains("is-open")&&t()})}g.defaults.baseURL="https://paw-hut.b.goit.study";async function J(){const e=await g.get("api/categories");return e.data.unshift("Всі"),e.data}async function Q(e=1,t=8,s=null){const a={page:e,limit:t};return s&&(a.categoryId=s),(await g.get("/api/animals",{params:a})).data}function X(e){return e.map(t=>{const s=typeof t=="string"?t:t.name,a=t._id||"";return`
        <li class="pets-category-item">
          <button 
            class="pets-category-btn ${s==="Всі"?"pets-category-btn-active":""}" 
            type="button"
            data-category="${s}"
            data-id="${a}"
          >
            ${s}
          </button>
        </li>
      `}).join("")}function Y(e){return e.map(({image:t,species:s,name:a,categories:r,age:o,gender:n,shortDescription:$,_id:q})=>{const V=r.map(D=>`<li class="pet-card-category">${D.name}</li>`).join("");return`<li class="pet-card" >
            <img class="pet-card-img" src="${t}" alt="${s}" />
            <div class="pet-description">
              <p class="pet-card-type">${s}</p>
              <h3 class="pet-card-name">${a}</h3>
              <ul class="pet-card-category-list">
                ${V}
              </ul>
              <ul class="pet-card-descr-list">
                <li class="pet-card-age">${o}</li>
                <li class="pet-card-gender">${n}</li>
              </ul>
              <p class="pet-card-descr">
                ${$}
              </p>
            </div>
            <button class="pet-card-btn" data-id="${q}">Дізнатись більше</button>
          </li>`}).join("")}function Z(e){const{image:t,species:s,name:a,age:r,gender:o,description:n,healthStatus:$,behavior:q}=e;return`    <button class="modal-details-btn" type="button">
        <svg width="14" height="14" viewBox="0 0 14 14">
    <line x1="1" y1="1" x2="13" y2="13" stroke="currentColor" stroke-width="2"/>
    <line x1="13" y1="1" x2="1" y2="13" stroke="currentColor" stroke-width="2"/>
  </svg>
    </button>

  <div class="pet-details-content">
  <img class="pet-details-img" src="${t}" alt="${s}" />

  <div class="pet-details-info">
    <p class="pet-details-type">${s}</p>
    <h3 class="pet-details-name">${a}</h3>

    <ul class="pet-details-age-gender">
      <li class="pet-details-age">${r}</li>
      <li class="pet-details-gender">${o}</li>
    </ul>

    <h4 class="pet-details-heading">Опис:</h4>
    <p class="pet-details-text">${n}</p>

    <h4 class="pet-details-heading">Здоров’я:</h4>
    <p class="pet-details-text">${$}</p>

    <h4 class="pet-details-heading">Поведінка:</h4>
    <p class="pet-details-text">${q}</p>
  </div>
</div>

            <button class="pet-details-btn">Взяти додому</button>`}const T=document.querySelector(".pets-category"),S=document.querySelector(".pets-list"),y=document.querySelector(".add-more-cards-btn"),m=document.querySelector(".backdrop"),H=document.querySelector(".modal-details"),j=document.querySelector(".loader-text");let f=1,I=null,v=[];async function ee(){try{const e=await J();T.innerHTML=X(e)}catch{u.error({title:"Error",message:"Failed to load categories.",position:"topRight"})}}ee();async function R(){try{let e=window.innerWidth>=1440?9:8;re(),y.style.display="none";const t=await Q(f,e,I);f===1?(v=t.animals,S.innerHTML=""):v=[...v,...t.animals];const s=Y(t.animals);S.insertAdjacentHTML("beforeend",s),t.totalItems>f*e?y.style.display="block":y.style.display="none"}catch{u.error({title:"Error",message:"Oops! Something went wrong. Try again later.",position:"topRight"})}finally{oe()}}R();T.addEventListener("click",async e=>{if(!e.target.classList.contains("pets-category-btn"))return;I=e.target.dataset.id,f=1;let t=e.target;T.querySelector(".pets-category-btn-active").classList.remove("pets-category-btn-active"),t.classList.add("pets-category-btn-active"),S.innerHTML="",y.style.display="block",await R()});y.addEventListener("click",async()=>{f++,await R()});S.addEventListener("click",te);async function te(e){const t=e.target.closest(".pet-card-btn");if(!t)return;const s=t.dataset.id,a=v.find(o=>o._id===s);if(!a)return;H.innerHTML=Z(a),se(),H.querySelector(".modal-details-btn").addEventListener("click",()=>{N()})}m.addEventListener("click",e=>{e.target===m&&N()});const h=document.querySelector(".order-backdrop");document.addEventListener("click",e=>{e.target.classList.contains("pet-details-btn")&&(h.classList.add("is-open"),document.body.classList.add("no-scroll"),m.classList.contains("is-open")&&m.classList.remove("is-open"))});h.addEventListener("click",e=>{e.target===h&&(h.classList.remove("is-open"),document.body.classList.remove("no-scroll"))});function se(){m.classList.add("is-open"),document.body.classList.add("no-scroll")}function N(){m.classList.remove("is-open"),document.body.classList.remove("no-scroll")}function re(){j.style.display="block"}function oe(){j.style.display="none"}const ae=document.querySelector(".js-about-swiper");ae&&new O(".js-about-swiper",{modules:[F,_],slidesPerView:1,spaceBetween:0,speed:600,loop:!1,grabCursor:!0,navigation:{nextEl:".about-swiper-next",prevEl:".about-swiper-prev",disabledClass:"is-disabled"},pagination:{el:".about-swiper-pagination",clickable:!0}});new z(".accordion-container",{duration:400,showMultiple:!1});const ne=g.create({baseURL:"https://paw-hut.b.goit.study/api/",params:{page:4,limit:10}});async function ie(){try{const{data:e}=await ne.get("/feedbacks");return e.feedbacks}catch{return null}}function ce(e){const t=document.querySelector(".stories-section .stories-wrapper"),s=e.map(({description:a,rate:r,author:o})=>`
        <div class="swiper-slide">
          <div class="star-rating" data-score="${r}"></div>     
          <p class="storie-text">${a}</p>
          <p class="storie-names">${o}</p>  
        </div>`).join("");t.insertAdjacentHTML("beforeend",s),document.querySelectorAll(".star-rating").forEach(a=>{new U(a,{starType:"svg",readOnly:!0}).init()})}const le=document.querySelector(".stories-loader"),de=document.querySelector(".stories-section .stories-controls");function M(e){u.info({message:e,position:"topRight",color:"#f2aaaaff",icon:!1,progressBar:!1,messageColor:"black"})}function L(){le.classList.remove("loader")}function ue(){de.classList.remove("visually-hidden")}window.addEventListener("DOMContentLoaded",async()=>{try{let e=await ie();if(e===null){M("Не вдалося завантажити історії. Спробуйте пізніше"),L();const s=document.querySelector(".stories-section .stories-wrapper");s&&(s.innerHTML='<p class="error-swiper">Не вдалося завантажити історії</p>');return}if(e.length===0){M("Нажаль, історії зараз недоступні"),L();const s=document.querySelector(".stories-section .stories-wrapper");s&&(s.innerHTML='<p class="error-swiper">Нажаль, історії зараз недоступні</p>');return}ce(e);const t=new O(".stories-section .stories-swiper",{direction:"horizontal",loop:!1,speed:400,spaceBetween:32,pagination:{el:".stories-section .stories-pagination",clickable:!0,dynamicBullets:!0},navigation:{nextEl:".stories-section .stories-button-next",prevEl:".stories-section .stories-button-prev"},breakpoints:{768:{slidesPerView:2}}});ue(),L()}catch{M("Cталась помилка. Спробуйте пізніше");const t=document.querySelector(".stories-section .stories-wrapper");t&&(t.innerHTML='<p class="error-swiper">Нажаль, історії зараз недоступні</p>'),L()}});
//# sourceMappingURL=index.js.map
