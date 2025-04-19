import { useState } from "react";
import { bestSelling } from "../data";
import { FaHeart } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const Mens = () => {
  const [products, setProducts] = useState(bestSelling);

  const toggleHeart = (id) => {
    setProducts((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, liked: !item.liked } : item
      )
    );
  };

  return (
    <section className="container  lg:px-15 px-10">
      <p className="font-semibold mb-[80px] text-black font-cookie mt-[150px] text-3xl capitalize tracking-widest text-center">
        Best Selling products
      </p>

      <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 place-items-center lg:gap-x-20 md:gap-x-15 gap-x-10 xl:gap-x-25 gap-y-10 my-5 drop-shadow-2xl">
        {products.map((item) => (
          <>
            <div key={item.id} className="w-full flex items-center flex-col">
              <div className="w-[250px] md:w-full h-[250px] relative rounded-lg bg-white flex-center transition-transform duration-300 transform hover:scale-110 cursor-pointer">
                <img
                  className="w-[70%] drop-shadow-[0_10px_15px_rgba(0,0,0,0.35)]"
                  src={item.image}
                  alt={item.productName}
                />

                <div
                  onClick={() => toggleHeart(item.id)}
                  className="absolute top-5 rounded-full bg-white p-4 drop-shadow-2xl right-5"
                >
                  {item.liked ? (
                    <FaHeart className="text-xl text-red-500 cursor-pointer transform transition-all duration-300 ease-in-out scale-125 hover:scale-150" />
                  ) : (
                    <item.icon className="text-xl cursor-pointer transform transition-all duration-300 ease-in-out scale-125 hover:scale-150" />
                  )}
                </div>
              </div>
              <div className="mt-5 relative text-center w-[250px] md:w-full h-[180px]">
                <p className="font-bold tracking-wider text-black text-md">
                  {item.productName}
                </p>
                <p className="text-sm text-black mt-1">{item.description}</p>

                <div className="mt-2 w-full flex-center space-x-1 text-3xl">
                  {Array.from({ length: item.ratings }, (_, index) => (
                    <CiStar key={index} className="text-black" />
                  ))}
                </div>
                <div className="flex-between w-full mt-3">
                  <p className="font-semibold text-lg text-black">
                    ${item.price}
                  </p>
                  <button className="w-[100px] cursor-pointer py-2 font-semibold tracking-wide bg-white rounded-full border-2 border-black text-black text-sm">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Mens;
