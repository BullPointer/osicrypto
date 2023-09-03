/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";
import { useSideExchangeContext } from "../context/SideExchangeContext";
import Transaction from "./Transaction";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useExchangeContext } from "../context/ExchangeContext";
import { cryptoToCrypto, fiatToCrypto } from "./utils/ExchangeTypeSetter";

const commonStyle = "flex flex-row justify-center items-center";

const Exchange = () => {
  const navigate = useNavigate();

  const {
    send,
    setSend,
    receive,
    setReceive,
    error,
    handleShowCurrencies,
    handleRemoveCurrencies,
    showCurrencies,
    handleAmount,
    handleFocus,
    allCoins,
    mostPopularCoin,
    allFiats,
    mostPopularFiat,
    exchangeType,
    setExchangeType,
    handleSelectedCurrency,
    handleSearch,
  } = useSideExchangeContext();

  const {
    setSend: setSendX,
    send: sendX,
    receive: receiveX,
    setReceive: setReceiveX,
  } = useExchangeContext();

  const handleExchange = () => {
    if (!error && !send.isLoading && !receive.isLoading) {
      setSendX({
        ...sendX,
        amount: send.amount,
        name: send.name,
        symbol: send.symbol,
        image: send.image,
      });
      setReceiveX({
        ...receiveX,
        amount: receive.amount,
        name: receive.name,
        symbol: receive.symbol,
        image: receive.image,
      });
      navigate({
        pathname: "/exchange",
        search: createSearchParams({
          from: send.symbol.toLowerCase(),
          to: receive.symbol.toLowerCase(),
          amount: send.amount,
        }).toString(),
      });
    } else {
      console.log(error);
    }
  };
  const exchangeStyle =
    "p-2 text-[12px] font-[700] border-r text-[#797878] cursor-pointer hover:text-black";
  return (
    <div className="h-auto left-10 w-[90%] mx-auto bg-white  shadow-lg rounded-lg border">
      <div className={`${commonStyle} border-b`}>
        <div
          onClick={() => {
            setExchangeType("crypto-to-crypto");
            cryptoToCrypto(send, setSend, receive, setReceive);
          }}
          className={`${exchangeStyle} ${
            exchangeType === "crypto-to-crypto" ? "bg-[#eeeeee]" : ""
          }`}
        >
          Exchange Crypto
        </div>
        <div
          onClick={() => {
            setExchangeType("fiat-to-crypto")
            fiatToCrypto(send, setSend, receive, setReceive);
          }}
          className={`${exchangeStyle} ${
            exchangeType === "fiat-to-crypto" ? "bg-[#eeeeee]" : ""
          } `}
        >
          Buy/Sell Crypto
        </div>
      </div>
      <Transaction
        title={"You Send"}
        setData={setSend}
        transactionObj={send}
        type={"send"}
        handleAmount={handleAmount}
        handleFocus={handleFocus}
        handleShowCurrencies={handleShowCurrencies}
        handleRemoveCurrencies={handleRemoveCurrencies}
        showCurrencies={showCurrencies}
        allCoins={allCoins}
        mostPopularCoin={mostPopularCoin}
        allFiats={allFiats}
        mostPopularFiat={mostPopularFiat}
        exchangeType={exchangeType}
        handleSelectedCurrency={handleSelectedCurrency}
        handleSearch={handleSearch}
      />
      {error && (
        <div className="text-[14px] text-[#be5959] px-2 py-1 font-serif">
          {error}
        </div>
      )}
      <div className={`text-[#ff4b12] w-full ${commonStyle} p-1`}>
        <Icon icon="gg:arrows-exchange-alt-v" fontSize={25} />
      </div>
      <Transaction
        title={"You Recieve"}
        setData={setReceive}
        transactionObj={receive}
        type={"receive"}
        handleAmount={handleAmount}
        handleFocus={handleFocus}
        handleShowCurrencies={handleShowCurrencies}
        handleRemoveCurrencies={handleRemoveCurrencies}
        showCurrencies={showCurrencies}
        allCoins={allCoins}
        mostPopularCoin={mostPopularCoin}
        allFiats={allFiats}
        mostPopularFiat={mostPopularFiat}
        handleSelectedCurrency={handleSelectedCurrency}
        handleSearch={handleSearch}
      />
      <div
        onClick={handleExchange}
        className={`bg-[#ff4b12] cursor-pointer text-white ${commonStyle} p-2 m-2 rounded font-[500]`}
      >
        {send.isLoading || receive.isLoading ? (
          <div className="w-5 h-5 rounded-full border-b-2 animate-spin mx-auto" />
        ) : (
          "Exchange"
        )}
      </div>
    </div>
  );
};

export default Exchange;
