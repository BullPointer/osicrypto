/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useState } from "react";

const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [textColor, setTextColor] = useState("white");
  const [blogTextColor, setBlogTextColor] = useState("#d6d3d3");

  const handleBgColor = () => {
    // get background color
    const color = getComputedStyle(document.documentElement).getPropertyValue(
      "--bg-color"
    );
    document.documentElement.style.setProperty(
      "--bg-color",
      ` ${color == "#242222" ? "white" : "#242222"}`
    );
    setTextColor(color == "#242222" ? "black" : "white");
    setBlogTextColor(color == "#242222" ? '#3d3c3c' : '#d6d3d3');
  };

  return (
    <HomeContext.Provider
      value={{
        handleBgColor,
        textColor,
        blogTextColor,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => {
  return useContext(HomeContext);
};
