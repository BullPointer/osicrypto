import { Icon } from "@iconify/react";

const Slogan = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 bg-[#020203] border-b-4 border-b-black">
      <div className="flex flex-row justify-center items-center gap-3 p-5">
        <div className="text-white bg-[#ff4b12] rounded-full p-2 border-white border">
          <Icon className="text-white text-[40px]" icon="mdi:security-off" />
        </div>
        <div>
          <div className="font-bold text-[18px] text-white">
            No Sign-up required
          </div>
          <div className="text-white text-[13px]">
            Instant Access - No Sign-Up Required: Start Exploring
            Cryptocurrencies Hassle-Free.
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-3 p-5">
        <div className=" text-white bg-[#ff4b12] rounded-full p-2 border-white border">
          <Icon
            className="text-white text-[40px] "
            icon="wpf:securitychecked"
          />
        </div>
        <div>
          <div className="font-bold text-[18px] text-white">
            Swift and Secure Cryptocurrency Exchange
          </div>
          <div className="text-white text-[13px]">
            Efficient, Secure, and Lightning-Fast Cryptocurrency Exchange - Your
            Trusted Partner for Quick and Safe Transactions.
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-3 p-5">
        <div className="text-white bg-[#ff4b12] rounded-full p-2 border-white border">
          <Icon className="text-white text-[40px]" icon="bx:support" />
        </div>
        <div>
          <div className="font-bold text-[18px] text-white">
            24/7 Online Customer Support
          </div>
          <div className="text-white text-[13px]">
            Round-the-clock assistance, our dedicated team is here to help you
            anytime!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slogan;
