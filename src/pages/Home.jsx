/* eslint-disable react-hooks/exhaustive-deps */
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import Testimonials from "../components/Documents/Testimonials";
import ExchangeCurrency from "../components/startCurrencyX";
import StartTutorial from "../components/startTutorial";
import Footer from "../footer/footer";
import Navbar from "../navbar/Navbar";

const Home = () => {
  
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
