import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import ReactGa from "react-ga";
import Testimonials from "../components/Documents/Testimonials";
import ExchangeCurrency from "../components/startCurrencyX";
import StartTutorial from "../components/startTutorial";
import Footer from "../footer/footer";
import Navbar from "../navbar/Navbar";
import { useEffect } from "react";

const Home = () => {
  const measurementId = import.meta.env.VITE_TAWKTO_GOOGLE_ANALYTICS_ID;
  ReactGa.initialize(measurementId);
  useEffect(() => {
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <Navbar />
      <StartTutorial />
      <TawkMessengerReact
        propertyId={import.meta.env.VITE_TAWKTO_PROPERTY_ID}
        widgetId={import.meta.env.VITE_TAWKTO_WIDGET_ID}
      />
      <ExchangeCurrency />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
