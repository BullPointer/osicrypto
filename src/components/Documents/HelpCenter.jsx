import { useEffect } from "react";
import Footer from "../../footer/footer";
import Navbar from "../../navbar/Navbar";

const HelpCenter = () => {
  useEffect(() => {
    document.title = "Help Center";
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center w-full h-screen">
        <div className="text-white text-4xl">Coming Soon!</div>
      </div>
      <Footer />
    </>
  );
};

export default HelpCenter;
