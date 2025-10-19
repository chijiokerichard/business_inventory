
import { IoIosHome } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { MdVerifiedUser } from "react-icons/md";




export default function Sidebar() {
  return (
    <div className="bg-[#19232f] fixed w-70 left-0 top-0 bottom-0">
      <div className="flex flex-col items-center justify-center gap-12">
        <div className="p-4 bg-[#141C25] w-full flex items-center gap-4">
          <h1 className="bg-black rounded-full w-15 h-15 text-white text-center relative flex items-center justify-center">
            <div className="h-4 w-4 bg-red-600 absolute inset-auto z-1  rotate-[30deg]"></div>
            <div className="h-4 w-4 bg-white absolute left-[17px]  inset-auto  rotate-[30deg]"></div>
          </h1>
          <h1 className="text-3xl text-[#e3e3e5] font-[Bricolage_Grotesque] font-[600]">Market</h1>
        </div>
        <div className="flex flex-col justify-between text-[18px] font-[400] items-start h-full font-[Bricolage_Grotesque] w-full ">
          <nav className="flex flex-col gap-1 items-start w-full pl-4">
          <p className="text-[#44458e] text-[15px] font-[800] text-upper">NAVIGATIONS</p>
            <div className="w-full flex items-center  hover:bg-[#141C25] ml-4 px-1 rounded-[10px]">
              <IoIosHome className="h-6 w-6 text-[#515e6c]"/>
            <Link className="flex text-left text-[#949da6] pl-4 py-3 w-full ">Dashboard</Link>
            </div>
            <div className="w-full flex items-center  hover:bg-[#141C25] ml-4 px-1 rounded-[10px]">
              <IoIosHome className="h-6 w-6 text-[#515e6c]"/>
            <Link className="flex text-left text-[#949da6] pl-4 py-3 w-full ">Sales</Link>
            </div>
            <div className="w-full flex items-center  hover:bg-[#141C25] ml-4 px-1 rounded-[10px]">
              <IoPeople className="h-6 w-6 text-[#515e6c]"/>
            <Link className="flex text-left text-[#949da6] pl-4 py-3 w-full ">Customer</Link>
            </div>
          
          </nav>

          <div className="flex flex-col items-start w-full pl-4">
            <div className="w-full flex items-center  hover:bg-[#141C25] ml-4 px-1 rounded-[10px]">
              <IoLogOut className="h-5 w-5 text-[#515e6c]"/>

            <Link className="flex text-left text-[#949da6] pl-4 py-3 w-full ">Logout</Link>
            </div>
            <div className="w-full flex items-center  hover:bg-[#141C25] ml-4 px-1 rounded-[10px]">
              <MdVerifiedUser className="h-5 w-5 text-[#515e6c]"/>

            <Link className="flex text-left text-[#949da6] pl-4 py-3 w-full ">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
