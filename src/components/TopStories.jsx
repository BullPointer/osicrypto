import topStories from "./database/BlogData/topStories";

const TopStories = () => {
    return (
      <div className="flex flex-col justify-start items-start gap-2 py-2 border h-auto left-10 w-[90%] mx-auto bg-white  shadow-lg rounded-xl">
        <div className="text-[22px] px-5 rounded-t-xl font-[semibold] text-[#ff4b12]">
        Top stories
        </div>
        <div className="px-5 text-black text-[16px] ">
          <ul className="flex flex-col justify-center items-start gap-1">
            {topStories?.map(({title}, index) => (
                <li className="last:border-b-0 text-[15px] py-2 w-full border-b cursor-pointer font-thin hover:text-blue-400" key={index}>{title}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  
  export default TopStories;
  