/* eslint-disable react/prop-types */
import CurrenciesCard from "./CurrenciesCard";
import TopStories from "./TopStories";
import WorkCard from "./WorkCard";
import Exchange from "./Exchange";
import { Outlet } from "react-router-dom";

const BlogBody = () => {
  return (
    <div className="w-[90%] md:w-[80%] h-fit pt-10 lg:pt-0 grid grid-cols-1 xl:grid-cols-3 mx-auto pb-20">
      <div className="xl:col-span-2">
        <Outlet />
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
