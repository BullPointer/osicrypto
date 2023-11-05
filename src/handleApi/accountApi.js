import axios from "axios";

export const googleLoginApi = (token) => {
  // const link = "https://osicrypto-backend.onrender.com/users/google-login";
  const link = "http://localhost:3000/users/google-login";

  const data = {
    token: token,
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = axios.post(link, data, config);
  return response;
};

export const signupApi = (cred) => {
  const link = "https://osicrypto-backend.onrender.com/users/signup";
  // const link = "http://localhost:3000/users/signup";
  const data = {
    username: cred.fullname,
    email: cred.email,
    password: cred.password,
    country: cred.country,
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = axios.post(link, data, config);
  return response;
};

export const loginApi = (cred) => {
  const link = "https://osicrypto-backend.onrender.com/users/login";
  // const link = "http://localhost:3000/users/login";

  const data = {
    email: cred.email,
    password: cred.password,
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = axios.post(link, data, config);
  return response;
};

export const requestResetPasswordApi = (user) => {
  const link = `https://osicrypto-backend.onrender.com/users/password-reset/`;
  // const link = `http://localhost:3000/users/password-reset/`;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const data = { email: user.email };

  const response = axios.post(link, data, config);
  return response;
};

export const setNewPasswordApi = (user, id, token) => {
  const link = `https://osicrypto-backend.onrender.com/users/new-password`;
  // const link = `http://localhost:3000/users/new-password`;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const data = {
    password: user.password,
    id: id,
    token: token,
  };

  const response = axios.post(link, data, config);
  return response;
};

export const verifyEmailApi = (id, token) => {
  const link = `https://osicrypto-backend.onrender.com/users/user/${id}/verify/${token}`;
  // const link = `http://localhost:3000/users/user/${id}/verify/${token}`;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = axios.get(link, config);
  return response;
};

// soyekij621@gekme.com
