import React from "react";
import Boy from "../assets/boy.png";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
function About() {
  return (
    <div className="w-[92%] flex  flex-col ml-24 bg-gray-100 py-28">
      <div className="w-full px-16 gap-3 mb-12">
        <h1 className="text-4xl font-bold">ABOUT ME</h1>
        <p>SENIOR & MOBILE AND WEB APP DEVELOPER</p>
      </div>
      <div className="w-full flex gap-16 px-16">
        <div className="w-[40%] bg-white flex justify-center  py-3 px-3 rounded-md relative ">
          <div className="w-14 h-56    absolute  top-10 left-3 bg-white flex flex-col justify-center items-center gap-3 py-2">
            <Link className="w-10 h-12  bg-sky-400 text-white flex justify-center items-center">
              {" "}
              <FaFacebookF />
            </Link>

            <Link className="w-10 h-12  bg-sky-400 text-white flex justify-center items-center">
              {" "}
              <FaTwitter />
            </Link>
            <Link className="w-10 h-12 bg-sky-400 text-white flex justify-center items-center">
              {" "}
              <FaInstagram />
            </Link>
            <Link className="w-10 h-12 bg-sky-400 text-white flex justify-center items-center">
              {" "}
              <FaLinkedinIn />
            </Link>
          </div>
          <div className="w-[100%] bg-slate-200 ">
            <img className="h-[550px]" src={Boy} alt="" />
          </div>
        </div>
        <div className="w-[45%] h-96 bg-sky-600-500 bg-gray-400">
          <div className="w-full py-28">
            <h1 className="text-3xl font-bold">I'M Talha Malik</h1>
            <h2 className="text-lg">
              Senior <span className="text-sky-400">Mobile & Web </span>app
              developer
            </h2>
            <p></p>
          </div>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default About;
