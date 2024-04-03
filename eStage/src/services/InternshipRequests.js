const BASE_URL = "https://api-2.fly.dev/internship-requests";
import api from "./api";

export default {
  async FindOne(id) {
    return api.makeRequest(`${BASE_URL}/${id}`, "GET");
  },
  async FindAll() {
    return api.makeRequest(BASE_URL, "GET");
  },
  async Create(internshipRequests) {
    return api.makeRequest(BASE_URL, "POST", internshipRequests);
  },
  async Update(internshipRequests) {
    return api.makeRequest(
      `${BASE_URL}/${internshipRequests._id}`,
      "PATCH",
      internshipRequests
    );
  },
  async Delete(id) {
    return api.makeRequest(`${BASE_URL}/${id}`, "DELETE");
  },
};
