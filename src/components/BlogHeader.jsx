import { useState } from "react";
import { Icon } from "@iconify/react";
import { useBlogContext } from "../context/BlogContext";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const BlogHeader = () => {
  const { handleCategory, active } = useBlogContext();
  const activeStyle = (cat) =>
    cat == active ? "gradient-blue-card rounded-full text-red-400" : "";
  const [displayList, setDisplayList] = useState(false);

  return (
    <div className="flex flex-col justify-end items-center w-full h-auto lg:h-[30vh] bg-black ">
      <div className="bg-black py-3 text-white text-5xl w-[80%] text-center rounded-t-lg">
        Blog
      </div>
      <div className="bg-black w-[90%] lg:w-[80%] mb-2">
        <ul className="hidden lg:flex flex-row gap-4 py-4 px-2">
          {[
            "All",
            "Latest News",
            "For You",
            "Price Predictions",
            "Crypto Updates",
          ].map((list, index) => (
            <Link
              to={
                list.toLowerCase() === "all"
                  ? "/blog"
                  : `category/${list.split(" ").join("-").toLowerCase()}`
              }
              onClick={() => handleCategory(list)}
              className={`text-white text-lg cursor-pointer p-4 hover:text-red-300 ${activeStyle(
                list
              )}`}
              key={index}
            >
              {list}
            </Link>
          ))}
        </ul>
        <div className="relative w-full lg:hidden block  h-[100%] p-1 rounded-md  text-black">
          <ul
            className="z-10 absolute left-0 top-0 w-full p-2 rounded-md bg-white shadow-md text-black"
            name=""
            id=""
          >
            <li className="flex flex-row justify-between items-center">
              <div className="px-4 py-1 md:text-lg opacity-80">{active}</div>
              <div
                onClick={() => setDisplayList(!displayList)}
                className="px-4 cursor-pointer py-1 opacity-80"
              >
                <Icon icon="ep:arrow-down-bold" />
              </div>
            </li>
            {displayList &&
              [
                "All",
                "Latest News",
                "For You",
                "Price Predictions",
                "Crypto Updates",
              ].map((list, index) => (
                <Link
                  to={
                    list.toLowerCase() === "all"
                      ? "/blog"
                      : `category/${list.split(" ").join("-").toLowerCase()}`
                  }
                  onClick={() => handleCategory(list) && setDisplayList(false)}
                  value={list}
                  className={`flex flex-col items-start justify-center py-2 text-black text-lg px-4 cursor-pointer hover:text-red-300 ${activeStyle(
                    list
                  )}`}
                  key={index}
                >
                  {list}
                </Link>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
