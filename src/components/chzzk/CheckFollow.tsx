"use client";
import useChzzkMutation from "@/hooks/mutation/useChzzkMutation";
import { FetchFollowersParams } from "@/types/chzzk";
import { useState } from "react";

export default function CheckFollow() {
  const [nidAut, setNidAut] = useState<string>("");
  const [nidSes, setNidSes] = useState<string>("");
  const [userId, setUserId] = useState<string>("");

  const [followers, setFollowers] = useState<string[] | null>(null);
  const [following, setFollowing] = useState<string[] | null>(null);
  const [mutualFollows, setMutualFollows] = useState<string[] | null>(null);
  const [onlyFollowing, setOnlyFollowing] = useState<string[] | null>(null);
  const [onlyFollowers, setOnlyFollowers] = useState<string[] | null>(null);

  const { mutate: postChzzk } = useChzzkMutation((data) => {
    setFollowers(data.followers || []);
    setFollowing(data.followings || []);
    setMutualFollows(data.mutualFollows || []);
    setOnlyFollowing(data.onlyFollowing || []);
    setOnlyFollowers(data.onlyFollowers || []);
  });

  const handleVerify = () => {
    const requestBody: FetchFollowersParams = {
      NID_AUT: nidAut,
      NID_SES: nidSes,
      id: userId,
    };

    postChzzk(requestBody);
  };

  return (
    <div className="dark:bg-gray-800 dark:text-white">
      <h1 className="text-2xl font-bold mb-4">치지직 팔로우, 필로잉 정보</h1>
      <div className="mb-4">
        <label className="block mb-2">
          NID_AUT:
          <input
            type="text"
            value={nidAut}
            onChange={(e) => setNidAut(e.target.value)}
            className="block w-full mt-1 p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </label>
        <label className="block mb-2">
          NID_SES:
          <input
            type="text"
            value={nidSes}
            onChange={(e) => setNidSes(e.target.value)}
            className="block w-full mt-1 p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </label>
        <label className="block mb-2">
          치지직 채널 고유 ID (url 뒤에 붙는 값):
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="block w-full mt-1 p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </label>
        <button
          onClick={handleVerify}
          className="px-4 py-2 bg-kg-yellow text-black rounded hover:bg-yellow-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
        >
          검증 요청
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded-lg p-4 dark:bg-gray-700 dark:text-white">
          <h2 className="text-xl font-semibold mb-2">
            팔로워 리스트 ({followers?.length || 0})
          </h2>
          {followers && followers.length > 0 ? (
            <ul className="overflow-y-auto max-h-48">
              {followers.map((name, index) => (
                <li key={index} className="mb-1 h-10">
                  {name}
                </li>
              ))}
            </ul>
          ) : (
            <p>아무도 없다..</p>
          )}
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 dark:bg-gray-700 dark:text-white">
          <h2 className="text-xl font-semibold mb-2">
            팔로잉 리스트 ({following?.length || 0})
          </h2>
          {following && following.length > 0 ? (
            <ul className="overflow-y-auto max-h-48">
              {following.map((name, index) => (
                <li key={index} className="mb-1 h-10">
                  {name}
                </li>
              ))}
            </ul>
          ) : (
            <p>아무도 없다..</p>
          )}
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 dark:bg-gray-700 dark:text-white">
          <h2 className="text-xl font-semibold mb-2">
            맞팔 리스트 ({mutualFollows?.length || 0})
          </h2>
          {mutualFollows && mutualFollows.length > 0 ? (
            <ul className="overflow-y-auto max-h-48">
              {mutualFollows.map((name, index) => (
                <li key={index} className="mb-1 h-10">
                  {name}
                </li>
              ))}
            </ul>
          ) : (
            <p>아무도 없다..</p>
          )}
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 dark:bg-gray-700 dark:text-white">
          <h2 className="text-xl font-semibold mb-2">
            나만 팔로우 리스트 ({onlyFollowing?.length || 0})
          </h2>
          {onlyFollowing && onlyFollowing.length > 0 ? (
            <ul className="overflow-y-auto max-h-48">
              {onlyFollowing.map((name, index) => (
                <li key={index} className="mb-1 h-10">
                  {name}
                </li>
              ))}
            </ul>
          ) : (
            <p>아무도 없다..</p>
          )}
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 dark:bg-gray-700 dark:text-white">
          <h2 className="text-xl font-semibold mb-2">
            상대만 팔로워 리스트 ({onlyFollowers?.length || 0})
          </h2>
          {onlyFollowers && onlyFollowers.length > 0 ? (
            <ul className="overflow-y-auto max-h-48">
              {onlyFollowers.map((name, index) => (
                <li key={index} className="mb-1 h-10">
                  {name}
                </li>
              ))}
            </ul>
          ) : (
            <p>아무도 없다..</p>
          )}
        </div>
      </div>
    </div>
  );
}
