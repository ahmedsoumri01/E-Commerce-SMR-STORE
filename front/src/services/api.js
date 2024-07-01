// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.smr-store.com',
});

export default api;
