/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";

const Currency = ({
  setData,
  coins,
  text,
  type,
  handleSelectedCurrency,
  transactionObj,
}) => {
  return (
    <div className="w-full">
      <div className="p-3 text-[14px] text-black">{text}</div>
      {coins?.map(({ image, symbol, name }, index) => (
        <div
          onClick={() =>
            handleSelectedCurrency(
              image,
              symbol,
              name,
              setData,
              transactionObj,
              type
            )
          }
          key={index}
          className="flex flex-row justify-start items-center cursor-pointer hover:bg-[#e7e5e5]"
        >
          <div className="p-2">
            <img src={image} alt="" />
          </div>
          <div className="w-full flex flex-row gap-1 justify-between items-center">
            <div className="text-[16px] p-2 text-black">
              {symbol.toUpperCase()}
            </div>
            <div className="text-sm p-2 text-black">{name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Currrencies = ({
  name,
  setData,
  transactionObj,
  handleRemoveCurrencies,
  allCoins,
  mostPopularCoin,
  handleSelectedCurrency,
  handleSearch,
}) => {
  const commonStyle = "flex flex-row justify-center items-center";

  return (
    <div className="flex flex-col gap-2 absolute top-[10%] shadow-xl bg-white w-full h-[400px] z-10">
      <div className={`${commonStyle} p-2 gap-2`}>
        <div className={`rounded w-full text-[#868484] ${commonStyle} border"`}>
          <Icon icon="ic:outline-search" fontSize={30} />
          <input
            onChange={handleSearch}
            className="p-1 outline-none w-full"
            type="text"
          />
        </div>
        <div
          onClick={() => handleRemoveCurrencies(name)}
          className="text-[#868484] cursor-pointer"
        >
          <Icon icon="mingcute:close-fill" fontSize={30} />
        </div>
      </div>
      <div className="w-full overflow-y-scroll ">
        <Currency
          setData={setData}
          type={name}
          transactionObj={transactionObj}
          coins={mostPopularCoin}
          text={"Popular Currencies"}
          handleSelectedCurrency={handleSelectedCurrency}
        />
        <Currency
          setData={setData}
          type={name}
          transactionObj={transactionObj}
          coins={allCoins}
          text={"All Currencies"}
          handleSelectedCurrency={handleSelectedCurrency}
        />
      </div>
    </div>
  );
};

export default Currrencies;
