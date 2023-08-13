import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";
import LegalSidebar from "../pages/LegalSidebar";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className={`w-full min-h-screen flex flex-col lg:flex-row justify-center items-start`}>
        <LegalSidebar />
        <div className="flex flex-col justify-start items-center gap-2 w-full min-h-screen mb-2 text-white">
          <div className="w-full lg:w-[90%] mx-auto bg-black text-white lg:rounded-lg mt-10">
            <div className="text-center text-[24px] py-1">
              Privacy and Policy
            </div>
          </div>
          <div className="w-full lg:w-[90%] mx-auto bg-black text-white lg:rounded-lg p-4 lg:p-2">
            <div className="text-start">
              <p>
                At Osicrypto, we are committed to protecting your privacy and
                safeguarding your personal information. This Privacy Policy
                outlines our practices regarding the collection, usage, sharing,
                and protection of your data. By accessing or using our services,
                you signify your agreement to the terms described herein.
              </p>
              <div>
                <p className="text-[18px] font-bold py-2">
                  2. Company Information
                </p>
                <div className="flex flex-col items-start justify-center gap-2">
                  <p className="pl-10">
                    Company Name:{" "}
                    <span className="text-green-500">Osicrypto</span>
                  </p>
                  <p className="pl-10">
                    Website: <span>www.osicrypto.com</span>
                  </p>
                  <p className="pl-10">
                    Contact Email: <span>contact@osicrypto.com</span>
                  </p>
                  <p className="pl-10">
                    Physical Address: <span>[Your Address]</span>
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[18px] font-bold py-2">
                  3. Information We Collect
                </p>
                <p className="pl-10">
                  We collect a variety of information to enhance your user
                  experience and ensure compliance with applicable regulations.
                  The types of information we collect include:
                </p>
                <div className="flex flex-col items-start justify-center gap-2">
                  <p className={`pl-10  gap-1`}>
                    <span className="font-semibold text-[15px] text-blue-300">
                      User Registration Information:
                    </span>{" "}
                    The service you choose to use determines how we may collect
                    the following types of information: e-mail, transaction
                    logs, data collected via cookies and similar technologies.
                  </p>
                  <p className={`pl-10  gap-1`}>
                    <span className="font-semibold text-[15px] text-blue-300">
                      Transaction Information:
                    </span>{" "}
                    Details of transactions conducted on our platform, including
                    timestamps, amounts, and counterparties.
                  </p>
                  <p className={`pl-10 gap-1`}>
                    <span className="font-semibold text-[15px] text-blue-300">
                      Communication Information:
                    </span>{" "}
                    Any information you provide when communicating with our
                    customer support or through other channels.
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[18px] font-bold py-2">
                  4. How We Collect Information
                </p>
                <p className="pl-10">
                  We gather data through the following methods:
                </p>
                <div className="flex flex-col items-start justify-center gap-2">
                  <p className={`pl-10  gap-1`}>
                    <span className="font-semibold text-[15px] text-blue-300">
                      User Registration:
                    </span>{" "}
                    Information provided during the account creation process.
                  </p>
                  <p className={`pl-10  gap-1`}>
                    <span className="font-semibold text-[15px] text-blue-300">
                      Transaction Activities:
                    </span>{" "}
                    Data generated from your trading and transactional
                    activities on our platform.
                  </p>
                  <p className={`pl-10 gap-1`}>
                    <span className="font-semibold text-[15px] text-blue-300">
                      Communication Channels:
                    </span>{" "}
                    Information you voluntarily share when contacting our
                    customer support team or reaching out through other means.
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[18px] font-bold py-2">
                  5. Purpose of Data Collection
                </p>
                <p className="pl-10">
                  We utilize the collected information to help us with the
                  analysis of the visits to our services and helps us to deliver
                  a better product, facilitate the creation and maintenance of
                  user accounts to ensure a seamless experience, verifying user
                  identities in accordance with regulatory requirement, execute
                  trades and managing conversions between cryptocurrencies and
                  fiat currencies, address inquiries, providing assistance, and
                  resolving technical issues, send promotional offers, updates,
                  and relevant information based on your preferences and
                  consent.
                </p>
              </div>
              <div>
                <p className="text-[18px] font-bold py-2">
                  6. Third-Party Sharing
                </p>
                <p className="pl-10">
                  Your personal information remains confidential and is not
                  shared with third parties, except under the circumstances
                  required by law or when necessary to enhance your experience
                  on our platform.
                </p>
                <p className="pl-10 mt-2">
                  We do not transfer user data outside of the country of
                  residence without your explicit consent.
                </p>
              </div>
              <div>
                <p className="text-[18px] font-bold py-2">
                  7. Security Measures
                </p>
                <p className="pl-10">
                  We have implemented robust security measures to safeguard your
                  data, including:
                </p>
                <div className="flex flex-col items-start justify-center gap-2">
                  <p className={`pl-10  gap-1`}>
                    <span className="font-semibold text-[15px] text-blue-300">
                      Encryption:
                    </span>{" "}
                    Data is encrypted during transmission and storage.
                  </p>
                  <p className={`pl-10  gap-1`}>
                    <span className="font-semibold text-[15px] text-blue-300">
                      Secure Sockets Layer (SSL):
                    </span>{" "}
                    Ensuring secure communication between your device and our
                    platform.
                  </p>
                  <p className={`pl-10 gap-1`}>
                    <span className="font-semibold text-[15px] text-blue-300">
                      Firewalls:
                    </span>{" "}
                    Employing industry best practices to prevent and respond to
                    potential data breaches.
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[18px] font-bold py-2">
                  8. Cookies and Tracking
                </p>
                <p className="pl-10">
                  We use cookies and similar technologies to enhance your user
                  experience and gather analytics. These technologies help us
                  better understand your interactions with our platform and
                  enable us to deliver a tailored experience.
                </p>
                <p className="pl-10 pt-2">
                  User has the right to refuse cookies or limit their use. In
                  this case, we will use only those cookies that are necessary
                  for the operation of the website (technical and session
                  cookies). The user also has the right to delete cookies from
                  the website in the settings of his browser.
                </p>
              </div>
            </div>
            <div>
              <p className="text-[18px] font-bold py-2">9. User Rights</p>
              <p className="pl-10">You have the right to:</p>
              <div className="flex flex-col items-start justify-center gap-2">
                <p className={`pl-10  gap-1`}>
                  <span className="font-semibold text-[15px] text-blue-300">
                    Access and Modify:
                  </span>{" "}
                  Access and modify your personal information stored in your
                  account profile
                </p>
                <p className={`pl-10  gap-1`}>
                  <span className="font-semibold text-[15px] text-blue-300">
                    Withdraw Consent:
                  </span>{" "}
                  Withdraw your previously granted consent for data processing.
                </p>
                <p className={`pl-10 gap-1`}>
                  <span className="font-semibold text-[15px] text-blue-300">
                    Delete Account:
                  </span>{" "}
                  Delete your account and associated data from our platform.
                </p>
              </div>
            </div>
            <div>
              <p className="text-[18px] font-bold py-2">
                10. Legal Basis for Data Processing
              </p>
              <p className="pl-10">We process your data based on:</p>
              <div className="flex flex-col items-start justify-center gap-2">
                <p className={`pl-10  gap-1`}>
                  <span className="font-semibold text-[15px] text-blue-300">
                    Consent:
                  </span>{" "}
                  When you explicitly provide consent for specific data
                  processing activities.
                </p>
                <p className={`pl-10  gap-1`}>
                  <span className="font-semibold text-[15px] text-blue-300">
                    Contractual Obligations:
                  </span>{" "}
                  To fulfill our contractual commitments to you.
                </p>
                <p className={`pl-10 gap-1`}>
                  <span className="font-semibold text-[15px] text-blue-300">
                    Legal Obligations:
                  </span>{" "}
                  To comply with relevant legal and regulatory requirements.
                </p>
              </div>
            </div>
            <div>
              <p className="text-[18px] font-bold py-2">11. Retention Period</p>
              <p className="pl-10">
                Some of your data will be retained for the duration of your
                usage of our platform or as required by applicable laws. Session
                data, used for security purposes, is stored temporarily.
              </p>
            </div>
            <div>
              <p className="text-[18px] font-bold py-2">
                12. Children{"'"}s Privacy
              </p>
              <p className="pl-10">
                Osicrypto is not intended for users under the age of 16.
              </p>
            </div>
            <div>
              <p className="text-[18px] font-bold py-2">
                13. Updates and Communication
              </p>
              <p className="pl-10">
                We will communicate any material changes to this Privacy Policy
                via email and provide an updated version on our website.
              </p>
            </div>
            <div className="p-2">
              <p className="pt-2">
                We are committed to upholding compliance with relevant data
                protection laws, including but not limited to GDPR and CCPA.
              </p>
              <p className="pt-2">
                Your use of Osicrypto services indicates your acknowledgment and
                acceptance of this Privacy Policy. If you have any questions,
                require clarification, or seek additional information, please do
                not hesitate to reach out to us through the provided
                communication channels.
              </p>
              <p className="pt-2">
                For any privacy-related inquiries or concerns, please don{"'"}t
                hesitate to contact our dedicated Privacy Team by{" "}
                <Link className="text-blue-400 underline" to={"contact-us"}>
                  clicking here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
