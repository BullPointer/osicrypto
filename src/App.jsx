import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/footer";
import Home from "./pages/Home";
import FaQ from "./components/faq";
import Blog from "./pages/Blog";
import HowItWorks from "./pages/HowItWorks";
import HelpCenter from "./pages/HelpCenter";
import Support from "./pages/Support";
import NotFound from "./pages/NoFound";
import { useEffect } from "react";

const App = () => {
  const handleScrollTo = () =>
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.addEventListener("load", handleScrollTo);
    return () => window.removeEventListener("load", handleScrollTo);
  }, []);
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/osicrypto" element={<Home />} />
        <Route path="/osicrypto/faq" element={<FaQ />} />
        <Route path="/osicrypto/blog" element={<Blog />} />
        <Route path="/osicrypto/how-it-works" element={<HowItWorks />} />
        <Route path="/osicrypto/help" element={<HelpCenter />} />
        <Route path="/osicrypto/support" element={<Support />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
