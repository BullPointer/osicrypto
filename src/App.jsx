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
import BlogContainer from "./components/Blogs/BlogContainer";
import BlogListing from "./components/Blogs/BlogListing";

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
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route
          path="terms-and-conditions"
          element={<TermsAndConditions />}
        />
        <Route path="faq" element={<FaQ />} />
        <Route path="sign-in" element={<Signin />} />
        <Route path="create-account" element={<Signup />} />
        <Route path="blog" element={<Blog />}>
          <Route path="" element={<BlogListing />} />
          <Route path="category/:path" element={<BlogListing />} />
          <Route path=":id" element={<BlogContainer />} />
        </Route>
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="help" element={<HelpCenter />} />
        <Route path="support" element={<Support />} />
        <Route path="exchange" element={<AddExchangeDetails />} />

        <Route
          path="/exchange/x"
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
