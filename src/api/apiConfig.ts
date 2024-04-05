import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
  headers: {
    Authorization:
      'Bearer MQ.sR_wReAd1KsSnBaKcFdUh6T3PUlxumw4Pv3VlRvZRPS7WT09Wp_5ToaHIF87',
  },
});
