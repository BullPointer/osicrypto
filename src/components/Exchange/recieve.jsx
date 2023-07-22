/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import ErrorBoundary from "../../ErrorBoundary";
import { useExchangeContext } from "../../context/HomeExchangeContext";
import CryptoList from "./cryptList";

const Recieve = () => {
  const { showList, receive, selectCoin } = useExchangeContext();
  const loading = (
    <Icon
      style={{ padding: "0", fontSize: "30px" }}
      className="amount"
      icon="streamline:interface-page-controller-loading-3-progress-loading-dot-load-wait-waiting"
    />
  );

  return (
    <>
      <ErrorBoundary fallback="check receive function for error">
      {selectCoin == "receive" && <CryptoList type={"receive"} /> }
      </ErrorBoundary>
      <div className="exchange">
        <div className="selling">
          <p style={{ color: "#fff" }}>You get</p>
        </div>

        <div className="bitcoin">
          <div className="select cursor-pointer" onClick={() => showList("receive")}>
            <div className="symbol" value="fa-brands fa-bitcoin">
              {receive.symbol.toUpperCase()}
            </div>
            <Icon icon="material-symbols:arrow-drop-down-circle-outline" />
          </div>
          {receive.isLoading ? (
            loading
          ) : (
            <div className="amount ">{receive.amount}</div>
          )}
        </div>

        <div className="selling">
          <p>Fees included</p>
        </div>
      </div>
    </>
  );
};

Recieve.prototype = {
  receiveCurrencyData: PropTypes.object,
  receiveCurrency: PropTypes.string,
  isLoading: PropTypes.bool,
  handleClick: PropTypes.any,
};
export default Recieve;
