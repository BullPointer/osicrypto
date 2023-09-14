import Joi from "joi";
import { Icon } from "@iconify/react";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/footer";
import Select from "../utils/Select";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createSupportApi } from "../../handleApi/supportApi";
import MessagePopup from "../utils/MessagePopup";

const CreateSupport = () => {
  const navigate = useNavigate();
  const [imgName, setImgName] = useState("");
  const [err, setErr] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const [data, setData] = useState({
    category: "General Inquiry",
    priority: "LOW",
    subject: "",
    file: "",
    message: "",
  });

  const schema = Joi.object({
    category: Joi.string(),
    priority: Joi.string(),
    subject: Joi.string(),
    file: Joi.any().allow("").optional(),
    message: Joi.string().min(5),
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === "file") {
      setImgName(target.files[0].name);
      const file = target.files[0];
      setData({ ...data, [name]: file });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      for (let index = 0; index < error.details.length; index++) {
        errors[error.details[index].path[0]] = error.details[index].message;
      }
      return setErr(errors);
    } else {
      setErr({});
      try {
        await createSupportApi(data);
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          navigate("/support", { replace: true });
        }, 2000);
      } catch (error) {
        console.log("New Error is ", error.response);
      }
    }
  };

  return (
    <>
      <Navbar />
      {showPopup && (
        <MessagePopup message={"Support request created Successfully"} />
      )}
      <div className="min-h-screen p-3 sm:p-10">
        <div className="flex flex-row justify-between items-start pt-5 sm:pt-0">
          <div className="flex flex-row justify-center items-center gap-2">
            <Icon
              className="text-[#ceabab] font-bold text-[25px]"
              icon="material-symbols:contact-support-outline"
            />
            <div className="text-[#d8d8d8] font-bold text-[18px]">
              New Support Requests
            </div>
          </div>
        </div>
        <div className="py-5 my-4 bg-[#fff] rounded-md">
          <div className="w-full py-2 px-4 font-bold text-[15px] bg-[#fff] shadow-md shadow-black">
            Create Support Requests
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full pt-2 pb-8 px-4 font-bold text-[15px] bg-[#fff] shadow-md shadow-black"
          >
            <div className="w-[100%] md:w-[70%] flex flex-col sm:flex-row justify-start items-start gap-2 p-2">
              <Select
                handleChange={handleChange}
                label={"Support Category"}
                list={[
                  "General Inquiry",
                  "Technical Issue",
                  "Billing Issue",
                  "Improvement Idea",
                  "Feedback",
                ]}
                name="category"
                value={data.category}
              />
              <Select
                handleChange={handleChange}
                label={"Support Priority"}
                list={["LOW", "NORMAL", "HIGH", "CRITICAL"]}
                name="priority"
                value={data.priority}
              />
            </div>
            <div className="w-[100%] md:w-[70%] flex flex-col justify-start items-start p-2">
              <div className="w-full font-bold text-[12px] text-[#302d2d]">
                Subject <span className="text-red-500">*</span>
              </div>
              <input
                onChange={handleChange}
                className="w-full p-2 text-[12px] text-[#3b3939] font-normal rounded-md outline-none focus:border border-[#515979] bg-[#ececf0]"
                type="text"
                name="subject"
                id=""
              />
              {err.subject && (
                <div className="text-red-500 text-[9px]">{err.subject}</div>
              )}
            </div>
            <div className="w-[100%] md:w-[70%] flex flex-col justify-start items-start p-2">
              <div className="w-full font-bold text-[12px] text-[#302d2d]">
                Attach File{" "}
                <span className="text-[#302d]">(JPG | JPEG | PNG)</span>
              </div>
              <div className="w-full flex flex-row justify-center items-center">
                <input
                  placeholder="JPEG | PNG | Max 5MB"
                  className="w-full p-2 text-[8px] sm:text-[12px] text-[#3b3939] font-normal rounded-l-md outline-none focus:border border-[#515979] bg-[#ececf0]"
                  type="text"
                  value={imgName}
                  disabled
                />
                <input
                  title="Browse"
                  onChange={handleChange}
                  className="hidden"
                  type="file"
                  accept="image/jpeg, image/jpg, image/png"
                  name="file"
                  id="img-file-input"
                />
                <label
                  className="w-fit p-2 text-[8px] sm:text-[10px] text-white font-bold cursor-pointer rounded-r-md hover:bg-[#515979] bg-[#2d29ee]"
                  htmlFor="img-file-input"
                >
                  BROWSE
                </label>
              </div>
              {err.file && (
                <div className="text-red-500 text-[9px]">{err.file}</div>
              )}
            </div>
            <div className="w-[100%] md:w-[70%] flex flex-col justify-start items-start p-2">
              <div className="w-full font-bold text-[12px] text-[#302d2d]">
                Message <span className="text-red-500">*</span>
              </div>
              <textarea
                onChange={handleChange}
                className="w-full h-28 p-2 text-[12px] text-[#3b3939] font-normal rounded-md outline-none focus:border border-[#515979] bg-[#ececf0]"
                type="text"
                name="message"
                id=""
              />
              {err.message && (
                <div className="text-red-500 text-[9px]">{err.message}</div>
              )}
            </div>
            <div className="w-[100%] md:w-[70%] flex flex-row justify-end items-end gap-2 p-2">
              <Link
                to={"/support"}
                className="py-1 sm:py-2 px-4 text-[8px] sm:text-[10px] rounded-full bg-[#212129] text-white"
              >
                CANCEL
              </Link>
              <button
                className="py-1 sm:py-2 px-4 text-[8px] sm:text-[10px] rounded-full bg-[#2d29ee] text-white"
                type="submit"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateSupport;
