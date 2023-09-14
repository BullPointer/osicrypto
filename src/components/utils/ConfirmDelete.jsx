/* eslint-disable react/prop-types */

const ConfirmDelete = ({
  message,
  id,
  deleteFunc,
  confirm,
  setConfirm,
  setShowPopup,
}) => {
  const handleConfirm = async () => {
    try {
      await deleteFunc(id);
      setShowPopup(true);
      setConfirm({ ...confirm, confirm: false });
      setTimeout(() => {
        setShowPopup(false);
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.log("New Error ", error.response);
    }
  };

  return (
    <>
      <div className="flex flex-row justify-center items-center fixed left-0 top-0 w-full h-screen">
        <div className="relative top-0 left-0 w-full h-screen opacity-50 bg-[#000]"></div>
        <div
          id="no-opacity"
          className="absolute flex flex-col justify-center items-center gap-2 p-4 w-fit rounded-md z-10 opacity-100 bg-[#fff]"
        >
          <div>{message}</div>
          <div className="w-full flex flex-row justify-center items-center gap-2 ">
            <div
              onClick={() => setConfirm({ ...confirm, confirm: false })}
              className="py-1 px-2 rounded-md text-[12px] text-white bg-[#484ea3] cursor-pointer"
            >
              Cancel
            </div>
            <div
              onClick={handleConfirm}
              className="py-1 px-2 rounded-md text-[12px] text-white bg-[#bb3131] cursor-pointer"
            >
              Yes
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmDelete;
