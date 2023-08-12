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
      <Footer />
    </>
  );
};

export default Home;
