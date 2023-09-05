import { Icon } from "@iconify/react";

const Slogan = () => {
  return (
    <div className="grid grid-cols-3 mt-20 bg-[#161531] border-b-4 border-b-black">
      <div className="flex flex-row justify-center items-center gap-3 p-5">
        <div className="text-white bg-green-500 rounded-full p-2 border-white border">
          <Icon className="text-white text-[40px]" icon="foundation:dollar" />
        </div>
        <div>
          <div className="font-bold text-[18px] text-white">
            Money Back Guarantee
          </div>
          <div className="text-white text-[13px]">
            "Shop with Confidence: Our Money-Back Guarantee Protects Your
            Purchases!
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-3 p-5">
        <div className="text-white bg-green-500 rounded-full p-2 border-white border">
          <Icon
            className="text-white text-[40px]"
            icon="mdi:truck-delivery-outline"
          />
        </div>
        <div>
          <div className="font-bold text-[18px] text-white">Home Delivery</div>
          <div className="text-white text-[13px]">
            Bringing Your Shopping Needs Right to Your Home - Fast and Easy!
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-3 p-5">
        <div className="text-white bg-green-500 rounded-full p-2 border-white border">
          <Icon className="text-white text-[40px]" icon="bx:support" />
        </div>
        <div>
          <div className="font-bold text-[18px] text-white">
            24x7 Online Support
          </div>
          <div className="text-white text-[13px]">
            Always Here for You: 24/7 Online Support to Assist Anytime!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slogan;
