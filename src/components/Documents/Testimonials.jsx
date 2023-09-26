import { useState } from "react";
import { Icon } from "@iconify/react";
import Img1 from "../../assets/Testimonials/testimonial1.jpeg";
import Img2 from "../../assets/Testimonials/testimonial2.jpg";
import Img3 from "../../assets/Testimonials/testimonial3.jpeg";

const testimonialData = [
  {
    img: Img1,
    text: (
      <p>
        Working with Osicrypto has been an absolute pleasure. Their Crypto
        exchange platform is impeccably designed and provides a seamless
        experience for buying and selling cryptocurrencies. The intuitive
        interface, advanced security measures, and efficient order execution
        demonstrate their commitment to excellence. As a CEO in the fintech
        industry, I highly recommend Osicrypto Exchange for anyone seeking a
        reliable and user-friendly solution for crypto exchange/trading.
      </p>
    ),
    name: "John Smith",
    about: "CEO, FinTech Innovations Ltd.",
  },
  {
    img: Img2,
    text: (
      <p>
        As the leader of a forward-thinking tech company, I am always on the
        lookout for innovative solutions. {"Osicrypto's"} Crypto exchange web
        application has exceeded my expectations. Their dedication to security,
        regulatory compliance, and customer satisfaction is truly commendable.
        The {"platform's"} responsiveness and real-time data updates have
        significantly enhanced our trading strategies. I applaud Osicrypto for
        setting new standards in the crypto trading industry
      </p>
    ),
    name: "Aron Johnson",
    about: "CEO, TechVanguard Solutions",
  },
  {
    img: Img3,
    text: (
      <p>
        Having closely examined the Crypto exchange landscape, I am genuinely
        impressed by {"Osicrypto's"} commitment to excellence. Their web
        application provides a sophisticated yet user-friendly interface for
        trading cryptocurrencies. The {"platform's"} robust features, coupled
        with a seamless user experience, make it a standout in the market. [Your
        Company Name] has demonstrated a deep understanding of the needs of
        modern traders, and their dedication to continuous improvement is
        evident. Highly recommended.
      </p>
    ),
    name: "Michael Anderson",
    about: "CEO, Digital Frontier Group",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="bg-[#070707] py-8 xl:py-0">
      <div className="w-full text-[22px] xs:text-[28px] sm:text-[37px] font-[550] pt-5 text-white text-center">
        Remarkable service
      </div>
      <div className="flex flex-row xl:grid xl:grid-cols-3 overflow-hidden">
        {testimonialData?.map(({ img, text, name, about }, index) => (
          <div
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            key={index}
            className="min-w-[100%] transition-transform duration-500 bg-[#070707] flex flex-row justify-center  xl:first:justify-end xl:[&:nth-child(2)]:justify-center xl:justify-start items-center py-4 xl:py-10"
          >
            <div className="h-[100%] w-[80%]  md:w-[50%] xl:w-[80%] bg-black rounded-xl shadow-md shadow-black p-7 grid grid-col-1 justify-start items-start gap-2">
              <div className="text-white text-[13px] xs:text-[16px]">
                {text}
              </div>
              <div className="flex flex-row justify-center items-center gap-2 text-white">
                <Icon
                  className="text-[#ff4b12] text-[18px]"
                  icon="fluent:star-24-filled"
                />
                <Icon
                  className="text-[#ff4b12] text-[18px]"
                  icon="fluent:star-24-filled"
                />
                <Icon
                  className="text-[#ff4b12] text-[18px]"
                  icon="fluent:star-24-filled"
                />
                <Icon
                  className="text-[#ff4b12] text-[18px]"
                  icon="fluent:star-24-filled"
                />
                <Icon
                  className="text-[#ff4b12] text-[18px]"
                  icon="fluent:star-24-filled"
                />
              </div>
              <div className="flex flex-row justify-start items-center gap-2">
                <div className="rounded-full w-[75px] h-[75px]">
                  {" "}
                  <img
                    className="w-[75px] h-[75px] rounded-full object-cover"
                    src={img}
                    alt=""
                  />
                </div>
                <div>
                  <div className="text-white text-[14px] font-bold">{name}</div>
                  <div className="text-white text-[12px]">{about}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center items-center gap-2 py-2 xl:hidden">
        {testimonialData?.map((k, index) => (
          <div
            onClick={() => setCurrentIndex(index)}
            key={index}
            className={` w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-green-500" : "bg-[#3a3838]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
