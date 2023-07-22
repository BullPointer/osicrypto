/* eslint-disable react/prop-types */
import "../../Styling/exchange.css";
import { Icon } from "@iconify/react";
import { useExchangeContext } from "../../context/HomeExchangeContext";

const CryptoList = ({ type }) => {
  const {
    handleCurrency,
    stopWindow,
    clickWindow,
    handleChange,
    filteredAllCoins,
    filteredPopularCoin,
    searchValue,
  } = useExchangeContext();
  const commonStyle = "flex flex-row justify-center items-center";

  return (
    <>
      <div onClick={clickWindow} className={`coin-container flex`}>
        <div onClick={stopWindow} className="coin-box">
          <div className={`${commonStyle} border-b w-full`}>
            <Icon
              className="h-[100%] text-[#585656]"
              icon="ic:baseline-search"
              fontSize={30}
            />
            <input
              className="lg:w-[80%] w-full px-4 py-3 outline-none text-[#585656]"
              placeholder="Search your prefered Currency"
              type="search"
              name="search"
              value={searchValue}
              onChange={handleChange}
            />
          </div>
          <div className="overflow-y-scroll text-black h-[100%] bg-white min-h-[100%]">
            <div className="px-4 py-6 opacity-70 text-left">Popular Currencies</div>
            {filteredPopularCoin?.map(({ image, name, symbol }, index) => (
              <div
              onClick={() => handleCurrency(name, symbol, type)}
              className="flex flex-row justify-between items-center  cursor-pointer hover:bg-[#ccc9c9] border-b"
              key={index}
              >
                <div className={`${commonStyle} gap-2 `}>
                  <img className="py-4 px-2" src={image} alt="" />
                  <div className="py-4 text-[#312e2e] font-[500] font-mono">
                    {symbol.toUpperCase()}
                  </div>
                </div>
                <div
                  className="py-4 px-2 text-[#312e2e] font-[500] font-mono text-[14px] md:text-lg"
                  style={{ marginLeft: "10px" }}
                  >
                  {name}
                </div>
              </div>
            ))}
            <div className="px-4 py-6 opacity-70 text-left">All Currencies</div>
            {filteredAllCoins?.map(({ image, name, symbol }, index) => (
              <div
              onClick={() => handleCurrency(name, symbol, type)}
              className="flex flex-row justify-between items-center  cursor-pointer hover:bg-[#ccc9c9] border-b"
              key={index}
              >
                <div className={`${commonStyle} gap-2 `}>
                  <img className="py-4 px-2" src={image} alt="" />
                  <div className="py-4 text-[#312e2e] font-[500] font-mono">
                    {symbol.toUpperCase()}
                  </div>
                </div>
                <div
                  className="py-4 px-2 text-[#312e2e] font-[500] font-mono text-[14px] md:text-lg"
                  style={{ marginLeft: "10px" }}
                  >
                  {name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoList;
