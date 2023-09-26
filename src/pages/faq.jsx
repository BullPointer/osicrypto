import { useEffect, useState } from "react";
import { useHomeContext } from "../context/HomeContext";
import Faqtext from "../components/FaQs/faqtext";
import Footer from "../footer/footer";
import Navbar from "../navbar/Navbar";
import { getFaqsObject } from "./object";
import Slogan from "../components/Documents/Slogan";

function FaQ() {
  // start of responsive faq drop down
  const [faq, setFaq] = useState({});
  const [clickedIndex, setClickedIndex] = useState(null);

  useEffect(() => {
    getFaqsObject(setFaq);
  }, []);

  const handleClick = (key) =>
    setClickedIndex(clickedIndex === key ? null : key);

  const toggle = (key) => (clickedIndex === key ? "active" : "none");

  const { textColor } = useHomeContext();
  // end of responsive faq drop down
  return (
    <>
      <Navbar />
      {/* <!-- start of FAQ section --> */}
      <div className="accordion" id="FAQ">
        <p
          style={{ color: textColor }}
          className={`text-[27px] font-[600] text-center p text-${textColor}`}
        >
          Do you have any questions?
        </p>
        <div className=" ">
          {faq["Main"]?.length > 0 && (
            <div className="mt-5 px-2 p-2 text-2xl text-red-400 font-[600]">
              About
            </div>
          )}
          {faq["Main"]?.map((data, index) => (
            <Faqtext
              key={index}
              handleClick={handleClick}
              keytext={"Main"}
              toggle={toggle}
              data={data}
              index={index}
            />
          ))}

          {faq["Buy"]?.length > 0 && (
            <div className="mt-5 px-2 p-2 text-2xl text-red-400 font-[600]">
              Buy
            </div>
          )}
          {faq["Buy"]?.map((data, index) => (
            <Faqtext
              key={index}
              handleClick={handleClick}
              keytext={"Buy"}
              toggle={toggle}
              data={data}
              index={index}
            />
          ))}
          {faq["Sell"]?.length > 0 && (
            <div className="mt-5 px-2 p-2 text-2xl text-red-400 font-[600]">
              Sell
            </div>
          )}
          {faq["Sell"]?.map((data, index) => (
            <Faqtext
              key={index}
              handleClick={handleClick}
              keytext={"Sell"}
              toggle={toggle}
              data={data}
              index={index}
            />
          ))}
          {faq["Coin"]?.length > 0 && (
            <div className="mt-5 px-2 p-2 text-2xl text-red-400 font-[600]">
              Coin
            </div>
          )}
          {faq["Coin"]?.map((data, index) => (
            <Faqtext
              key={index}
              handleClick={handleClick}
              keytext={"Coin"}
              toggle={toggle}
              data={data}
              index={index}
            />
          ))}
          {faq["Deposit"]?.length > 0 && (
            <div className="mt-5 px-2 p-2 text-2xl text-red-400 font-[600]">
              Deposit
            </div>
          )}
          {faq["Deposit"]?.map((data, index) => (
            <Faqtext
              key={index}
              handleClick={handleClick}
              keytext={"Deposit"}
              toggle={toggle}
              data={data}
              index={index}
            />
          ))}
          {faq["Fiat Deposit"]?.length > 0 && (
            <div className="mt-5 px-2 p-2 text-2xl text-red-400 font-[600]">
              Fiat Deposit
            </div>
          )}
          {faq["Fiat Deposit"]?.map((data, index) => (
            <Faqtext
              key={index}
              handleClick={handleClick}
              keytext={"Fiat Deposit"}
              toggle={toggle}
              data={data}
              index={index}
            />
          ))}
          {faq["Gift Deposit"]?.length > 0 && (
            <div className="mt-5 px-2 p-2 text-2xl text-red-400 font-[600]">
              Gift Deposit
            </div>
          )}
          {faq["Gift Deposit"]?.map((data, index) => (
            <Faqtext
              key={index}
              handleClick={handleClick}
              keytext={"Gift Deposit"}
              toggle={toggle}
              data={data}
              index={index}
            />
          ))}
          {faq["P2P"]?.length > 0 && (
            <div className="mt-5 px-2 p-2 text-2xl text-red-400 font-[600]">
              P2P
            </div>
          )}
          {faq["P2P"]?.map((data, index) => (
            <Faqtext
              key={index}
              handleClick={handleClick}
              keytext={"P2P"}
              toggle={toggle}
              data={data}
              index={index}
            />
          ))}
          {faq["Trade"]?.length > 0 && (
            <div className="mt-5 px-2 p-2 text-2xl text-red-400 font-[600]">
              Trade
            </div>
          )}
          {faq["Trade"]?.map((data, index) => (
            <Faqtext
              key={index}
              handleClick={handleClick}
              keytext={"Trade"}
              toggle={toggle}
              data={data}
              index={index}
            />
          ))}
          {faq["Wallet"]?.length > 0 && (
            <div className="mt-5 px-2 p-2 text-2xl text-red-400 font-[600]">
              Wallet
            </div>
          )}
          {faq["Wallet"]?.map((data, index) => (
            <Faqtext
              key={index}
              handleClick={handleClick}
              keytext={"Wallet"}
              toggle={toggle}
              data={data}
              index={index}
            />
          ))}
          {faq["Withdrawn"]?.length > 0 && (
            <div className="mt-5 px-2 p-2 text-2xl text-red-400 font-[600]">
              Withdrawn
            </div>
          )}
          {faq["Withdrawn"]?.map((data, index) => (
            <Faqtext
              key={index}
              handleClick={handleClick}
              keytext={"Withdrawn"}
              toggle={toggle}
              data={data}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* <!-- end of FAQ section --> */}
      <Slogan />
      <Footer />
    </>
  );
}
export default FaQ;
