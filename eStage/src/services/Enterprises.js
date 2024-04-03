import api from "./api";

const BASE_URL = "https://api-2.fly.dev/enterprises";

export default {
  async FindOne(id) {
    return api.makeRequest(`${BASE_URL}/${id}`, "GET");
  },
  async FindAll() {
    return api.makeRequest(BASE_URL, "GET");
  },
  async Create(enterprise) {
    return api.makeRequest(BASE_URL, "POST", enterprise);
  },
  async Update(enterprise) {
    return api.makeRequest(
      `${BASE_URL}/${enterprise._id}`,
      "PATCH",
      enterprise
    );
  },
  async Delete(id) {
    return api.makeRequest(`${BASE_URL}/${id}`, "DELETE");
  },
};
