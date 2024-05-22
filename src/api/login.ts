import { APIResponse, LoginContent } from "@/types/login";
import axios from "axios";
import { env } from "next-runtime-env";

export const login = async (data: { username: string; password: string }) => {
  const BASE_URL = env("NEXT_PUBLIC_BASE_URL");
  const res = await axios.post(`/${BASE_URL}/login`, data);

  return res.data as APIResponse<LoginContent> & { tangoToken: string };
};
