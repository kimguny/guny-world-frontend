import apiClient from "@/api/apiClient";

// 사용자 정보를 가져오는 함수
export const getUserInfo = async () => {
  const response = await apiClient.get("/api/user_info");
  return response.data;
};
