/* eslint-disable react-hooks/exhaustive-deps */
import { Icon } from "@iconify/react";
import Transaction from "../components/Transaction";
import { useExchangeContext } from "../context/ExchangeContext";
import { createExchange } from "../handleApi/currencyApi";
import { useEffect, useState } from "react";
import { Link, createSearchParams, useNavigate } from "react-router-dom";
import Footer from "../footer/footer";
import Navbar from "../navbar/Navbar";
import {
  cryptoToCrypto,
  fiatToCrypto,
} from "../components/utils/ExchangeTypeSetter";

const AddExchangeDetails = () => {
  const navigate = useNavigate();

  const [receipient, setReceipient] = useState("");
  const [addrError, setAddrError] = useState(false);
  const [exchangeError, setExchangeError] = useState(null);

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
  } = useExchangeContext();

  const handleExchange = async () => {
    const link = "https://api.simpleswap.io/create_exchange";
    const preAddressRegex = /^[0-9a-zA-Z]{25,}$/;
    !preAddressRegex.test(receipient)
      ? setAddrError(true)
      : setAddrError(false);

    try {
      const { data } = await createExchange(
        link,
        send.symbol.toLowerCase(),
        receive.symbol.toLowerCase(),
        send.amount,
        receipient,
        `${exchangeType === "crypto-to-crypto" ? true : false}`
      );

      const addressRegex = new RegExp(
        data.currencies[receive.symbol.toLowerCase()].validation_address
      );
      if (addressRegex.test(receipient)) {
        setAddrError(false);
        if (data.redirect_url) {
          window.open(data.redirect_url, "_blank");
        } else {
          navigate({
            pathname: "/exchange/x",
            search: createSearchParams({ id: data.id }).toString(),
          });
        }
      } else {
        setAddrError(true);
      }
    } catch (error) {
      if (error.response && error.response.status === 500) {
        setExchangeError("Unsupported pair");
      } else if (error.response && error.response.status === 422) {
        setExchangeError(null);
      } else if (error.response && error.response.status === 400) {
        setExchangeError(null);
      } else {
        setExchangeError(
          error.response?.data.description || "Unsupported pair"
        );
      }
      console.log("error ", error.response.status, error.response);
    }
  };

  useEffect(() => {
    document.title = "Exchange Details";
  }, []);

  const commonStyle = "flex flex-row justify-center items-center";
  const exchangeStyle =
    "p-2 text-[12px] font-[700] border-r text-[#797878] cursor-pointer hover:text-black";
  return (
    <>
      <Navbar />
      <div className="">
        <div className="max-w-[800px] rounded-[25px] text-center my-[20px] mx-auto px-[10px] py-5 text-[#fff]">
          <div className="text-[#fff] text-2xl p-2">Exchange Details</div>

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
                Exchange Cryptoss
              </div>
              <div
                onClick={() => {
                  setExchangeType("fiat-to-crypto");
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
              exchangeType={exchangeType}
              handleSelectedCurrency={handleSelectedCurrency}
              handleSearch={handleSearch}
            />
            <div className="w-full mb-2 mt-5">
              {exchangeError && (
                <div className="text-sm text-red-500">{exchangeError}</div>
              )}
              <div className="my-2">
                <div className="text-[#0c1235] text-[14px] sm:text-[17px] font-bold p-2">
                  Enter the wallet address
                </div>
                <div className="text-[#0c1235] text-lg font-bold"></div>
              </div>
              <div className="w-full h-[100%] text-lg border">
                <input
                  placeholder="Receipient's address"
                  onChange={({ target }) => setReceipient(target.value)}
                  className="w-full outline-none pl-2 py-2 text-center text-black"
                  type="text"
                  name={"addressTo"}
                  value={receipient}
                />
                {addrError && (
                  <p className="text-red-500 text-sm">
                    Invalid {receive.symbol} address
                  </p>
                )}
              </div>
            </div>

            <div
              onClick={handleExchange}
              className={`bg-[#ff4b12] cursor-pointer text-white ${commonStyle} p-2 m-2 rounded font-[500]`}
            >
              Exchange
            </div>
            <p className="text-black p-2 text-[10px] sm:text-sm">
              By clicking <span className="text-blue-600"> Exchange</span>, I
              agree to the{" "}
              <Link className="text-red-400" to={"/privacy-policy"}>
                {" "}
                Privacy Policy{" "}
              </Link>{" "}
              and{" "}
              <Link className="text-red-400" to={"/terms-and-conditions"}>
                Terms of Service.
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddExchangeDetails;
