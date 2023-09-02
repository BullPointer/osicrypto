/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";
import { shortenSubtopic, shortenTopic } from "../../utils/shortenText";
import { BlogFunc, DoubleBlogFunc } from "../BlogFunc";
import Trending from "../Trending";
import { useBlogContext } from "../../context/BlogContext";
import { useParams } from "react-router-dom";

const BlogSelect = ({ handlePrev, handleNext, newTrends }) => {
  const params = useParams();

  const { newBlogs } = useBlogContext();

  let count = 0;

  return (
    <>
      <div className="h-fit hidden lg:grid grid-cols-2 px-4 pt-10 pb-0">
        {newBlogs?.map(
          (
            { _id, blogImage, title, subtitle, date, author, category },
            index
          ) => {
            count == 6 ? (count = 1) : count++;
            if (newBlogs.length == 1) {
              return (
                <BlogFunc
                  key={index}
                  img={blogImage}
                  topic={shortenTopic(title)}
                  subtopic={shortenSubtopic(subtitle)}
                  date={date}
                  author={author}
                  category={category}
                  id={_id}
                />
              );
            }
            if (count == 3 && Object.keys(params).length > 0) {
              return (
                <BlogFunc
                  key={index}
                  img={blogImage}
                  topic={shortenTopic(title)}
                  subtopic={shortenSubtopic(subtitle)}
                  date={date}
                  author={author}
                  category={category}
                  id={_id}
                />
              );
            }
            if (count == 3 && Object.keys(params).length < 1) {
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
                  img={blogImage}
                  topic={shortenTopic(title)}
                  subtopic={shortenSubtopic(subtitle)}
                  date={date}
                  author={author}
                  category={category}
                  id={_id}
                />
              );
            }
            return (
              <div key={index} className="grid grid-cols-1 mr-2">
                <DoubleBlogFunc
                  img={blogImage}
                  topic={shortenTopic(title)}
                  subtopic={shortenSubtopic(subtitle)}
                  date={date}
                  author={author}
                  category={category}
                  id={_id}
                />
              </div>
            );
          }
        )}
      </div>
      <div className="h-fit grid grid-cols-1 sm:grid-cols-2 px-4 pt-10 pb-0 lg:hidden">
        {newBlogs?.map(
          (
            { _id, blogImage, title, subtitle, date, author, category },
            index
          ) => {
            return (
              <BlogFunc
                key={index}
                img={blogImage}
                topic={shortenTopic(title)}
                subtopic={shortenSubtopic(subtitle)}
                date={date}
                author={author}
                category={category}
                id={_id}
              />
            );
          }
        )}
      </div>
    </>
  );
};

export default BlogSelect;
