import apiClient from "@/api/apiClient";

export const useChzzk = async (data: {
  NID_AUT: string;
  NID_SES: string;
  id: string;
}) => {
  const response = await apiClient.post("/api/chzzk", data);
  return response.data;
};
