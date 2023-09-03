import { useState } from "react";
import { Icon } from "@iconify/react";
import BigscreenNavbar from "./BigscreenNavbar";
import SmallscreenNavbar from "./SmallscreenNavbar";
import { Link } from "react-router-dom";
import { useHomeContext } from "../context/HomeContext";
import { getCurrency } from "../handleApi/currencyApi";
import { useExchangeContext } from "../context/ExchangeContext";

function Navbar() {
  const [btnState, setBtnState] = useState(false);
  const { handleBgColor } = useHomeContext();
  const { receive, setReceive } = useExchangeContext();

  const handleCurrency = async (symbol) => {
    const link = "https://api.simpleswap.io/get_currency";
    try {
      const res = await getCurrency(link, symbol);
      if (res.status === 200) {
        setReceive({
          ...receive,
          name: res.data.name,
          symbol: symbol.toLowerCase(),
          image: res.data.image,
        });
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  // end of responsive navigation bar
  return (
    <>
      {/* <!-- start of navigation --> */}

      <div className="z-20 bg-black w-full p-6 relative flex flex-col lg:flex-row justify-center items-center">
        <h2 className="z-20 bg-black flex fixed top-0 left-0  justify-between w-full lg:w-auto lg:p-0 p-4 lg:bg-black lg:absolute lg:left-[20px] lg:top-[50%] lg:-translate-y-[50%] text-[20px] text-white">
          <div className="flex flex-row justify-center items-center gap-2 cursor-pointer">
            <Link to="/">© OSICRYPTO</Link>
            <Icon
              onClick={handleBgColor}
              icon="icon-park-solid:dark-mode"
              className="text-white cursor-pointer lg:hidden ml-3"
              fontSize={25}
            />
          </div>
          <div className={"flex lg:hidden"}>
            {!btnState ? (
              <Icon
                className="text-white"
                onClick={() => setBtnState(true)}
                icon="fluent:list-bar-16-filled"
                fontSize={30}
              />
            ) : (
              <Icon
                className="text-white"
                onClick={() => setBtnState(false)}
                icon="mingcute:close-fill"
                fontSize={30}
              />
            )}
          </div>
        </h2>
        <BigscreenNavbar handleCurrency={handleCurrency} />
        {btnState && (
          <SmallscreenNavbar
            setBtnState={setBtnState}
            handleCurrency={handleCurrency}
          />
        )}
        <Icon
          onClick={handleBgColor}
          icon="icon-park-solid:dark-mode"
          className="text-white cursor-pointer hidden lg:block ml-10"
          fontSize={25}
        />
      </div>
      {/* <!-- end of navigation --> */}
    </>
  );
}
export default Navbar;
