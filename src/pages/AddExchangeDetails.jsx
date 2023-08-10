/* eslint-disable react-hooks/exhaustive-deps */
import { Icon } from "@iconify/react";
import Transaction from "../components/Transaction";
import { useExchangeContext } from "../context/ExchangeContext";
import { useHomeExchangeContext } from "../context/HomeExchangeContext";
import { useSearchParams } from "react-router-dom";
import { createExchange } from "../handleApi/currencyApi";
import { useEffect, useState } from "react";

const AddExchangeDetails = () => {
  const [receipient, setReceipient] = useState("");
  const [addrError, setAddrError] = useState(false);
  const [params] = useSearchParams();
  const from = params.get("from");
  const to = params.get("to");
  const amount = params.get("amount");
  const link = "https://api.simpleswap.io/create_exchange";

  const handleExchange = async () => {
    console.log(from, to, amount);

    try {
      const { data } = await createExchange(link, from, to, amount, receipient);
      const btcAddressRegex = new RegExp(
        data.currencies[to].validation_address
      );
      if (btcAddressRegex.test(receipient)) {
        setAddrError(false);
        console.log("success ", data);
      } else {
        setAddrError(true);

        console.log("It's not correct");
      }
    } catch (error) {
      console.log("error ", error);
    }
  };
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
  } = useExchangeContext();

  const { send: homeSend, receive: homeReceive } = useHomeExchangeContext();

  useEffect(() => {
    setSend({
      ...send,
      amount: homeSend.amount,
      name: homeSend.name,
      symbol: homeSend.symbol,
      image: homeSend.image,
    });
    setReceive({
      ...receive,
      amount: homeReceive.amount,
      name: homeReceive.name,
      symbol: homeReceive.symbol,
      image: homeReceive.image,
    });
  }, []);

  const commonStyle = "flex flex-row justify-center items-center";
  const exchangeStyle =
    "p-2 text-[12px] font-[700] border-r text-[#797878] cursor-pointer hover:text-black";
  return (
    <div className="">
      <div className="max-w-[800px] rounded-[25px] text-center my-[20px] mx-auto px-[10px] py-5 text-[#fff]">
        <div className="text-[#fff] text-2xl p-2">Exchange Details</div>
        <div className="h-auto left-10 w-[90%] mx-auto bg-white  shadow-lg rounded-lg border">
          <div className={`${commonStyle} border-b`}>
            <div className={`${exchangeStyle}`}>Exchange Crypto</div>
            <div className={`${exchangeStyle} bg-[#eeeeee]`}>
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
          <div className="w-full mb-2 mt-5">
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
                className="w-full outline-none pl-2 text-center text-black"
                type="text"
                name={"addressTo"}
                value={receipient}
              />
              {addrError && (
                <p className="text-red-500 text-sm">
                  Invalid {to.toUpperCase()} address
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
            agree to the Privacy Policy and Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddExchangeDetails;
