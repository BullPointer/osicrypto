import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";
import Img from "../assets/Blog_Img/login_crypto.jpg";
import Input from "../components/utils/Input";
import { useEffect, useState } from "react";
import Joi from "joi";
import { errorSubmit } from "../components/utils/errorSubmit";
import { googleLoginApi, loginApi } from "../handleApi/accountApi";
import { gapi } from "gapi-script";

const Signin = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const redirectPath = location.state?.path || "/";

  const schema = Joi.object({
    password: Joi.string()
      .min(4)
      .max(15)
      .label("Password Field")
      // .regex(/^(?=.*[A-Z])(?=.*\d).{4,15}$/)
      .messages({
        "string.pattern.base":
          '"Password" Field must have number, Uppercase letter, and greater than 4',
      }),
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
    setIsLoading(true);
    const error = errorSubmit(schema, user);
    if (!error) {
      try {
        const response = await loginApi(user);
        const expirationTime = new Date();
        expirationTime.setHours(expirationTime.getHours() + 4);

        const dataToStore = {
          exp: expirationTime.getTime(),
          data: response.data.token,
        };

        localStorage.setItem("token", JSON.stringify(dataToStore));
        setIsLoading(false);
        navigate(redirectPath, { replace: true });
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
    setError(error);
    setIsLoading(false);
  };
  useEffect(() => {
    document.title = "Sign In";
    gapi.load("client:auth2", () => {
      gapi.client.init({
        clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        plugin_name: "chat",
        ux_mode: "popup", // or 'redirect'
        // scope: "email profile",
      });
    });
  }, []);

  const handleGoogleSuccess = async (success) => {
    // To get the clientID for, visit https://console.cloud.google.com/
    try {
      console.log("Success message for google login is ", success);
      await googleLoginApi(success.tokenId);
    } catch (error) {
      console.log("New Error ", error);
    }
  };

  const handleGoogleFailure = async (failure) => {
    // To get the clientID for, visit https://console.cloud.google.com/
    console.log("Failure message for google login is ", failure);
  };

  return (
    <div className="relative w-full min-h-screen flex flex-row justify-center items-center">
      <div className="absolute top-0 left-0 right-0 lg:sticky w-full lg:w-[40%] h-screen">
        <div className="flex flex-col justify-center items-start px-3 py-5 lg:px-5 w-[100%] mx-auto">
          <Link to={"/"}>
            <div className="bg-[#122aff] py-1 px-3 rounded-md text-[12px] font-bold text-white">
              HOME
            </div>
          </Link>
          <div className="text-[18px] lg:text-3xl py-5 font-[700] text-white">
            Welcome Back to OSICRYPTO
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-2 w-[80%] mx-auto mb-2">
          <GoogleLogin
            className="cursor-pointer"
            buttonText="Sign in with Google"
            clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
            onSuccess={handleGoogleSuccess}
            onFailure={handleGoogleFailure}
            cookiePolicy="single_host_origin"
          />
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
            <Input
              handleChange={handleChange}
              label={"Password"}
              name={"password"}
              type={"password"}
              error={error}
            />
          </div>
          <div className="w-[80%] my-3 mx-auto flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-row justify-between sm:justify-center items-center gap-5 sm:gap-2">
              <button className="bg-[#122aff] opacity-80 text-white py-1 px-4 rounded-lg font-bold text-[12px] cursor-pointer">
                {!isLoading ? (
                  " LOGIN"
                ) : (
                  <div className="w-3 h-3 border-b-2 border-b-white animate-spin rounded-full" />
                )}
              </button>
              <Link to={"/create-account"}>
                <div className="bg-[#ff4b12] opacity-80 text-white py-1 px-4 rounded-lg font-bold text-[12px]">
                  SIGN UP
                </div>
              </Link>
            </div>
            <Link
              to={"/account/reset-password"}
              className="text-sm text-red-500 cursor-pointer"
            >
              Forgot Your Password?
            </Link>
          </div>
          <div className="w-[80%] mx-auto text-white text-[10px] pb-4">
            By continuing, I agree with your
            <Link to={"/terms-and-conditions"} className="text-red-400 mx-0.5">
              Terms and Conditions
            </Link>{" "}
            and{" "}
            <Link to={"/privacy-policy"} className="text-red-400 mx-0.5">
              Privacy Policies
            </Link>
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

export default Signin;
