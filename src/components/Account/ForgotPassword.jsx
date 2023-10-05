import { Link } from "react-router-dom";
import Img from "../../assets/Blog_Img/login_crypto.jpg";
import Input from "../../components/utils/Input";
import { useState } from "react";
import Joi from "joi";
import { errorSubmit } from "../../components/utils/errorSubmit";
import { requestResetPasswordApi } from "../../handleApi/accountApi";

const ForgotPassword = () => {
  const [user, setUser] = useState({ email: "" });
  const [changeMsg, setChangeMsg] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const schema = Joi.object({
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setIsLoading(true);
    const error = errorSubmit(schema, user);
    if (!error) {
      try {
        const response = await requestResetPasswordApi(user);

        if (response.status === 200) {
          console.log(response);
          setChangeMsg(true);
          setIsLoading(false);
          setError(null);
        }
      } catch (error) {
        console.log(error.response.status);
        setIsLoading(false);
        if (error.response.status === 404) {
          return setError({ email: "Email not found in our database" });
        }
      }
    }
    setError(error);
    setIsLoading(false);
  };

  return (
    <div className="relative w-full min-h-screen flex flex-row justify-center items-center">
      <div className="absolute top-0 left-0 right-0 lg:sticky w-full lg:w-[40%] h-screen">
        <div className="px-3 py-5">
          <Link to={"/"}>
            <div className="max-w-fit bg-[#122aff;] py-1 px-3 rounded-md text-[12px] font-bold text-white">
              HOME
            </div>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center px-5 py-5">
          <div className="text-[25px] text-[#3962c7] text-center">
            Forgot your password?
          </div>
          {!changeMsg ? (
            <div className="text-[18px] text-[#fff] text-center">
              No worries! Enter the email address and we will send you a
              password recovery link to reset your password.
            </div>
          ) : (
            <div className="text-[18px] text-[#fff] text-center">
              We sent a reset link to{" "}
              <span className="text-[#2932b9]">{user.email}.</span> to reset
              your password
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} action="" method="post">
          <div className="flex flex-col items-start justify-center gap-5">
            <Input
              handleChange={handleChange}
              label={"Email Address"}
              name={"email"}
              type={"text"}
              error={error}
            />
          </div>
          <div className="w-[80%] my-3 mx-auto flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-row justify-between sm:justify-center items-center gap-5 sm:gap-2">
              {!changeMsg ? (
                <button className="bg-[#122aff] opacity-80 text-white py-3 px-4 rounded-lg font-bold text-[12px] cursor-pointer">
                  {!isLoading ? (
                    " Send Reset link"
                  ) : (
                    <div className="w-3 h-3 border-b-2 border-b-white animate-spin rounded-full" />
                  )}
                </button>
              ) : (
                <button className="bg-[#122aff] opacity-80 text-white py-3 px-4 rounded-lg font-bold text-[12px] cursor-pointer">
                  {!isLoading ? (
                    "Resend Reset link"
                  ) : (
                    <div className="w-3 h-3 border-b-2 border-b-white animate-spin rounded-full" />
                  )}
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
      <div className="w-full lg:w-[60%] h-screen">
        <img
          className="w-[100%] h-[100%] object-cover"
          src={Img}
          alt="Login Image"
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
// https://www.geeksforgeeks.org/how-to-make-bubble-background-using-html5-and-css3/
// https://www.jotform.com/blog/bubbly-backgrounds-moving-backgrounds-website/
// https://rapidapi.com/blog/most-popular-api/
