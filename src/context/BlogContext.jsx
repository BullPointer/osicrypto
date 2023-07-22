/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from "react";
import blogData from "../components/database/BlogData/blogData";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [numOfPagination, setNumOfPagination] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [active, setActive] = useState("All");
  const numOfBlogPerPage = 6;

  const lastCount = currentPage * numOfBlogPerPage;
  const firstCount = lastCount - numOfBlogPerPage;
  const newBlogs = blogs.slice(firstCount, lastCount);
  const numOfPages = Math.ceil(blogs.length / numOfBlogPerPage);
  const listOfNum = [...Array(numOfPages + 1).keys()].slice(1);

  useEffect(() => {
    const filteredBlog = blogData?.filter(
      (blogs) => blogs.category !== "Trending News"
    );
    setBlogs(filteredBlog);
  }, []);

  useEffect(() => {
    setNumOfPagination(
      listOfNum.length > 4
        ? [
            listOfNum[listOfNum.indexOf(currentPage)],
            listOfNum[listOfNum.indexOf(currentPage) + 1],
            listOfNum[listOfNum.indexOf(currentPage) + 2],
            "...",
            listOfNum[listOfNum.length - 1],
          ]
        : [...listOfNum]
    );
    if (listOfNum[listOfNum.length - 4] <= currentPage) {
      setNumOfPagination([
        ...listOfNum.slice(listOfNum.indexOf(listOfNum[listOfNum.length - 4])),
      ]);
    }
  }, [currentPage, blogs]);
  const handleScrollTo = () =>
  window.scrollTo({ top: screen.width <= 700 ? 120 : 250 , left: 0, behavior: "smooth" });

  const handlePaginate = (num) => {
    listOfNum.indexOf(num) == -1
      ? setCurrentPage(numOfPagination[numOfPagination.length - 3] + 1)
      : setCurrentPage(num);
      handleScrollTo();
  };
  const handlePrev = () => {
    currentPage != 1 && setCurrentPage(currentPage - 1);
    handleScrollTo();
  };
  const handleNext = () => {
    currentPage != numOfPages && setCurrentPage(currentPage + 1);
    handleScrollTo();
  };

  const handleCategory = (category) => {
    setCurrentPage(1);
    const filteredBlog = blogData.filter(
      (blogs) => blogs.category === category
    );
    setBlogs(filteredBlog.length == 0 ? blogData : filteredBlog);
    setActive(filteredBlog.length == 0 ? "All" : category);
  };

  return (
    <BlogContext.Provider
      value={{
        handleCategory,
        handleNext,
        handlePrev,
        handlePaginate,
        newBlogs,
        active,
        numOfPagination,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  return useContext(BlogContext);
};
