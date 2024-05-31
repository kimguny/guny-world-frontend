// api/login.ts
import { APIResponse } from "@/types/login";
import axios from "axios";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const login = async (data: { user_id: string; password: string }) => {
  const res = await axios.post<APIResponse>(`${apiBaseUrl}/login`, data);
  return res.data;
};
