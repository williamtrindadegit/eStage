import makeRequest from "./api";

const BASE_URL = "https://api-2.fly.dev/enterprises";

export default {
  async FindOne(id) {
    return makeRequest(`${BASE_URL}/${id}`, "GET");
  },
  async FindAll() {
    return makeRequest(BASE_URL, "GET");
  },
  async Create(enterprise) {
    return makeRequest(BASE_URL, "POST", enterprise);
  },
  async Update(enterprise) {
    return makeRequest(BASE_URL, "PATCH", enterprise);
  },
  async Delete(id) {
    return makeRequest(`${BASE_URL}/${id}`, "DELETE");
  },
};
