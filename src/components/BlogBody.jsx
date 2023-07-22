/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useBlogContext } from "../context/BlogContext";
import { shortenSubtopic, shortenTopic } from "../utils/shortenText";
import { BlogFunc, DoubleBlogFunc } from "./BlogFunc";
import CurrenciesCard from "./CurrenciesCard";
import blogData from "./database/BlogData/blogData";
import Pagination from "./Pagination";
import TopStories from "./TopStories";
import Trending from "./Trending";
import WorkCard from "./WorkCard";
import Exchange from "./Exchange";

const BlogBody = () => {
  const { newBlogs } = useBlogContext();

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
    const data = blogData.filter((obj) => obj.category === "Trending News");
    setArrOfSlide(data);
  }, []);

  let count = 0;
  return (
    <div className="w-[90%] md:w-[80%] h-fit grid grid-cols-1 xl:grid-cols-3 mx-auto">
      <div className="xl:col-span-2">
        <div className="h-fit hidden lg:grid grid-cols-2 px-4 pt-10 pb-0">
          {newBlogs.map(
            ({ id, img, topic, subtopic, date, author, category }, index) => {
              count == 5 ? (count = 1) : count++;
              if (newBlogs.length == 1) {
                return (
                  <BlogFunc
                    key={index}
                    img={img}
                    topic={shortenTopic(topic)}
                    subtopic={shortenSubtopic(subtopic)}
                    date={date}
                    author={author}
                    category={category}
                    id={id}
                  />
                );
              }
              if (count == 3) {
                return (
                  <div
                    key={index}
                    className="flex flex-row justify-center items-center  mr-2 col-span-2 relative"
                  >
                    <div
                      onClick={handlePrev}
                      className="absolute top-[40%] left-1 cursor-pointer bg-[#e0e0e0] text-[#bbb9b9] p-2 rounded-full"
                    >
                      <Icon icon="ep:arrow-left-bold" />
                    </div>
                    <Trending key={index} newTrends={newTrends} />
                    <div
                      onClick={handleNext}
                      className="absolute top-[40%] right-1 cursor-pointer bg-[#e0e0e0] text-[#bbb9b9] p-2 rounded-full"
                    >
                      <Icon icon="ep:arrow-right-bold" />
                    </div>
                  </div>
                );
              }
              if (count == 4) {
                return (
                  <BlogFunc
                    key={index}
                    img={img}
                    topic={shortenTopic(topic)}
                    subtopic={shortenSubtopic(subtopic)}
                    date={date}
                    author={author}
                    category={category}
                    id={id}
                  />
                );
              }
              return (
                <div key={index} className="grid grid-cols-1 mr-2">
                  <DoubleBlogFunc
                    img={img}
                    topic={shortenTopic(topic)}
                    subtopic={shortenSubtopic(subtopic)}
                    date={date}
                    author={author}
                    category={category}
                    id={id}
                  />
                </div>
              );
            }
          )}
        </div>
        <div className="h-fit grid grid-cols-1 sm:grid-cols-2 px-4 pt-10 pb-0 lg:hidden">
          {newBlogs.map(
            ({ id, img, topic, subtopic, date, author, category }, index) => {
              return (
                <BlogFunc
                  key={index}
                  img={img}
                  topic={shortenTopic(topic)}
                  subtopic={shortenSubtopic(subtopic)}
                  date={date}
                  author={author}
                  category={category}
                  id={id}
                />
              );
            }
          )}
        </div>
        <Pagination />
      </div>
      <div className="flex flex-col justify-start items-center gap-6 pt-10 pb-0">
        <Exchange />
        <CurrenciesCard />
        <WorkCard />
        <TopStories />
      </div>
    </div>
  );
};

export default BlogBody;
