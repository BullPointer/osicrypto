import { useEffect } from "react";
import Footer from "../footer/footer";
import Navbar from "../navbar/Navbar";

const HowItWorks = () => {
  useEffect(() => {
    document.title = "How It Works";
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center w-full h-screen">
        <div className="text-white text-4xl">Coming very Soon!</div>
      </div>
      <Footer />
    </>
  );
};

export default HowItWorks;
