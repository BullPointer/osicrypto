/* eslint-disable react-hooks/exhaustive-deps */
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import Testimonials from "../components/Documents/Testimonials";
import ExchangeCurrency from "../components/startCurrencyX";
import StartTutorial from "../components/startTutorial";
import Footer from "../footer/footer";
import Navbar from "../navbar/Navbar";
import Slogan from "../components/Documents/Slogan";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Osicrypto | Cryptocurrency";
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
      <Slogan />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
