const BASE_URL = "https://api-2.fly.dev/activity-sectors";
import api from "./api";

export default {
  async FindOne(id) {
    return api.makeRequest(`${BASE_URL}/${id}`, "GET");
  },
  async FindAll() {
    return api.makeRequest(BASE_URL, "GET");
  },
  async Create(activitySector) {
    return api.makeRequest(BASE_URL, "POST", activitySector);
  },
  async Update(activitySector) {
    return api.makeRequest(
      `${BASE_URL}/${activitySector._id}`,
      "PATCH",
      activitySector
    );
  },
  async Delete(id) {
    return api.makeRequest(`${BASE_URL}/${id}`, "DELETE");
  },
};
