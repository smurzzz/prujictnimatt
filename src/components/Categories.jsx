import React from "react";
import { CategoriesLinks } from "../data";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="container flex-center min-h-screen">
      <div className="w-full mt-[200px]">
        <p className="font-semibold mb-[80px] w-full text-center text-black text-3xl font-cookie  capitalize tracking-wider">
          Categories
        </p>
        <div className="w-full flex-center px-10 lg:px-0">
          <div className="grid grd-cols-1 lg:grid-cols-2 place-items-center gap-25 w-[1290px] opacity-[.5] hover:opacity-[100]">
            {CategoriesLinks.map((item) => (
              <Link
                to={item.url}
                key={item.id}
                className="border-2 flex-center drop-shadow-2xl rounded-4xl w-full grod place-self-center h-[500px] scale-110 hover:scale-115 transform transition"
              >
                <p className=" text-center text-black text-3xl font-cookie  capitalize tracking-wider font-semibold">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
