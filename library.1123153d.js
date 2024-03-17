var e=globalThis,t={},a={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in a){var i=a[e];delete a[e];var d={id:e,exports:{}};return t[e]=d,i.call(d.exports,d,d.exports),d.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequired7c6=i),i.register;var d=i("f4Zwh");const o=document.querySelector(".library-queue"),s=document.querySelector(".modal-window"),l=document.querySelector(".inner-modal-content"),r=document.querySelector(".modal-overlay"),n=document.querySelector(".library-watched"),c=()=>{s.classList.add("hidden"),r.classList.remove("active")},m=async()=>{let e=localStorage.getItem("watched"),t=document.querySelector(".library-watched");o.style.display="none",t.style.display="flex",e?Promise.all(JSON.parse(e).map(e=>(0,d.fetchMoviesByID)(e.id))).then(e=>{let a=e.map(e=>{let t=e.genres.map(e=>e.name).join(", ");return`<li class="movie-card">
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
            </li>`}).join("");t.innerHTML=a}).catch(e=>console.error(e)):t.innerHTML='<img src="https://i.pinimg.com/originals/4a/06/ef/4a06efb5a2f39feaa2f81b9f3d179a94.gif"/>'};document.querySelector(".header-library-button-watched").addEventListener("click",m);const p=async e=>{e.preventDefault();let t=e.target.closest("a");if(t){let e=t.dataset.movieId;try{let t=await (0,d.fetchMoviesByID)(e),a=`
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
          <button class="button-standard modal-button remove" data-movie-id="${e}" type="button" class="add-to-watched" id="watched-btn">REMOVE FROM WATCHED</button>
          <button class="button-standard modal-button modal-button__queue add" data-movie-id="${e}" type="button" class="add-to-queue" id="queue-button">ADD TO QUEUE</button>
        </div>
      </div>`;l.innerHTML=a,s.classList.remove("hidden"),r.classList.add("active"),r.addEventListener("click",()=>{c()}),document.querySelector("#close-modal").addEventListener("click",()=>{c()})}catch(e){console.error("Error fetching movie details:",e)}}};n.addEventListener("click",p),document.addEventListener("keydown",e=>{"Escape"===e.key&&c()});var d=i("f4Zwh");const u=document.querySelector(".library-watched"),v=document.querySelector(".library-queue"),b=document.querySelector(".modal-window"),y=document.querySelector(".inner-modal-content"),h=document.querySelector(".modal-overlay"),g=()=>{b.classList.add("hidden"),h.classList.remove("active")},f=async()=>{let e=localStorage.getItem("queue"),t=document.querySelector(".library-queue");u.style.display="none",t.style.display="flex",e?Promise.all(JSON.parse(e).map(e=>(0,d.fetchMoviesByID)(e.id))).then(e=>{let a=e.map(e=>{let t=e.genres.map(e=>e.name).join(", ");return`<li class="movie-card">
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
          </li>`}).join("");t.innerHTML=a}).catch(e=>console.error(e)):t.innerHTML='<img src="https://i.pinimg.com/originals/4a/06/ef/4a06efb5a2f39feaa2f81b9f3d179a94.gif"/>'},$=async e=>{e.preventDefault();let t=e.target.closest("a");if(t){let e=t.dataset.movieId;try{let t=await (0,d.fetchMoviesByID)(e),a=`
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
          <button class="button-standard modal-button add" data-movie-id="${e}" type="button" class="add-to-watched"  id="watched-btn">ADD TO WATCHED</button>
          <button class="button-standard modal-button modal-button__queue remove" data-movie-id="${e}" type="button" class="add-to-queue"  id="queue-button">REMOVE FROM QUEUE</button>
        </div>
      </div>`;y.innerHTML=a,b.classList.remove("hidden"),h.classList.add("active"),h.addEventListener("click",()=>{g()}),document.querySelector("#close-modal").addEventListener("click",()=>{g()})}catch(e){console.error("Error fetching movie details:",e)}}};v.addEventListener("click",$),document.addEventListener("keydown",e=>{"Escape"===e.key&&g()}),document.querySelector(".header-library-button-queue").addEventListener("click",f),i("7lTlQ"),i("kkREw");
//# sourceMappingURL=library.1123153d.js.map
