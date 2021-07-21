import axios from 'axios';

const token = window.localStorage.getItem('jwt');

export default axios.create({
  baseURL: 'https://instaclone-back-end.herokuapp.com',
  headers: {
    Authorization: token ? `Bearer ${token}` : '',
  },
});
