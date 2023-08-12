import { Link, useLocation, useNavigate } from "react-router-dom";
import Img from "../assets/Blog_Img/login_crypto.jpg";
import Input from "../components/utils/Input";
import { useState } from "react";
import Joi from "joi";
import { errorSubmit } from "../components/utils/errorSubmit";
import Country from "../components/utils/Country";

const Signup = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    fullname: "",
    country: "United States",
  });
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
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .messages({
        "string.pattern.base":
          "Email Field must have number, Uppercase letter, and greater than 4",
      }),
    fullname: Joi.string().min(4).messages({
      "string.pattern.base":
        '"Full Name" Field must have number, Uppercase letter, and greater than 4',
    }),
    country: Joi.string(),
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
    <div className="w-full h-auto flex flex-row justify-center items-center">
      <div className="w-[40%] min-h-screen">
        <div className="flex flex-col justify-center items-start p-5 w-[80%] mx-auto">
          <Link to={"/osicrypto"}>
            <div className="bg-[#122aff] py-1 px-3 rounded-md text-[12px] font-bold text-white">
              HOME
            </div>
          </Link>
          <div className="text-3xl py-3 font-[700] text-white">
            Sign Up to OSICRYPTO
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-2 w-[80%] mx-auto pb-2">
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
              label={"Full Name"}
              name={"fullname"}
              type={"text"}
              error={error}
            />
            <Input
              handleChange={handleChange}
              label={"Email Address"}
              name={"email"}
              type={"text"}
              error={error}
            />
            <Country setUser={setUser} user={user} />
            <Input
              handleChange={handleChange}
              label={"Password"}
              name={"password"}
              type={"text"}
              error={error}
            />
          </div>
          <div className="w-[80%] py-5 mx-auto flex flex-row justify-between items-center">
            <div className="flex flex-row justify-center items-center gap-2">
              <button className="bg-[#122aff] opacity-80 text-white py-1 px-4 rounded-lg font-bold text-[12px]">
                SIGN UP
              </button>
              <Link to={"/osicrypto/sign-in"}>
                <div className="bg-[#ff4b12] opacity-80 text-white py-1 px-4 rounded-lg font-bold text-[12px] cursor-pointer">
                  LOGIN
                </div>
              </Link>
            </div>
            <div className="text-sm text-red-500 cursor-pointer">
              Forgot Your Password?
            </div>
          </div>
        </form>
      </div>
      <div className="w-[60%] min-h-screen bg-blue-500">
        <img
          className="w-[100%] min-h-screen object-cover"
          src={Img}
          alt="Login Image"
        />
      </div>
    </div>
  );
};

export default Signup;
