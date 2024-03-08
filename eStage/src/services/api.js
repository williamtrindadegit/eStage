import { useSession } from "../stores/session.js";

export const BASE_URL = "https://api-2.fly.dev";

export async function api(url, params = {}) {
  const session = useSession();

  params = Object.assign(
    {
      mode: "cors",
      cache: "no-cache",
    },
    params
  );

  params.headers = Object.assign(
    {
      "Content-Type": "application/json",
    },
    params.headers
  );

  let response = await fetch(BASE_URL + url, params);
  let json = (await response.json()) || {};
  if (!response.ok) {
    let errorMessage = json.error || response.status;
    throw new Error(errorMessage);
  }
  return json;
}
