import { getBaseInstance } from "../config";
import { TestUserRegisterResponseDto } from "../../service/dto/TestUserResponseDto";

export const testMemberRegister = async (testUserRegisterRequestDto) => {
  try {
    const axiosInstance = getBaseInstance();
    const response = await axiosInstance.post("/test", testUserRegisterRequestDto);
    return response.data;
  } catch (error) {
    console.error("회원 등록 요청 실패:", error);
    throw error; 
  }
};

export const testMemberInfo = async (testUserId) => {
  try {
    const axiosInstance = getBaseInstance();
    const response = await axiosInstance.get(`/test/${testUserId}`);
    const testUserInfoResponseDto = new TestUserRegisterResponseDto(response.data.name, response.data.age);
    return response.data;
  } catch (error) {
    console.error("회원 정보 요청 실패:", error);
    throw error;
  }
}
