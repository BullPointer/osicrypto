import { Icon } from "@iconify/react";
import Footer from "../../footer/footer";
import Navbar from "../../navbar/Navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  deleteSupportByIdApi,
  getSupportsApi,
} from "../../handleApi/supportApi";
import ConfirmDelete from "../utils/ConfirmDelete";
import MessagePopup from "../utils/MessagePopup";

const Support = () => {
  const [support, setSupport] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [confirm, setConfirm] = useState({ id: null, confirm: false });

  useEffect(() => {
    const getSupports = async () => {
      try {
        const { data } = await getSupportsApi();
        console.log(data.data);
        setSupport(data.data);
      } catch (error) {
        console.log("New Error is ", error.response);
      }
    };
    getSupports();
  }, []);

  return (
    <>
      <Navbar />
      {showPopup && (
        <MessagePopup message={"Support request deleted Successfully"} />
      )}
      {confirm.confirm && (
        <ConfirmDelete
          setShowPopup={setShowPopup}
          confirm={confirm}
          setConfirm={setConfirm}
          id={confirm.id}
          deleteFunc={deleteSupportByIdApi}
          message={"Are you sure you want to delete this support ticket"}
        />
      )}
      <div className="min-h-screen p-10">
        <div className="flex flex-row justify-between items-start">
          <div className="flex flex-row justify-center items-center gap-2">
            <Icon
              className="text-[#ceabab] font-bold text-[25px]"
              icon="material-symbols:contact-support-outline"
            />
            <div className="text-[#d8d8d8] font-bold text-[18px]">
              Support Requests
            </div>
          </div>
          <Link
            to={"/support/create"}
            className="text-white hover:bg-[#5d6477] bg-[#424e64] text-[10px] py-2 px-4 rounded-md"
          >
            CREATE SUPPORT REQUEST
          </Link>
        </div>
        <div className="py-10 my-4 bg-[#fff] rounded-md">
          <div className="w-full py-2 px-4 font-bold text-[15px] bg-[#fff] shadow-md shadow-black">
            My Support Requests
          </div>
          <div className="w-full py-2 px-4 font-bold text-[15px] bg-[#fff] shadow-md shadow-black">
            <div className="max-w-fit flex flex-row justify-start items-center gap-2 border-[#555] border-b-2">
              <Icon className="text-[#000]" icon="cil:search" />
              <input
                className=" outline-none p-1"
                placeholder="Search"
                type="search"
                name=""
              />
            </div>
          </div>
          <div className="grid grid-cols-8 w-full py-2 px-4 font-bold text-[15px] bg-[#fff] shadow-md shadow-black">
            {[
              "Ticket ID",
              "Status",
              "Category",
              "Subject",
              "Priority",
              "Created Date",
              "Last Updated Date",
              "Actions",
            ].map((list, index) => (
              <div className="text-[#444] font-serif text-[14px]" key={index}>
                {list}
              </div>
            ))}
          </div>
          {support.length > 0 ? (
            <div>
              {support?.map(
                (
                  {
                    _id,
                    category,
                    status,
                    subject,
                    priority,
                    createdDate,
                    updatedDate,
                  },
                  index
                ) => (
                  <div
                    key={index}
                    className="grid grid-cols-8 w-full py-2 px-4 font-bold text-[15px] bg-[#fff] shadow-md shadow-black"
                  >
                    <div className="word-wrap text-[10px] md:text-[12px] pr-2">
                      {_id}
                    </div>
                    <div className="word-wrap text-[10px] md:text-[12px]">
                      {status}
                    </div>
                    <div className="word-wrap text-[10px] md:text-[12px]">
                      {category}
                    </div>
                    <div className="word-wrap text-[10px] md:text-[12px]">
                      {subject}
                    </div>
                    <div className="word-wrap text-[10px] md:text-[12px]">
                      {priority}
                    </div>
                    <div className="word-wrap text-[10px] md:text-[12px]">
                      {createdDate}
                    </div>
                    <div className="word-wrap text-[10px] md:text-[12px]">
                      {updatedDate}
                    </div>
                    <div className="flex flex-row justify-start items-center gap-1">
                      <Link to={`${_id}`}>
                        <Icon
                          className="text-[14px] md:text-[18px]"
                          icon="tabler:edit"
                        />
                      </Link>
                      <div
                        onClick={() =>
                          setConfirm({ ...confirm, id: _id, confirm: true })
                        }
                      >
                        <Icon
                          className="text-[14px] md:text-[18px] cursor-pointer"
                          icon="material-symbols:delete-outline"
                        />
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          ) : (
            <div className="py-10 w-full flex flex-col justify-center items-center bg-[#fff] shadow-md shadow-black">
              <Icon className="text-[100px]" icon="openmoji:office-worker" />
              <div className="text-[13px]">
                You have not created any support tickets yet
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Support;
