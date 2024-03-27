export default {
  async FindOne(id) {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "eStage",
    };

    let response = await fetch("https://api-2.fly.dev/candidates/" + id, {
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

    let response = await fetch("https://api-2.fly.dev/candidates", {
      method: "GET",
      headers: headersList,
    });

    return response.json();
  },

  async Create(canditat) {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "eStage",
    };

    let newSkills = [];
    newSkills.push(canditat.post);
    newSkills.push(...canditat.skills);

    let bodyContent = JSON.stringify({
      address: canditat.address,
      city: canditat.city,
      description: canditat.description,
      email: canditat.email,
      firstName: canditat.firstName,
      lastName: canditat.lastName,
      phone: canditat.phone,
      postalCode: canditat.postalCode,
      province: canditat.province,
      skills: newSkills,
    });

    let response = await fetch("https://api-2.fly.dev/candidates", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    return response.json();
  },

  async Update(canditat) {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "eStage",
    };

    let newSkills = [];
    newSkills.push(canditat.post);
    newSkills.push(...canditat.skills);

    let bodyContent = JSON.stringify({
      address: canditat.address,
      city: canditat.city,
      description: canditat.description,
      email: canditat.email,
      firstName: canditat.firstName,
      lastName: canditat.lastName,
      phone: canditat.phone,
      postalCode: canditat.postalCode,
      province: canditat.province,
      skills: newSkills,
    });

    let response = await fetch(
      "https://api-2.fly.dev/candidates/" + canditat.id,
      {
        method: "PATCH",
        body: bodyContent,
        headers: headersList,
      }
    );

    return response.json();
  },
  async Delete(id) {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "eStage",
    };

    let response = await fetch("https://api-2.fly.dev/candidates/" + id, {
      method: "DELETE",
      headers: headersList,
    });

    return response.json();
  },
};
