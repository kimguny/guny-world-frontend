"use client";
import useChzzkMutation from "@/hooks/mutation/useChzzkMutation";
import { useState } from "react";

export default function CheckFollow() {
  const [nidAut, setNidAut] = useState<string>("");
  const [nidSes, setNidSes] = useState<string>("");
  const [userId, setUserId] = useState<string>("");

  const [followers, setFollowers] = useState<string[]>([]);
  const [following, setFollowing] = useState<string[]>([]);

  const [mutualFollows, setMutualFollows] = useState<string[]>([]);
  const [onlyFollowing, setOnlyFollowing] = useState<string[]>([]);
  const [onlyFollowers, setOnlyFollowers] = useState<string[]>([]);

  const { mutate: postChzzk } = useChzzkMutation();

  const handleVerify = () => {
    const requestBody = {
      NID_AUT: nidAut,
      NID_SES: nidSes,
      id: userId,
    };

    postChzzk(requestBody, {
      onSuccess: (data) => {
        console.log("Response data:", data);
        setFollowers(data.followers);
        setFollowing(data.followings);
        setMutualFollows(data.mutualFollows);
        setOnlyFollowing(data.onlyFollowing);
        setOnlyFollowers(data.onlyFollowers);
      },
      onError: (error) => {
        console.error("Error:", error);
      },
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Follow Status</h1>
      <div className="mb-4">
        <label className="block mb-2">
          NID_AUT:
          <input
            type="text"
            value={nidAut}
            onChange={(e) => setNidAut(e.target.value)}
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block mb-2">
          NID_SES:
          <input
            type="text"
            value={nidSes}
            onChange={(e) => setNidSes(e.target.value)}
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="block mb-2">
          User ID:
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="block w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </label>
        <button
          onClick={handleVerify}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          검증 요청
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded-lg p-4 dark:bg-gray-700 dark:text-white">
          <h2 className="text-xl font-semibold mb-2">
            팔로워 ({followers.length})
          </h2>
          {followers.length > 0 ? (
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
            팔로잉 ({following.length})
          </h2>
          {following.length > 0 ? (
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
            맞팔 리스트 ({mutualFollows.length})
          </h2>
          {mutualFollows.length > 0 ? (
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
            나만 팔로우 리스트 ({onlyFollowing.length})
          </h2>
          {onlyFollowing.length > 0 ? (
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
            상대만 팔로워 리스트 ({onlyFollowers.length})
          </h2>
          {onlyFollowers.length > 0 ? (
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
