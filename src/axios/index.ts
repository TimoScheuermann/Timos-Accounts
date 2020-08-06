import { getCookie } from '@/utils/authService';
import Axios from 'axios';
const axios = Axios.create({
  headers: {
    Authorization: `Bearer ${getCookie('timos-designs-auth')}`
  },
  baseURL: process.env.VUE_APP_LOCAL
    ? 'http://localhost:3000/'
    : 'https://api.timos.design/'
});
export default axios;
