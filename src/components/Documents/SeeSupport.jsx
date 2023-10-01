/* eslint-disable react-hooks/exhaustive-deps */
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSupportByIdApi } from "../../handleApi/supportApi";
import ReplySeeSupport from "./ReplySeeSupport";
import Joi from "joi";
import { createChatApi } from "../../handleApi/chatApi";

const SeeSupport = () => {
  const [imgName, setImgName] = useState("");
  const [err, setErr] = useState({});
  const [reply, setReply] = useState({ response: "", file: "" });
  const [chats, setChats] = useState([]);
  const [sendMsg, setSendMsg] = useState("");
  const { id } = useParams("");

  const schema = Joi.object({
    file: Joi.any().allow("").optional(),
    response: Joi.string().min(5),
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === "file") {
      setImgName(target.files[0].name);
      const file = target.files[0];
      setReply({ ...reply, [name]: file });
    } else {
      setReply({ ...reply, [name]: value });
    }
  };

  const handleReply = async () => {
    const errors = {};
    const { error } = schema.validate(reply, { abortEarly: false });
    if (error) {
      for (let index = 0; index < error.details.length; index++) {
        errors[error.details[index].path[0]] = error.details[index].message;
      }
      return setErr(errors);
    } else {
      setErr({});
      try {
        await createChatApi(reply, chats._id);
        setSendMsg(reply.response);
      } catch (error) {
        console.log("New Error: ", error.response);
      }
    }
  };

  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await getSupportByIdApi(id);
        console.log(data.data);
        setChats(data.data);
      } catch (error) {
        console.log("New Error is ", error.response);
      }
    };
    getChats();
  }, [sendMsg]);

  return (
    <div className="min-h-screen px-4 py-10 md:p-10">
      <div className="flex flex-row justify-between items-start">
        <div className="flex flex-row justify-center items-center sm:gap-2">
          <Icon
            className="text-[#ceabab] font-bold text-[22px] ss:text-[25px]"
            icon="material-symbols:contact-support-outline"
          />
          <div className="text-[#d8d8d8] font-bold text-[16px] ss:text-[18px]">
            Support Requests
          </div>
        </div>
        <Link
          to={"/support"}
          className="text-white font-bold hover:bg-[#5d6477] bg-[#424e64] text-[10px] py-2 px-4 rounded-md"
        >
          Back
        </Link>
      </div>
      <div className="w-[100%] md:w-[90%] lg:w-[70%] py-10 my-4 bg-[#fff] rounded-md">
        <div className="flex flex-col xs:flex-row justify-start items-start xs:justify-between sm:items-center gap-2 sm:gap-0 px-3 xs:px-10 pb-2 sm:pb-0 border-b">
          <div>
            <div className="flex flex-row justify-start items-center ">
              <span className="font-bold text-[10px] ss:text-[12px] sm:text-[15px] font-mono">
                Ticket Subject:
              </span>
              <span className="font-semibold flex-1 font-serif text-[11px] ss:text-[12px] sm:text-[15px] text-[#08080899]">
                {chats?.subject}
              </span>
            </div>
            <div className="flex flex-row justify-start items-center ">
              <span className="font-bold text-[10px] ss:text-[12px] sm:text-[15px] font-mono">
                Ticket ID:
              </span>
              <span className="font-semibold font-serif text-[11px] ss:text-[12px] sm:text-[15px] text-[#05040499]">
                {chats?._id}
              </span>
            </div>
          </div>
          <div className="font-bold text-[12px] md:text-[14px] py-1 px-2 rounded-full bg-[#665050] text-white">
            {chats?.status}
          </div>
        </div>
        <div className="h-screen overflow-auto flex flex-col justify-start items-start py-4 bg-[#f5f4f4]">
          {chats?.messages?.map(({ fromAdmin, msg, createdAt }, index) => (
            <div
              key={index}
              className={`flex flex-col justify-center items-start gap-4 w-[85%] sm:w-[70%] ${
                fromAdmin ? "self-start bg-[#fff;]" : "self-end bg-[#f0ecec]"
              } p-3 px-2 xs:px-5 shadow-md shadow-[#af8989] my-5 mx-1 sm:m-5 `}
            >
              <div className="w-[100%] flex flexl-row justify-between items-center gap-1 xs:gap-3">
                <div className="flex flexl-row justify-start items-center gap-3">
                  <Icon
                    className="text-[10px] xs:text-[14px] md:text-[18px]"
                    icon="fluent-mdl2:date-time-12"
                  />
                  <div className="text-[9px] xs:text-[10px] sm:text-[12px] font-semibold">
                    {createdAt}
                  </div>
                </div>
                <div className="text-[9px] xs:text-[10px] sm:text-[12px] font-bold text-[#191942]">
                  {fromAdmin ? "Admin Message" : "My Message"}
                </div>
              </div>
              <p className="text-[10px] sm:text-[14px]">{msg}</p>
            </div>
          ))}
        </div>
        <ReplySeeSupport
          imgName={imgName}
          handleChange={handleChange}
          err={err}
        />
        <div className="flex flex-row justify-center items-center gap-3 px-2 py-5">
          <Link
            to={"/support"}
            className="text-white font-bold hover:bg-[#5d6477] bg-[#424e64] text-[10px] py-2 px-4 rounded-md"
          >
            Back
          </Link>
          <div
            onClick={handleReply}
            className="w-fit cursor-pointer text-white font-bold hover:bg-[#515979] bg-[#2d29ee] text-[10px] py-2 px-4 rounded-md"
          >
            Replay
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeSupport;
