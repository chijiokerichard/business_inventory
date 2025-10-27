import React from "react";
import { Link } from "react-router-dom";
import { GoBell } from "react-icons/go";



export default function TopNav() {
  return (
    <header className="flex  justify-between py-4 px-7 top-0  fixed  right-0 text-white   left-0 bg-[#04648a]  items-center h-18">
      <div className="flex  items-center w-full justify-between gap-10">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-[BitCount_Single] p-1  text-white rounded-md ">Administration Panel</div>
        </div>
        <div className="flex gap-7 justify-between items-center">

          <nav className="flex gap-5 font-[Sans] text-[13px]">
            <h1>WELCOME, CHIJIOKE.</h1> 
            <Link to={"/"} className="flex  items-center gap-3">
              VIEW SITE/
            </Link>
            <Link to={"/"} className="flex  items-center gap-3">
              CHANGEPASSWORD/
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

