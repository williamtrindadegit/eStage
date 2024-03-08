export default {
  async FindOne(id) {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "eStage",
    };

    let response = await fetch("https://api-2.fly.dev/provinces/" + id, {
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

    let response = await fetch("https://api-2.fly.dev/provinces", {
      method: "GET",
      headers: headersList,
    });

    return response.json();
  },
};
