/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import {
  allCoin,
  allCoinFiltered,
  popularCoin,
  popularCoinFiltered,
} from "../components/utils/popularCoin";
import { getApi, getEstimatedValue } from "../handleApi/currencyApi";

const link = "https://api.simpleswap.io/";

const ExchangeContext = createContext();

export const ExchangeProvider = ({ children }) => {
  const [createXData, setCreateXData] = useState(null);
  const [currencies, setCurrencies] = useState([]);
  const [allCoins, setAllCoins] = useState([]);
  const [mostPopularCoin, setMostPopularCoin] = useState([]);

  const handleSearch = async ({ target }) => {
    const { value } = target;

    const filteredAllCoin = await allCoinFiltered(currencies, value);
    const filteredPopularCoin = await popularCoinFiltered(currencies, value);

    setAllCoins([...filteredAllCoin]);
    setMostPopularCoin([...filteredPopularCoin]);
  };

  const getAllCurrencies = async () => {
    const response = await getApi(`${link}get_all_currencies`);
    if (response.status == 200) {
      const data = await response.data.slice(0, 100);
      setCurrencies(data);
    }
  };

  const [showCurrencies, setShowCurrencies] = useState({
    send: false,
    receive: false,
  });

  const [send, setSend] = useState({
    amount: "0.05",
    name: "Bitcoin",
    symbol: "BTC",
    image: "https://static.simpleswap.io/images/currencies-logo/btc.svg",
    isLoading: false,
  });

  const [receive, setReceive] = useState({
    amount: "",
    name: "Ethereum",
    symbol: "ETH",
    image: "https://static.simpleswap.io/images/currencies-logo/eth.svg",
    isLoading: true,
  });
  const [error, setError] = useState(null);

  const getEstimatedAmount = async () => {
    const response = await getEstimatedValue(
      `${link}get_estimated`,
      send.symbol.toLowerCase(),
      receive.symbol.toLowerCase(),
      send.amount
    );
    if (response.status == 200) {
      const data = await response.data;
      setReceive({ ...receive, amount: data, isLoading: false });
      setError(null);
    } else {
      setReceive({ ...receive, isLoading: true });
      setError(response.response.data.description);
    }
  };
  const handleFocus = () => {
    setReceive({ ...receive, isLoading: true });
  };
  const handleAmount = ({ target }) => {
    const { value } = target;
    const regex = /^[0-9]*\.?[0-9]*$/;
    if (regex.test(value)) return setSend({ ...send, amount: value });
  };

  const handleSelectedCurrency = (
    image,
    symbol,
    name,
    setData,
    transactionObj,
    type
  ) => {
    setData({ ...transactionObj, name, symbol, image });
    setShowCurrencies({ ...showCurrencies, [type]: false });
  };

  const handleShowCurrencies = (name) => {
    setShowCurrencies({ ...showCurrencies, [name]: true });
  };
  const handleRemoveCurrencies = (name) => {
    setShowCurrencies({ ...showCurrencies, [name]: false });
  };

  useEffect(() => {
    setTimeout(() => {
      getEstimatedAmount();
      setReceive({ ...receive, isLoading: false });
    }, 1000);
  }, [send, showCurrencies]);

  useEffect(() => {
    getAllCurrencies();
    popularCoin(currencies, setMostPopularCoin);
    allCoin(currencies, setAllCoins);
  }, [showCurrencies]);

  return (
    <ExchangeContext.Provider
      value={{
        allCoins,
        mostPopularCoin,
        send,
        setSend,
        receive,
        setReceive,
        handleSelectedCurrency,
        handleShowCurrencies,
        handleRemoveCurrencies,
        showCurrencies,
        handleSearch,
        handleAmount,
        handleFocus,
        error,
        setCreateXData,
        createXData,
      }}
    >
      {children}
    </ExchangeContext.Provider>
  );
};

export const useExchangeContext = () => {
  return useContext(ExchangeContext);
};
