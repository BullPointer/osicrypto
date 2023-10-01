/* eslint-disable react/prop-types */

export const checkAuth = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const expiredTimestamp = token?.exp;
  const currentTimestamp = Math.floor(Date.now());

  if (!token || expiredTimestamp < currentTimestamp) {
    localStorage.removeItem("token");
    return null;
  }

  return token;
};
