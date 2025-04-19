import React, { useState } from "react";
import { navLinks } from "../data";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header className="w-full h-[90px]">
      <nav className="fixed top-0 left-0 z-20 h-[90px] w-full bg-white px-10 drop-shadow-2xl">
        <div className="w-full h-full flex-between container">
          <div>
            <p className="font-cookie text-sm md:text-xl lg:text-2xl">
              SCENTURA VAULT <span>.com</span>
            </p>
            <p className="float-right text-[11px]">TRUSTED ONLINE SINCE 1995</p>
          </div>

          <div className="xl:flex items-center justify-center hidden gap-10">
            {navLinks.map((item) => (
              <Link
                smooth={true}
                duration={500}
                offset={-150}
                key={item.id}
                to={item.path}
                className="cursor-pointer font-semibold tracking-wider transition-all duration-300 ease-in-out text-[15px] hover:text-[16px] hover:tracking-widest"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="xl:flex hidden items-center justify-center gap-5 ">
            <FaSearch />
            <p className="font-semibold flex gap-1 items-center">
              {" "}
              <FaUserAlt /> Account
            </p>
          </div>

          {toggleMenu ? (
            <IoMdClose
              onClick={handleToggleMenu}
              className="text-2xl cursor-pointer xl:hidden flex"
            />
          ) : (
            <GiHamburgerMenu
              onClick={handleToggleMenu}
              className="text-2xl cursor-pointer xl:hidden flex"
            />
          )}
        </div>
      </nav>

      <div
        className={`fixed top-[10%] h-[230px] w-full bg-white drop-shadow-2xl flex-center flex-col gap-3 z-[20]
              transition-all duration-500 ease-in-out 
              ${
                toggleMenu
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 -translate-y-5 scale-95 pointer-events-none"
              }`}
      >
        {navLinks.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className="cursor-pointer font-semibold tracking-wider transition-all duration-300 ease-in-out text-[15px] hover:text-[16px] hover:tracking-widest"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
