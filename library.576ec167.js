function e(e,t,a,o){Object.defineProperty(e,t,{get:a,set:o,enumerable:!0,configurable:!0})}var t=globalThis,a={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return a[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i),(0,i.register)("f4Zwh",function(t,a){e(t.exports,"fetchPopularMovies",()=>i),e(t.exports,"fetchMoviesByID",()=>s);let o={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2M5MzBkOWVlMjFkYTk0ZjhmYzMyNTdkMzg3ZWNlZCIsInN1YiI6IjY1ZTlhZDJhNmEyMjI3MDE4Njk2NTExNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j1C6buHnPvlB2eInbvledvTmiFFIKSym7oMjouLo9AE"}},i=e=>fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${e}`,o).then(e=>e.json()).catch(e=>console.error(e)),s=e=>fetch(`https://api.themoviedb.org/3/movie/${e}?language=en-US`,o).then(e=>e.json()).catch(e=>console.error(e))});var s=i("f4Zwh");const d=document.querySelector(".library-queue"),l=document.querySelector(".modal-window"),r=document.querySelector(".inner-modal-content"),n=document.querySelector(".modal-overlay"),c=document.querySelector(".library-watched"),p=()=>{l.classList.add("hidden"),n.classList.remove("active")},m=async()=>{let e=localStorage.getItem("watched"),t=document.querySelector(".library-watched");d.style.display="none",t.style.display="flex",e?Promise.all(JSON.parse(e).map(e=>(0,s.fetchMoviesByID)(e.id))).then(e=>{let a=e.map(e=>{let t=e.genres.map(e=>e.name).join(", ");return`<li class="movie-card">
              <div class="card">
                <a href="${e.poster_path}" data-movie-id="${e.id}">
                  <img src="https://image.tmdb.org/t/p/w500/${e.poster_path}" alt="${e.title}"/>
                </a>
                <div class="info">
                  <p class="info-item">
                    <b>${e.title}</b>
                  </p>
                  <div class="details">
                    <p class="info-item">
                      <b>${t} | ${e.release_date.slice(0,4)}</b>
                    </p>
                  </div>
                </div>
              </div>
            </li>`}).join("");t.innerHTML=a}).catch(e=>console.error(e)):t.innerHTML='<img src="https://i.pinimg.com/originals/4a/06/ef/4a06efb5a2f39feaa2f81b9f3d179a94.gif"/>'};document.querySelector(".header-library-button-watched").addEventListener("click",m);const u=async e=>{e.preventDefault();let t=e.target.closest("a");if(t){let e=t.dataset.movieId;try{let t=await (0,s.fetchMoviesByID)(e),a=`
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
          <button class="button-standard modal-button" data-movie-id="${e}" type="button" class="add-to-watched" id="watched-btn">REMOVE FROM WATCHED</button>
          <button class="button-standard modal-button modal-button__queue" data-movie-id="${e}" type="button" class="add-to-queue" id="queue-button">ADD TO QUEUE</button>
        </div>
      </div>`;r.innerHTML=a,l.classList.remove("hidden"),n.classList.add("active"),n.addEventListener("click",()=>{p()}),document.querySelector("#close-modal").addEventListener("click",()=>{p()})}catch(e){console.error("Error fetching movie details:",e)}}};c.addEventListener("click",u),document.addEventListener("keydown",e=>{"Escape"===e.key&&p()});var s=i("f4Zwh");const v=document.querySelector(".library-watched"),h=document.querySelector(".library-queue"),b=document.querySelector(".modal-window"),y=document.querySelector(".inner-modal-content"),g=document.querySelector(".modal-overlay"),f=()=>{b.classList.add("hidden"),g.classList.remove("active")},$=async()=>{let e=localStorage.getItem("queue"),t=document.querySelector(".library-queue");v.style.display="none",t.style.display="flex",e?Promise.all(JSON.parse(e).map(e=>(0,s.fetchMoviesByID)(e.id))).then(e=>{let a=e.map(e=>{let t=e.genres.map(e=>e.name).join(", ");return`<li class="movie-card">
            <div class="card">
              <a href="${e.poster_path}" data-movie-id="${e.id}">
                <img src="https://image.tmdb.org/t/p/w500/${e.poster_path}" alt="${e.title}"/>
              </a>
              <div class="info">
                <p class="info-item">
                  <b>${e.title}</b>
                </p>
                <div class="details">
                  <p class="info-item">
                    <b>${t} | ${e.release_date.slice(0,4)}</b>
                  </p>
                </div>
              </div>
            </div>
          </li>`}).join("");t.innerHTML=a}).catch(e=>console.error(e)):t.innerHTML='<img src="https://i.pinimg.com/originals/4a/06/ef/4a06efb5a2f39feaa2f81b9f3d179a94.gif"/>'},_=async e=>{e.preventDefault();let t=e.target.closest("a");if(t){let e=t.dataset.movieId;try{let t=await (0,s.fetchMoviesByID)(e),a=`
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
          <button class="button-standard modal-button" data-movie-id="${e}" type="button" class="add-to-watched" id="watched-btn">ADD TO WATCHED</button>
          <button class="button-standard modal-button modal-button__queue" data-movie-id="${e}" type="button" class="add-to-queue" id="queue-button">REMOVE FROM QUEUE</button>
        </div>
      </div>`;y.innerHTML=a,b.classList.remove("hidden"),g.classList.add("active"),g.addEventListener("click",()=>{f()}),document.querySelector("#close-modal").addEventListener("click",()=>{f()})}catch(e){console.error("Error fetching movie details:",e)}}};h.addEventListener("click",_),document.addEventListener("keydown",e=>{"Escape"===e.key&&f()}),document.querySelector(".header-library-button-queue").addEventListener("click",$);
//# sourceMappingURL=library.576ec167.js.map
