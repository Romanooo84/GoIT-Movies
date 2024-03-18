var e=globalThis,t={},a={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in a){var i=a[e];delete a[e];var s={id:e,exports:{}};return t[e]=s,i.call(s.exports,s,s.exports),s.exports}var d=Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){a[e]=t},e.parcelRequired7c6=i),i.register;var s=i("f4Zwh");document.querySelector(".library-queue");const d=document.querySelector(".modal-window"),o=document.querySelector(".inner-modal-content"),l=document.querySelector(".modal-overlay"),r=document.querySelector(".library-watched"),n=()=>{d.classList.add("hidden"),l.classList.remove("active")},c=async()=>{let e=document.querySelector(".library-queue"),t=localStorage.getItem("watched"),a=document.querySelector(".library-watched");e.style.display="none",a.style.display="flex",t?Promise.all(JSON.parse(t).map(e=>(0,s.fetchMoviesByID)(e.id))).then(e=>{let t=e.map(e=>{let t=e.genres.map(e=>e.name).join(", ");return`<li class="movie-card">
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
                    <span class="modal-rates__vote">${e.vote_average}</span>
                      </p>
                    
                  </div>
                </div>
              </div>
            </li>`}).join("");a.innerHTML=t}).catch(e=>console.error(e)):a.innerHTML='<img src="https://i.pinimg.com/originals/4a/06/ef/4a06efb5a2f39feaa2f81b9f3d179a94.gif"/>'},m=document.querySelector(".header-library-button-watched");m.addEventListener("click",c);const p=async e=>{e.preventDefault();let t=e.target.closest("a");if(t){let e=t.dataset.movieId;try{let t=await (0,s.fetchMoviesByID)(e),a=`
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
      </div>`;o.innerHTML=a,d.classList.remove("hidden"),l.classList.add("active"),l.addEventListener("click",()=>{n()}),document.querySelector("#close-modal").addEventListener("click",()=>{n()})}catch(e){console.error("Error fetching movie details:",e)}}};r.addEventListener("click",p),document.addEventListener("keydown",e=>{"Escape"===e.key&&n()}),m.addEventListener("click",()=>{r.innerHTML='<img src="https://i.pinimg.com/originals/4a/06/ef/4a06efb5a2f39feaa2f81b9f3d179a94.gif"/>'});var s=i("f4Zwh");document.querySelector(".library-watched");const u=document.querySelector(".library-queue"),v=document.querySelector(".modal-window"),b=document.querySelector(".inner-modal-content"),y=document.querySelector(".modal-overlay"),f=()=>{v.classList.add("hidden"),y.classList.remove("active")},g=async()=>{let e=document.querySelector(".library-watched"),t=document.querySelector(".library-queue"),a=localStorage.getItem("queue");e.style.display="none",t.style.display="flex",a?Promise.all(JSON.parse(a).map(e=>(0,s.fetchMoviesByID)(e.id))).then(e=>{let a=e.map(e=>{let t=e.genres.map(e=>e.name).join(", ");return`<li class="movie-card">
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
                    <span class="modal-rates__vote">${e.vote_average}</span>
                  </p>
                  
                </div>
              </div>
            </div>
          </li>`}).join("");t.innerHTML=a}).catch(e=>console.error(e)):t.innerHTML='<img src="https://i.pinimg.com/originals/4a/06/ef/4a06efb5a2f39feaa2f81b9f3d179a94.gif"/>'},h=async e=>{e.preventDefault();let t=e.target.closest("a");if(t){let e=t.dataset.movieId;try{let t=await (0,s.fetchMoviesByID)(e),a=`
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
      </div>`;b.innerHTML=a,v.classList.remove("hidden"),y.classList.add("active"),y.addEventListener("click",()=>{f()}),document.querySelector("#close-modal").addEventListener("click",()=>{f()})}catch(e){console.error("Error fetching movie details:",e)}}};u.addEventListener("click",h),document.addEventListener("keydown",e=>{"Escape"===e.key&&f()});const _=document.querySelector(".header-library-button-queue");_.addEventListener("click",g),_.addEventListener("click",()=>{u.innerHTML='<img src="https://i.pinimg.com/originals/4a/06/ef/4a06efb5a2f39feaa2f81b9f3d179a94.gif"/>'}),i("7lTlQ"),i("kkREw");
//# sourceMappingURL=library.6d7e2d80.js.map
