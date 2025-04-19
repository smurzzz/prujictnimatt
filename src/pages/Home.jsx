import React from "react";
import Slider from "react-slick";
import { FaArrowRightLong } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { homeSlider } from "../data";
import PopularProducts from "../components/PopularProducts";
import Brands from "./Brands";
import About from "./About";
import Contacts from "./Contacts";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <section id="menu" className="w-full min-h-screen">
      <div className="container h-[800px] flex-center lg:px-15 px-10">
        <div className="bg-white drop-shadow-xl w-full h-[600px] rounded-2xl flex items-center flex-col justify-center">
          <Slider {...settings} className="w-full max-w-6xl px-5">
            {homeSlider.map((item) => (
              <>
                <div className="flex items-center justify-between flex-col lg:flex-row">
                  <div className="order-2 lg:order-1 text-center lg:text-left">
                    <p className="text-sm font-semibold text-orange-600 mb-2">
                      {item.subDescription}
                    </p>
                    <p className="text-lg md:text-xl lg:text-3xl tracking-wider max-w-[400px] font-semibold">
                      {item.Description}
                    </p>
                    <div className="flex items-center justify-center lg:justify-start gap-5 mt-5 flex-col sm:flex-row text-center w-full lg:w-[350px]">
                      <button className="w-[170px] rounded-full h-[50px] cursor-pointer text-white font-semibold bg-orange-500">
                        Shop Now
                      </button>
                      <button className="font-semibold flex-center gap-2 cursor-pointer">
                        Explore Deals <FaArrowRightLong />
                      </button>
                    </div>
                  </div>

                  <div className="lg:w-[500px] w-[300px] h-[400px] order-1 lg:order-2">
                    <img
                      src={item.image}
                      className="bg-transparent object-cover drop-shadow-[0_10px_15px_rgba(0,0,0,0.35)] rounded-xl"
                      alt=""
                    />
                  </div>
                </div>
              </>
            ))}
          </Slider>
        </div>
      </div>

      <PopularProducts />
      <Brands />
      <About />
      <Contacts />
    </section>
  );
};

export default Home;
