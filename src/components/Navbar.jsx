import React from "react";
import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { motion } from "framer-motion";

const navVariants = {
  hidden: { y: -100, opacity: 0 }, // start above screen
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.nav
      className="w-full flex py-5 justify-between items-center navbar px-[-10px]"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <img
        src={logo}
        alt="hoobank"
        className={`w-[100px] h-[40px] sm:w-[140px] sm:h-[60px] cursor-pointer`}
      />
      {/* <h2 className="w-[200px] h-[32px] text-green-400 font-bold ">EKRAM AHMADZAI</h2> */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1  mr-[30px] ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins cursor-pointer text-[16px] text-gradient box-shadow mx-7 ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center  cursor-pointer  ">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20  right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-gradient font-semibold  ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
