// apiClient.js
import { getCookie, removeCookie } from "@/utils/cookies";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ServerResponse } from "http";
import { env } from "next-runtime-env";

const apiClient = axios.create();

// 로컬 스토리지에서 토큰을 가져와 헤더에 넣고 API 요청
apiClient.interceptors.request.use((config) => {
  const accessToken = getCookie("token");

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

export interface HttpConfig extends AxiosRequestConfig<ServerResponse> {
  host?: string;
  suppressError?: boolean;
  // 로그인 페이지로 이동할지 여부 (생략할 경우 로그인 페이지로 이동함)
  doNotRedirect?: boolean;
}

export const tryParseJson = (value: any): any => {
  try {
    if (value && typeof value === "string") {
      return JSON.parse(value);
    } else if (value && typeof value === "object") {
      return value;
    }
  } catch (e) {
    //
  }
};

let authErrorOccurred = false;

// 응답이 401 에러일 경우 로그아웃
apiClient.interceptors.response.use(
  (response: AxiosResponse<any, { [key: string]: any }>) => {
    const config = response.config ?? {};

    return response;
  },
  async (error) => {
    const response = error?.response as AxiosResponse<any, { [key: string]: any }>;
    const config = error?.config as HttpConfig;
    const status = response?.status;

    const showError = () => {
      // 다른 오류라면 메시지 표시
      let debuggingMessage = "";

      const DEBUG_REQUEST = env("NEXT_PUBLIC_DEBUG_REQUEST") === "true";

      if (DEBUG_REQUEST) {
        let requestData;

        if (config?.data) {
          const parsed = tryParseJson(config?.data);
          requestData = parsed ? JSON.stringify(parsed, null, 2) : config.data;
        }

        const requestBody = requestData ? `\n== Request (type: ${typeof config.data})\n${requestData}` : " (no body)";

        const requestParams = config?.params ? `, with params: ${new URLSearchParams(config?.params).toString()}` : " (no params)";

        const origin = new URL(location.href).origin;

        debuggingMessage =
          `\n// Debugging details\n[${config.method?.toUpperCase()}] ${origin}${config.url}: ${status}\n` +
          `--- Response ----------\n` +
          `${JSON.stringify(response?.data)}\n` +
          `--- Request ----------\n` +
          `${config.data}`;
      }

      // 서버에서 받은 메시지 또는 Axios 오류 출력
      const message = response?.data?.message ?? response?.data?.error_description ?? response?.data?.error ?? error.message;
      const statusString = status ? `, ${status}` : "";
      const errorMessage = `${message} (${error.code}${statusString})${debuggingMessage}`;

      alert(errorMessage);
    };

    switch (status) {
      case 401:
        // 401 오류 발생 시 로그인 페이지로 이동 (REALFAST-261)
        if (authErrorOccurred === false) {
          if (config.doNotRedirect !== true) {
            authErrorOccurred = true;
            alert("로그인 정보가 존재하지 않습니다. 로그인 페이지로 이동합니다.");
            window.location.href = "/login";
          } else {
            showError();
          }
        }
        break;

      default: {
        if (authErrorOccurred === false) {
          showError();
        }
        break;
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
