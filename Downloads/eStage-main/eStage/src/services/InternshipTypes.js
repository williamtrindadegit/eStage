const BASE_URL = "https://api-2.fly.dev//nternship-types";
import makeRequest from "./api";

export default {
  async FindOne(id) {
    return makeRequest(`${BASE_URL}/${id}`, "GET");
  },
  async FindAll() {
    return makeRequest(BASE_URL, "GET");
  },
  async Create(internshipRequests) {
    return makeRequest(BASE_URL, "POST", internshipRequests);
  },
  async Update(internshipRequests) {
    return makeRequest(BASE_URL, "PATCH", internshipRequests);
  },
  async Delete(id) {
    return makeRequest(`${BASE_URL}/${id}`, "DELETE");
  },
};
