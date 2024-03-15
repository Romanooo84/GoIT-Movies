function e(e,t,r,i){Object.defineProperty(e,t,{get:r,set:i,enumerable:!0,configurable:!0})}var t=globalThis,r={},i={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequired7c6=a),(0,a.register)("f4Zwh",function(t,r){e(t.exports,"fetchPopularMovies",()=>a),e(t.exports,"fetchMoviesByID",()=>o);let i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2M5MzBkOWVlMjFkYTk0ZjhmYzMyNTdkMzg3ZWNlZCIsInN1YiI6IjY1ZTlhZDJhNmEyMjI3MDE4Njk2NTExNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j1C6buHnPvlB2eInbvledvTmiFFIKSym7oMjouLo9AE"}},a=e=>fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${e}`,i).then(e=>e.json()).catch(e=>console.error(e)),o=e=>fetch(`https://api.themoviedb.org/3/movie/${e}?language=en-US`,i).then(e=>e.json()).catch(e=>console.error(e))});var o=a("f4Zwh");const l=document.querySelector(".library-queue"),n=async()=>{let e=localStorage.getItem("watched"),t=document.querySelector(".library-watched");l.style.display="none",t.style.display="flex",e?Promise.all(JSON.parse(e).map(e=>(0,o.fetchMoviesByID)(e.id))).then(e=>{let r=e.map(e=>{let t=e.genres.map(e=>e.name).join(", ");return`<li class="movie-card">
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
          </li>`}).join("");t.innerHTML=r}).catch(e=>console.error(e)):t.innerHTML="<p>Brak obejrzanych filmów.</p>"};document.querySelector(".header-library-button-watched").addEventListener("click",n);var o=a("f4Zwh");const c=document.querySelector(".library-watched"),s=async()=>{let e=localStorage.getItem("queue"),t=document.querySelector(".library-queue");c.style.display="none",t.style.display="flex",e?Promise.all(JSON.parse(e).map(e=>(0,o.fetchMoviesByID)(e.id))).then(e=>{let r=e.map(e=>{let t=e.genres.map(e=>e.name).join(", ");return`<li class="movie-card">
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
          </li>`}).join("");t.innerHTML=r}).catch(e=>console.error(e)):t.innerHTML="<p>Brak obejrzanych filmów.</p>"};document.querySelector(".header-library-button-queue").addEventListener("click",s);
//# sourceMappingURL=library.7a72ecf0.js.map
