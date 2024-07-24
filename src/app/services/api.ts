import axios, { AxiosInstance } from 'axios';
import { getAccessToken } from './auth';



const api = axios.create({
  // withCredentials: environment.environment !== 'local',
});

export default api;

export const FMMApi: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

FMMApi.interceptors.request.use(
  async (config: any) => {
    const accessToken = await getAccessToken(config.url.split('/'));
    if (accessToken) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`,
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
