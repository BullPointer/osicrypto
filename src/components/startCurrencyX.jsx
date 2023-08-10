/* eslint-disable react-hooks/exhaustive-deps */
import { createSearchParams, useNavigate } from "react-router-dom";
import ErrorBoundary from "../ErrorBoundary";
import Recieve from "./Exchange/recieve";
import Send from "./Exchange/send";
import { useHomeExchangeContext } from "../context/HomeExchangeContext";

const ExchangeCurrency = () => {
  const link = "https://api.simpleswap.io/create_exchange";
  const { send, receive, error } = useHomeExchangeContext();

  const navigate = useNavigate();

  const handleExchange = () => {
    console.log(link);
    if (!error) {
      navigate({
        pathname: "/osicrypto/exchange",
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

  return (
    <>
      {/* <!-- start of currency exchange --> */}
      {/* <div className="bg-[#000] max-w-[800px] rounded-[25px] text-center my-[20px] mx-auto p-[10px] text-[#fff]"> */}
      <div className="exchange-container">
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
          Continue
        </div>
      </div>

      {/* <!-- end of currency exchange --> */}
    </>
  );
};
export default ExchangeCurrency;
