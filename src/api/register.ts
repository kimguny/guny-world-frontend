import { APIResponse } from "@/types/register";
import axios from "axios";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const register = async (data: { user_id: string; password: string }) => {
  const res = await axios.post<APIResponse>(`${apiBaseUrl}/api/register`, data);
  return res.data;
};
