/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Copied } from "./utils/Copied";

import { explorerAddress } from "../utils/explorerAddress";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";
import { getExchange } from "../handleApi/currencyApi";
import { exchangeDummyData } from "./utils/exchangeDummyData";

const MakeExchange = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [createXData, setCreateXData] = useState(exchangeDummyData);
  const [copiedId, setCopiedId] = useState(false);

  const currencies = createXData?.currencies;
  const imageFrom = currencies[createXData?.currency_from].image;
  const imageTo = currencies[createXData?.currency_to].image;
  const address_explorer_from =
    currencies[createXData?.currency_from].address_explorer;
  const address_explorer_to =
    currencies[createXData?.currency_to].address_explorer;

  useEffect(() => {
    setTimeout(() => {
      setCopiedId(false);
    }, 3000);
  }, [copiedId]);

  useEffect(() => {
    const link = "https://api.simpleswap.io/get_exchange";
    const getExchangeData = async () => {
      try {
        const { data } = await getExchange(link, id);
        setCreateXData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getExchangeData();
    setTimeout(() => {
      getExchangeData();
    }, 3 * 60 * 1000);
  }, []);

  const commonStyle =
    "text-[10px] md:text-[14px] py-1 px-3 text-[#faf9f9] rounded-lg font-[700] my-2 cursor-context-menu";

  return (
    <>
      <Navbar />
      <div className="p-5 lg:p-0 mb-20">
        <div className="max-w-[800px] flex flex-col justify-center gap-5  mx-auto mt-8">
          <div className="text-2xl text-[#ff4b12] text-center">
            Make deposit to complete process
          </div>
          <div className="flex flex-row justify-between items-center bg-[#000] p-4  rounded-md">
            <div className="text-[10px] lg:text-[15px] text-[#e2d0d0] font-[800]">
              Exchange ID: <span>{createXData?.id}</span>
            </div>
            <Link to={"/osicrypto/support"}>
              <div className="flex flex-row justify-center items-center gap-2 text-[10px] lg:text-[14px] font-[500] text-[#e2d0d0]">
                <div>Need help?</div>
                <Icon className="text-sm sm:text-xl" icon="mdi:help-box" />
              </div>
            </Link>
          </div>
          <div className="rounded-md bg-[#000] p-2 overflow-auto">
            <div className="text-[15px] lg:text-xl text-[#f2f3f5] text-center font-[700]">
              Awaiting your deposit
            </div>
            <div className="flex flex-row justify-center lg:justify-between items-center p-2">
              <div className="hidden lg:block text-lg text-[#faf9f9] font-[600]">
                Send deposit:
              </div>
              <div className="flex flex-row justify-center items-center gap-2 text-[18px] font-[500] text-[#faf9f9]">
                <div className="w-8 h-8">
                  <img
                    className="w-[100%] h-[100%] object-cover"
                    src={imageFrom}
                    alt=""
                  />
                </div>
                <div>{createXData?.amount_from} </div>
                <div>{createXData?.currency_from.toUpperCase()}</div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-2 lg:gap-0 p-2">
              <div className="text-[14px] md:text-lg text-[#faf9f9] font-[600]">
                Deposit address:
              </div>
              <div
                id="check"
                className="max-w-[100%] gradient-blue-bg rounded-lg border text-[18px] font-[500] text-[#e2d0d0] p-2 mb-2 lg:mb-0"
              >
                <div className="flex flex-row justify-end items-center gap-2">
                  <a
                    href={explorerAddress(
                      address_explorer_from,
                      createXData.address_from
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="border p-2 my-1 mr-1 rounded-full cursor-pointer hover:bg-[#04041d]">
                      <Icon icon="fa6-solid:link" fontSize={15} />
                    </div>
                  </a>
                  <CopyToClipboard
                    text={createXData?.address_from}
                    onCopy={() => setCopiedId(true)}
                  >
                    <div className="relative border p-2 my-1 mr-1 rounded-full cursor-pointer hover:bg-[#04041d]">
                      <Icon icon="zondicons:copy" fontSize={15} />
                      {copiedId && <Copied />}
                    </div>
                  </CopyToClipboard>
                </div>
                <div className="word-wrap text-base">
                  {createXData?.address_from}
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5 p-2">
              <div
                className={`flex flex-col justify-center items-center ${
                  createXData.status === "waiting"
                    ? "opacity-100"
                    : "opacity-20"
                }`}
              >
                <Icon
                  className={`bg-[#7f7fbb] text-3xl rounded-full `}
                  icon="ic:round-pending"
                />
                <div className={`${commonStyle}`}>Awaiting deposit</div>
              </div>
              <div
                className={`flex flex-col justify-center items-center ${
                  createXData.status === "confirming"
                    ? "opacity-100"
                    : "opacity-20"
                }`}
              >
                {createXData.status === "confirming" ? (
                  <div
                    className={`border-b-[#7f7fbb] w-5 h-5 rounded-full border-b-4 animate-spin`}
                  />
                ) : (
                  <div className="w-5 h-5 rounded-full border-4" />
                )}
                <div className={`${commonStyle} `}>Confirming</div>
              </div>
              <div
                className={`flex flex-col justify-center items-center ${
                  createXData.status === "exchanging"
                    ? "opacity-100"
                    : "opacity-20"
                }`}
              >
                <Icon
                  className="bg-[#7f7fbb] text-3xl rounded-full "
                  icon="ri:exchange-fill"
                />
                <div className={`${commonStyle}`}>Exchanging</div>
              </div>
              <div
                className={`flex flex-col justify-center items-center ${
                  createXData.status === "sending"
                    ? "opacity-100"
                    : "opacity-20"
                }`}
              >
                <Icon
                  className="bg-[#7f7fbb]  text-3xl rounded-full "
                  icon="teenyicons:send-solid"
                />
                <div className={`${commonStyle}`}>Send</div>
              </div>
            </div>
          </div>
          <div className="rounded-md bg-[#000] p-2">
            <div className="text-lg p-2 text-[#ff4b12]">Receipient details</div>
            <div className="flex flex-col md:flex-row justify-center md:justify-start items-start md:items-center gap-2 md:gap-0 p-2 ">
              <div className="text-[14px] md:text-[18px] text-[#faf9f9] font-[700]">
                You get:
              </div>
              <div className="flex flex-row justify-center items-center gap-2 gradient-blue-bg text-[15px] font-bold text-white ml-0 md:ml-5 py-1 md:py-2 px-4 rounded-lg">
                <div className="w-8 h-8">
                  <img
                    className="w-[100%] h-[100%] object-cover"
                    src={imageTo}
                    alt=""
                  />
                </div>
                <div className="flex flex-row justify-center items-center">
                  <Icon
                    className="text-[20px]"
                    icon="mdi:approximately-equal"
                  />
                  <span>{createXData?.amount_to}</span>
                </div>
                <div>{createXData?.currency_to.toUpperCase()}</div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-start md:justify-start items-start md:items-center gap-2 md:gap-0 p-2 ">
              <div className="text-[14px] md:text-[18px] text-[#faf9f9] font-[800]">
                Recipient address:
              </div>
              <div className="max-w-[100%] flex flex-row justify-between items-center gap-2 gradient-blue-bg text-[15px] font-[500] text-white ml-0 md:ml-5 py-1 md:py-2 px-4 rounded-lg">
                <span className="word-wrap overflow-hidden p-1 md:p-2 text-[14px] lg:text-base">
                  {createXData?.address_to}
                </span>
                <a
                  href={explorerAddress(
                    address_explorer_to,
                    createXData.address_to
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="border p-2 my-1 mr-1 rounded-full w-auto cursor-pointer hover:bg-[#04041d]">
                    <Icon icon="fa6-solid:link" fontSize={12} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MakeExchange;
