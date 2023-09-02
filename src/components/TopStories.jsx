import { useEffect, useState } from "react";
import { getAllBlog } from "../handleApi/documentApi";
import { Link } from "react-router-dom";

const TopStories = () => {
  const [topStories, setTopStories] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const { data } = await getAllBlog();
        const filteredBlog = data.blogs?.filter(
          (blogs) => blogs.category !== "Trending Stories"
        );
        setTopStories(filteredBlog);
      } catch (error) {
        console.log("The error for Blog Container ", error);
      }
    };

    getBlogs();
  }, []);

  const handleScrollTo = () =>
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

  return (
    <div className="flex flex-col justify-start items-start gap-2 py-2 border h-auto left-10 w-[90%] mx-auto bg-white  shadow-lg rounded-xl">
      <div className="text-[22px] px-5 rounded-t-xl font-[semibold] text-[#ff4b12]">
        Top stories
      </div>
      <div className="px-5 text-black text-[16px] ">
        <ul className="flex flex-col justify-center items-start gap-1">
          {topStories?.map(({ title, _id }, index) => (
            <Link
              to={`/blog/${title.split(" ").join("-").toLowerCase()}`}
              state={{ id: _id }}
              onClick={handleScrollTo}
              className="last:border-b-0 text-[15px] py-2 w-full border-b cursor-pointer font-thin hover:text-blue-400"
              key={index}
            >
              {title}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopStories;
