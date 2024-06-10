"use client";
import useRegisterMutation from "@/hooks/mutation/useRegisterMutation";
import React, { useState, useEffect, FormEvent } from "react";
import Lanyard from "@/components/common/Lanyard";
import styles from "./RegisterForm.module.css";

export default function RegisterForm() {
  const [nickname, setNickname] = useState("");
  const [user_id, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const { mutate: postRegister } = useRegisterMutation();

  const onRegister = (e: FormEvent) => {
    e.preventDefault();
    if (!isPasswordMatch) {
      alert("Passwords do not match");
      return;
    }
    postRegister({ user_id, password, nickname });
  };

  useEffect(() => {
    setIsPasswordMatch(password === confirmPassword);
    setIsFormValid(
      nickname !== "" &&
        user_id !== "" &&
        password !== "" &&
        confirmPassword !== "" &&
        password === confirmPassword,
    );
  }, [nickname, user_id, password, confirmPassword]);

  return (
    <div className="flex items-start justify-center bg-slate-100 h-screen">
      <div className={`${styles["slide-down"]} rounded-lg w-full max-w-sm p-4`}>
        <div style={{ height: "12rem" }}>
          <Lanyard />
        </div>
        <div className="rounded-3xl bg-white p-6">
          <h2 className="text-3xl font-bold mb-6 text-center">회원가입</h2>
          <form onSubmit={onRegister}>
            <div className="mb-4">
              <label
                htmlFor="nickname"
                className="block text-gray-700 font-medium mb-2 px-3"
              >
                닉네임
              </label>
              <input
                type="text"
                id="nickname"
                className="w-full px-3 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="닉네임은 최대 8자리 입니다"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="user_id"
                className="block text-gray-700 font-medium mb-2 px-3"
              >
                아이디(이메일)
              </label>
              <input
                type="email"
                id="user_id"
                className="w-full px-3 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="이메일을 입력하세요"
                value={user_id}
                onChange={(e) => setUserId(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
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
            <div className="mb-6">
              <label
                htmlFor="confirm-password"
                className="block text-gray-700 font-medium mb-2 px-3"
              >
                비밀번호 확인
                {confirmPassword && (
                  <span
                    className={`ml-2 ${isPasswordMatch ? "text-green-500" : "text-red-500"}`}
                  >
                    {isPasswordMatch ? "✔" : "✖"}
                  </span>
                )}
              </label>
              <input
                type="password"
                id="confirm-password"
                className="w-full px-3 py-2 border border-gray-300 rounded-3xl focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="비밀번호를 다시 입력하세요"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className={`w-full bg-yellow-400 text-black py-2 rounded-3xl transition duration-200 ${
                isFormValid
                  ? "hover:bg-yellow-600"
                  : "cursor-not-allowed opacity-50"
              }`}
              disabled={!isFormValid}
            >
              회원가입
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
