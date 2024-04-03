const BASE_URL = "https://api-2.fly.dev/internship-offers";
import api from "./api";

export default {
  async FindOne(id) {
    return api.makeRequest(`${BASE_URL}/${id}`, "GET");
  },
  async FindAll() {
    return api.makeRequest(BASE_URL, "GET");
  },
  async Create(internshipOffer) {
    return api.makeRequest(BASE_URL, "POST", internshipOffer);
  },
  async Update(internshipOffer) {
    return api.makeRequest(
      `${BASE_URL}/${internshipOffer._id}`,
      "PATCH",
      internshipOffer
    );
  },
  async Delete(id) {
    return api.makeRequest(`${BASE_URL}/${id}`, "DELETE");
  },
};
