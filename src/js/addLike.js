import api from './api';
import queryString from 'querystring';

const { addLike, getBeer } = api();


const addLikeTemplate = ({ likes }) => `
<p>${likes}</p>
<button type="submit" class="icon" id="like-button">
<i class="fas fa-heart"></i>
</button>
`;


export const addLikeToDOM = (btnLike, id) => {
  btnLike.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('PILLA EVENTO');
    addLike(id)
    .then(() => getBeer(id))
    .then((beer) => {
      const likeHtml = document.querySelector('.rating');
      const likeAdded = addLikeTemplate(beer);
      likeHtml.innerHTML = likeAdded;
    });
  });
}
