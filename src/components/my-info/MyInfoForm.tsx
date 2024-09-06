"use client";

import Tilt from "react-parallax-tilt";
import Image from "next/image";

export default function MyInfoForm() {
  return (
    <Tilt
      className="w-80 h-96 mx-auto shadow-xl rounded-xl bg-gradient-to-r from-purple-500 to-blue-400"
      perspective={1000}
      glareEnable={true}
      glareMaxOpacity={0.8}
      scale={1.05}
    >
      <div className="flex flex-col items-center justify-center h-full p-5 text-center text-white">
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={100}
          height={100}
          className="rounded-full mb-4"
        />
        <h2 className="text-2xl font-bold">홍길동</h2>
        <p className="text-lg">honggildong@example.com</p>
        <p className="text-sm mt-2">Role: Admin</p>
      </div>
    </Tilt>
  );
}
