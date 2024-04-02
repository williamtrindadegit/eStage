const BASE_URL = "https://api-2.fly.dev/provinces";
import makeRequest from "./api";

export default {
  async FindOne(id) {
    return makeRequest(`${BASE_URL}/${id}`, "GET");
  },
  async FindAll() {
    return makeRequest(BASE_URL, "GET");
  },
  async Create(province) {
    return makeRequest(BASE_URL, "POST", province);
  },
  async Update(province) {
    return makeRequest(BASE_URL, "PATCH", province);
  },
  async Delete(id) {
    return makeRequest(`${BASE_URL}/${id}`, "DELETE");
  },
};
