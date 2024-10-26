import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="w-[92%] ml-24 bg-[#111111] h-20 text-white flex justify-around items-center">
        <div className="flex gap-5">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
        <div>
          <h1>@2024copyright all right reserved</h1>
        </div>
      </div>
    </>
  );
}

export default Footer;
