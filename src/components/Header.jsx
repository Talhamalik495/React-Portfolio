import React from "react";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa";
import { FaBellConcierge } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import { FaIdCardAlt } from "react-icons/fa";

function Header() {
  return (
    <>
      <div className="w-24 h-full fixed  flex flex-col shadow-[0.2px_0px_5px_rgba(0,0,0,0.5)]">
        <div className="w-full h-12 bg-sky-400 text-white flex justify-center items-center font-medium">
          <h1>Talha Malik</h1>
        </div>
        <Link className="w-full h-20 border-b border-black-300 flex justify-center items-center flex-col gap-1 hover:text-sky-400">
          <span className="text-2xl">
            <IoHome />
          </span>
          <span className="text-sm font-medium">Home</span>
        </Link>

        <Link className="w-full h-20  border-b border-black-300 flex justify-center items-center flex-col gap-1  hover:text-sky-400">
          <span className="text-sm font-medium">About Me</span>
          <span className="text-2xl">
            <FaAddressCard />
          </span>
        </Link>

        <Link className="w-full h-20  border-b border-black-300 flex justify-center items-center flex-col gap-1 hover:text-sky-400">
          <span className="text-sm font-medium">Services</span>
          <span className="text-2xl">
            <FaBellConcierge />
          </span>
        </Link>

        <Link className="w-full h-20  border-b border-black-300 flex justify-center items-center flex-col gap-1 hover:text-sky-400">
          <span className="text-sm font-medium">Portfolio</span>
          <span className="text-2xl">
            <FaBriefcase />
          </span>
        </Link>

        <Link className="w-full h-20  border-b border-black-300 flex justify-center items-center flex-col gap-1 hover:text-sky-400">
          <span className="text-sm font-medium">Contact</span>
          <span className="text-2xl">
            <FaIdCardAlt />
          </span>
        </Link>
      </div>
    </>
  );
}

export default Header;
