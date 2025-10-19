import React from "react";
import pic from "../assets/first_edit-removebg-preview.png";
import Button from "../comps/Button";

export default function Home() {
  return (
    <div className="h-[100vh] overflow-hidden  bg-right   bg-no-repeat bg-contain mr-[2rem]">
      <div className="flex  h-full items-center justify-between pl-[160px] relative">
        <div className="w-full z-4 flex absolute   h-full justify-center items-center">
            <div className="h-full gap-1 not-first: w-full  flex flex-col justify-center ">
                <p className="bg-gradient-to-r from-blue-400 via-red-400  bg-clip-text text-transparent ">FREELANCE DIGITAL DESIGNER</p>
                <div>

                <h1 className="text-[85px] font-extrabold font-[Bricolage_Grotesque] tracking-[2px]  z-0">Hello,I'm Fatima</h1>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis qui facilis quae!</p>
                <Button>Download Cv</Button>
            </div>
        </div>
        <div className="w-[770px] bg-transparent absolute right-0 overflow-hidden z-1  h-full ">
          <img src={pic} className=" w-full ml-auto  h-full" />
        </div>
      </div>
    </div>
  );
}
