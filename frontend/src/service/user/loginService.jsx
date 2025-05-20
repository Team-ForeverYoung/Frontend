import { getBaseInstance } from "../config";

export const login = async (loginRequestDto) => {
  try {
    const axiosInstance = getBaseInstance();
    const response = await axiosInstance.post('/api/v1/user/login', loginRequestDto);
    return response.data;
  } catch (error) {
    console.error('로그인 실패:', error);
    throw error;
  }
};
