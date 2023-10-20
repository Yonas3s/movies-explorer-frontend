export function getTokenHeader() {
  const jwt = localStorage.getItem('jwt');
  const headers = {
    'Authorization': `Bearer ${jwt}`,
    'Content-Type': 'application/json'
  };
  return headers;
}

class ApiMain {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = {
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
    };
  }

  _checkResponse(res) {return res.ok ? res.json() : Promise.reject(res.status)}

  _request(url, options) {
    return fetch(`${this._url}${url}`, options)
      .then(this._checkResponse)
  }

  createUser(username, email, password) {
    return this._request('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: username,
        email: email,
        password: password
      })
    })
  }

  login(email, password) {
    return this._request('/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
  }

  getUserInfo() {
    const headers = getTokenHeader()
    return this._request('/users/me', {
      headers: headers
    })
  }


  editUserInfo(username, email) {
    const headers = getTokenHeader()
    return this._request('/users/me', {
      method: 'PATCH',
      headers: headers,
      body: JSON.stringify({
        name: username,
        email: email,
      })
    })
  }

  getMovies() {
    const headers = getTokenHeader()
    return this._request('/movies', {
      headers: headers,
    })
  }

  addMovie(data) {
    const headers = getTokenHeader()
    const imageBaseUrl = "https://api.nomoreparties.co";
    return this._request('/movies', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        description: data.description,
        year: data.year,
        image: imageBaseUrl + data.image.url,
        trailerLink: data.trailerLink,
        thumbnail: imageBaseUrl + data.image.formats.thumbnail.url,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN
      })
    })
  }

  deleteMovie(cardId) {
    const headers = getTokenHeader()
    return this._request(`/movies/${cardId}`, {
      method: 'DELETE',
      headers: headers,
    })
  }
}

/*создаю экземпляр класса Api*/
const apiMain = new ApiMain({
  baseUrl: 'https://api.yonasss-movies-diplom.nomoredomainsicu.ru',
});

export default apiMain