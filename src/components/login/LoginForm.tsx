"use client";
import React, { useEffect, useState } from "react";
import useLoginMutation from "@/hooks/mutation/useLoginMutation";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { mutate: postLogin, isSuccess } = useLoginMutation();
  const [cookies, setCookie, removeCookie] = useCookies();
  const router = useRouter();

  const onLogin = (e: React.FormEvent) => {
    e.preventDefault();
    removeCookie("token");
    postLogin({ username, password });
  };

  useEffect(() => {
    if (isSuccess && cookies.token) {
      router.push("/");
    }
  }, [isSuccess, cookies.token, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">로그인</h2>
        <form onSubmit={onLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
              아이디
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="아이디를 입력하세요"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm text-gray-600">
                기억하기
              </label>
            </div>
            <a href="#" className="text-sm text-indigo-600 hover:underline">
              회원가입
            </a>
          </div>
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200">
            로그인
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
