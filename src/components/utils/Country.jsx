/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import countryList from "react-select-country-list";

const Country = ({ user, setUser }) => {
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState("");

  useEffect(() => {
    setCountry(countryList().getData())
  }, []);

  const handleCountry = (ctry) => {
    setUser({...user, country: ctry});
    setOpen(false);
  };
  return (
    <div className="w-[80%] m-auto flex flex-col justify-center items-start gap-2">
      <label className="text-[16px] text-white" htmlFor="">
        {"Country"}
      </label>
      <div className="relative w-full bg-yellow-300 rounded-md">
        <div className="w-full p-2 flex flex-row justify-between items-center">
          <div className="text-black font-semibold">{user.country}</div>
          <div className="text-black" onClick={() => setOpen(true)}>
        <Icon className="text-[15px]" icon="fe:arrow-up" />
          </div>
        </div>
        {open && (
          <div className="h-40 overflow-y-scroll absolute top-0 left-0 right-0 rounded-md bg-white z-10">
            <div className="w-full p-3 flex flex-row justify-between items-center">
              <div className="w-full text-[14px]">Select Your Country</div>
              <div className="" onClick={() => setOpen(false)}>
              <Icon className="text-[15px]" icon="fe:arrow-down" />
              </div>
            </div>
            {country?.map(
              (country, index) => (
                <div
                  onClick={() => handleCountry(country.label)}
                  key={index}
                  className="w-full p-3 text-[14px] font-bold opacity-90 cursor-pointer hover:bg-[#ff4b12] hover:text-white"
                >
                  {country.label}
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Country;
