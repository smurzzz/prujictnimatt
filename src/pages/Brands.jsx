import React from "react";
import { Branding } from "../data";
import Categories from "../components/Categories";
import { Outlet } from "react-router-dom";

const Brands = () => {
  return (
    <section
      id="brands"
      className="w-full min-h-screen mt-[150px] lg:px-15 px-10"
    >
      <div className="container flex-center lg:px-15 px-10">
        <div className="w-full">
          <p className="font-semibold mb-[80px] w-full text-center text-black text-3xl font-cookie  capitalize tracking-wider">
            Brands that we have
          </p>
          <div className="w-full flex-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-25 w-[1290px]">
              {Branding.map((item) => (
                <div
                  key={item.id}
                  className="drop-shadow-2xl flex-center border-2 bg-white rounded-4xl w-full grid place-self-center h-[500px] transform transition-all scale-110 hover:scale-115"
                >
                  <img
                    src={item.images}
                    alt="images"
                    className="w-[50%] rounded-4xl "
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Categories />
    </section>
  );
};

export default Brands;
