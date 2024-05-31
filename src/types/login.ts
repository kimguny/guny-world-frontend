export interface APIResponse<T> {
  content?: T;
  message: string;
}

export interface LoginContent {
  user_id: string;
  accessToken: string;
  refreshToken: string;
}
