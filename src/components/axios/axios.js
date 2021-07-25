import axios from 'axios';

const token = window.localStorage.getItem('jwt');

let env = 'prod';

export default axios.create({
  //   baseURL: 'http://localhost:5000',
  baseURL: 'https://instaclone-back-end.herokuapp.com',

  headers: {
    Authorization: token ? `Bearer ${token}` : '',
  },
});
