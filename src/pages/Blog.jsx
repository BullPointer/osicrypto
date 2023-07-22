/* eslint-disable react-hooks/exhaustive-deps */
import BlogBody from "../components/BlogBody";
import BlogHeader from "../components/BlogHeader";
import { useHomeContext } from "../context/HomeContext";

const Blog = () => {
  const { textColor } = useHomeContext();
  return (
    <>
      <BlogHeader />
      <div className="pt-5 flex justify-center items-center">
        <div
          className={`font-[500] w-[90%] md:w-[80%] lg:w-[50%] mt-10 lg:mt-0 lg:p-4 text-[18px] md:text-[22px] rounded-b-lg text-${textColor}`}
        >
          Cryptocurrency related news and most recent stories on blockchain
          tech, DeFi industry, crypto markets, and renowned coins.
        </div>
      </div>
      <BlogBody />
    </>
  );
};

export default Blog;
