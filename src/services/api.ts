//Import Axios Library and Auth0
import axios from 'axios';
import JwtService from '@/services/jwt.service';

//Create instance of axios
const instance = axios.create({
  baseURL: import.meta.env.VITE_URL_API,
});

// Create a request interceptor for my instance and get accessToken on the fly
instance.interceptors.request.use(
  async (config: any) => {
    if (JwtService.getToken()) {
      const accessToken = JwtService.getToken();
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
export default instance;
