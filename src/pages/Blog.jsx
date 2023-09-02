/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import BlogBody from "../components/BlogBody";
import BlogHeader from "../components/BlogHeader";
import { useHomeContext } from "../context/HomeContext";
import Footer from "../footer/footer";
import Navbar from "../navbar/Navbar";
import { useParams } from "react-router-dom";

const Blog = () => {
  const params = useParams();

  const handleScrollTo = () =>
    window.scrollTo({
      top: screen.width <= 700 ? 120 : 250,
      left: 0,
      behavior: "smooth",
    });
  useEffect(() => {
    addEventListener("load", handleScrollTo);
    return () => removeEventListener("load", handleScrollTo);
  }, []);

  const { textColor } = useHomeContext();
  return (
    <>
      <Navbar />
      <BlogHeader />
      {Object.keys(params).length < 1 && (
        <div className="pt-5 flex justify-center items-center">
          <div
            className={`font-[500] w-[90%] md:w-[80%] lg:w-[50%] mt-10 lg:mt-0 lg:p-4 text-[18px] md:text-[22px] rounded-b-lg text-${textColor}`}
          >
            Cryptocurrency related news and most recent stories on blockchain
            tech, DeFi industry, crypto markets, and renowned coins.
          </div>
        </div>
      )}
      <BlogBody />
      <Footer />
    </>
  );
};

export default Blog;
