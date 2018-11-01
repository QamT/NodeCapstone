const fetchData = (url, method='GET') => {
  let headers = {
    headers: {
      'content-type': 'application/json',
      Authorization: 'Bearer' + jwt
    },
    credentials: 'same-origin',
    method: `${method.toUpperCase()}`
  }

  return fetch(url, headers);
}

const getCookie = () => {
  return document.cookie.split('=')[1];
}

const jwt = getCookie();

module.exports = {
  fetchData,
  jwt
}

