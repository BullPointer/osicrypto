/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";
import { useHomeExchangeContext } from "../../context/HomeExchangeContext";
import ErrorBoundary from "../../ErrorBoundary";
import CryptoList from "./cryptList";

const Send = () => {
  const {
    send,
    error,
    showList,
    range,
    handleAmount,
    handleFocus,
    selectCoin
  } = useHomeExchangeContext();

  return (
    <>
      <ErrorBoundary fallback="check send function for error">
        {selectCoin == "send" && <CryptoList type={"send"} /> }
      </ErrorBoundary>
      <div className="exchange">
        <div className="selling">
          <p style={{ color: "#fff" }}>You send</p>
         {range && <p>
            Available:
            <span style={{ color: "yellow" }}> {range} </span>
            <span style={{ color: "yellow" }}>{send.symbol.toUpperCase()}</span>
          </p>}
        </div>
        <div className="bitcoin">
          <div className="select cursor-pointer" onClick={() => showList("send")}>
            <div className="symbol" value="fa-brands fa-bitcoin">
              {send.symbol.toUpperCase()}
            </div>
            <Icon icon="material-symbols:arrow-drop-down-circle-outline" />
          </div>
          <input
            name="send"
            className="amount"
            type="text"
            value={send.amount}
            onChange={handleAmount}
            onFocus={handleFocus}
          />
        </div>
        {error && <div className="value-error">{error}</div>}
        <div className="selling">
          <p>Current Rate</p>
          <p>
            <span style={{ color: "green" }}>1 {send.symbol}= 27.536.20</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Send;
