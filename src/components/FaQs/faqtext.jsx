/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import parser from "html-react-parser";

const Faqtext = ({ handleClick, toggle, data, index, keytext }) => {
  return (
    <>
      {/* <!-- start of FAQ section --> */}
      <div
        key={index}
        onClick={() => handleClick(keytext)}
        className={`bg-black contentbx ${toggle(keytext)} prose `}
      >
        <div className="label w-full">{parser(data?.question)}</div>
        <div onClick={(e) => e.stopPropagation()} className="content w-full">
          {parser(data?.answer)}
        </div>
      </div>
      {/* <!-- end of FAQ section --> */}
    </>
  );
};
Faqtext.propTypes = {
  keys: PropTypes.any,
  handleClick: PropTypes.any,
  toggle: PropTypes.any,
  data: PropTypes.any,
  index: PropTypes.any,
};
export default Faqtext;
