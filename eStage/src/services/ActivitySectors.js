export default {
  async FindOne(id) {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "eStage",
    };

    let response = await fetch("https://api-2.fly.dev/activity-sectors/" + id, {
      method: "GET",
      headers: headersList,
    });

    return response.json();
  },
  async FindAll() {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "eStage",
    };

    let response = await fetch("https://api-2.fly.dev/activity-sectors", {
      method: "GET",
      headers: headersList,
    });

    return response.json();
  },

  async Create() {
    let bodyContent = JSON.stringify({
      value: "Front-End development",
    });

    let response = await fetch("https://api-2.fly.dev/activity-sectors", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    return response.json();
  },
};
