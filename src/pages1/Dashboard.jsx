import { IoPeople } from "react-icons/io5";
import { TbWorldUpload } from "react-icons/tb";
import { FcSalesPerformance } from "react-icons/fc";
import { FaProductHunt } from "react-icons/fa6";



import Wrapper from "../component/atom/Wrapper"

export default function Dashboard() {
  return (
    <Wrapper>
      <h1 className="text-2xl">Dashboard</h1>
      <div style={{marginTop:"1rem"}} className="mt-3">
        <div className="flex gap-5 justify-between w-full">
          <div className=" flex bg-white shadow-md rounded-md w-[200px] h-[70px] px-2 py-1">
            <div className="w-full font-[Bricolage_Grotesque] flex flex-col justify-between">
              <h1 className="text-[14px] font-[200] ">Expired products</h1>
              <div className="flex items-center justify-between w-full">
              <p className="font-[600] text-xl">30</p>
                <IoPeople className="h-7 w-7 text-[#44458e]"/>

              </div>
            </div>
          </div>
          <div className=" flex bg-white shadow-md rounded-md w-[200px] h-[70px] px-2 py-1">
            <div className="w-full font-[Bricolage_Grotesque] flex flex-col justify-between">
              <h1 className="text-[14px] font-[200] ">Sales Today</h1>
              <div className="flex items-center justify-between w-full">
              <p className="font-[600] text-xl">500</p>
                <FcSalesPerformance className="h-7 w-7 text-[#44458e]"/>

              </div>
            </div>
          </div>
          <div className=" flex bg-white shadow-md rounded-md w-[200px] h-[70px] px-2 py-1">
            <div className="w-full font-[Bricolage_Grotesque] flex flex-col justify-between">
              <h1 className="text-[14px] font-[200] ">Total Products</h1>
              <div className="flex items-center justify-between w-full">
              <p className="font-[600] text-xl">1000</p>
                <FaProductHunt className="h-7 w-7 text-[#44458e]"/>

              </div>
            </div>
          </div>
          <div className=" flex bg-white shadow-md rounded-md w-[200px] h-[70px] px-2 py-1">
            <div className="w-full font-[Bricolage_Grotesque] flex flex-col justify-between">
              <h1 className="text-[14px] font-[200] ">Total Revenue</h1>
              <div className="flex items-center justify-between w-full">
              <p className="font-[600] text-xl">$12000</p>
                <TbWorldUpload  className="h-7 w-7 text-[#44458e]"/>

              </div>
            </div>
          </div>
          <div className=" flex bg-white shadow-md rounded-md w-[200px] h-[70px] px-2 py-1">
            <div className="w-full font-[Bricolage_Grotesque] flex flex-col justify-between">
              <h1 className="text-[14px] font-[200] ">Total Expenses</h1>
              <div className="flex items-center justify-between w-full">
              <p className="font-[600] text-xl">$33.5000</p>
                <IoPeople className="h-7 w-7 text-[#44458e]"/>

              </div>
            </div>
          </div>
          <div className=" flex bg-white shadow-md rounded-md w-[200px] h-[70px] px-2 py-1">
            <div className="w-full font-[Bricolage_Grotesque] flex flex-col justify-between">
              <h1 className="text-[14px] font-[200] ">pending Product</h1>
              <div className="flex items-center justify-between w-full">
              <p className="font-[600] text-xl">20</p>
                <IoPeople className="h-7 w-7 text-[#44458e]"/>

              </div>
            </div>
          </div>
         
        </div>
      </div>
    </Wrapper>
    
  );
}
