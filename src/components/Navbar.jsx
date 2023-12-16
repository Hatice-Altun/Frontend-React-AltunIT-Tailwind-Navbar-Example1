import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import Logo from "../assets/Logo-AltunIT-White.png";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if(!nav) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'scroll'
    }
  };

  return (
    <div className="absolute w-full flex justify-between p-4 items-center">
        <img
            className= "w-32 ml-32"
            src={Logo}
            alt=""/>
      <HiMenuAlt3 onClick={handleNav} className="z-20 text-white cursor-pointer mr-32" size={25} />
      <div
        className={
          nav
            ? "ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-gray-400/90 px-4 py-7 flex-col z-10"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10"
        }
      >
        <ul className="flex flex-col fixed w-full h-full items-center justify-center">
          <li className="font-bold text-3xl p-8">Home</li>
          <li className="font-bold text-3xl p-8">About</li>
          <li className="font-bold text-3xl p-8">Resorts</li>
          <li className="font-bold text-3xl p-8">Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
