import { useSession } from "../stores/session.js";

const HEADERS = {
  Accept: "*/*",
  "User-Agent": "eStage",
};
export default {
  async makeRequest(url, method, bodyContent) {
    const response = await fetch(url, {
      method: method,
      body: bodyContent ? JSON.stringify(bodyContent) : undefined,
      headers: HEADERS,
    });
    return response.json();
  },
};
