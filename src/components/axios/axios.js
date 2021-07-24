import axios from 'axios';

const token = window.localStorage.getItem('jwt');

let env = 'prod';

export default axios.create({
  baseURL:
    env === 'prod'
      ? 'https://instaclone-back-end.herokuapp.com'
      : 'http://localhost:5000',
  headers: {
    Authorization: token ? `Bearer ${token}` : '',
  },
});
