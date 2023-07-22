function WorkCard() {
  return (
    <div className="flex flex-col justify-start items-start gap-2 py-2 border h-auto left-10 w-[90%] mx-auto bg-white  shadow-lg rounded-xl">
      <div className="text-[22px] px-5 rounded-t-xl font-[semibold] text-[#ff4b12]">
        Would like to make a contribution by writing for our Blog? 
      </div>
      <div className="px-5 text-black text-[16px] py-2">
        Hurry now!{" "}
        <span className="text-white bg-[#515761] hover:bg-blue-400 shadow p-2 rounded-full  ml-2 cursor-pointer">
          Get started
        </span>
      </div>
    </div>
  );
}

export default WorkCard;
