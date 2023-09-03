export const cryptoToCrypto = (send, setSend, receive, setReceive) => {
  setSend({
    ...send,
    amount: "0.05",
    name: "Bitcoin",
    symbol: "BTC",
    image: "https://static.simpleswap.io/images/currencies-logo/btc.svg",
    isLoading: false,
  });

  setReceive({
    ...receive,
    amount: "",
    name: "Ethereum",
    symbol: "ETH",
    image: "https://static.simpleswap.io/images/currencies-logo/eth.svg",
    isLoading: true,
  });
};

export const fiatToCrypto = (send, setSend, receive, setReceive) => {
  setSend({
    ...send,
    amount: "1500",
    name: "US Dollar",
    symbol: "USD",
    image: "https://static.simpleswap.io/images/currencies-logo/usd.svg",
    isLoading: false,
  });

  setReceive({
    ...receive,
    amount: "",
    name: "Bitcoin",
    symbol: "BTC",
    image: "https://static.simpleswap.io/images/currencies-logo/btc.svg",
    isLoading: false,
  });
};
