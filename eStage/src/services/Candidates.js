const BASE_URL = "https://api-2.fly.dev/candidates";
import makeRequest from "./api";

export default {
  async FindOne(id) {
    return makeRequest(`${BASE_URL}/${id}`, "GET");
  },
  async FindAll() {
    return makeRequest(BASE_URL, "GET");
  },
  async Create(candidate) {
    const { post, ...rest } = candidate;
    const newSkills = [post, ...candidate.skills];
    const bodyContent = JSON.stringify({ ...rest, skills: newSkills });
    return makeRequest(BASE_URL, "POST", JSON.parse(bodyContent));
  },
  async Update(candidate) {
    const { id, post, ...rest } = candidate;
    const newSkills = [post, ...candidate.skills];
    const bodyContent = JSON.stringify({ ...rest, skills: newSkills });
    return makeRequest(`${BASE_URL}/${id}`, "PATCH", JSON.parse(bodyContent));
  },
  async Delete(id) {
    return makeRequest(`${BASE_URL}/${id}`, "DELETE");
  },
};
