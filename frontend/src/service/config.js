import axios from 'axios';

let baseInstance = null;

export async function initBaseInstance() {
  const res = await fetch('/config.json');
  const config = await res.json();
  baseInstance = axios.create({
    withCredentials: true,
    baseURL: config.BASE_URL,
  });
}

export function getBaseInstance() {
  if (!baseInstance) {
    throw new Error('baseInstance is not initialized!');
  }
  return baseInstance;
}
