import React from "react";
import lamastex from "../pics/DISP-lamastex-1600x524.jpeg";

function Header() {
  return (
    <div className="relative w-full">
      <img className="w-full" src={lamastex} alt=""></img>
      <div className="centered w-full md:text-3xl xl:text-5xl 2xl:text-7xl text-xl text-center text-white font-medium subpixel-antialiased shadow-lg brightness-110">
        <a href="https://lamastex.github.io/scalable-data-science/sds/3/x/">
          ScaDaMaLe Course Pathways
        </a>
      </div>
    </div>
  );
}

export default Header;
