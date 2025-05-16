import { getBaseInstance } from "../config";
import { OliveUserRegisterResponseDto } from "../../service/dto/OliveUserResponseDto";

export const oliveMemberRegister = async (oliveUserRegisterRequestDto) => {
  try {
    const baseInstance = getBaseInstance();
    const response = await baseInstance.post("/join", oliveUserRegisterRequestDto,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("회원 등록 요청 실패:", error);
    throw error; 
  }
};

export const oliveMemberInfo = async (oliveUserId) => {
    try {
        const response = await baseInstance.get(`/user/${oliveUserId}`);
        const oliveUserInfoResponseDto = new OliveUserRegisterResponseDto(response.data.name, response.data.id, response.data.email, response.data.passwd, response.data.country);
        return response.data;
    } catch (error) {
        console.error("회원 등록 요청 실패:", error);
        throw error;
    }
}