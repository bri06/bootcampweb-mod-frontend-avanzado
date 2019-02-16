const api = (API_URL = 'https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh') => {
  const API_VERSION = `${API_URL}/api/v1/`;
  const BEERS_URL = `${API_VERSION}beers`;
  const API_KEY = '9ECKBM7-HXVMJKZ-P8AE3JG-44R79HS';
  return {
    getBeers: () => {
      return fetch(BEERS_URL, {
        method: 'get',
        headers: { 'X-API-KEY': API_KEY }})
      .then(res => res.json())
      .then(({ beers }) => beers)
      .catch(err => console.error(err));;
    },

    getBeer: (id) => {
      return fetch(`${BEERS_URL}/${id}`, {
        method: 'get',
        headers: { 'X-API-KEY': API_KEY }})
      .then(res => res.json())
      .then(({ beer}) => beer)
      .catch(err => console.error(err));
    },

    addLike: (id) => {
      return fetch(`${BEERS_URL}/${id}/like`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'X-API-KEY': API_KEY
        }
      })
      .then(res => res.json())
      .catch(err => console.error(err));
    }
  };
}

export default api;
