export interface APIResponse<T> {
  content?: T;
  message: string;
  status: number;
}
export interface LoginContent {
  member_id: number;
  token: string;
}
