import React, { useState } from "react";
import { mensCategorie } from "../data";

const Mens = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="w-full min-h-screen mt-[150px] lg:px-15 px-10">
      <div className="container">
        <p className="font-cookie font-semibold mb-[80px] w-full text-center text-black text-3xl capitalize tracking-wider">
          Galerie De Parfum
        </p>

        <div className="w-full grid grid-cols-[600px_1fr] gap-x-25 place-items-center">
          <div className="w-full h-[400px] border-2 rounded-2xl"></div>
          <p className="text-[29px] leading-[40px] tracking-widest">
            One of our core branch that can be found in South East Asia in
            Philippines, Thailand & Indonesia. A lots of different varities of
            Parfum of your choice.
          </p>
        </div>

        <div className="mt-[50px] grid grid-cols-2 place-items-center gap-x-25">
          {mensCategorie.map((item) => (
            <div
              key={item.id}
              className="w-full rounded-2xl grid grid-cols-2 cursor-pointer h-[400px] transition ease-in border-2"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="bg-yellow-100 h-full ">
                <img className="h-[280px]" src={item.image} alt="" />
                <p className="p-5 flex-center text-2xl">{item.title}</p>
                <p className="flex-center text-[20px]">{item.price}</p>
              </div>
              {hoveredId === item.id ? (
                <div className="bg-green-100 h-full w-full flex-col flex-center gap-10 leading-8 tracking-wide mb-[50px]">
                  <p className="mt-[20px] text-justify">{item.description}</p>
                  <p className="">{item.qoute}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mens;
