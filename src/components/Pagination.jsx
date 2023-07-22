/* eslint-disable react/prop-types */

import { useBlogContext } from "../context/BlogContext";

const Pagination = () => {
  const {
    handlePrev,
    handleNext,
    numOfPagination,
    handlePaginate,
    currentPage,
    setCurrentPage,
  } = useBlogContext();
  const activeNum = (num) => (currentPage == num ? "bg-blue-500" : " ");

  return (
    <div className=" p-2">
      <ul className=" flex flex-row w-auto">
        <li
          onClick={handlePrev}
          className="bg-white text-[#5c5959] p-2 rounded-l-xl cursor-pointer hover:text-black border"
        >
          Prev
        </li>
        {currentPage >= 4 && (
          <>
            <li
              onClick={() => setCurrentPage(1)}
              className={`bg-white text-[#5c5959] p-2 cursor-pointer hover:text-black border`}
            >
              1
            </li>
            <li
              onClick={() => setCurrentPage(numOfPagination[0] - 1)}
              className={`bg-white text-[#5c5959] p-2 cursor-pointer hover:text-black border `}
            >
              ...
            </li>
          </>
        )}
        {numOfPagination?.map((num, index) => (
          <li
            onClick={() => handlePaginate(num)}
            key={index}
            className={`bg-white text-[#5c5959] p-2 ${activeNum(
              num
            )} cursor-pointer hover:text-black border`}
          >
            {num}
          </li>
        ))}
        <li
          onClick={handleNext}
          className="bg-white text-[#5c5959] p-2 rounded-r-xl cursor-pointer hover:text-black"
        >
          Next
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
