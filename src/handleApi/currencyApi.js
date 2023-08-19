import axios from "axios";

async function getApi(apiLink) {
  const api_key = import.meta.env.VITE_SIMPLESWAP_API_KEY;
  try {
    const response = await axios.get(`${apiLink}?api_key=${api_key}`);
    return response;
  } catch (error) {
    return error;
  }
}
async function getCurrency(apiLink, symbol) {
  const api_key = import.meta.env.VITE_SIMPLESWAP_API_KEY;
  try {
    const response = await axios.get(
      `${apiLink}?api_key=${api_key}&symbol=${symbol}`
    );
    return response;
  } catch (error) {
    return error;
  }
}
async function getRange(apiLink, from, to, bool) {
  const api_key = import.meta.env.VITE_SIMPLESWAP_API_KEY;
  try {
    const response = await axios.get(
      `${apiLink}?api_key=${api_key}&fixed=${bool}&currency_from=${from}&currency_to=${to}`
    );
    return response;
  } catch (error) {
    return error;
  }
}
async function getEstimatedValue(apiLink, from, to, amount, bool) {
  const api_key = import.meta.env.VITE_SIMPLESWAP_API_KEY;

  try {
    const response = await axios.get(
      `${apiLink}?api_key=${api_key}&fixed=${bool}&currency_from=${from}&currency_to=${to}&amount=${amount}`
    );
    return response;
  } catch (error) {
    return error;
  }
}
async function createExchange(apiLink, from, to, amount, address_to, bool) {
  const api_key = import.meta.env.VITE_SIMPLESWAP_API_KEY;
  console.log("Making some text ", bool);
  const requestObj = {
    fixed: (bool),
    currency_from: from,
    currency_to: to,
    amount: amount,
    address_to: address_to,
    // user_refund_address: "",
    // extra_id_to: "",
    // user_refund_extra_id: "",
  };

  const config = {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(
    `${apiLink}?api_key=${api_key}`,
    JSON.stringify(requestObj),
    config
  );
  return response;
}
async function getExchange(apiLink, id) {
  const api_key = import.meta.env.VITE_SIMPLESWAP_API_KEY;

  const response = await axios.get(`${apiLink}?api_key=${api_key}&id=${id}`);
  return response;
}

export {
  getApi,
  getCurrency,
  getRange,
  getEstimatedValue,
  createExchange,
  getExchange,
};
