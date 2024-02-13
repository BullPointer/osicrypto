import { Icon } from "@iconify/react";

const Slogan = () => {
  return (
    <div>
      <div className="bg-[#e9e0e0] px-1 py-10 xs:p-10 text-[#0009]">
        <div className="text-center text-3xl xstext-5xl p-5 font-bold text-[#0009]">
          Crypto Exchange made easy
        </div>
        <div className="max-w-[80%] lg:max-w-[50%] mx-auto text-center text-2xl">
          With over 900+ swift, secure, and seemless exchange happening with our
          platform. We hope that you take advantage of what we proudly offer.
        </div>
        <div className="max-w-[80%] lg:max-w-[50%] mx-auto text-center text-2xl">
          More benefits comming your way, even as you use our Osicrypto app.
        </div>
      </div>
      <div className="px-4 xs:px-10 md:px-24 py-10">
        <div className="text-center p-5 text-2xl mb-5 text-[#fff] font-bold">
          Need help on how you could make your first exchange today?
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-white text-lg">
          <div className="">
            <span className="bg-white text-black rounded-full mr-2 p-1 text-sm font-bold">
              1
            </span>
            Select the crypto pair you would like to exchange
          </div>
          <div>
            <span className="bg-white text-black rounded-full mr-2 p-1 text-sm font-bold">
              2
            </span>
            Enter your crypto wallet address to which you want your
            cryptocurrency sent to
          </div>
          <div>
            <span className="bg-white text-black rounded-full mr-2 p-1 text-sm font-bold">
              3
            </span>
            Send the crypto you would like to exchange to the wallet address you
            see on the screen
          </div>
          <div>
            <span className="bg-white text-black rounded-full mr-2 p-1 text-sm font-bold">
              4
            </span>
            Track the progress of your exchange and be ready to get your crypto
            soon
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-[#020203] border-b-4 border-b-black">
        <div className="flex justify-start p-10 w-full">
          <div className="flex flex-row justify-center items-center gap-3">
            <div className="text-white bg-[#ff4b12] rounded-full p-2 border-white border">
              <Icon
                className="text-white text-[40px]"
                icon="mdi:security-off"
              />
            </div>
            <div>
              <div className="font-bold text-[22px] sm:text-[25px] text-white">
                No Sign-up required
              </div>
              <div className="max-w-[60%] text-white text-[15px] sm:text-[18px]">
                Instant Access - No Sign-Up Required: Start Exploring
                Cryptocurrencies Hassle-Free.
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-start lg:justify-center p-10 w-full">
          <div className="flex flex-row justify-center items-center gap-3">
            <div className=" text-white bg-[#ff4b12] rounded-full p-2 border-white border">
              <Icon
                className="text-white text-[40px] "
                icon="wpf:securitychecked"
              />
            </div>
            <div>
              <div className="font-bold text-[22px] sm:text-[25px] text-white">
                Swift and Secure Cryptocurrency Exchange
              </div>
              <div className="max-w-[60%] text-white text-[15px] sm:text-[18px]">
                Efficient, Secure, and Lightning-Fast Cryptocurrency Exchange -
                Your Trusted Partner for Quick and Safe Transactions.
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-start xl:justify-end p-10 w-full">
          <div className="flex flex-row justify-center items-center gap-3">
            <div className="text-white bg-[#ff4b12] rounded-full p-2 border-white border">
              <Icon className="text-white text-[40px]" icon="bx:support" />
            </div>
            <div>
              <div className="font-bold text-[22px] sm:text-[25px] text-white">
                24/7 Online Customer Support
              </div>
              <div className="max-w-[60%] text-white text-[15px] sm:text-[18px]">
                Round-the-clock assistance, our dedicated team is here to help
                you anytime!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slogan;
