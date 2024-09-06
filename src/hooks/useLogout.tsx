import { removeCookie } from "@/utils/cookies";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function useLogout() {
  const router = useRouter();

  const logout = useCallback(() => {
    removeCookie("accessToken", { path: "/" });
    localStorage.removeItem("refreshToken");
    removeCookie("loginType", { path: "/" });
    alert("로그아웃 되었습니다. 로그인 페이지로 이동합니다.");
    router.push("/login");
  }, [router]);

  return logout;
}
