import axios from "axios";

export const visitorsApi = async (type) => {
// types needed are "existing-visit/new-visit"
  const response = await axios.get(
    `http://localhost:3000/api/visitors?visitor=${type}`
  );
  return response;
};
