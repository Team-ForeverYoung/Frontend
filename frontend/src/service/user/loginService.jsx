import { baseInstance } from "../config";

export const login = async (loginRequestDto) => {
  try {
    const response = await baseInstance.post('/test/login', loginRequestDto);
    return response.data;
  } catch (error) {
    console.error('로그인 실패:', error);
    throw error;
  }
};
