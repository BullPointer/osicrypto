import { Icon } from "@iconify/react";
import Currrencies from "./Currrencies";

/* eslint-disable react/prop-types */

const Transaction = ({
  transactionObj,
  title,
  type,
  handleAmount,
  handleFocus,
  handleShowCurrencies,
  handleRemoveCurrencies,
  showCurrencies,
  setData,
  allCoins,
  mostPopularCoin,
  handleSelectedCurrency,
  handleSearch,
}) => {
  return (
    <div className="relative grid grid-cols-2 justify-center items-center border-b mt-2">
      <div
        className={`flex flex-col justify-center items-center  w-full border`}
      >
        <div className="text-[12px] opacity-50 text-black">{title}</div>
        {transactionObj.isLoading ? (
          <Icon
            className="text-2xl text-black"
            icon="streamline:interface-page-controller-loading-3-progress-loading-dot-load-wait-waiting"
          />
        ) : type == "send" ? (
          <div className="w-full h-[100%] text-lg">
            <input
              onChange={handleAmount}
              onFocus={handleFocus}
              className="w-full outline-none pl-2 text-center text-black"
              type="text"
              name={type}
              value={transactionObj.amount}
            />
          </div>
        ) : (
          <div className="text-lg pl-2 text-black">{transactionObj.amount}</div>
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
          <li className="text-black">{transactionObj.symbol.toUpperCase()}</li>
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
          handleRemoveCurrencies={handleRemoveCurrencies}
          allCoins={allCoins}
          mostPopularCoin={mostPopularCoin}
          handleSelectedCurrency={handleSelectedCurrency}
          handleSearch={handleSearch}
        />
      )}
    </div>
  );
};

export default Transaction;
