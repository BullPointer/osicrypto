/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { allCoin, popularCoin } from "../components/utils/popularCoin";
import { getApi, getEstimatedValue, getRange } from "../handleApi/currencyApi";
import {
  allCoinForFiatToCrypto,
  allFiatsForFiatToCrypto,
  popularCoinForFiatToCrypto,
  popularFiatForFiatToCrypto,
} from "../components/utils/popularFiat";

const HomeContext = createContext();

const link = "https://api.simpleswap.io/";

export const HomeExchangeContext = ({ children }) => {
  const [exchangeType, setExchangeType] = useState("crypto-to-crypto");
  const [range, setRange] = useState(null);
  const [currencies, setCurrencies] = useState([]);
  const [error, setError] = useState(null);
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
  const [selectCoin, setSelectCoin] = useState(null);
  const showList = (key) => setSelectCoin(key);
  const clickWindow = () => setSelectCoin(null);
  const stopWindow = (e) => e.stopPropagation();
  const handleFocus = () => setReceive({ ...receive, isLoading: true });

  const getAllCurrencies = async () => {
    const response = await getApi(`${link}get_all_currencies`);
    if (response.status == 200) {
      const data = await response.data.slice(0, 800);
      setCurrencies(data);
    }
  };
  const getEstimatedAmounts = async () => {
    setReceive({ ...receive, isLoading: true });
    const response = await getEstimatedValue(
      `${link}get_estimated`,
      send.symbol.toLowerCase(),
      receive.symbol.toLowerCase(),
      send.amount,
      `${exchangeType === "crypto-to-crypto" ? true : false}`
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
  const handleCurrency = async (name, symbol, type, image) => {
    if (type == "send") {
      setSend({ ...send, name, symbol, image });
      setSelectCoin(null);
    } else {
      setReceive({ ...receive, name, symbol, image });
      setSelectCoin(null);

      setReceive({ ...receive, isLoading: true });
      const response = await getEstimatedValue(
        `${link}get_estimated`,
        send.symbol.toLowerCase(),
        symbol.toLowerCase(),
        send.amount,
        `${exchangeType === "crypto-to-crypto" ? true : false}`
      );
      if (response.status == 200) {
        const data = await response.data;
        setReceive({
          ...receive,
          amount: data,
          symbol,
          name,
          image,
          isLoading: false,
        });
        setError(null);
      } else {
        setReceive({ ...receive, symbol, name, image, isLoading: true });
        setError(response.response.data.description);
      }
    }
  };
  const handleChange = ({ target }) => setSearchValue(target.value);
  async function getApiRange() {
    const response = await getRange(
      link + "get_ranges",
      send.symbol,
      receive.symbol,
      `${exchangeType === "crypto-to-crypto" ? true : false}`
    );
    if (response.status == 200) setRange(response.data.max);
  }

  const handleAmount = ({ target }) => {
    const { value } = target;
    const regex = /^[0-9]*\.?[0-9]*$/;
    if (regex.test(value)) return setSend({ ...send, amount: value });
  };

  useEffect(() => {
    getAllCurrencies();
    getApiRange();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      getEstimatedAmounts();
      setReceive({ ...receive, isLoading: false });
    }, 1000);
  }, [send]);

  const [searchValue, setSearchValue] = useState("");

  const [allCoins, setAllCoins] = useState([]);
  const [mostPopularCoin, setMostPopularCoin] = useState([]);
  const [allFiats, setAllFiats] = useState([]);
  const [mostPopularFiat, setMostPopularFiat] = useState([]);

  const filteredAllCoins = allCoins.filter((data) => {
    return data.name.toLowerCase().includes(searchValue.toLowerCase());
  });
  const filteredPopularCoin = mostPopularCoin.filter((data) => {
    return data.name.toLowerCase().includes(searchValue.toLowerCase());
  });
  const filteredAllFiats = allFiats.filter((data) => {
    return data.name.toLowerCase().includes(searchValue.toLowerCase());
  });
  const filteredPopularFiat = mostPopularFiat.filter((data) => {
    return data.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  useEffect(() => {
    if (exchangeType === "crypto-to-crypto") {
      popularCoin(currencies, setMostPopularCoin);
      allCoin(currencies, setAllCoins);
    }
    if (exchangeType === "fiat-to-crypto") {
      popularCoinForFiatToCrypto(currencies, setMostPopularCoin);
      allCoinForFiatToCrypto(currencies, setAllCoins);
      popularFiatForFiatToCrypto(currencies, setMostPopularFiat);
      allFiatsForFiatToCrypto(currencies, setAllFiats);
    }
  }, [selectCoin]);

  return (
    <HomeContext.Provider
      value={{
        currencies,
        error,
        send,
        receive,
        getAllCurrencies,
        getEstimatedAmounts,
        handleCurrency,

        clickWindow,
        stopWindow,
        exchangeType,
        setExchangeType,
        filteredAllCoins,
        filteredPopularCoin,
        filteredAllFiats,
        filteredPopularFiat,
        handleChange,
        searchValue,
        handleAmount,

        handleFocus,

        showList,
        range,
        selectCoin,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeExchangeContext = () => {
  return useContext(HomeContext);
};
