import { APIResponse } from "@/types/login";
import axios from "axios";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const login = async (data: { user_id: string; password: string }) => {
  const res = await axios.post<APIResponse>(`${apiBaseUrl}/api/login`, data);
  return res.data;
};

export const naverLogin = async (data: { code: string; state: string }) => {
  const res = await axios.get<APIResponse>(`${apiBaseUrl}/api/naver/callback`, {
    params: data,
  });
  return res.data;
};
