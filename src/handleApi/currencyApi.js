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
  // https://api.simpleswap.io/get_estimated?api_key=abcdef12-3456-7890-abcd-ef1234567890&fixed=true&currency_from=btc&currency_to=eth&amount=1
  try {
    const response = await axios.get(
      `${apiLink}?api_key=${api_key}&fixed=true&currency_from=${from}&currency_to=${to}&amount=${amount}`
    );
    return response;
  } catch (error) {
    return error;
  }
}

export { getApi, getCurrency, getRange, getEstimatedValue };

// https://api.simpleswap.io/get_all_currencies?api_key=f1111d26-33eb-4314-8374-a40e9d2887ee
