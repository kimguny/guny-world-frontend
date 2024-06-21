"use client";
import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: string;
  name: string;
}

export default function CheckFollow() {
  const [nidAut, setNidAut] = useState("");
  const [nidSes, setNidSes] = useState("");
  const [userId, setUserId] = useState("");
  const [followers, setFollowers] = useState<User[]>([]);
  const [following, setFollowing] = useState<User[]>([]);
  const [mutualFollows, setMutualFollows] = useState<User[]>([]);
  const [onlyFollowing, setOnlyFollowing] = useState<User[]>([]);
  const [onlyFollowers, setOnlyFollowers] = useState<User[]>([]);

  const fetchFollowData = async () => {
    try {
      const headers = {
        NID_AUT: nidAut,
        NID_SES: nidSes,
      };

      const followersResponse = await axios.get<User[]>("/api/followers", {
        headers,
        params: { userId },
      });
      const followingResponse = await axios.get<User[]>("/api/following", {
        headers,
        params: { userId },
      });

      const followersList = followersResponse.data;
      const followingList = followingResponse.data;

      setFollowers(followersList);
      setFollowing(followingList);

      const mutual = followingList.filter((user) =>
        followersList.some((follower) => follower.id === user.id),
      );
      const onlyFollow = followingList.filter(
        (user) => !followersList.some((follower) => follower.id === user.id),
      );
      const onlyFollowed = followersList.filter(
        (user) => !followingList.some((following) => following.id === user.id),
      );

      setMutualFollows(mutual);
      setOnlyFollowing(onlyFollow);
      setOnlyFollowers(onlyFollowed);
    } catch (error) {
      console.error("Error fetching follow data:", error);
    }
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
          onClick={fetchFollowData}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Fetch Follow Data
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded-lg p-4 dark:bg-gray-700 dark:text-white">
          <h2 className="text-xl font-semibold mb-2">Mutual Follows</h2>
          {mutualFollows.length > 0 ? (
            <ul>
              {mutualFollows.map((user) => (
                <li key={user.id} className="mb-1">
                  {user.name}
                </li>
              ))}
            </ul>
          ) : (
            <p>No mutual follows.</p>
          )}
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 dark:bg-gray-700 dark:text-white">
          <h2 className="text-xl font-semibold mb-2">Only Following</h2>
          {onlyFollowing.length > 0 ? (
            <ul>
              {onlyFollowing.map((user) => (
                <li key={user.id} className="mb-1">
                  {user.name}
                </li>
              ))}
            </ul>
          ) : (
            <p>
              {"You are not following anyone who isn't following you back."}
            </p>
          )}
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 dark:bg-gray-700 dark:text-white">
          <h2 className="text-xl font-semibold mb-2">Only Followers</h2>
          {onlyFollowers.length > 0 ? (
            <ul>
              {onlyFollowers.map((user) => (
                <li key={user.id} className="mb-1">
                  {user.name}
                </li>
              ))}
            </ul>
          ) : (
            <p>No one is following you without you following back.</p>
          )}
        </div>
      </div>
    </div>
  );
}
