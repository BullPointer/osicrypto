const mostPopularFiat = ["gbp", "eur", "usd"];

const mostPopularCrypto = ["btc", "eth", "ltc"];

const allFiat = [
  "sek",
  "aud",
  "pln",
  "cad",
  "krw",
  "chf",
  "jpy",
  "czk",
  "dkk",
  "brl",
  "hkd",
  "ghs",
  "mxn",
  "ngn",
  "vnd",
];

const allCrypto = [
  "btc",
  "eth",
  "usdt",
  "bnb",
  "usdc",
  "xrp",
  "ada",
  "sol",
  "trx",
  "xmr",
];

export const popularCoinForFiatToCrypto = async (
  currencies,
  setMostPopularCoin
) => {
  const newArr = currencies.filter((obj) => {
    return (
      obj.symbol == mostPopularCrypto[0] ||
      obj.symbol == mostPopularCrypto[1] ||
      obj.symbol == mostPopularCrypto[2]
    );
  });
  setMostPopularCoin(newArr);
};

export const popularFiatForFiatToCrypto = async (currencies, setMostPopularFiat) => {
  const newArr = currencies.filter((obj) => {
    return (
      obj.symbol == mostPopularFiat[0] ||
      obj.symbol == mostPopularFiat[1] ||
      obj.symbol == mostPopularFiat[2]
    );
  });
  setMostPopularFiat(newArr);
};

export const allFiatsForFiatToCrypto = async (currencies, setAllFiats) => {
  const newArr = currencies.filter((obj) => {
    return (
      obj.symbol == allFiat[0] ||
      obj.symbol == allFiat[1] ||
      obj.symbol == allFiat[2] ||
      obj.symbol == allFiat[3] ||
      obj.symbol == allFiat[4] ||
      obj.symbol == allFiat[5] ||
      obj.symbol == allFiat[6] ||
      obj.symbol == allFiat[7] ||
      obj.symbol == allFiat[8] ||
      obj.symbol == allFiat[9] ||
      obj.symbol == allFiat[10] ||
      obj.symbol == allFiat[11] ||
      obj.symbol == allFiat[12] ||
      obj.symbol == allFiat[13] ||
      obj.symbol == allFiat[14]
    );
  });
  setAllFiats(newArr);
};

export const allCoinForFiatToCrypto = async (currencies, setAllCoins) => {
  const newArr = currencies.filter((obj) => {
    return (
      obj.symbol == allCrypto[0] ||
      obj.symbol == allCrypto[1] ||
      obj.symbol == allCrypto[2] ||
      obj.symbol == allCrypto[3] ||
      obj.symbol == allCrypto[4] ||
      obj.symbol == allCrypto[5] ||
      obj.symbol == allCrypto[6] ||
      obj.symbol == allCrypto[7] ||
      obj.symbol == allCrypto[8] ||
      obj.symbol == allCrypto[9] ||
      obj.symbol == allCrypto[10] ||
      obj.symbol == allCrypto[11] ||
      obj.symbol == allCrypto[12] ||
      obj.symbol == allCrypto[13] ||
      obj.symbol == allCrypto[14] ||
      obj.symbol == allCrypto[15] ||
      obj.symbol == allCrypto[16] ||
      obj.symbol == allCrypto[17] ||
      obj.symbol == allCrypto[18] ||
      obj.symbol == allCrypto[19]
    );
  });
  setAllCoins(newArr);
};

export const allCoinFiltered = async (currencies, value) => {
  const filtered = currencies.filter((obj) => {
    return (
      obj.symbol == allCrypto[0] ||
      obj.symbol == allCrypto[1] ||
      obj.symbol == allCrypto[2] ||
      obj.symbol == allCrypto[3] ||
      obj.symbol == allCrypto[4] ||
      obj.symbol == allCrypto[5] ||
      obj.symbol == allCrypto[6] ||
      obj.symbol == allCrypto[7] ||
      obj.symbol == allCrypto[8] ||
      obj.symbol == allCrypto[9] ||
      obj.symbol == allCrypto[10] ||
      obj.symbol == allCrypto[11] ||
      obj.symbol == allCrypto[12] ||
      obj.symbol == allCrypto[13] ||
      obj.symbol == allCrypto[14] ||
      obj.symbol == allCrypto[15] ||
      obj.symbol == allCrypto[16] ||
      obj.symbol == allCrypto[17] ||
      obj.symbol == allCrypto[18] ||
      obj.symbol == allCrypto[19]
    );
  });
  return filtered.filter(
    (obj) =>
      obj.name.toLowerCase().includes(value.toLowerCase()) ||
      obj.symbol.toLowerCase().includes(value.toLowerCase())
  );
};

export const popularCoinFiltered = async (currencies, value) => {
  const filtered = currencies.filter((obj) => {
    return (
      obj.symbol == mostPopularCrypto[0] ||
      obj.symbol == mostPopularCrypto[1] ||
      obj.symbol == mostPopularCrypto[2]
    );
  });
  return filtered.filter(
    (obj) =>
      obj.name.toLowerCase().includes(value.toLowerCase()) ||
      obj.symbol.toLowerCase().includes(value.toLowerCase())
  );
};

export const allFiatFiltered = async (currencies, value) => {
  const filtered = currencies.filter((obj) => {
    return (
      obj.symbol == allFiat[0] ||
      obj.symbol == allFiat[1] ||
      obj.symbol == allFiat[2] ||
      obj.symbol == allFiat[3] ||
      obj.symbol == allFiat[4] ||
      obj.symbol == allFiat[5] ||
      obj.symbol == allFiat[6] ||
      obj.symbol == allFiat[7] ||
      obj.symbol == allFiat[8] ||
      obj.symbol == allFiat[9] ||
      obj.symbol == allFiat[10] ||
      obj.symbol == allFiat[11] ||
      obj.symbol == allFiat[12] ||
      obj.symbol == allFiat[13] ||
      obj.symbol == allFiat[14]
    );
  });
  return filtered.filter(
    (obj) =>
      obj.name.toLowerCase().includes(value.toLowerCase()) ||
      obj.symbol.toLowerCase().includes(value.toLowerCase())
  );
};

export const popularFiatFiltered = async (currencies, value) => {
  const filtered = currencies.filter((obj) => {
    return (
      obj.symbol === mostPopularFiat[0] ||
      obj.symbol === mostPopularFiat[1] ||
      obj.symbol === mostPopularFiat[2]
    );
  });
  return filtered.filter(
    (obj) =>
      obj.name.toLowerCase().includes(value.toLowerCase()) ||
      obj.symbol.toLowerCase().includes(value.toLowerCase())
  );
};
