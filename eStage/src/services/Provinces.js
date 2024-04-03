const BASE_URL = "https://api-2.fly.dev/provinces";
import api from "./api";

export default {
  async FindOne(id) {
    return api.makeRequest(`${BASE_URL}/${id}`, "GET");
  },
  async FindAll() {
    return api.makeRequest(BASE_URL, "GET");
  },
  async Create(province) {
    return api.makeRequest(BASE_URL, "POST", province);
  },
  async Update(province) {
    return api.makeRequest(`${BASE_URL}/${province._id}`, "PATCH", province);
  },
  async Delete(id) {
    return api.makeRequest(`${BASE_URL}/${id}`, "DELETE");
  },
};
