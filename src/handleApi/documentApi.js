import axios from "axios";

export const getPrivacyPolicy = async () => {
  const response = await axios.get(
    "https://osicrypto-backend.onrender.com/api/privacy-policy"
  );
  // const response = await axios.get("http://localhost:3000/api/privacy-policy");
  return response;
};

export const getTermAndCondition = async () => {
  const response = await axios.get(
    "https://osicrypto-backend.onrender.com/api/term-and-condition"
  );
  // const response = await axios.get(
  //   "http://localhost:3000/api/term-and-condition"
  // );
  return response;
};

export const getFaqs = async () => {
  const response = await axios.get(
    "https://osicrypto-backend.onrender.com/api/faqs"
  );
  // const response = await axios.get("http://localhost:3000/api/faqs");
  return response;
};

export const getAllBlog = async () => {
  const response = await axios.get(
    "https://osicrypto-backend.onrender.com/api/blogs"
  );
  // const response = await axios.get("http://localhost:3000/api/blogs");
  return response;
};

export const getBlogById = async (id) => {
  const response = await axios.get(
    `https://osicrypto-backend.onrender.com/api/blogs/${id}`
  );
  // const response = await axios.get(`http://localhost:3000/api/blogs/${id}`);
  return response;
};
