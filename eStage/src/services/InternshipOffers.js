const BASE_URL = "https://api-2.fly.dev/internship-offers";
import makeRequest from "./api";

export default {
  async FindOne(id) {
    return makeRequest(`${BASE_URL}/${id}`, "GET");
  },
  async FindAll() {
    return makeRequest(BASE_URL, "GET");
  },
  async Create(internshipOffer) {
    return makeRequest(BASE_URL, "POST", internshipOffer);
  },
  async Update(internshipOffer) {
    return makeRequest(BASE_URL, "PATCH", internshipOffer);
  },
  async Delete(id) {
    return makeRequest(`${BASE_URL}/${id}`, "DELETE");
  },
};
