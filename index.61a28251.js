let e;var t=globalThis,a={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return a[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register,o("f4Zwh");var i=o("f4Zwh");const l=document.querySelector(".movie__list"),s=document.querySelector("#prevPopular"),r=document.querySelector("#nextPopular");document.querySelector(".pagination_for_query"),document.querySelector(".pagination");const d=document.querySelector(".paginatorPopular"),c=document.querySelector(".paginatorQuery"),u=document.querySelector(".modal-window"),m=document.querySelector(".inner-modal-content"),p=document.querySelector(".modal-overlay"),y=document.querySelector(".paginator-ul");console.log(y);let v=1;const h=()=>{u.classList.add("hidden"),p.classList.remove("active")};(0,i.fetchPopularMovies)(v).then(e=>g(e)).catch(e=>console.error(e));const g=async e=>{s.style.display="none",r.style.display="none",function(e,t){let a,n="",o=t-2,i=t+2;t>1&&(s.style.display="block"),t>3&&!(window.innerWidth>=320&&window.innerWidth<=767)&&(n+='<li class="numb" onclick="goToPage(1)"><span>1</span></li><li class="dots"><span>...</span></li>'),o<1&&(o=1),i>100&&(i=100);for(let e=o;e<=i;e++)a=t===e?"active":"",n+=`<li class="numb ${a}" onclick="goToPage(${e})"><span>${e}</span></li>`;t<e-2&&!(window.innerWidth>=320&&window.innerWidth<=767)&&(t<e-2&&(n+='<li class="dots"><span>...</span></li>'),n+=`<li class="numb" onclick="goToPage(${e})"><span>${e}</span></li>`),t<e&&(r.style.display="block"),y.innerHTML=n}(100,v),c.style.display="none",d.style.display="flex";try{let t=e.results.map(async e=>{let t=(await (0,i.fetchMoviesByID)(e.id)).genres.map(e=>e.name).join(", ");return`<li class="movie-card">
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
      </li>`}),a=(await Promise.all(t)).join("");l.innerHTML=a}catch(e){console.error("Error fetching movie details:",e)}};l.addEventListener("click",async e=>{e.preventDefault();let t=e.target.closest("a");if(t){let e=t.dataset.movieId;try{let t=await (0,i.fetchMoviesByID)(e),a=`
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
        `;m.innerHTML=a,u.classList.remove("hidden"),p.classList.add("active"),p.addEventListener("click",()=>{h()}),document.querySelector("#close-modal").addEventListener("click",()=>{h()})}catch(e){console.error("Error fetching movie details:",e)}}}),document.addEventListener("keydown",e=>{"Escape"===e.key&&h()}),r.addEventListener("click",async()=>{try{v++;let e=await (0,i.fetchPopularMovies)(v);l.innerHTML="",g(e)}catch(e){console.error("Error fetching popular movies:",e)}}),s.addEventListener("click",async()=>{try{if(v>1){v--;let e=await (0,i.fetchPopularMovies)(v);l.innerHTML="",g(e)}}catch(e){console.error("Error fetching popular movies:",e)}}),window.goToPage=function(e){v=e,(0,i.fetchPopularMovies)(e).then(e=>{g(e)}).catch(e=>{console.error("Error fetching popular movies:",e)})},document.getElementById("openModal").addEventListener("click",function(){document.getElementById("studentModal").style.display="block",w(f)});let f=0;function w(e){let t=document.querySelectorAll(".student-card");t.forEach(e=>e.style.display="none"),t[e].style.display="flex"}document.addEventListener("keydown",function(e){"Escape"===e.key&&(document.getElementById("studentModal").style.display="none")}),w(f),document.addEventListener("click",function(e){e.target.matches(".modal-prev")?w(f=f-1<0?document.querySelectorAll(".student-card").length-1:f-1):e.target.matches(".modal-next")?w(f=(f+1)%document.querySelectorAll(".student-card").length):(e.target.matches(".btn-close")||e.target===document.getElementById("studentModal"))&&(document.getElementById("studentModal").style.display="none")}),o("7lTlQ"),o("kkREw");var b=o("lzX4I");const E=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],$=document.querySelector(".header-home-form"),_=document.querySelector(".movie__list");let q=1;const T=document.querySelector(".header-home-item");T.style.opacity="0";const L=document.querySelector("#prevQuery"),k=document.querySelector("#nextQuery"),M=document.querySelector(".paginatorPopular"),S=document.querySelector(".paginatorQuery"),P=document.querySelector(".paginator-ulq"),D=async(e,t)=>{let a=new URLSearchParams({api_key:"e7c930d9ee21da94f8fc3257d387eced",query:e,page:t}),n=await fetch(`https://api.themoviedb.org/3/search/movie?${a}`),o=await n.json();return{totalPages:o.total_pages,results:o.results}},H=e=>(console.log("Movies",e.results),L.style.display="none",k.style.display="none",S.style.display="flex",M.style.display="none",function(e,t){let a,n="",o=t-2,i=t+2;t>1&&(L.style.display="block"),t>3&&!(window.innerWidth>=320&&window.innerWidth<=767)&&(n+='<li class="numb" onclick="goToPageQ(1)"><span>1</span></li><li class="dots"><span>...</span></li>'),o<1&&(o=1),i>e&&(i=e);for(let e=o;e<=i;e++)a=t===e?"active":"",n+=`<li class="numb ${a}" onclick="goToPageQ(${e})"><span>${e}</span></li>`;t<e-2&&!(window.innerWidth>=320&&window.innerWidth<=767)&&(t<e-2&&(n+='<li class="dots"><span>...</span></li>'),n+=`<li class="numb" onclick="goToPageQ(${e})"><span>${e}</span></li>`),t<e&&(k.style.display="block"),1===e&&(S.style.display="none"),P.innerHTML=n}(e.totalPages,q),e.results.map(({id:e,poster_path:t,original_title:a,genre_ids:n,release_date:o})=>(n&&n.length>0&&E.filter(({id:e})=>n.includes(e)).map(({name:e})=>e).join(", "),`<li class="movie-card">
      <div class="card">
            <a href="${t}" data-movie-id="${e}">
              <img src="${t?`https://image.tmdb.org/t/p/w500${t}`:"https://media.wired.com/photos/59326d5344db296121d6aee9/master/w_2240,c_limit/8552.gif"}" alt="${a}" />
            </a>
            <div class="info">
              <p class="info-item">
                <b> ${a}</b>
              </p>
              <div class="details">
              <p class="info-item">
              <b>${n?n.slice(0,2):""} | ${o?o.slice(0,4):""}</b>
              </p>
              </div>
            </div>
            </div>
          </li>`)).join("")),x=async t=>{t.preventDefault(),e=t.target.elements.searchQuery.value.trim(),q=1,await D(e,q).then(t=>{if(""===e||t.results.length<=0)T.style.opacity="1";else{let e=H(t);_.innerHTML=e,T.style.opacity="0"}}).catch(e=>console.log(e)),$.reset()};function I(){document.getElementById("loader").style.display="flex"}function B(){document.getElementById("loader").style.display="none"}$.addEventListener("submit",x),k.addEventListener("click",async t=>{try{let t=await D(e,q+1);if(t.totalPages>=q+1){q++;let e=H(t);_.innerHTML=e}else(b&&b.__esModule?b.default:b).Notify.info("You have reached the end of the search results.")}catch(e){console.error("Error fetching popular movies:",e)}}),L.addEventListener("click",async t=>{try{if(q>1){let t=await D(e,q-1);if(t.totalPages>=q-1){q--;let e=H(t);_.innerHTML=e}}}catch(e){console.error("Error fetching popular movies:",e)}}),window.goToPageQ=function(t){q=t,D(e,t).then(e=>{H(e),_.innerHTML=H(e)}).catch(e=>{console.error("Error fetching popular movies:",e)})},document.getElementById("searchForm").addEventListener("submit",function(e){e.preventDefault,I(),setTimeout(function(){B()},1e3)}),I(),setTimeout(function(){B()},1e3);
//# sourceMappingURL=index.61a28251.js.map
