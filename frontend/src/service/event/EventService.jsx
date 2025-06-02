import { getBaseInstance } from "../config";
export const eventJoin = async (EventJoinResponseDto) => {
  try {
    const axiosInstance = getBaseInstance();
    const response = await axiosInstance.post("/event", EventJoinResponseDto);
    console.log("이벤트 참여 성공");
    return response.data;
  } catch (error) {
    console.error("이벤트 참여 실패", error);
    throw error; 
  }
};
