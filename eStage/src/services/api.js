import { useSession } from "../stores/session.js";

const HEADERS = {
  Accept: "*/*",
  "User-Agent": "eStage",
  "Content-Type": "application/json",
};
export default {
  async makeRequest(url, method, bodyContent) {
    let newBody = bodyContent ? JSON.stringify(bodyContent) : undefined;
    const response = await fetch(url, {
      method: method,
      body: newBody,
      headers: HEADERS,
    });
    return response.json();
  },
};
