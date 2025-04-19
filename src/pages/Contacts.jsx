import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Contacts = () => {
  return (
    <div id="contacts" className="min-h-screen w-full mt-[150px]">
      <div className="container flex-center">
        <div className="w-full">
          <p className="font-semibold mb-[80px] w-full text-center text-black text-3xl font-cookie  capitalize tracking-wider">
            Contacts
          </p>
          <div className="mt-5 w-full h-[700px] rounded-xl grid grid-cols-2 ">
            <div className="bg-white h-full w-full rounded-2xl drop-shadow-2xl p-10">
              <div className="w-full flex justify-center flex-col items-center gap-3 mb-10">
                <p className="font-semibold text-black text-3xl font-cookie  capitalize tracking-wider">
                  Get in touch
                </p>
                <p className="text-sm">
                  We are here for your! How can we help?
                </p>
              </div>
              <div className="grid grid-cols-2 gap-x-20 mb-10">
                <div className="">
                  <label className="font-semibold tracking-wide" htmlFor="name">
                    Enter your full name
                  </label>
                  <div className="border-2 mt-2 w-full h-[55px] rounded-sm">
                    <input
                      id="phone-number"
                      type="text"
                      placeholder="Enter your full name"
                      className="px-5 rounded-sm w-full h-full font-semibold"
                    />
                  </div>
                </div>
                <div className="">
                  <label className="font-semibold tracking-wide" htmlFor="name">
                    Enter your username
                  </label>
                  <div className="border-2 mt-2 w-full h-[55px] rounded-sm">
                    <input
                      id="phone-number"
                      type="number"
                      placeholder="Enter your username"
                      className="px-5 rounded-sm w-full h-full font-semibold"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="font-semibold tracking-wide" htmlFor="name">
                  Enter your email
                </label>
                <div className="border-2 mt-2 w-full h-[55px] rounded-sm">
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your email account"
                    className="px-5 rounded-sm w-full h-full font-semibold"
                  />
                </div>
              </div>
              <div className="mt-10">
                <label className="font-semibold tracking-wide" htmlFor="name">
                  Enter your phone number
                </label>
                <div className="border-2 mt-2 w-full h-[55px] rounded-sm">
                  <input
                    id="phone-number"
                    type="number"
                    placeholder="Enter your phone number"
                    className="px-5 rounded-sm w-full h-full font-semibold"
                  />
                </div>
              </div>
              <div className="mt-20 border-2 w-full h-[55px]"></div>
            </div>
            <div className="w-full h-[700px]">
              <div className="w-full flex-center">
                <div className="w-[65%]">
                  <div className="border-2 w-full h-[400px] rounded-4xl"></div>
                </div>
              </div>
              <div className="mt-5 flex-center">
                <div className="w-full flex-center flex-col">
                  <div className="flex gap-3 items-center font-semibold">
                    <IoLocationSharp className="text-2xl" />
                    <p className="font-semibold tracking-wide">
                      123 Parola St. Cainta
                    </p>
                  </div>
                  <div className="flex gap-3 items-center font-semibold mt-5">
                    <BsFillTelephoneFill className="text-2xl" />
                    <p className="font-semibold tracking-wide">+123-456-789</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
