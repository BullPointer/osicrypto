/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";
import { useSideExchangeContext } from "../context/SideExchangeContext";
import Currrencies from "./Currrencies";

const commonStyle = "flex flex-row justify-center items-center";

const Transaction = ({ type, setData, transactionObj, title }) => {
  const { handleShowCurrencies, showCurrencies, handleAmount, handleFocus } =
    useSideExchangeContext();

  return (
    <div className="relative grid grid-cols-2 justify-center items-center border-b mt-2">
      <div
        className={`flex flex-col justify-center items-center  w-full border`}
      >
        <div className="text-[12px] opacity-50">{title}</div>
        {transactionObj.isLoading ? (
          <Icon
            className="text-2xl"
            icon="streamline:interface-page-controller-loading-3-progress-loading-dot-load-wait-waiting"
          />
        ) : type == "send" ? (
          <div className="w-full h-[100%] text-lg">
            <input
              onChange={handleAmount}
              onFocus={handleFocus}
              className="w-full outline-none pl-2 text-center"
              type="text"
              name={type}
              value={transactionObj.amount}
            />
          </div>
        ) : (
          <div className="text-lg pl-2">{transactionObj.amount}</div>
        )}
      </div>
      <div
        onClick={() => handleShowCurrencies(type)}
        className={`cursor-pointer flex flex-row justify-between items-center w-full h-[100%] border p-2`}
      >
        <ul className="flex flex-row justify-center items-center">
          <li className="pr-2">
            <img src={transactionObj.image} alt="" />
          </li>
          <li>{transactionObj.symbol.toUpperCase()}</li>
        </ul>
        <div>
          <Icon icon="mdi:arrow-down-drop" fontSize={25} />
        </div>
      </div>
      {showCurrencies[type] && (
        <Currrencies
          setData={setData}
          transactionObj={transactionObj}
          name={type}
        />
      )}
    </div>
  );
};

const Exchange = () => {
  const { send, setSend, receive, setReceive, error } =
    useSideExchangeContext();
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
      />
     {error && <div className="text-[14px] text-[#be5959] px-2 py-1 font-serif">{error}</div>}
      <div className={`text-[#ff4b12] w-full ${commonStyle} p-1`}>
        <Icon icon="gg:arrows-exchange-alt-v" fontSize={25} />
      </div>
      <Transaction
        title={"You Recieve"}
        setData={setReceive}
        transactionObj={receive}
        type={"receive"}
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
