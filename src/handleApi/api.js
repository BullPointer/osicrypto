import axios from "axios";

export const visitorsApi = async (type) => {
  // types needed are "existing-visit/new-visit"
  const response = await axios.get(
    `https://osicrypto-backend.onrender.com/api/visitors?visitor=${type}`
  );
  // const response = await axios.get(
  //   `http://localhost:3000/api/visitors?visitor=${type}`
  // );
  return response;
};

export const userIdentifierApi = async (type, vid) => {
  // types needed are "existing-visit/new-visit"
  if (type === "new-visit") {
    const response = await axios.patch(
      `https://osicrypto-backend.onrender.com/api/locations?type=${type}`
    );
    // const response = await axios.patch(
    //   `http://localhost:3000/api/locations?type=${type}`
    // );
    return response;
  } else {
    const response = await axios.patch(
      `https://osicrypto-backend.onrender.com/api/locations/?type=${type}&vid=${vid}`
    );
    // const response = await axios.patch(
    //   `http://localhost:3000/api/locations/?type=${type}&vid=${vid}`
    // );
    return response;
  }
};
