import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";
import LegalSidebar from "../pages/LegalSidebar";
import { useEffect, useRef, useState } from "react";
import parser from "html-react-parser";
import { getPrivacyPolicy } from "../handleApi/documentApi";

const PrivacyPolicy = () => {
  const [data, setData] = useState("");
  const [isFixed, setIsFixed] = useState(false);
  const leftScrollDivRef = useRef(null);
  const rightScrollDivRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const leftScrollDiv = leftScrollDivRef.current;
      const rightScrollDiv = rightScrollDivRef.current;
      if (leftScrollDiv && rightScrollDiv && window.innerWidth >= 1024) {
        const rightRect = leftScrollDiv.getBoundingClientRect();
        if (rightRect.top < 0) {
          setIsFixed(true);
        }
        if (rightRect.top > 0) {
          setIsFixed(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getPrivacyPolicy();
        setData(data.data[0].notes);
      } catch (error) {
        setData("");
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <div
        className={`w-full bg-white min-h-screen flex flex-col lg:flex-row justify-center items-start`}
      >
        <LegalSidebar leftScrollDivRef={leftScrollDivRef} isFixed={isFixed} />
        <div
          ref={rightScrollDivRef}
          className="flex flex-col justify-start items-center gap-2 w-[90%] min-h-screen mb-4 text-white"
        >
          <div className="prose max-w-full text-[#222] lg:rounded-lg mt-10">
            <div className="text-center text-[24px] py-1">
              Privacy and Policy
            </div>
          </div>
          <div className="prose max-w-full bg-white text-black lg:rounded-lg p-4 lg:p-5">
            {parser(data)}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
