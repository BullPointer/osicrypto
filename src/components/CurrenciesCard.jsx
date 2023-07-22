import { Icon } from "@iconify/react";

function CurrenciesCard() {
  return (
    <div className="h-auto left-10 w-[90%] mx-auto bg-white border shadow-lg rounded-xl">
          <div className="text-[22px] px-5 rounded-t-xl font-[semibold] text-[#ff4b12]">
            See more on most popular currencies
          </div>
          <ul className="flex flex-wrap gap-3 w-full h-[70%] px-5 pt-2 pb-4 rounded-b-xl">
            {[
              "btc",
              "eth",
              "arrow",
              "xmr",
              "xlm",
              "arrow",
              "doge",
              "arrow",
              "dot",
              "arrow",
              "theta",
              "uni",
              "usdt",
            ].map((coin, index) => (
              <li
                key={index}
                className="flex flex-row justify-center items-center gap-1 cursor-pointer text-black hover:text-blue-400"
              >
                <div className="text-[16px] opacity-80">
                  {coin}
                </div>
                <Icon icon="ep:coin" />
              </li>
            ))}
          </ul>
        </div>
  )
}

export default CurrenciesCard;