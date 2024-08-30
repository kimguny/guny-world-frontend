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
  NID_AUT: string;
  NID_SES: string;
  id: string;
}

export interface ChzzkResponse {
  followers: string[] | null;
  followings: string[] | null;
  mutualFollows: string[] | null;
  onlyFollowing: string[] | null;
  onlyFollowers: string[] | null;
}
