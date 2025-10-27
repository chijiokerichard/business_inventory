
import { Link } from "react-router-dom";
import React from "react";
export default function LeftNav() {
  const [selected, setSelected] = React.useState<string>("");

  return (
    <div className="bg-[#0e0e0e] fixed w-70 left-0 top-18 bottom-0">
      <div className="flex flex-col items-center justify-center p-3 gap-12">

        <div className="flex flex-col justify-between text-[18px] border-x border-b border-[#272626] font-[400] items-start h-full font-[Bricolage_Grotesque] w-full ">
          <nav className="flex flex-col gap-1 items-start w-full">
            <h1 className="bg-[#055d80] text-white font-[200] font-[Bitcount_Single] w-full text-[17px] py-1 px-2">AUTHENTICATION</h1>
            <ul className={` flex text-[#309ac4] px-1 py-2 text-[16px] border-b  border-[#373c3f] font-[Bitcount_Single] font-[700]  w-full ${selected === "users" ? "bg-[#272626]" : ""}  justify-between mt-2`}>
              <Link onClick={() => setSelected("users")} to={"#"} className={``}>Users</Link>
              <div className="flex items-center justify-center font-[800] cursor-pointer gap-0.5">
                <span className=" text-white ">+</span>
                <span className="text-sm">Add</span>
              </div>
            </ul>
          </nav>
          <nav className="flex flex-col gap-1 items-start w-full">
            <h1 className="bg-[#055d80] text-white font-[200] font-[Bitcount_Single] w-full text-[17px] py-1 px-2">SHOP</h1>
            <ul className={` flex text-[#309ac4] px-1 py-2 text-[16px] border-b  border-[#373c3f] font-[Bitcount_Single] font-[700]  w-full ${selected === "products" ? "bg-[#272626]" : ""}  justify-between `}>
              <Link onClick={() => setSelected("products")} to={"/shop/products"} className={``}>Product</Link>
              <div className="flex items-center justify-center font-[800] cursor-pointer gap-0.5">
                <span className=" text-white ">+</span>
                <span className="text-sm">Add</span>
              </div>
            </ul>
            <ul className={` flex text-[#309ac4] px-1 py-2 text-[16px] border-b  border-[#373c3f] font-[Bitcount_Single] font-[700]  w-full ${selected === "customers" ? "bg-[#272626]" : ""}  justify-between `}>
              <Link onClick={() => setSelected("customers")} to={"#"} className={``}>Customers</Link>
              <div className="flex items-center justify-center font-[800] cursor-pointer gap-0.5">
                <span className=" text-white ">+</span>
                <span className="text-sm">Add</span>
              </div>
            </ul>
            <ul className={` flex text-[#309ac4] px-1 py-2 text-[16px] border-b  border-[#373c3f] font-[Bitcount_Single] font-[700]  w-full ${selected === "customers" ? "bg-[#272626]" : ""}  justify-between `}>
              <Link onClick={() => setSelected("staffs")} to={"#"} className={``}>Staffs</Link>
              <div className="flex items-center justify-center font-[800] cursor-pointer gap-0.5">
                <span className=" text-white ">+</span>
                <span className="text-sm">Add</span>
              </div>
            </ul>
            <ul className={` flex text-[#309ac4] px-1 py-2 text-[16px] border-b  border-[#373c3f] font-[Bitcount_Single] font-[700]  w-full ${selected === "categorys" ? "bg-[#272626]" : ""}  justify-between `}>
              <Link onClick={() => setSelected("categorys")} to={"/shop/categorys"} className={``}>Categories</Link>
              <div className="flex items-center justify-center font-[800] cursor-pointer gap-0.5">
                <span className=" text-white ">+</span>
                <span className="text-sm">Add</span>
              </div>
            </ul>
          </nav>


        </div>
      </div>
    </div>
  );
}



