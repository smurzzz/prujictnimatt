import React from "react";
import { about } from "../data";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen mt-[150px] lg:px-15 px-10"
    >
      <div className="container flex-center flex-col">
        <div className="w-full">
          <p className="font-semibold mb-[80px] w-full text-center text-black text-3xl font-cookie  capitalize tracking-wider">
            About US
          </p>
          {about.map((item, index) => (
            <div
              key={item.id}
              className={`lg:flex items-center gap-x-15 mb-16 ${
                index % 2 !== 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="border-2 w-full lg:w-[500px] lg:mb-0 mb-[50px] h-[400px] rounded-4xl  "></div>
              <div className="w-full max-w-[800px] h-[400px] flex justify-center flex-col">
                <div className="mb-10">
                  <p className="font-semibold text-xl tracking-wide mb-3">
                    {item.title.title1}
                  </p>
                  <p className="text-sm leading-5 tracking-wide">
                    {item.description.descript1}
                  </p>
                </div>
                <div className="mb-10">
                  <p className="font-semibold text-xl tracking-wide mb-3">
                    {item.title.title2}
                  </p>
                  <p className="text-sm leading-5 tracking-wide">
                    {item.description.descript2}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-[500px] border-2 rounded-4xl"></div>
      </div>
    </section>
  );
};

export default About;
