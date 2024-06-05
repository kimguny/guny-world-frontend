import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { getCookie, removeCookie } from "@/utils/cookies";

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

// 응답 인터셉터: 오류 처리
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    if (status === 401) {
      // 401 오류 발생 시 로그인 페이지로 리디렉션
      alert("로그인 정보가 존재하지 않습니다. 로그인 페이지로 이동합니다.");
      window.location.href = "/login";
      removeCookie("accessToken");
      removeCookie("refreshToken");
      localStorage.removeItem("userInfo");
    } else {
      // 기타 오류 처리
      const errorMessage = error.response?.data?.message || error.message;
      alert(`오류 발생: ${errorMessage}`);
    }

    return Promise.reject(error);
  }
);

export default apiClient;
