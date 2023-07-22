/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

const Faqtext = ({ handleClick, toggle, data, index, keytext }) => {
  return (
    <>
      {/* <!-- start of FAQ section --> */}
      <div
        key={index}
        onClick={() => handleClick(index, keytext)}
        className={`contentbx ${toggle(index, keytext)}`}
      >
        <div className="label">{data.label}</div>
        <div className="content">
          <p>{data.content}</p>
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
