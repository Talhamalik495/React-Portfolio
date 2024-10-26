import React from "react";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";

function Header() {
  return (
    <>
      <div className="w-28 h-full fixed bg-sky-400">
        <div>
          <Link>Home</Link>
          <IoHome />

        </div>
        <div>
          <Link>About</Link>
          <IoHome />

        </div>
        <div>
          <Link>Home</Link>
          <IoHome />

        </div>
        <div>
          <Link>Home</Link>
          <IoHome />

        </div>
        <div>
          <Link>Home</Link>
          <IoHome />

        </div>
      </div>
    </>
  );
}

export default Header;
