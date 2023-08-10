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
async function getRange(apiLink, from, to) {
  const api_key = import.meta.env.VITE_SIMPLESWAP_API_KEY;
  try {
    const response = await axios.get(
      `${apiLink}?api_key=${api_key}&fixed=true&currency_from=${from}&currency_to=${to}`
    );
    return response;
  } catch (error) {
    return error;
  }
}
async function getEstimatedValue(apiLink, from, to, amount) {
  const api_key = import.meta.env.VITE_SIMPLESWAP_API_KEY;

  try {
    const response = await axios.get(
      `${apiLink}?api_key=${api_key}&fixed=true&currency_from=${from}&currency_to=${to}&amount=${amount}`
    );
    return response;
  } catch (error) {
    return error;
  }
}
async function createExchange(apiLink, from, to, amount, address_to) {
  const api_key = import.meta.env.VITE_SIMPLESWAP_API_KEY;
  // https://api.simpleswap.io/create_exchange?api_key=f1111d26-33eb-4314-8374-a40e9d2887ee/

  const requestObj = {
    fixed: true,
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

export { getApi, getCurrency, getRange, getEstimatedValue, createExchange };
