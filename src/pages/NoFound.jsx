import { useEffect } from "react";
import Footer from "../footer/footer";
import Navbar from "../navbar/Navbar";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 Not Found";
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-start w-full h-screen">
        <div className="text-white text-4xl bg-[#251717] p-10">
          Opps! Sorry, page not found...
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
