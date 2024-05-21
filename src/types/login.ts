export interface APIResponse<T> {
  content?: T;
  message: string;
  status: number;
  timestamp: string;
}
export interface LoginContent {
  member_id: number;
  role_id: number;
  token: string;
  user_level: string;
}
