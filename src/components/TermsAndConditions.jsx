import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";
import LegalSidebar from "../pages/LegalSidebar";
import { useEffect, useRef, useState } from "react";

const TermsAndConditions = () => {
  const [isFixed, setIsFixed] = useState(false);
  const leftScrollDivRef = useRef(null);
  const rightScrollDivRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const leftScrollDiv = leftScrollDivRef.current;
      const rightScrollDiv = rightScrollDivRef.current;
      if (leftScrollDiv && rightScrollDiv && window.innerWidth >= 1024) {
        const rightRect = leftScrollDiv.getBoundingClientRect();
        if (rightRect.top < 0) {
          setIsFixed(true);
        }
        if (rightRect.top > 0) {
          setIsFixed(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Navbar />
      <div
        className={`w-full min-h-screen flex flex-col lg:flex-row justify-center items-start`}
      >
        <LegalSidebar leftScrollDivRef={leftScrollDivRef} isFixed={isFixed} />
        <div
          ref={rightScrollDivRef}
          className="flex flex-col justify-start items-center gap-2 w-full min-h-screen mb-2 text-white"
        >
          <div className="w-full lg:w-[90%] mx-auto bg-black text-white lg:rounded-lg mt-10">
            <div className="text-center text-[24px] py-1">
              Terms and Conditions
            </div>
          </div>
          <div className="w-full lg:w-[90%] mx-auto bg-black text-white lg:rounded-lg p-4 lg:p-4">
            <div className="flex flex-col justify-start items-start gap-2 text-start">
              <p>
                At Osicrypto, we are committed to protecting your privacy and
                safeguarding your personal information. This Privacy Policy
                outlines our practices regarding the collection, usage, sharing,
                and protection of your data. By accessing or using our services,
                you signify your agreement to the terms described herein.
              </p>

              <p className="">
                These Terms and Conditions (referred to as the {'"Terms"'})
                establish the relationship with You{' ("You")'} as you engage
                with our website and/or make a purchase. If You disagree with
                these Terms, please refrain from accessing or using the website.
                If these Terms are seen as an offer, acceptance is specifically
                limited to these Terms.
              </p>
              <p>
                We hold the right to modify these Terms at any time without
                prior notice, so please check them regularly. Your ongoing use
                of or access to the website indicates acceptance of any
                modifications we may make to these Terms from time to time,
                without prior notification.
              </p>
              <p>
                By using the website, You agree that electronic communication is
                the exclusive method of communication under these Terms and your
                use of the website.
              </p>
              <div>
                <p className="text-[18px] text-blue-500">
                  Users Responsibilities
                </p>
                <p>
                  Upon agreeing to these Terms, You affirm that: (a) You are at
                  least 18 years of age; and (b) any products You purchase will
                  not be employed in any illegal or unauthorized manner in any
                  jurisdiction worldwide; and (c) You are capable of covering
                  any expenses associated with accessing and using the website.
                  Violation of any of these statements by You may result in
                  immediate termination of services and access to the site.
                </p>
              </div>
              <p>
                The use of the website or its content is prohibited: (a) for
                unlawful purposes; (b) to encourage others to participate in
                illegal activities; (c) to violate international, federal,
                provincial, or state regulations, rules, laws, or local
                ordinances; (d) to infringe upon our intellectual property
                rights or the rights of others; (e) to harass, harm, defame,
                slander, intimidate, or discriminate based on factors such as
                gender, sexual orientation, religion, ethnicity, race, age,
                national origin, or disability; (f) to submit false or
                misleading information; (g) to transmit viruses or other
                malicious code that could affect the functionality or operation
                of the services or any related websites; (h) to collect personal
                information from others; (i) to engage in spam, phishing,
                pretext, spidering, crawling, or scraping; (j) for obscene or
                immoral purposes; or (k) to interfere with or bypass the
                security features of the service or any related website.
                Violation of these prohibitions may lead to termination of your
                access to the website.
              </p>

              <p>
                You commit to providing current, accurate, and complete purchase
                and account information for all transactions made on our
                website. You agree to promptly update your information,
                including email address and other pertinent details, to
                facilitate the completion of transactions and communication with
                you.
              </p>
              <div>
                <p className="text-[18px] text-blue-500">
                  About Product/Service
                </p>
                <p>
                  We strive for accuracy, but we do not guarantee that product
                  descriptions or other content on the website is precise,
                  complete, reliable, current, or free of errors. Relying on
                  material on this website is at your own risk. We have the
                  right to modify the contents of this website at any time,
                  without the obligation to update any information. We also
                  reserve the right to limit quantities of products or services
                  we offer and to discontinue any product at any time. We may
                  change pricing for products listed on this website at any time
                  without prior notice. We shall not be liable to You or any
                  third party for changes in pricing, suspension, or
                  discontinuation of access to the website or services.
                </p>
              </div>
              <p>
                We reserve the right to refuse service to anyone for any reason
                at any time. We may, at our sole discretion, limit or cancel
                quantities purchased per person, per household, or per order. We
                also reserve the right to limit or prohibit orders that appear
                to be placed by dealers, resellers, or distributors. While we
                have taken steps to ensure continuity and security of the
                Services, we cannot fully anticipate and mitigate legal,
                technological, and other risks, including force majeure events,
                viruses, hacker attacks, system instability, flaws in
                third-party services, government actions, etc. These risks could
                result in service interruptions, data loss, and other losses.
              </p>
              <p>
                We maintain all rights, title, and interest, along with related
                intellectual property rights, to the tokens produced by us. You
                are granted a limited, revocable, non-transferable license to
                use the token, and you acknowledge that you do not own them.
              </p>
              <p>
                We may manage, regulate, control, modify, or discontinue
                available tokens and goods purchasable with tokens at any time,
                without notice. We hold no liability to you or any third party
                for exercising these rights.
              </p>

              <p>
                The token or its value cannot be exchanged for real money
                (traditional currency, any other open digital currency), goods,
                items, or services of monetary value, except as stated here.
                Token transfer is prohibited except where expressly authorized
                here. You shall not sell, redeem, or otherwise transfer tokens
                to any person, entity, another website user, or third party
                without express authorization. Token value and availability are
                subject to change without notice. The token is not a means of
                exchange or payment.
              </p>
              <div>
                <p className="text-[18px] text-blue-500">
                  Copyright Protection
                </p>
                <p>
                  All content provided through the website, such as text,
                  graphics, logos, images, audio clips, digital downloads, data
                  compilations, and software, is our property and protected by
                  international copyright laws. The compilation of content on
                  the website is our exclusive property, also protected by
                  international copyright laws.
                </p>
              </div>
              <div>
                <p className="text-[18px] text-blue-500">Return Policy</p>
                <p>
                  Please consult our customer support team for information
                  regarding our return policy. support@osicrypto.com
                </p>
              </div>
              <div>
                <p>Risk of Loss</p>
                <p>
                  Purchases of physical items from the website are subject to a
                  shipment contract. This implies that the risk of loss and
                  title for such items passes to You upon our delivery to the
                  carrier.
                </p>
              </div>
              <div>
                <p className="text-[18px] text-blue-500">Users Content</p>
                <p>
                  You may post reviews, comments, and other content, as long as
                  it is not illegal, obscene, threatening, defamatory, invasive
                  of privacy, infringing on intellectual property rights
                  (including publicity rights), or otherwise harmful to third
                  parties or objectionable. You may not use a false email
                  address, impersonate any person or entity, or otherwise
                  mislead. While we have the right to remove or edit such
                  content, we do not regularly review posted content. You grant
                  us a non-exclusive, royalty-free, perpetual, irrevocable, and
                  fully sublicensable right to use, reproduce, modify, adapt,
                  publish, perform, translate, create derivative works from,
                  distribute, and display such content worldwide in any media.
                </p>
              </div>
              <p>
                For information regarding the submission of personal information
                through the website, please refer to our Privacy Policy.
              </p>
              <div>
                <p className="text-[18px] text-blue-500">Disclaimers</p>
                <p>
                  THE SERVICES AND ALL INFORMATION, CONTENT, MATERIALS, AND
                  PRODUCTS INCLUDED OR OTHERWISE MADE AVAILABLE THROUGH THE
                  WEBSITE ARE{" "}
                  {'PROVIDED "AS IS" AND "AS AVAILABLE." WE MAKE NO'}
                  REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED,
                  REGARDING THE OPERATION OF THE SERVICES, INFORMATION, CONTENT,
                  MATERIALS. WE MAKE NO WARRANTIES AND {"WE'RE"} NOT LIABLE FOR
                  DAMAGES.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
