import api from './api';

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
    addLike(id)
    .then(() => getBeer(id))
    .then((beer) => {
      const likeHtml = document.querySelector('.rating');
      const likeAdded = addLikeTemplate(beer);
      likeHtml.innerHTML = likeAdded;
    });
  });
}
