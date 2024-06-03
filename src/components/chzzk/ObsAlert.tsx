"use client";

import { useEffect, useState } from "react";
import ObsSettingsForm from "@/components/chzzk/ObsSettingsForm";
import { connectOBS, showFollowAlert } from "@/utils/obs";

export default function ObsAlert() {
  const [obsUrl, setObsUrl] = useState("");
  const [obsPassword, setObsPassword] = useState("");
  const [chzzkUrl, setChzzkUrl] = useState("");

  useEffect(() => {
    if (obsUrl && obsPassword && chzzkUrl) {
      connectOBS(obsUrl, obsPassword);

      const ws = new WebSocket(chzzkUrl);

      ws.onopen = () => {
        console.log("Connected to chzzk WebSocket");
      };

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.type === "FOLLOW") {
          showFollowAlert(data.followerName);
        }
      };

      ws.onclose = () => {
        console.log("Disconnected from chzzk WebSocket");
      };

      ws.onerror = (error) => {
        console.error("chzzk WebSocket error:", error);
      };

      return () => {
        ws.close();
      };
    }
  }, [obsUrl, obsPassword, chzzkUrl]);

  const handleFormSubmit = (obsUrl: string, obsPassword: string, chzzkUrl: string) => {
    setObsUrl(obsUrl);
    setObsPassword(obsPassword);
    setChzzkUrl(chzzkUrl);
  };

  return (
    <>
      <ObsSettingsForm onSubmit={handleFormSubmit} />
    </>
  );
}
