import api from './api';

const { getBeers, getBeer, addLike } = api();

const templateBeers = ({ name, image, description, beerId }) => `
  <div class="card">
    <a href="detail.html?id=${beerId}">
      <figure class="img-container">
        <img class="card__image" src="${image}" alt="${name}">
      </figure>
    </a>
    <div class="container">
      <h2>${name}</h2>
      <h3>Description</h3>
      <p>${description}
      </p>
    </div>
  </div>
`;

export const renderBeers = () => {
  getBeers().then((beers) => {
    const cards = document.querySelector('.cards-container');
    const beersHtml = beers.map(templateBeers).join('');
    cards.innerHTML = beersHtml;
  })
}

renderBeers();
