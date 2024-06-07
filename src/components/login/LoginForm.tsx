"use client";
import React, { useEffect, useState, FormEvent } from "react";
import useLoginMutation from "@/hooks/mutation/useLoginMutation";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
import styles from "./LoginForm.module.css";
import Lanyard from "@/components/common/Lanyard";
import Image from "next/image";

export default function LoginForm() {
  const [user_id, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const { mutate: postLogin, isSuccess } = useLoginMutation();
  const [cookies, setCookie, removeCookie] = useCookies();
  const router = useRouter();

  const onLogin = (e: FormEvent) => {
    e.preventDefault();
    removeCookie("accessToken");
    postLogin({ user_id, password });
  };

  useEffect(() => {
    if (isSuccess && cookies.accessToken) {
      router.push("/save/main");
    }
  }, [isSuccess, cookies.accessToken, router]);

  return (
    <div className="flex items-start justify-center bg-slate-100 h-screen">
      <div className={`${styles["slide-down"]} rounded-lg w-full max-w-sm `}>
        <div style={{ height: "12rem" }}>
          <Lanyard />
        </div>
        <div className="rounded-3xl bg-white border-yellow-400 border-4 p-6">
          <h2 className="text-3xl font-bold mb-6 text-center">로그인</h2>
          <form onSubmit={onLogin}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 font-medium mb-2 px-3">
                아이디(이메일)
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-3 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="아이디를 입력하세요"
                value={user_id}
                onChange={(e) => setUserId(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2 px-3">
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-4 flex items-center justify-between px-3">
              <a href="/register" className="text-base text-yellow-500 hover:underline">
                회원가입 바로가기
              </a>
              <a href="/register" className="text-base text-yellow-500 hover:underline">
                아이디/비밀번호 찾기
              </a>
            </div>
            <button type="submit" className="w-full bg-yellow-400 text-black py-2 rounded-3xl hover:bg-yellow-600 transition duration-200">
              로그인
            </button>
          </form>
          <div className="flex items-center my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="px-4 text-gray-500">또는</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
          <div className="flex justify-center space-x-4">
            <a href="https://accounts.google.com/signin" className="text-3xl">
              <Image src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/google.svg" alt="Google" width={32} height={32} />
            </a>
            <a href="https://nid.naver.com/nidlogin.login" className="text-3xl">
              <Image src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/naver.svg" alt="Naver" width={32} height={32} />
            </a>
            <a href="https://www.kakao.com/talk" className="text-3xl">
              <Image src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/kakao.svg" alt="Kakao" width={32} height={32} />
            </a>
            <a href="https://www.facebook.com/login" className="text-3xl">
              <Image src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/facebook.svg" alt="Facebook" width={32} height={32} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
