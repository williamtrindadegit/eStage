const BASE_URL = "https://api-2.fly.dev/activity-sectors";
import makeRequest from "./api";

export default {
  async FindOne(id) {
    return makeRequest(`${BASE_URL}/${id}`, "GET");
  },
  async FindAll() {
    return makeRequest(BASE_URL, "GET");
  },
  async Create(activitySector) {
    return makeRequest(BASE_URL, "POST", activitySector);
  },
  async Update(activitySector) {
    return makeRequest(BASE_URL, "PATCH", activitySector);
  },
  async Delete(id) {
    return makeRequest(`${BASE_URL}/${id}`, "DELETE");
  },
};
