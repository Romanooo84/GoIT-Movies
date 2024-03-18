import { showWatched } from './watchedLibrary';

const moviesInStorage = localStorage.getItem('watched');

if (JSON.parse(moviesInStorage).length != 0) {
  const moviesListW = document.querySelector('.library-watched');
  moviesListW.style.display = 'flex';
  const travolta = document.querySelector('.container-trevolta');
  travolta.style.display = 'none';
  document.addEventListener('DOMContentLoaded', showWatched);
}
console.log(JSON.parse(moviesInStorage).length);
