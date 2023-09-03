/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export const BlogFunc = ({
  id,
  img,
  topic,
  subtopic,
  date,
  author,
  category,
}) => {
  const handleScrollTo = () =>
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

  const newTopic = topic.split(" ").join("-");
  return (
    <>
      <Link
        to={`/blog/${newTopic}`}
        state={{ id: id }}
        onClick={handleScrollTo}
        className="cursor-pointer relative w-[100%] h-[250px] shadow-xl bg-white rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none"
      >
        <img
          className="w-[100%] h-[100%] object-cover bg-no-repeat absolute top-0 right-0 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none"
          src={`http://localhost:3000/${img}`}
          alt=""
        />
      </Link>
      <Link
        to={`/blog/${newTopic}`}
        state={{ id: id }}
        onClick={handleScrollTo}
        className="cursor-pointer flex flex-col gap-2 justify-center items-center w-[100%] h-[250px] bg-white mb-10 px-3 sm:p-1 md:p-3 shadow-lg rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none"
      >
        <div className="w-full flex flex-col lg:flex-row justify-between items-center">
          <div className="text-sm px-4 py-1 lg:py-2 opacity-80 rounded-xl font-semibold bg-[#444343] text-white">
            {category}
          </div>
          <div className="flex flex-row justify-center items-center gap-2 text-sm px-4 py-2 opacity-80 rounded-xl font-semibold text-black">
            <Icon icon="fluent-mdl2:date-time-12" fontSize={20} />
            <div className="sm:text-red-950">{date}</div>
          </div>
        </div>
        <div className="w-full text-[17px] lg:text-xl opacity-90">{topic}</div>
        <div className="w-full text-[14px] lg:text-lg opacity-70">
          {subtopic}
        </div>
        <div className="w-full opacity-90">
          Author: <span className="text-[#ff4b12]">{author}</span>
        </div>
      </Link>
    </>
  );
};

export const DoubleBlogFunc = ({
  id,
  img,
  topic,
  subtopic,
  date,
  author,
  category,
}) => {
  const handleScrollTo = () =>
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

  const newTopic = topic.split(" ").join("-");

  return (
    <>
      <Link
        to={`/blog/${newTopic}`}
        state={{ id: id }}
        onClick={handleScrollTo}
        className="cursor-pointer relative w-[100%] h-[250px] shadow-xl bg-white rounded-tl-lg rounded-tr-lg"
      >
        <img
          className="w-[100%] h-[100%] object-cover bg-no-repeat absolute top-0 right-0  rounded-tl-lg rounded-tr-lg "
          src={`http://localhost:3000/${img}`}
          alt=""
        />
      </Link>
      <Link
        to={`/blog/${newTopic}`}
        state={{ id: id }}
        onClick={handleScrollTo}
        className="cursor-pointer flex flex-col gap-2 justify-center items-center w-[100%] h-[250px] bg-white mb-10 p-3 shadow-lg rounded-bl-lg rounded-br-lg"
      >
        <div className="w-full flex flex-row justify-between items-center">
          <div className="text-sm px-4 py-2 opacity-80 rounded-xl font-semibold bg-[#444343] text-white">
            {category}
          </div>
          <div className="flex flex-row justify-center items-center gap-2 text-sm px-4 py-2 opacity-80 rounded-xl font-semibold text-black">
            <Icon icon="fluent-mdl2:date-time-12" fontSize={20} />
            <div>{date}</div>
          </div>
        </div>
        <div className="w-full text-xl opacity-90">{topic}</div>
        <div className="w-full text-lg opacity-70">{subtopic}</div>
        <div className="w-full opacity-90">
          Author: <span className="text-[#ff4b12]">{author}</span>
        </div>
      </Link>
    </>
  );
};
