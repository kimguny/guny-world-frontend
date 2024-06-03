import OBSWebSocket from "obs-websocket-js";

const obs = new OBSWebSocket();

export const connectOBS = async (url: string, password: string) => {
  try {
    await obs.connect(url, password);
    console.log("Connected to OBS WebSocket");
  } catch (error) {
    console.error("Failed to connect to OBS WebSocket:", error);
  }
};

export const showFollowAlert = async (followerName: string) => {
  try {
    await obs.call("SetInputSettings", {
      inputName: "Follow Alert",
      inputSettings: { text: `${followerName} just followed!` },
    });
    console.log(`Follow alert shown for ${followerName}`);
  } catch (error) {
    console.error("Failed to show follow alert:", error);
  }
};
