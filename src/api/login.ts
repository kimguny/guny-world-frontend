import { APIResponse, LoginContent } from "@/types/login";
import axios from "axios";

export const login = async (data: { user_id: string; password: string }) => {
  const res = await axios.post<APIResponse<LoginContent>>(`/login`, data);

  return res.data;
};
