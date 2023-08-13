import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";
import LegalSidebar from "../pages/LegalSidebar";

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen flex flex-row justify-center items-center">
        <LegalSidebar />
        <div className="flex flex-col justify-start items-center gap-2 w-full min-h-screen text-white">
          <div className="w-[90%] mx-auto bg-black text-white rounded-lg mt-10">
            <div className="text-center text-[24px] py-1">
              Terms and Conditions
            </div>
          </div>
          <div className="w-[90%] mx-auto bg-black text-white rounded-lg">
            <div className="text-start p-2">
              <p>
                Welcome to Osicrypto, your trusted partner in cryptocurrency
                exchange and trading. At Osicrypto, we are committed to
                protecting your privacy and safeguarding your personal
                information. This Privacy Policy outlines our practices
                regarding the collection, usage, sharing, and protection of your
                data. By accessing or using our services, you signify your
                agreement to the terms described herein.
              </p>
              <p>
                1. The full legal name of my company is Osicrypto and my
                physical is at the United States, Florida Miami-Dade and my
                official website URL is www.osicrypto.com and the contact email
                is support@osicrypto.com 2. I collect the following personal
                information name, email, country and I collect the this
                information through user registration, transactions and through
                contact us page and I collect this information so that they
                users, account management, KYC, transaction, processing and I
                collect this information through account verification, customer
                support, marketing 3. We do not share data with third parties 4.
                we take security measures like encryption, secure sockets layer,
                firewalls, and other measures if necessary. And I handle data
                breaches by Preventative Measures e.g cybersecurity practices
                and protocols to safeguard user data and sensitive information,
                Immediate Response, Communication, Containment and Eradication,
                Investigation, Recovery and Remediation, Post-Incident Actions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
