import parser from "html-react-parser";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";
import LegalSidebar from "../pages/LegalSidebar";
import { useEffect, useRef, useState } from "react";
import { getTermAndCondition } from "../handleApi/documentApi";

const TermsAndConditions = () => {
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
        const { data } = await getTermAndCondition();
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
        className={`w-full min-h-screen flex flex-col lg:flex-row justify-center items-start`}
      >
        <LegalSidebar leftScrollDivRef={leftScrollDivRef} isFixed={isFixed} />
        <div
          ref={rightScrollDivRef}
          className="bg-white flex flex-col justify-start items-center gap-2 w-full min-h-screen mb-2 text-white"
        >
          <div className="prose w-full lg:w-[90%] mx-auto  text-[#222] lg:rounded-lg mt-10">
            <div className="text-center text-[24px] py-1">
              Terms and Conditions
            </div>
          </div>
          <div className="w-full lg:w-[90%] mx-auto  text-black lg:rounded-lg p-4 lg:p-4">
            <div className="prose max-w-full flex flex-col justify-start items-start gap-2 text-start">
              {parser(data)}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
