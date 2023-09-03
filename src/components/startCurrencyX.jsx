/* eslint-disable react-hooks/exhaustive-deps */
import { createSearchParams, useNavigate } from "react-router-dom";
import ErrorBoundary from "../ErrorBoundary";
import Recieve from "./Exchange/recieve";
import Send from "./Exchange/send";
import { useHomeExchangeContext } from "../context/HomeExchangeContext";
import { useExchangeContext } from "../context/ExchangeContext";
import { useEffect } from "react";
import { userIdentifierApi, visitorsApi } from "../handleApi/api";
import { cryptoToCrypto, fiatToCrypto } from "./utils/ExchangeTypeSetter";

const ExchangeCurrency = () => {
  const {
    send,
    receive,
    setSend,
    setReceive,
    error,
    exchangeType,
    setExchangeType,
  } = useHomeExchangeContext();
  const {
    setSend: setSendX,
    send: sendX,
    receive: receiveX,
    setReceive: setReceiveX,
  } = useExchangeContext();

  const navigate = useNavigate();

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

  const sessionFunc = async (value) => {
    try {
      await visitorsApi(value);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  const userIdentifierFunc = async () => {
    const vid = localStorage.getItem("vid");
    try {
      if (!vid) {
        const { data } = await userIdentifierApi("new-visit");
        localStorage.setItem("vid", data.data.vid);
      } else {
        await userIdentifierApi("existing-visit", vid);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    const value = sessionStorage.getItem("visit");
    if (!value) {
      sessionFunc("new-visit");
      sessionStorage.setItem("visit", "v");
    } else {
      sessionFunc("existing-visit");
    }
    userIdentifierFunc();
  }, []);

  const commonStyle = "flex flex-row justify-center items-center";

  const exchangeStyle = "w-full p-2 text-[12px] font-[700] cursor-pointer";

  return (
    <div className="pb-16">
      {/* <!-- start of currency exchange --> */}
      {/* <div className="bg-[#000] max-w-[800px] rounded-[25px] text-center my-[20px] mx-auto p-[10px] text-[#fff]"> */}
      <div className="exchange-container ">
        <div className={`${commonStyle} w-full mb-5`}>
          <div
            onClick={() => {
              setExchangeType("crypto-to-crypto");
              cryptoToCrypto(send, setSend, receive, setReceive);
            }}
            className={`${exchangeStyle} text-[#202020] ${
              exchangeType === "crypto-to-crypto" ? "bg-[#eeeeee]" : ""
            } rounded-tr-xl `}
          >
            Exchange Crypto
          </div>
          <div
            onClick={() => {
              setExchangeType("fiat-to-crypto");
              fiatToCrypto(send, setSend, receive, setReceive);
            }}
            className={`${exchangeStyle} text-[#202020] ${
              exchangeType === "fiat-to-crypto" ? "bg-[#eeeeee]" : ""
            }  rounded-bl-xl `}
          >
            Buy/Sell Crypto
          </div>
        </div>
        <h2>Select currency</h2>
        <div className="exchange-box">
          <ErrorBoundary fallback="">
            <Send />
          </ErrorBoundary>
          <ErrorBoundary fallback="">
            <Recieve />
          </ErrorBoundary>
          <i className="fa-solid fa-arrow-right-arrow-left"></i>
        </div>
        <div
          onClick={handleExchange}
          className="grid cursor-pointer w-[80%] rounded-[50px] mx-auto my-[20px] p-[12px] font-[600] bg-[#ff4b12] text-[#fff]"
        >
          {send.isLoading || receive.isLoading ? (
            <div className="w-5 h-5 rounded-full border-b-2 animate-spin mx-auto" />
          ) : (
            "Continue"
          )}
        </div>
      </div>

      {/* <!-- end of currency exchange --> */}
    </div>
  );
};
export default ExchangeCurrency;
