import { useState } from "react";

interface ObsSettingsFormProps {
  onSubmit: (obsUrl: string, obsPassword: string, chzzkUrl: string) => void;
}

export default function ObsSettingsForm({ onSubmit }: ObsSettingsFormProps) {
  const [obsUrl, setObsUrl] = useState("");
  const [obsPassword, setObsPassword] = useState("");
  const [chzzkUrl, setChzzkUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(obsUrl, obsPassword, chzzkUrl);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg p-4 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="obsUrl">
          OBS WebSocket URL
        </label>
        <input
          type="text"
          id="obsUrl"
          value={obsUrl}
          onChange={(e) => setObsUrl(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="ws://localhost:4444"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="obsPassword">
          OBS WebSocket Password
        </label>
        <input
          type="password"
          id="obsPassword"
          value={obsPassword}
          onChange={(e) => setObsPassword(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Your OBS Password"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="chzzkUrl">
          chzzk WebSocket URL
        </label>
        <input
          type="text"
          id="chzzkUrl"
          value={chzzkUrl}
          onChange={(e) => setChzzkUrl(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="ws://your_chzzk_server_url"
        />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Save
      </button>
    </form>
  );
}
