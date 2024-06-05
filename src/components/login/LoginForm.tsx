"use client";
import React, { useEffect, useState, FormEvent } from "react";
import useLoginMutation from "@/hooks/mutation/useLoginMutation";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

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
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">로그인</h2>
        <form onSubmit={onLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
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
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
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
          <div className="mb-4 flex items-center justify-between">
            <a href="/register" className="text-base text-yellow-500 hover:underline">
              회원가입 바로가기
            </a>
          </div>
          <button type="submit" className="w-full bg-yellow-400 text-black py-2 rounded-3xl hover:bg-yellow-600 transition duration-200">
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}
