import React from "react";
import Boy from "../assets/boy.png";
function Home() {
  return (
    <>
      <div className="w-[92%] ml-24 flex justify-center py-10">
        <div className="w-[45%] flex flex-col gap-3 justify-center px-5">
          <h3>Hello there...</h3>
          <h1 className="text-5xl font-bold">Talha Malik</h1>
          <p className="text-xl">I Am Passionate</p>
          <p className="text-md">
            Enthusiastic Full Stack Developer focused on developing engaging
            mobile applications that make a positive difference in people's
            lives using creative concepts. I strive to enhance user experience
            through effective design and functionality.
          </p>
          <div className="flex gap-3">
            <button className="w-36 h-12 bg-sky-400 text-white">My Work</button>
            <button className="w-36 h-12 border-2 border-sky-400 text-sky-400">
              My Work
            </button>
          </div>
        </div>
        <div className="w-[45%]">
          <img className="h-[450px]" src={Boy} alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
