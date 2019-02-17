import { renderBeers } from './beers';

const formHeader = document.querySelector('#beer-search__form');
const inputSearch = document.querySelector('.beer-search__input');

formHeader.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(inputSearch.value);
  if (inputSearch.value != '') {
    renderBeers(inputSearch.value);
    console.log('Entra aqui');
  }
});
