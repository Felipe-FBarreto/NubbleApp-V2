import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
  headers: {
    Authorization:
      'Bearer NA.587kqpn4feT_tx7uQMjNikWbUkcTRt5zfnci3t2jERGXVHxSRLSgO61yLzvh',
  },
});
