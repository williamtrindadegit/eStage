export default {
  async FindOne(id) {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "eStage",
    };

    let response = await fetch("https://api-2.fly.dev/enterprises/" + id, {
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

    let response = await fetch("https://api-2.fly.dev/enterprises", {
      method: "GET",
      headers: headersList,
    });

    return response.json();
  },
  async Create(
    image,
    name,
    address,
    postalCode,
    city,
    province,
    phone,
    email,
    description,
    activitySector,
    website
  ) {
    const entreprise = {
      image: image,
      name: name,
      address: address,
      city: city,
      postalCode: postalCode,
      province: province,
      phone: phone,
      email: email,
      description: description,
      activitySector: activitySector,
      website: website,
    };

    let bodyContent = JSON.stringify(entreprise);

    let response = await fetch("https://api-2.fly.dev/enterprises", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    return response.json();
  },
};
