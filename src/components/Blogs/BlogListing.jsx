import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import BlogSelect from "./BlogSelect";
import { getAllBlog } from "../../handleApi/documentApi";

const BlogListing = () => {
  const [currentTrend, setCurrentTrend] = useState(1);
  const [arrOfSlide, setArrOfSlide] = useState([]);
  const numOfTrendPerPage = 2;

  const lastCount = currentTrend * numOfTrendPerPage;
  const firstCount = lastCount - numOfTrendPerPage;
  const newTrends = arrOfSlide.slice(firstCount, lastCount);
  const numOfScroll = Math.ceil(arrOfSlide.length / numOfTrendPerPage);

  const handleNext = () => {
    currentTrend != numOfScroll && setCurrentTrend(currentTrend + 1);
  };

  const handlePrev = () => {
    currentTrend != 1 && setCurrentTrend(currentTrend - 1);
  };

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const { data } = await getAllBlog();
        const filteredBlog = data.blogs?.filter(
          (blogs) => blogs.category === "Trending Stories"
        );
        setArrOfSlide(filteredBlog);
      } catch (error) {
        console.log("The error for Blog Container ", error);
      }
    };

    getBlogs();
  }, []);

  return (
    <>
      <BlogSelect
        handleNext={handleNext}
        handlePrev={handlePrev}
        newTrends={newTrends}
      />
      <Pagination />
    </>
  );
};

export default BlogListing;
