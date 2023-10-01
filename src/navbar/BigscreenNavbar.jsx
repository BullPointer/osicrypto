/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { Link, NavLink } from "react-router-dom";
import { checkAuth } from "../utils/CheckAuth";

const supportData = [
  { link: "how-it-works", text: "How It Works" },
  { link: "help", text: "Help Center" },
  { link: "support", text: "Support Request" },
  { link: "faq", text: "FAQ" },
];
const currencies = [
  { text: "Bitcoin", symbol: "btc" },
  { text: "Ethereum", symbol: "eth" },
  { text: "Dogecoin", symbol: "doge" },
  { text: "Monero", symbol: "xmr" },
  { text: "Litecoin", symbol: "ltc" },
  { text: "XRP", symbol: "xrp" },
  { text: "USDC Coin Ethereum", symbol: "usdc" },
];

const account = [
  { link: "sign-in", text: "Sign in" },
  { link: "create-account", text: "Create Account" },
];

const BigscreenNavbar = ({ handleCurrency }) => {
  const ref = useRef();
  const [showList, setShowList] = useState({ key: null });

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const handleShowList = (key) => {
    // toogle select list

    showList.key == key
      ? setShowList({ ...showList, key: null })
      : setShowList({ ...showList, key });
  };
  useEffect(() => {
    const div = ref.current;
    const checkBox = ({ target }) =>
      !div.contains(target) && setShowList(false);

    document.addEventListener("click", checkBox);
    return () => document.removeEventListener("click", checkBox);
  }, []);
  return (
    <nav ref={ref} className="">
      <ul className="hidden lg:flex flex-row ">
        <li className="relative">
          <div
            onClick={() => handleShowList("support")}
            className="mx-[12px] text-[18px] font-[500] text-[#fff] hover:border-t-2 cursor-pointer"
          >
            <div className="flex flex-row justify-start items-center gap-2 ">
              <div>Support</div>
              <Icon icon="ep:arrow-down-bold" />
            </div>
          </div>
          {showList.key == "support" && (
            <div
              onClick={() => setShowList({ ...showList, key: null })}
              className="z-10 absolute bg-black w-[150px] max-h-auto shadow-2xl shadow-black rounded border-t-4 border-red-600 -left-[15%]  top-[100%]"
            >
              {supportData.map(({ link, text }, index) => (
                <Link key={index} to={`/${link}`}>
                  <div className="text-white p-1 mb-2 cursor-pointer hover:font-bold hover:bg-white hover:text-[#000]">
                    {text}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </li>
        <li className="relative">
          <div
            onClick={() => handleShowList("currencies")}
            className="mx-[12px] text-[18px] font-[500] text-[#fff] hover:border-t-2 cursor-pointer"
          >
            <div className="flex flex-row justify-start items-center gap-2 ">
              <div>Currencies</div>
              <Icon icon="ep:arrow-down-bold" />
            </div>
          </div>
          {showList.key == "currencies" && (
            <div
              onClick={() => setShowList({ ...showList, key: null })}
              className="z-10 absolute bg-black w-[200px] max-h-auto shadow-2xl shadow-black rounded border-t-4 border-red-600 top-[100%] -left-[20%]"
            >
              {currencies.map(({ text, symbol }, index) => (
                <Link
                  onClick={() => handleCurrency(symbol)}
                  key={index}
                  to={`/exchange/${text.toLowerCase()}`}
                >
                  <div className="text-white p-1 mb-2 cursor-pointer hover:font-bold hover:bg-white hover:text-[#000]">
                    {text.toUpperCase()}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </li>
        <li className="relative">
          <div
            onClick={() => handleShowList("account")}
            className="mx-[12px] text-[18px] font-[500] text-[#fff] hover:border-t-2 cursor-pointer"
          >
            <div className="flex flex-row justify-start items-center gap-2 ">
              <div>Account</div>
              <Icon icon="ep:arrow-down-bold" />
            </div>
          </div>
          {showList.key == "account" && (
            <div
              onClick={() => setShowList({ ...showList, key: null })}
              className="z-10 absolute bg-black w-[150px] max-h-auto shadow-2xl shadow-black rounded border-t-4 border-red-600 top-[100%]"
            >
              {!checkAuth() ? (
                account.map(({ link, text }, index) => (
                  <Link key={index} to={`/${link}`}>
                    <div className="text-white p-1 mb-2 cursor-pointer hover:font-bold hover:bg-white hover:text-[#000]">
                      {text}
                    </div>
                  </Link>
                ))
              ) : (
                <div
                  onClick={handleLogout}
                  className="text-white p-1 mb-2 cursor-pointer hover:font-bold hover:bg-white hover:text-[#000]"
                >
                  Sign out
                </div>
              )}
            </div>
          )}
        </li>
        <li>
          <NavLink
            onClick={() => setShowList({ ...showList, key: null })}
            className=" mx-[12px] text-[18px] font-[500] text-[#fff] hover:border-t-2"
            to={"/blog"}
          >
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default BigscreenNavbar;
