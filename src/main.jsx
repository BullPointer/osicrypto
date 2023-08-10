import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { BlogProvider } from "./context/BlogContext.jsx";
import { HomeProvider } from "./context/HomeContext.jsx";
import { HomeExchangeContext } from "./context/HomeExchangeContext.jsx";
import { SideExchangeProvider } from "./context/SideExchangeContext.jsx";
import "./index.css";
import { ExchangeProvider } from "./context/ExchangeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HomeProvider>
    <HomeExchangeContext>
      <BlogProvider>
        <SideExchangeProvider>
          <ExchangeProvider>
            <React.StrictMode>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </React.StrictMode>
          </ExchangeProvider>
        </SideExchangeProvider>
      </BlogProvider>
    </HomeExchangeContext>
  </HomeProvider>
);
