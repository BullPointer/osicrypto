import Testimonials from "../components/Testimonials";
import ExchangeCurrency from "../components/startCurrencyX";
import StartTutorial from "../components/startTutorial";
import Footer from "../footer/footer";
import Navbar from "../navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <StartTutorial />
      <ExchangeCurrency />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
