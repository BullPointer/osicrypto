/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from "react";
import { getAllBlog } from "../handleApi/documentApi";

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
    const getBlogs = async () => {
      try {
        const { data } = await getAllBlog();
        const filteredBlog = data.blogs?.filter(
          (blogs) => blogs.category !== "Trending Stories"
        );
        setBlogs(filteredBlog);
      } catch (error) {
        console.log("The error for Blog Container ", error);
      }
    };

    getBlogs();
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
    window.scrollTo({
      top: screen.width <= 700 ? 120 : 250,
      left: 0,
      behavior: "smooth",
    });

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

  const handleCategory = async (category) => {
    setCurrentPage(1);
    try {
      const { data } = await getAllBlog();
      const filteredBlog = data.blogs?.filter(
        (blogs) => blogs.category === category
      );
      if (category === "All") {
        setBlogs(data.blogs);
        setActive("All");
      } else {
        setBlogs(filteredBlog);
        setActive(category);
      }
    } catch (error) {
      console.log("The error for Blog Container ", error);
    }
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
