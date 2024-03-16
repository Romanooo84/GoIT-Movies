function e(e,t,i,a){Object.defineProperty(e,t,{get:i,set:a,enumerable:!0,configurable:!0})}var t=globalThis,i={},a={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return i[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequired7c6=r),(0,r.register)("f4Zwh",function(t,i){e(t.exports,"fetchPopularMovies",()=>r),e(t.exports,"fetchMoviesByID",()=>o);let a={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2M5MzBkOWVlMjFkYTk0ZjhmYzMyNTdkMzg3ZWNlZCIsInN1YiI6IjY1ZTlhZDJhNmEyMjI3MDE4Njk2NTExNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j1C6buHnPvlB2eInbvledvTmiFFIKSym7oMjouLo9AE"}},r=e=>fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${e}`,a).then(e=>e.json()).catch(e=>console.error(e)),o=e=>fetch(`https://api.themoviedb.org/3/movie/${e}?language=en-US`,a).then(e=>e.json()).catch(e=>console.error(e))});var o=r("f4Zwh");const l=document.querySelector(".library-queue"),s=async()=>{let e=localStorage.getItem("watched"),t=document.querySelector(".library-watched");l.style.display="none",t.style.display="flex",e?Promise.all(JSON.parse(e).map(e=>(0,o.fetchMoviesByID)(e.id))).then(e=>{let i=e.map(e=>{let t=e.genres.map(e=>e.name).join(", ");return`<li class="movie-card">
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
            </li>`}).join("");t.innerHTML=i}).catch(e=>console.error(e)):t.innerHTML='<img src="https://i.pinimg.com/originals/4a/06/ef/4a06efb5a2f39feaa2f81b9f3d179a94.gif"/>'};document.querySelector(".header-library-button-watched").addEventListener("click",s);var o=r("f4Zwh");const n=document.querySelector(".library-watched"),c=async()=>{let e=localStorage.getItem("queue"),t=document.querySelector(".library-queue");n.style.display="none",t.style.display="flex",e?Promise.all(JSON.parse(e).map(e=>(0,o.fetchMoviesByID)(e.id))).then(e=>{let i=e.map(e=>{let t=e.genres.map(e=>e.name).join(", ");return`<li class="movie-card">
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
          </li>`}).join("");t.innerHTML=i}).catch(e=>console.error(e)):t.innerHTML='<img src="https://i.pinimg.com/originals/4a/06/ef/4a06efb5a2f39feaa2f81b9f3d179a94.gif"/>'};document.querySelector(".header-library-button-queue").addEventListener("click",c);
//# sourceMappingURL=library.4c834f4b.js.map
