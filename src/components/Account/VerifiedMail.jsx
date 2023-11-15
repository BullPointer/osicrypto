/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { verifyEmailApi } from "../../handleApi/accountApi";

const VerifiedMail = () => {
  const [searchParams] = useSearchParams();
  useEffect(() => {
    document.title = "Email Verification";
    const handleEmailVerification = async () => {
      try {
        const userId = searchParams.get("usr");
        const token = searchParams.get("token");

        const response = await verifyEmailApi(userId, token);
        console.log(response);
        if (response.status === 200) return;
      } catch (error) {
        console.log("New Error ", error.response);
        return;
      }
    };
    handleEmailVerification();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-auto">
      <div className="text-[45px] text-[#3962c7] text-center">
        Congratulations!
      </div>
      <div className="text-[25px] text-[#fff] text-center">
        Your email has been verified!
      </div>
      <div className="text-[22px] text-[#fff] text-center">
        You can close this page
      </div>
      <a
        className="text-[18px] text-[#8a383f] text-center border-[#8a383f] hover:border-b-2"
        href="http://osicrypto.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        click to visit site?
      </a>
    </div>
  );
};
export default VerifiedMail;
