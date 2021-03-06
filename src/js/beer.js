import api from './api';
import queryString from 'querystring';
import { addLikeToDOM } from './addLike';

const { getBeer } = api();

const listIngredients = (arr) => arr.map((data) =>
 `<ul><li>${data.name}</li></ul>`).join('');

const templateDetailBeer = ({ name, image, description, ingredients, likes }) => `
  <div class="detail-section__container">
  <div class="detail-section_img_rat">
  <h2>${name}</h2>
    <img class="detail-section__image" src="${image}" alt="${name}">
    <form id="like-form" class="form-container">
      <button type="submit" class="icon" id="like-button">
        <div class="rating">
          <p>${likes}</p>
            <i class="fas fa-heart"></i>
          </div>
      </button>
    </form>
  </div>

  <div class="detail-setcion__content">
    <div class="detail-section__desc">
      <h2>Description</h2>
      <p>${description}</p>
    </div>
    <div class="detail-section__ingredients">
      <h2>Ingredients</h2>
      <div class="ingredients-info">
        <div class="ingredients-col1">
          <p>Malt:</p>
          ${listIngredients(ingredients.malt)}
        </div>
        <div class="ingredients-col2">
          <p>Hops:</p>
          ${listIngredients(ingredients.hops)}
        </div>
      </div>
    </div>
  </div>
`;

export const renderDetailBeer = () => {
  const queryParam = window.location.search.substring(1);
  const { id } = queryString.parse(queryParam);
  getBeer(id).then((beer) => {
    const detailBeerHtml = document.querySelector('.detail-section');
    const beerHtml = templateDetailBeer(beer);
    detailBeerHtml.innerHTML = beerHtml;

    const btnLike = document.querySelector('#like-form');
    addLikeToDOM(btnLike, id);
  });
}

renderDetailBeer();
