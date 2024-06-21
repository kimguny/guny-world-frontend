import { getCookie, setCookie, removeCookie } from "@/utils/cookies";
import { useRouter } from "next/navigation";
import memoize from "memoize";
import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터: 토큰을 헤더에 추가
apiClient.interceptors.request.use((config) => {
  const accessToken = getCookie("accessToken");

  if (accessToken) {
    config.headers.Authorization = accessToken;
  }

  return config;
});

const postReissue = memoize(
  async (router): Promise<string | void> => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");

      const tokens = {
        refreshToken,
      };

      const { data } = await axios.post(`api/reissue`, tokens);
      const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
        data;

      setCookie("accessToken", newAccessToken, { path: "/" });
      localStorage.setItem("refreshToken", newRefreshToken);

      return newAccessToken;
    } catch (error) {
      removeCookie("accessToken", { path: "/" });
      localStorage.removeItem("refreshToken");

      delete apiClient.defaults.headers.common.Authorization;
      alert("로그인 정보가 존재하지 않습니다. 로그인 페이지로 이동합니다.");
      router.push("/login");

      return Promise.reject(error);
    }
  },
  { maxAge: 1000 },
);

// 응답 인터셉터: 오류 처리
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error.response?.status;

    if (status === 401) {
      try {
        const router = useRouter();
        const newAccessToken = await postReissue(router);
        if (newAccessToken) {
          error.config.headers.Authorization = newAccessToken;
          return axios(error.config);
        }
      } catch (reissueError) {
        const router = useRouter();
        alert("로그인 정보가 존재하지 않습니다. 로그인 페이지로 이동합니다.");
        removeCookie("accessToken");
        localStorage.removeItem("refreshToken");
        router.push("/login");
      }
    } else {
      // 기타 오류 처리
      const errorMessage = error.response?.data?.message || error.message;
      alert(`오류 발생: ${errorMessage}`);
    }

    return Promise.reject(error);
  },
);

export default apiClient;
