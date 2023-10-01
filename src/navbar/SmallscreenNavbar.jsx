/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
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

const SmallscreenNavbar = ({ setBtnState, handleCurrency }) => {
  const token = localStorage.getItem("token");
  const [showList, setShowList] = useState({ key: null });

  const handleLogout = () => {
    setBtnState(false);
    localStorage.removeItem("token");
    window.location.reload();
  };

  const handleShowList = (key) => {
    // toogle select list

    showList.key == key
      ? setShowList({ ...showList, key: null })
      : setShowList({ ...showList, key });
  };
  return (
    <nav className="z-10 fixed left-0 top-14 w-full h-screen bg-[#242222] lg:hidden animate-cool-slide-in">
      <ul className="lg:hidden w-full flex flex-col justify-start items-start">
        <li className=" bg-black-500 cursor-pointer w-full p-2 text-[22px] text-white font-[600]">
          <div
            onClick={() => handleShowList("support")}
            className="flex flex-row justify-start items-center gap-3"
          >
            <div>Support</div>
            <Icon icon="ep:arrow-down-bold" />
          </div>
          {showList.key == "support" && (
            <div className="">
              {supportData.map(({ link, text }, index) => (
                <Link key={index} to={`/${link}`}>
                  <div
                    onClick={() => setBtnState(false)}
                    className="text-white p-1 mx-4 mb-2 cursor-pointer hover:font-bold hover:bg-white hover:text-[#000]"
                  >
                    {text}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </li>
        <li className=" bg-black-500 cursor-pointer w-full p-2 text-[22px] text-white font-[600]">
          <div
            onClick={() => handleShowList("currencies")}
            className="flex flex-row justify-start items-center gap-3"
          >
            <div>Currencies</div>
            <Icon icon="ep:arrow-down-bold" />
          </div>
          {showList.key == "currencies" && (
            <div className="">
              {currencies.map(({ text, symbol }, index) => (
                <Link
                  onClick={() => handleCurrency(symbol)}
                  key={index}
                  to={`/exchange/${text.toLowerCase()}`}
                >
                  <div
                    onClick={() => setBtnState(false)}
                    className="text-white p-1 mx-4 mb-2 cursor-pointer hover:font-bold hover:bg-white hover:text-[#000]"
                  >
                    {text.toUpperCase()}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </li>
        <li className=" bg-black-500 cursor-pointer w-full p-2 text-[22px] text-white font-[600]">
          <div
            onClick={() => handleShowList("account")}
            className="flex flex-row justify-start items-center gap-3"
          >
            <div>Account</div>
            <Icon icon="ep:arrow-down-bold" />
          </div>
          {showList.key == "account" && (
            <div className="">
              {!checkAuth() ? (
                account.map(({ link, text }, index) => (
                  <Link key={index} to={`/${link}`}>
                    <div
                      onClick={() => setBtnState(false)}
                      className="text-white p-1 mx-4 mb-2 cursor-pointer hover:font-bold hover:bg-white hover:text-[#000]"
                    >
                      {text}
                    </div>
                  </Link>
                ))
              ) : (
                <div
                  onClick={() => handleLogout()}
                  className="text-white p-1 mx-4 mb-2 cursor-pointer hover:font-bold hover:bg-white hover:text-[#000]"
                >
                  Sign out
                </div>
              )}
            </div>
          )}
        </li>
        <li
          onClick={() => setBtnState(false)}
          className="bg-black-500 cursor-pointer w-full p-2 text-[22px] text-white font-[600]"
        >
          <NavLink to="/blog">Blog</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SmallscreenNavbar;
