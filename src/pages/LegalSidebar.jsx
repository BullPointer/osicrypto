/* eslint-disable react-hooks/exhaustive-deps */
import { Icon } from "@iconify/react";
import { useLocation, useNavigate } from "react-router-dom";
import { legalSidebarData } from "./LegalData";
import { useEffect, useState } from "react";

const LegalSidebar = () => {
  const navigate = useNavigate();
  const [screenSize, setScreenSize] = useState(screen.width);
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();

  const handleActive = (index, link) => {
    navigate(link);
  };
  const handleScreen = () => {
    setScreenSize(window.innerWidth);
    console.log();
  };

  useEffect(() => {
    window.addEventListener("resize", handleScreen);
    screenSize >= 1024 ? setShow(true) : setShow(false);

    return () => window.removeEventListener("resize", handleScreen);
  }, [screenSize]);
  return (
    <div className="flex flex-col justify-start items-center w-full lg:w-[30pc] h-auto lg:min-h-screen bg-black ">
      <div className="flex flex-col justify-center items-start w-full ">
        <div className="flex flex-row justify-between items-center text-[25px] font-[600] text-[#fff] px-5 py-3 w-full">
          <div>Official Documents</div>{" "}
          {show ? (
            <Icon
              className="cursor-pointer flex lg:hidden"
              onClick={() => setShow(false)}
              icon="iconamoon:arrow-up-2"
              fontSize={30}
            />
          ) : (
            <Icon
              className="cursor-pointer flex lg:hidden"
              onClick={() => setShow(true)}
              icon="iconamoon:arrow-down-2"
              fontSize={30}
            />
          )}
        </div>
        <div
          style={{ transform: `translateX(${show ? "0%" : "100%"})` }}
          className={`transition-transform duration-100 w-full lg:transition-none`}
        >
          {show &&
            legalSidebarData?.map(({ link, text }, index) => (
              <div
                key={index}
                onClick={() => handleActive(index, link)}
                className={`text-[18px] text-[#d8d3d3] px-5 py-3 cursor-pointer ${
                  pathname === link && " text-blue-300"
                } hover:text-blue-300 hover:bg-[#010102] w-full`}
              >
                {text}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LegalSidebar;
