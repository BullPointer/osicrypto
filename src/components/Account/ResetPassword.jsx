/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Img from "../../assets/Blog_Img/login_crypto.jpg";
import Input from "../../components/utils/Input";
import { useEffect, useState } from "react";
import Joi from "joi";
import { errorSubmit } from "../../components/utils/errorSubmit";
import { setNewPasswordApi } from "../../handleApi/accountApi";
import MessagePop from "../utils/MessagePop";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const [user, setUser] = useState({ password: "" });
  const [resetCred, setResetCred] = useState({ userId: "", token: "" });
  const [popData, setPopData] = useState(null);
  const [popColor, setPopColor] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleEmailVerification = async () => {
      try {
        const userId = searchParams.get("usr");
        const token = searchParams.get("token");

        if (userId && token) {
          setResetCred({ ...resetCred, userId, token });
          setPopData(null);
          setPopColor(null);
        } else {
          setPopData("Ooops! Data not fetched correctly");
          setPopColor("#eb3232");
        }
        return;
      } catch (error) {
        console.log("New Error ", error.response);
        return;
      }
    };
    handleEmailVerification();
  }, []);

  const schema = Joi.object({
    password: Joi.string().min(3),
    //  password: Joi.string()
    //   .min(4)
    //   .max(15)
    //   .label("Password Field")
    //   // .regex(/^(?=.*[A-Z])(?=.*\d).{4,15}$/)
    //   .messages({
    //     "string.pattern.base":
    //       '"Password" Field must have number, Uppercase letter, and greater than 4',
    //   }),
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    const { userId, token } = resetCred;
    e.preventDefault();
    localStorage.removeItem("token");
    setIsLoading(true);
    const error = errorSubmit(schema, user);
    if (!error) {
      try {
        const response = await setNewPasswordApi(user, userId, token);

        if (response.status === 200) {
          console.log(response);
          setPopData("Password changed Successfully!");
          setPopColor("#000");
          setIsLoading(false);
          setTimeout(() => {
            setPopData(null);
            setPopColor(null);
            navigate("/sign-in", { replace: true });
            return window.location.reload();
          }, 3000);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
    setError(error);
    setIsLoading(false);
  };

  return (
    <div className="relative w-full min-h-screen flex flex-row justify-center items-center">
      {popData && (
        <MessagePop
          message={<div style={{ color: popColor }}>{popData}</div>}
        />
      )}
      <div className="absolute top-0 left-0 right-0 lg:sticky w-full lg:w-[40%] h-screen">
        <div className="px-3 py-5">
          <Link to={"/"}>
            <div className="max-w-fit bg-[#122aff;] py-1 px-3 rounded-md text-[12px] font-bold text-white">
              HOME
            </div>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center px-5 py-5">
          <div className="text-[18px] text-[#fff] text-center">
            Add new password
          </div>
        </div>
        <form onSubmit={handleSubmit} action="" method="post">
          <div className="flex flex-col items-start justify-center gap-5">
            <Input
              handleChange={handleChange}
              label={"New password"}
              name={"password"}
              type={"password"}
              error={error}
            />
          </div>
          <div className="w-[80%] my-3 mx-auto flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-row justify-between sm:justify-center items-center gap-5 sm:gap-2">
              <button className="bg-[#122aff] opacity-80 text-white py-3 px-4 rounded-lg font-bold text-[12px] cursor-pointer">
                {!isLoading ? (
                  "Reset Now"
                ) : (
                  <div className="w-3 h-3 border-b-2 border-b-white animate-spin rounded-full" />
                )}
              </button>
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

export default ResetPassword;

// http://localhost:5153/reset-password?usr=651c0d774cbe456d58eba5d3&token=67d53c47cfc2ef250f92d36ac80773ba24e3dc21675678933c2ad77e43fccc6d
