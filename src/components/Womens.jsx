import React, { useState } from "react";
import { womensCategories } from "../data";

const Mens = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="w-full min-h-screen mt-[150px] px-5 sm:px-10 lg:px-15">
      <div className="container mx-auto">
        <p className="font-cookie font-semibold mb-[80px] w-full text-center text-black text-3xl capitalize tracking-wider">
          Women's Galerie De Parfum
        </p>

        {/* Top section */}

        <div className="w-full flex-center">
          <p className="text-[20px] sm:text-[24px] w-full lg:max-w-[800px] leading-[30px] sm:leading-[40px] tracking-wide text-center">
            Offers a curated selection of women's fragrances that embody
            elegance and sophistication. Their collection features a variety of
            scents, including floral, woody, and oriental notes, catering to
            diverse preferences. Each perfume is crafted to provide a unique
            olfactory experience, combining high-quality ingredients for lasting
            impressions.​
          </p>
        </div>

        {/* Product grid */}
        <div className="mt-[50px] grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-10 xl:gap-y-0 place-items-center">
          {womensCategories.map((item) => (
            <div
              key={item.id}
              className="w-full rounded-2xl grid grid-cols-1 sm:grid-cols-2 cursor-pointer h-auto sm:h-[400px] transition-all duration-500 ease-in-out overflow-hidden"
            >
              {/* Image & basic info */}
              <div
                className="bg-white drop-shadow-2xl py-10 h-full flex-center transition-all flex-col duration-500 ease-in-out"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <img
                  className="w-[70%] rounded-2xl drop-shadow-[0_10px_15px_rgba(0,0,0,0.35)]"
                  src={item.image}
                  alt={item.productName}
                />
                <p className="font-bold tracking-wider text-black text-md mt-5">
                  {item.title}
                </p>
                <p className="font-semibold text-lg text-black">{item.price}</p>
              </div>

              {/* Hover section */}
              <div
                className={`bg-white h-full w-full transition-all duration-500 ease-in-out px-5 flex-center flex-col gap-5
                  ${
                    hoveredId === item.id
                      ? "translate-x-0 opacity-100"
                      : "translate-x-full opacity-0 pointer-events-none"
                  }
                  sm:translate-x-0 sm:opacity-100 sm:pointer-events-auto
                `}
              >
                <p className="mt-[20px] text-sm font-semibold text-center leading-[25px]">
                  {item.description}
                </p>
                <p className="text-sm text-center sm:text-md font-bold">
                  {item.qoute}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mens;
