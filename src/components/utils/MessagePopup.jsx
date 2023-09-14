/* eslint-disable react/prop-types */
const MessagePopup = ({ message }) => {
  return (
    <div className="w-fit py-2 px-4 z-50 fixed right-0 top-10 rounded-l-md border-5 border-r-0 border-l-[#604e94] bg-[#fff]">
      <div className="text-[#322c66] font-bold">{message}</div>
    </div>
  );
};

export default MessagePopup;
