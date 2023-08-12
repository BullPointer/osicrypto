import { Link, useLocation, useNavigate } from "react-router-dom";
import Img from "../assets/Blog_Img/login_crypto.jpg";
import Input from "../components/utils/Input";
import { useState } from "react";
import Joi from "joi";
import { errorSubmit } from "../components/utils/errorSubmit";

const Signin = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const redirectPath = location.state?.path || "/osicrypto";

  const schema = Joi.object({
    password: Joi.string()
      .min(5)
      .max(15)
      .label("Password Field")
      .regex(/^(?=.*[A-Z])(?=.*\d).{4,15}$/)
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = errorSubmit(schema, user);
    if (!error) {
      navigate(redirectPath, { replace: true });
    }
    setError(error);
  };

  return (
    <div className="relative w-full min-h-screen flex flex-row justify-center items-center">
      <div className="absolute top-0 left-0 right-0 lg:sticky w-full lg:w-[40%] h-screen">
        <div className="flex flex-col justify-center items-start px-3 py-5 lg:px-5 w-[100%] mx-auto">
          <Link to={"/osicrypto"}>
            <div className="bg-[#122aff] py-1 px-3 rounded-md text-[12px] font-bold text-white">
              HOME
            </div>
          </Link>
          <div className="text-[18px] lg:text-3xl py-5 font-[700] text-white">
            Welcome Back to OSICRYPTO
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-2 w-[80%] mx-auto mb-2">
          <img
            className="bg-white p-1 text-white rounded-md cursor-pointer"
            width="35"
            height="35"
            src="https://img.icons8.com/color/48/google-logo.png"
            alt="google-logo"
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
              type={"text"}
              error={error}
            />
          </div>
          <div className="w-[80%] my-3 mx-auto flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-row justify-between sm:justify-center items-center gap-5 sm:gap-2">
              <button className="bg-[#122aff] opacity-80 text-white py-1 px-4 rounded-lg font-bold text-[12px] cursor-pointer">
                LOGIN
              </button>
              <Link to={"/osicrypto/create-account"}>
                <div className="bg-[#ff4b12] opacity-80 text-white py-1 px-4 rounded-lg font-bold text-[12px]">
                  SIGN UP
                </div>
              </Link>
            </div>
            <div className="text-sm text-red-500 cursor-pointer">
              Forgot Your Password?
            </div>
          </div>
          <div className="w-[80%] mx-auto text-white text-[10px] pb-4">
            By continuing, I agree with your
            <span className="text-red-400">Terms and Conditions</span> and{" "}
            <span className="text-red-400">Privacy Policies</span>
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
