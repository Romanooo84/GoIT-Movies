let e;const t={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2M5MzBkOWVlMjFkYTk0ZjhmYzMyNTdkMzg3ZWNlZCIsInN1YiI6IjY1ZTlhZDJhNmEyMjI3MDE4Njk2NTExNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j1C6buHnPvlB2eInbvledvTmiFFIKSym7oMjouLo9AE"}},a=e=>fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${e}`,t).then(e=>e.json()).catch(e=>console.error(e)),o=e=>fetch(`https://api.themoviedb.org/3/movie/${e}?language=en-US`,t).then(e=>e.json()).catch(e=>console.error(e)),n=document.querySelector(".movie__list"),i=document.querySelector("#prev"),r=document.querySelector("#next"),d=document.querySelector("#current"),l=document.querySelector(".pagination_for_query"),c=document.querySelector(".pagination"),s=document.querySelector(".modal-window"),m=document.querySelector(".inner-modal-content"),u=document.querySelector(".modal-overlay");let p=1;const y=()=>{s.classList.add("hidden"),u.classList.remove("active")};a(1).then(e=>v(e)).catch(e=>console.error(e));const v=async e=>{l.style.display="none",c.style.display="flex";try{let t=e.results.map(async e=>{let t=(await o(e.id)).genres.map(e=>e.name).join(", ");return`<li class="movie-card">
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
      </li>`}),a=(await Promise.all(t)).join("");n.innerHTML=a}catch(e){console.error("Error fetching movie details:",e)}};n.addEventListener("click",async e=>{e.preventDefault();let t=e.target.closest("a").dataset.movieId;try{let e=await o(t),a=`
    <div>
    <img class="modal-image" src="https://image.tmdb.org/t/p/w500/${e.poster_path}" alt="${e.title}" />
  </div>
  <div class="modal-description">
    <h1>${e.title}</h1>
    <div class="modal-rates">
      <div class="modal-rates__titles">
        <p>Vote/Votes</p>
        <p>Popularity</p>
        <p>Original Title</p>
        <p>Genre</p>
      </div>
      <div class="modal-rates__results">
        <p><span class="modal-rates__vote">${e.vote_average}</span> / <span class="modal-rates__allvotes">${e.vote_count}</span></p>
        <p>${e.popularity}</p>
        <p>${e.original_title}</p>
        <p>${e.genres.map(e=>e.name).join(", ")}</p>
      </div>
    </div>
    <div class="modal-about">
    <dt>ABOUT</dt>
    <dd>${e.overview}</dd>
    </div>
    <div class="modal-button-window">
    <button class="button-standard modal-button" data-movie-id="${t}" type="button" class="add-to-watched" id="watched-btn">ADD TO WATCHED</button>
    <button class="button-standard modal-button modal-button__queue" data-movie-id="${t}" type="button" class="add-to-queue" id="queue-button">ADD TO QUEUE</button>
    </div>
  </div>
      `;m.innerHTML=a,s.classList.remove("hidden"),u.classList.add("active"),u.addEventListener("click",()=>{y()}),document.querySelector("#close-modal").addEventListener("click",()=>{y()})}catch(e){console.error("Error fetching movie details:",e)}}),document.addEventListener("keydown",e=>{"Escape"===e.key&&y()}),r.addEventListener("click",async()=>{try{p++;let e=await a(p);n.innerHTML="",v(e),d.innerHTML=p}catch(e){console.error("Error fetching popular movies:",e)}}),i.addEventListener("click",async()=>{try{if(p>1){p--;let e=await a(p);n.innerHTML="",v(e),d.innerHTML=p}}catch(e){console.error("Error fetching popular movies:",e)}}),document.getElementById("openModal").addEventListener("click",function(){document.getElementById("studentModal").style.display="block",h(g)});let g=0;function h(e){let t=document.querySelectorAll(".student-card");t.forEach(e=>e.style.display="none"),t[e].style.display="flex"}document.addEventListener("keydown",function(e){"Escape"===e.key&&(document.getElementById("studentModal").style.display="none")}),h(g),document.addEventListener("click",function(e){e.target.matches(".modal-prev")?h(g=g-1<0?document.querySelectorAll(".student-card").length-1:g-1):e.target.matches(".modal-next")?h(g=(g+1)%document.querySelectorAll(".student-card").length):(e.target.matches(".btn-close")||e.target===document.getElementById("studentModal"))&&(document.getElementById("studentModal").style.display="none")});const f=e=>{let t=e.target.getAttribute("data-movie-id");if("undefined"!=typeof Storage){let e=localStorage.getItem("queue"),a=[];e&&(a=JSON.parse(e)),a.push({id:t}),localStorage.setItem("queue",JSON.stringify(a)),alert("Film został dodany do kolejki!")}else alert("Twoja przeglądarka nie obsługuje local storage.")};document.addEventListener("click",()=>{document.querySelector("#queue-button").addEventListener("click",f)});const b=e=>{let t=e.target.getAttribute("data-movie-id");if("undefined"!=typeof Storage){let e=localStorage.getItem("watched"),a=[];e&&(a=JSON.parse(e)),a.push({id:t}),localStorage.setItem("watched",JSON.stringify(a)),alert("Film został dodany do listy oglądanych!")}else alert("Twoja przeglądarka nie obsługuje local storage.")};document.addEventListener("click",()=>{document.querySelector("#watched-btn").addEventListener("click",b)});const E=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],S=document.querySelector(".header-home-form"),q=document.querySelector(".movie__list");let L=1;const _=document.querySelector(".header-home-item");_.style.opacity="0";const w=document.querySelector("#prevQuery"),$=document.querySelector("#nextQuery");let k=document.querySelector("#currentQuery");const M=document.querySelector(".pagination"),j=document.querySelector(".pagination_for_query"),I=async(e,t)=>{let a=new URLSearchParams({api_key:"e7c930d9ee21da94f8fc3257d387eced",query:e,page:t}),o=await fetch(`https://api.themoviedb.org/3/search/movie?${a}`);return(await o.json()).results},T=e=>(console.log("Movies",e),M.style.display="none",j.style.display="flex",e.map(({id:e,poster_path:t,original_title:a,genre_ids:o,release_date:n})=>(o&&o.length>0&&E.filter(({id:e})=>o.includes(e)).map(({name:e})=>e).join(", "),`<li class="movie-card">
      <div class="card">
            <a href="${t}" data-movie-id="${e}">
              <img src="${t?`https://image.tmdb.org/t/p/w500${t}`:"https://icrier.org/wp-content/uploads/2022/09/Event-Image-Not-Found.jpg"}" alt="${a}"/>
            </a>
            <div class="info">
              <p class="info-item">
                <b> ${a}</b>
              </p>
              <div class="details">
              <p class="info-item">
              <b>${o?o.slice(0,2):""} | ${n?n.slice(0,4):""}</b>
              </p>
              </div>
            </div>
            </div>
          </li>`)).join("")),N=async t=>{t.preventDefault(),e=t.target.elements.searchQuery.value.trim(),L=1,k.textContent=L,await I(e,L).then(t=>{if(""===e||t.length<=0)_.style.opacity="1";else{let e=T(t);q.innerHTML=e}}).catch(e=>console.log(e)),S.reset()};S.addEventListener("submit",N),$.addEventListener("click",async t=>{try{k.textContent=++L;let t=await I(e,L),a=T(t);q.innerHTML=a}catch(e){console.error("Error fetching popular movies:",e)}}),w.addEventListener("click",async t=>{try{if(L>1){k.textContent=--L;let t=await I(e,L),a=T(t);q.innerHTML=a}}catch(e){console.error("Error fetching popular movies:",e)}});
//# sourceMappingURL=index.f9b527c0.js.map
