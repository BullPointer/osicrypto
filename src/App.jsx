import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FaQ from "./pages/faq";
import Blog from "./pages/Blog";
import HowItWorks from "./pages/HowItWorks";
import HelpCenter from "./pages/HelpCenter";
import Support from "./pages/Support";
import NotFound from "./pages/NoFound";
import { useEffect } from "react";
import AddExchangeDetails from "./pages/AddExchangeDetails";
import MakeExchange from "./components/MakeExchange";
import { ProtectedRoutes } from "./utils/ProtectedRoutes";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";

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
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="osicrypto" element={<Home />} />
        <Route path="/osicrypto/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="osicrypto/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="osicrypto/faq" element={<FaQ />} />
        <Route path="osicrypto/sign-in" element={<Signin />} />
        <Route path="osicrypto/create-account" element={<Signup />} />
        <Route path="osicrypto/blog" element={<Blog />} />
        <Route path="osicrypto/how-it-works" element={<HowItWorks />} />
        <Route path="osicrypto/help" element={<HelpCenter />} />
        <Route path="osicrypto/support" element={<Support />} />
        <Route path="osicrypto/exchange" element={<AddExchangeDetails />} />

        <Route
          path="/osicrypto/exchange/x"
          element={
            <ProtectedRoutes>
              <MakeExchange />
            </ProtectedRoutes>
          }
        /> 
      </Routes>
    </>
  );
};

export default App;
