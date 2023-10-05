/* eslint-disable react/prop-types */
const MessagePop = ({ message }) => {
  return (
    <div className="flex flex-row justify-center items-center z-50 fixed top-0 left-0 right-0 w-full py-5 bg-[#fff;]">
      {message}
    </div>
  );
};

export default MessagePop;
