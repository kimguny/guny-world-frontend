export interface User {
  id: string;
  name: string;
}

export interface FollowerResponse {
  code: number;
  message: string | null;
  content: {
    page: number;
    size: number;
    totalCount: number;
    totalPages: number;
    data: { user: { userIdHash: string; nickname: string } }[];
  };
}

export interface FetchFollowersParams {
  nidAut: string;
  nidSes: string;
  userId: string;
}
