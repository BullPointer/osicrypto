const mostPopularFiat = [
  "gbp",
  "eur",
  "usd",
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

const mostPopularCrypto = [
  "btc",
  "eth",
  "usdt",
  "bnb",
  "usdc",
  "xrp",
  "ada",
  "sol",
  "trx",
  "matic",
  "xmr",
];

export const popularCoin = async (currencies, setMostPopularCoin) => {
  const newArr = currencies.filter((obj) => {
    return (
      obj.symbol == mostPopularCrypto[0] ||
      obj.symbol == mostPopularCrypto[1] ||
      obj.symbol == mostPopularCrypto[2] ||
      obj.symbol == mostPopularCrypto[3] ||
      obj.symbol == mostPopularCrypto[4] ||
      obj.symbol == mostPopularCrypto[5] ||
      obj.symbol == mostPopularCrypto[6] ||
      obj.symbol == mostPopularCrypto[7] ||
      obj.symbol == mostPopularCrypto[8] ||
      obj.symbol == mostPopularCrypto[9] ||
      obj.symbol == mostPopularCrypto[10] ||
      obj.symbol == mostPopularCrypto[11]
    );
  });
  setMostPopularCoin(newArr);
};
export const allCoin = async (currencies, setAllCoins) => {
  const newArr = currencies.filter((obj) => {
    return (
      obj.symbol != mostPopularFiat[0] ||
      obj.symbol != mostPopularFiat[1] ||
      obj.symbol != mostPopularFiat[2] ||
      obj.symbol != mostPopularFiat[3] ||
      obj.symbol != mostPopularFiat[4] ||
      obj.symbol != mostPopularFiat[5] ||
      obj.symbol != mostPopularFiat[6] ||
      obj.symbol != mostPopularFiat[7] ||
      obj.symbol != mostPopularFiat[8] ||
      obj.symbol != mostPopularFiat[9] ||
      obj.symbol != mostPopularFiat[10] ||
      obj.symbol != mostPopularFiat[11] ||
      obj.symbol != mostPopularFiat[12] ||
      obj.symbol != mostPopularFiat[13] ||
      obj.symbol != mostPopularFiat[14] ||
      obj.symbol != mostPopularFiat[15] ||
      obj.symbol != mostPopularFiat[16] ||
      obj.symbol != mostPopularFiat[17] ||

      obj.symbol != mostPopularCrypto[0] ||
      obj.symbol != mostPopularCrypto[1] ||
      obj.symbol != mostPopularCrypto[2] ||
      obj.symbol != mostPopularCrypto[3] ||
      obj.symbol != mostPopularCrypto[4] ||
      obj.symbol != mostPopularCrypto[5] ||
      obj.symbol != mostPopularCrypto[6] ||
      obj.symbol != mostPopularCrypto[7] ||
      obj.symbol != mostPopularCrypto[8] ||
      obj.symbol != mostPopularCrypto[9] ||
      obj.symbol != mostPopularCrypto[10] ||
      obj.symbol != mostPopularCrypto[11]
    );
  });
  setAllCoins(newArr);
};
export const allCoinFiltered = async (currencies, value) => {
  const filtered = currencies.filter((obj) => {
    return (
      obj.symbol != mostPopularFiat[0] ||
      obj.symbol != mostPopularFiat[1] ||
      obj.symbol != mostPopularFiat[2] ||
      obj.symbol != mostPopularFiat[3] ||
      obj.symbol != mostPopularFiat[4] ||
      obj.symbol != mostPopularFiat[5] ||
      obj.symbol != mostPopularFiat[6] ||
      obj.symbol != mostPopularFiat[7] ||
      obj.symbol != mostPopularFiat[8] ||
      obj.symbol != mostPopularFiat[9] ||
      obj.symbol != mostPopularFiat[10] ||
      obj.symbol != mostPopularFiat[11] ||
      obj.symbol != mostPopularFiat[12] ||
      obj.symbol != mostPopularFiat[13] ||
      obj.symbol != mostPopularFiat[14] ||
      obj.symbol != mostPopularFiat[15] ||
      obj.symbol != mostPopularFiat[16] ||
      obj.symbol != mostPopularFiat[17] ||

      obj.symbol != mostPopularCrypto[0] ||
      obj.symbol != mostPopularCrypto[1] ||
      obj.symbol != mostPopularCrypto[2] ||
      obj.symbol != mostPopularCrypto[3] ||
      obj.symbol != mostPopularCrypto[4] ||
      obj.symbol != mostPopularCrypto[5] ||
      obj.symbol != mostPopularCrypto[6] ||
      obj.symbol != mostPopularCrypto[7] ||
      obj.symbol != mostPopularCrypto[8] ||
      obj.symbol != mostPopularCrypto[9] ||
      obj.symbol != mostPopularCrypto[10] ||
      obj.symbol != mostPopularCrypto[11]
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
      obj.symbol == mostPopularCrypto[2] ||
      obj.symbol == mostPopularCrypto[3] ||
      obj.symbol == mostPopularCrypto[4] ||
      obj.symbol == mostPopularCrypto[5] ||
      obj.symbol == mostPopularCrypto[6] ||
      obj.symbol == mostPopularCrypto[7] ||
      obj.symbol == mostPopularCrypto[8] ||
      obj.symbol == mostPopularCrypto[9] ||
      obj.symbol == mostPopularCrypto[10] ||
      obj.symbol == mostPopularCrypto[11]
    );
  });
  return filtered.filter(
    (obj) =>
      obj.name.toLowerCase().includes(value.toLowerCase()) ||
      obj.symbol.toLowerCase().includes(value.toLowerCase())
  );
};
