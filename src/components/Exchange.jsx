/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";
import { useSideExchangeContext } from "../context/SideExchangeContext";
import Transaction from "./Transaction";

const commonStyle = "flex flex-row justify-center items-center";

const Exchange = () => {
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
    handleSelectedCurrency,
    handleSearch,
  } = useSideExchangeContext();
  const exchangeStyle =
    "p-2 text-[12px] font-[700] border-r text-[#797878] cursor-pointer hover:text-black";
  return (
    <div className="h-auto left-10 w-[90%] mx-auto bg-white  shadow-lg rounded-lg border">
      <div className={`${commonStyle} border-b`}>
        <div className={`${exchangeStyle}`}>Exchange Crypto</div>
        <div className={`${exchangeStyle} bg-[#eeeeee]`}>Buy/Sell Crypto</div>
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
        handleSelectedCurrency={handleSelectedCurrency}
        handleSearch={handleSearch}
      />
      <div
        className={`bg-[#ff4b12] cursor-pointer text-white ${commonStyle} p-2 m-2 rounded font-[500]`}
      >
        Exchange
      </div>
    </div>
  );
};

export default Exchange;
