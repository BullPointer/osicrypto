import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FaQ from "./pages/faq";
import Blog from "./pages/Blog";
import HowItWorks from "./pages/HowItWorks";
import HelpCenter from "./components/Documents/HelpCenter";
import Support from "./components/Documents/Support";
import NotFound from "./pages/NoFound";
import { useEffect } from "react";
import AddExchangeDetails from "./pages/AddExchangeDetails";
import MakeExchange from "./components/MakeExchange";
import { ProtectedRoutes } from "./utils/ProtectedRoutes";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PrivacyPolicy from "./components/Documents/PrivacyPolicy";
import TermsAndConditions from "./components/Documents/TermsAndConditions";
import BlogContainer from "./components/Blogs/BlogContainer";
import BlogListing from "./components/Blogs/BlogListing";
import CreateSupport from "./components/Documents/CreateSupport";
import SeeSupport from "./components/Documents/SeeSupport";
import { RequireAuth, RequireNotAuthenticated } from "./utils/RequireAuth";
import VerifiedMail from "./components/Account/VerifiedMail";
import ForgotPassword from "./components/Account/ForgotPassword";
import ResetPassword from "./components/Account/ResetPassword";

const App = () => {
  const handleScrollTo = () =>
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  useEffect(() => {
    // 👇️ scroll to top on page loaded
    window.addEventListener("load", handleScrollTo);
    return () => window.removeEventListener("load", handleScrollTo);
  }, []);

  return (
    <>
      <RequireAuth />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="not-found" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="faq" element={<FaQ />} />
        <Route path="user" element={<VerifiedMail />} />
        <Route
          path="reset-password"
          element={
            <RequireNotAuthenticated>
              <ResetPassword />
            </RequireNotAuthenticated>
          }
        />
        <Route
          path="account/reset-password"
          element={
            <RequireNotAuthenticated>
              <ForgotPassword />
            </RequireNotAuthenticated>
          }
        />
        <Route
          path="sign-in"
          element={
            <RequireNotAuthenticated>
              <Signin />
            </RequireNotAuthenticated>
          }
        />
        <Route
          path="create-account"
          element={
            <RequireNotAuthenticated>
              <Signup />
            </RequireNotAuthenticated>
          }
        />
        <Route path="blog" element={<Blog />}>
          <Route index element={<BlogListing />} />
          <Route path="category/:path" element={<BlogListing />} />
          <Route path=":id" element={<BlogContainer />} />
        </Route>
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="help" element={<HelpCenter />} />
        <Route
          path="support"
          element={
            <RequireAuth>
              <Support />
            </RequireAuth>
          }
        />
        <Route
          path="support/:id"
          element={
            <RequireAuth>
              <SeeSupport />
            </RequireAuth>
          }
        />
        <Route
          path="support/create"
          element={
            <RequireAuth>
              <CreateSupport />
            </RequireAuth>
          }
        />
        <Route path="exchange" element={<AddExchangeDetails />} />
        <Route path="exchange/:currency" element={<AddExchangeDetails />} />

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
