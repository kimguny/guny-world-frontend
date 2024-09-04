"use client";

import { getCookie, setCookie, removeCookie } from "@/utils/cookies";
import useLoginMutation from "@/hooks/mutation/useLoginMutation";
import React, { useEffect, useState, FormEvent } from "react";
import Lanyard from "@/components/common/Lanyard";
import styles from "./LoginForm.module.css";
import Image from "next/image";
import crypto from "crypto";

export default function LoginForm() {
  const [user_id, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const { mutate: postLogin } = useLoginMutation();

  const [state, setState] = useState("");

  useEffect(() => {
    const randomState = crypto.randomBytes(16).toString("hex");
    setState(randomState);
  }, []);

  const onLogin = (e: FormEvent) => {
    e.preventDefault();
    removeCookie("accessToken");
    postLogin({ user_id, password });
  };

  const onNaverLogin = (e: FormEvent) => {
    e.preventDefault();
    removeCookie("accessToken");
    window.location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=9XMqrNZOsBDy4Z_wq21i&redirect_uri=https://game.gunynote.com/api/naver/callback&state=${state}`;
  };

  return (
    <div className="flex items-start justify-center bg-slate-100 h-screen overflow-y-auto">
      <div className={`${styles["slide-down"]} rounded-lg w-full max-w-sm p-4`}>
        <div style={{ height: "12rem" }}>
          <Lanyard />
        </div>
        <div className="bg-yellow-400 h-9 w-full rounded-t-3xl"></div>
        <div className="rounded-b-3xl bg-white p-4">
          <h2 className="text-3xl font-bold mb-6 text-center">로그인</h2>
          <form onSubmit={onLogin}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 font-medium mb-2 px-3"
              >
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
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2 px-3"
              >
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
            <div className="mb-4 flex items-center px-3">
              <a
                href="/register"
                className="text-base text-yellow-500 hover:underline"
              >
                회원가입 바로가기
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-2 rounded-3xl hover:bg-yellow-600 transition duration-200"
            >
              로그인
            </button>
          </form>
          <div className="flex items-center my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="px-4 text-gray-500">또는</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
          <div className="flex justify-center space-x-4">
            {/* <a href="https://accounts.google.com/signin" className="text-3xl">
              <Image
                src="/img/search.png"
                alt="Google"
                width={32}
                height={32}
              />
            </a> */}
            <a
              // href={`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=9XMqrNZOsBDy4Z_wq21i&redirect_uri=https://game.gunynote.com/api/naver/callback&state=${state}`}
              onClick={onNaverLogin}
              className="text-3xl"
            >
              <Image
                src="/img/btnG_아이콘사각.png"
                alt="Naver"
                width={32}
                height={32}
              />
            </a>
            {/* <a href="https://www.kakao.com/talk" className="text-3xl">
              <Image src="" alt="Kakao" width={32} height={32} />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
