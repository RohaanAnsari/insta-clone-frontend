import axios from 'axios';

const token = window.localStorage.getItem('jwt');

export default axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Authorization': token ? `Bearer ${token}` : ''
  }
});