import React from "react";
import Boy from "../assets/boy.png";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
function About() {
  return (
    <div className="w-[92%] flex  flex-col ml-24 bg-[#eaedf2] py-28">
      <div className="w-full px-16 gap-3 mb-12">
        <h1 className="text-4xl font-bold">ABOUT ME</h1>
        <p>SENIOR & MOBILE AND WEB APP DEVELOPER</p>
      </div>
      <div className="w-full flex gap-16 px-16">
        <div className="w-[40%] bg-white flex justify-center  py-3 px-3 rounded-md relative ">
          <div className="w-14 h-56    absolute  top-10 left-3 bg-white flex flex-col justify-center items-center gap-3 py-2">
            <Link className="w-10 h-10  bg-sky-400 text-white flex justify-center items-center">
              {" "}
              <FaFacebookF />
            </Link>

            <Link className="w-10 h-10  bg-sky-400 text-white flex justify-center items-center">
              {" "}
              <FaTwitter />
            </Link>
            <Link className="w-10 h-10 bg-sky-400 text-white flex justify-center items-center">
              {" "}
              <FaInstagram />
            </Link>
            <Link className="w-10 h-10 bg-sky-400 text-white flex justify-center items-center">
              {" "}
              <FaLinkedinIn />
            </Link>
          </div>
          <div
            className="w-[100%] bg-slate-200"
            style={{
              backgroundImage: `url(
                "https://www.shutterstock.com/shutterstock/photos/1288815238/display_1500/stock-photo-white-rectangle-mosaic-tiles-texture-background-classic-white-metro-tile-long-wide-picture-1288815238.jpg"
              )`,
            }}
          >
            <img className="h-[550px]" src={Boy} alt="" />
          </div>
        </div>
        <div className="w-[65%] flex flex-col gap-8  ">
          <div className="w-full pt-20 flex flex-col gap-2">
            <h1 className="text-3xl font-bold">I'M Talha Malik</h1>
            <h2 className="text-lg">
              Senior <span className="text-sky-400">Mobile & Web </span>app
              developer
            </h2>
            <p className="text-gray-500">
              I specialize in creating high-quality Mobile and Web Apps for
              clients worldwide. With a vast portfolio of successful projects, I
              have developed numerous applications, ranging from social media
              apps to quiz apps, educational apps, and various custom apps
              tailored to meet the unique requirements of each client.
            </p>
          </div>
          <div className="w-full flex  gap-10">
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <p className="w-20 font-medium">Birthaday</p>
                <span className="text-gray-500">|</span>
                <span className="text-gray-500">2th octobar 2004</span>
              </div>
              <div className="flex gap-2">
                <p className="w-20 font-medium">Age</p>
                <span className="text-gray-500">|</span>
                <span className="text-gray-500">19</span>
              </div>
              <div className="flex gap-2">
                <p className="w-20 font-medium">Residence </p>
                <span className="text-gray-500">|</span>
                <span className="text-gray-500">Pakistan</span>
              </div>
              <div className="flex gap-2">
                <p className="w-20 font-medium">Address</p>
                <span className="text-gray-500">|</span>
                <span className="text-gray-500">Karachi,Pakistan</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <p className="w-20 font-medium">E-mail</p>
                <span className="text-gray-500">|</span>
                <span className="text-gray-500">
                  mohammadtalhamalik495@gmail.com
                </span>
              </div>
              <div className="flex gap-2">
                <p className="w-20 font-medium">Phone</p>
                <span className="text-gray-500">|</span>
                <span className="text-gray-500">+03153685337</span>
              </div>
              <div className="flex gap-2">
                <p className="w-20 font-medium">Github</p>
                <span className="text-gray-500">|</span>
                <span className="text-gray-500">/Talhamalik495</span>
              </div>
              <div className="flex gap-2">
                <p className="w-20 font-medium  ">Freelancer</p>
                <span className="text-gray-500">|</span>
                <span className="text-gray-500">Available</span>
              </div>
            </div>
          </div>
          <div className="w-full">
            <button className="px-10 h-12 bg-sky-400 text-lg font-medium text-white">
              Download Cv
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
