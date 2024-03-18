let e;var t=globalThis,n={},a={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequired7c6=o),o.register,o("f4Zwh");var i=(o("f4Zwh"),o("f4Zwh"));const l=document.querySelector(".modal-window"),s=document.querySelector(".inner-modal-content"),r=document.querySelector(".modal-overlay"),d=()=>{l.classList.add("hidden"),r.classList.remove("active")},c=async e=>{try{let t=await (0,i.fetchMoviesByID)(e),n=`
      <div>
        <img class="modal-image" src="https://image.tmdb.org/t/p/w500/${t.poster_path}" alt="${t.title}" />
      </div>
      <div class="modal-description">
        <h1>${t.title}</h1>
        <div class="modal-rates">
          <div class="modal-rates__titles">
            <p>Vote/Votes</p>
            <p>Popularity</p>
            <p>Original Title</p>
            <p>Genre</p>
          </div>
          <div class="modal-rates__results">
            <p><span class="modal-rates__vote">${t.vote_average}</span> / <span class="modal-rates__allvotes">${t.vote_count}</span></p>
            <p>${t.popularity}</p>
            <p>${t.original_title}</p>
            <p>${t.genres.map(e=>e.name).join(", ")}</p>
          </div>
        </div>
        <div class="modal-about">
          <dt>ABOUT</dt>
          <dd>${t.overview}</dd>
        </div>
        <div class="modal-button-window">
          <button class="button-standard modal-button modal-button__queue add" data-movie-id="${e}" type="button" class="add-to-watched"  id="watched-btn">ADD TO WATCHED</button>
          <button class="button-standard modal-button modal-button__queue add" data-movie-id="${e}" type="button" class="add-to-queue" id="queue-button">ADD TO QUEUE</button>
        </div>
      </div>
    `;s.innerHTML=n,l.classList.remove("hidden"),r.classList.add("active"),r.addEventListener("click",()=>{d()}),document.querySelector("#close-modal").addEventListener("click",()=>{d()})}catch(e){console.error("Error fetching movie details:",e)}},u=document.querySelector(".movie__list"),m=document.querySelector("#prevPopular"),p=document.querySelector("#nextPopular");document.querySelector(".pagination_for_query"),document.querySelector(".pagination");const y=document.querySelector(".paginatorPopular"),v=document.querySelector(".paginatorQuery"),h=document.querySelector(".modal-window");document.querySelector(".inner-modal-content");const g=document.querySelector(".modal-overlay"),f=document.querySelector(".paginator-ul");console.log(f);let w=1;const b=()=>{h.classList.add("hidden"),g.classList.remove("active")};(0,i.fetchPopularMovies)(w).then(e=>E(e)).catch(e=>console.error(e));const E=async e=>{m.style.display="none",p.style.display="none",function(e,t){let n,a="",o=t-2,i=t+2;t>1&&(m.style.display="block"),t>3&&!(window.innerWidth>=320&&window.innerWidth<=767)&&(a+='<li class="numb" onclick="goToPage(1)"><span>1</span></li><li class="dots"><span>...</span></li>'),o<1&&(o=1),i>100&&(i=100);for(let e=o;e<=i;e++)n=t===e?"active":"",a+=`<li class="numb ${n}" onclick="goToPage(${e})"><span>${e}</span></li>`;t<e-2&&!(window.innerWidth>=320&&window.innerWidth<=767)&&(t<e-2&&(a+='<li class="dots"><span>...</span></li>'),a+=`<li class="numb" onclick="goToPage(${e})"><span>${e}</span></li>`),t<e&&(p.style.display="block"),f.innerHTML=a}(100,w),v.style.display="none",y.style.display="flex";try{let t=e.results.map(async e=>{let t=(await (0,i.fetchMoviesByID)(e.id)).genres.map(e=>e.name).join(", ");return`<li class="movie-card">
        <div class="card">
          <a href="${e.poster_path}" data-movie-id="${e.id}">
            <img src="https://image.tmdb.org/t/p/w500/${e.poster_path}" alt="${e.title}"/>
          </a>
          <div class="info">
            <p class="info-item">
              <b> ${e.title}</b>
            </p>
            <div class="details">
              <p class="info-item">
                <b>${t} | ${e.release_date.slice(0,4)}</b>
              </p>
            </div>
          </div>
        </div>
      </li>`}),n=(await Promise.all(t)).join("");u.innerHTML=n}catch(e){console.error("Error fetching movie details:",e)}};u.addEventListener("click",async e=>{e.preventDefault();let t=e.target.closest("a");t&&c(t.dataset.movieId)}),document.addEventListener("keydown",e=>{"Escape"===e.key&&b()}),p.addEventListener("click",async()=>{try{w++;let e=await (0,i.fetchPopularMovies)(w);u.innerHTML="",E(e)}catch(e){console.error("Error fetching popular movies:",e)}}),m.addEventListener("click",async()=>{try{if(w>1){w--;let e=await (0,i.fetchPopularMovies)(w);u.innerHTML="",E(e)}}catch(e){console.error("Error fetching popular movies:",e)}}),window.goToPage=function(e){w=e,(0,i.fetchPopularMovies)(e).then(e=>{E(e)}).catch(e=>{console.error("Error fetching popular movies:",e)})},document.getElementById("openModal").addEventListener("click",function(){document.getElementById("studentModal").style.display="block",_($)});let $=0;function _(e){let t=document.querySelectorAll(".student-card");t.forEach(e=>e.style.display="none"),t[e].style.display="flex"}document.addEventListener("keydown",function(e){"Escape"===e.key&&(document.getElementById("studentModal").style.display="none")}),_($),document.addEventListener("click",function(e){e.target.matches(".modal-prev")?_($=$-1<0?document.querySelectorAll(".student-card").length-1:$-1):e.target.matches(".modal-next")?_($=($+1)%document.querySelectorAll(".student-card").length):(e.target.matches(".btn-close")||e.target===document.getElementById("studentModal"))&&(document.getElementById("studentModal").style.display="none")}),o("7lTlQ"),o("kkREw");var q=o("lzX4I");const L=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],T=document.querySelector(".header-home-form"),S=document.querySelector(".movie__list");let k=1;const M=document.querySelector(".header-home-item");M.style.opacity="0";const P=document.querySelector("#prevQuery"),D=document.querySelector("#nextQuery"),H=document.querySelector(".paginatorPopular"),x=document.querySelector(".paginatorQuery"),I=document.querySelector(".paginator-ulq"),B=async(e,t)=>{let n=new URLSearchParams({api_key:"e7c930d9ee21da94f8fc3257d387eced",query:e,page:t}),a=await fetch(`https://api.themoviedb.org/3/search/movie?${n}`),o=await a.json();return{totalPages:o.total_pages,results:o.results}},Q=e=>(console.log("Movies",e.results),P.style.display="none",D.style.display="none",x.style.display="flex",H.style.display="none",function(e,t){let n,a="",o=t-2,i=t+2;t>1&&(P.style.display="block"),t>3&&!(window.innerWidth>=320&&window.innerWidth<=767)&&(a+='<li class="numb" onclick="goToPageQ(1)"><span>1</span></li><li class="dots"><span>...</span></li>'),o<1&&(o=1),i>e&&(i=e);for(let e=o;e<=i;e++)n=t===e?"active":"",a+=`<li class="numb ${n}" onclick="goToPageQ(${e})"><span>${e}</span></li>`;t<e-2&&!(window.innerWidth>=320&&window.innerWidth<=767)&&(t<e-2&&(a+='<li class="dots"><span>...</span></li>'),a+=`<li class="numb" onclick="goToPageQ(${e})"><span>${e}</span></li>`),t<e&&(D.style.display="block"),1===e&&(x.style.display="none"),I.innerHTML=a}(e.totalPages,k),e.results.map(({id:e,poster_path:t,original_title:n,genre_ids:a,release_date:o})=>(a&&a.length>0&&L.filter(({id:e})=>a.includes(e)).map(({name:e})=>e).join(", "),`<li class="movie-card">
      <div class="card">
            <a href="${t}" data-movie-id="${e}">
              <img src="${t?`https://image.tmdb.org/t/p/w500${t}`:"https://media.wired.com/photos/59326d5344db296121d6aee9/master/w_2240,c_limit/8552.gif"}" alt="${n}" />
            </a>
            <div class="info">
              <p class="info-item">
                <b> ${n}</b>
              </p>
              <div class="details">
              <p class="info-item">
              <b>${a?a.slice(0,2):""} | ${o?o.slice(0,4):""}</b>
              </p>
              </div>
            </div>
            </div>
          </li>`)).join("")),W=async t=>{t.preventDefault(),e=t.target.elements.searchQuery.value.trim(),k=1,await B(e,k).then(t=>{if(""===e||t.results.length<=0)M.style.opacity="1";else{let e=Q(t);S.innerHTML=e,M.style.opacity="0"}}).catch(e=>console.log(e)),T.reset()};function A(){document.getElementById("loader").style.display="flex"}function O(){document.getElementById("loader").style.display="none"}T.addEventListener("submit",W),D.addEventListener("click",async t=>{try{let t=await B(e,k+1);if(t.totalPages>=k+1){k++;let e=Q(t);S.innerHTML=e}else(q&&q.__esModule?q.default:q).Notify.info("You have reached the end of the search results.")}catch(e){console.error("Error fetching popular movies:",e)}}),P.addEventListener("click",async t=>{try{if(k>1){let t=await B(e,k-1);if(t.totalPages>=k-1){k--;let e=Q(t);S.innerHTML=e}}}catch(e){console.error("Error fetching popular movies:",e)}}),window.goToPageQ=function(t){k=t,B(e,t).then(e=>{Q(e),S.innerHTML=Q(e)}).catch(e=>{console.error("Error fetching popular movies:",e)})},document.getElementById("searchForm").addEventListener("submit",function(e){e.preventDefault,A(),setTimeout(function(){O()},1e3)}),A(),setTimeout(function(){O()},1e3);
//# sourceMappingURL=index.b1b9cced.js.map
