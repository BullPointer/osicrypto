import axios from "axios";

export const getPrivacyPolicy = async () => {
  const response = await axios.get("http://localhost:3000/api/privacy-policy");
  return response;
};

export const getTermAndCondition = async () => {
  const response = await axios.get(
    "http://localhost:3000/api/term-and-condition"
  );
  return response;
};
