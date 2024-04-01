const BASE_URL = "https://api-2.fly.dev/candidates";
import api from "./api";

export default {
  async FindOne(id) {
    return api.makeRequest(`${BASE_URL}/${id}`, "GET");
  },
  async FindAll() {
    return api.makeRequest(BASE_URL, "GET");
  },
  async Create(candidate) {
    const { post, ...rest } = candidate;
    const newSkills = [post, ...candidate.skills];
    const bodyContent = JSON.stringify({ ...rest, skills: newSkills });
    return api.makeRequest(BASE_URL, "POST", JSON.parse(bodyContent));
  },
  async Update(candidate) {
    const { id, post, ...rest } = candidate;
    const newSkills = [post, ...candidate.skills];
    const bodyContent = JSON.stringify({ ...rest, skills: newSkills });
    return api.makeRequest(
      `${BASE_URL}/${id}`,
      "PATCH",
      JSON.parse(bodyContent)
    );
  },
  async Delete(id) {
    return api.makeRequest(`${BASE_URL}/${id}`, "DELETE");
  },
};
