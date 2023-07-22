/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";

const Trending = ({ newTrends }) => {
  return (
    <>
      {newTrends.map((trend, index) => (
        <div
          key={index}
          className="pl-12 flex flex-col gap-2 justify-center items-start mr-1 w-auto h-[220px] bg-white mb-10 pr-5  shadow-lg rounded-lg rounded-br-lg"
        >
          <div className="w-full text-xl opacity-90">Trending News</div>
          <div className="w-full text-lg opacity-70">{trend.topic}</div>
          <div className="flex flex-row justify-start items-center gap-2 w-full opacity-90">
            <Icon icon="fluent-mdl2:date-time-12" fontSize={20} />
            <div>{trend.date}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Trending;
