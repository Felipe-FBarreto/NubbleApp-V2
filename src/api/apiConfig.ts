import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
  headers: {
    Authorization:
      'Bearer Mg.h2rBd6T98r3uFoV_0Gi7TF1q6K5vGvtcyeguAWXVcP5H8M2LDn1cuvp_LAcb',
  },
});
