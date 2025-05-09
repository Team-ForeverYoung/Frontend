import axios from 'axios';

// const BASE_URL = '/api/v1'; // 배포용
const BASE_URL = import.meta.env.VITE_BASE_URL;
export const baseInstance = axios.create({
  withCredentials: true,
  baseURL: BASE_URL, // 기본 URL 설정
});