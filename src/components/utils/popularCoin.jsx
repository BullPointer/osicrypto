const mostPopular = [
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
      obj.symbol == mostPopular[0] ||
      obj.symbol == mostPopular[1] ||
      obj.symbol == mostPopular[2] ||
      obj.symbol == mostPopular[3] ||
      obj.symbol == mostPopular[4] ||
      obj.symbol == mostPopular[5] ||
      obj.symbol == mostPopular[6] ||
      obj.symbol == mostPopular[7] ||
      obj.symbol == mostPopular[8] ||
      obj.symbol == mostPopular[9] ||
      obj.symbol == mostPopular[10] ||
      obj.symbol == mostPopular[11]
    );
  });
  setMostPopularCoin(newArr);
};
export const allCoin = async (currencies, setAllCoins) => {
  const newArr = currencies.filter((obj) => {
    return (
      obj.symbol != mostPopular[0] ||
      obj.symbol != mostPopular[1] ||
      obj.symbol != mostPopular[2] ||
      obj.symbol != mostPopular[3] ||
      obj.symbol != mostPopular[4] ||
      obj.symbol != mostPopular[5] ||
      obj.symbol != mostPopular[6] ||
      obj.symbol != mostPopular[7] ||
      obj.symbol != mostPopular[8] ||
      obj.symbol != mostPopular[9] ||
      obj.symbol != mostPopular[10] ||
      obj.symbol != mostPopular[11]
    );
  });
  setAllCoins(newArr);
};
export const allCoinFiltered = async (currencies, value) => {
  const filtered = currencies.filter((obj) => {
    return (
      obj.symbol != mostPopular[0] ||
      obj.symbol != mostPopular[1] ||
      obj.symbol != mostPopular[2] ||
      obj.symbol != mostPopular[3] ||
      obj.symbol != mostPopular[4] ||
      obj.symbol != mostPopular[5] ||
      obj.symbol != mostPopular[6] ||
      obj.symbol != mostPopular[7] ||
      obj.symbol != mostPopular[8] ||
      obj.symbol != mostPopular[9] ||
      obj.symbol != mostPopular[10] ||
      obj.symbol != mostPopular[11]
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
      obj.symbol == mostPopular[0] ||
      obj.symbol == mostPopular[1] ||
      obj.symbol == mostPopular[2] ||
      obj.symbol == mostPopular[3] ||
      obj.symbol == mostPopular[4] ||
      obj.symbol == mostPopular[5] ||
      obj.symbol == mostPopular[6] ||
      obj.symbol == mostPopular[7] ||
      obj.symbol == mostPopular[8] ||
      obj.symbol == mostPopular[9] ||
      obj.symbol == mostPopular[10] ||
      obj.symbol == mostPopular[11]
    );
  });
  return filtered.filter(
    (obj) =>
      obj.name.toLowerCase().includes(value.toLowerCase()) ||
      obj.symbol.toLowerCase().includes(value.toLowerCase())
  );
};
