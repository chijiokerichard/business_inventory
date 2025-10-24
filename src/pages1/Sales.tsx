import { IoPeople } from "react-icons/io5";
import { PiSealWarningFill } from "react-icons/pi";
import { FaProductHunt } from "react-icons/fa6";
import { MdPointOfSale } from "react-icons/md";
import { IoAnalyticsSharp } from "react-icons/io5";


// import { FaProductHunt } from "react-icons/fa6";





import Wrapper from "../component/atom/Wrapper"


export default function Sales() {
  return (
    <Wrapper>
        <div className="flex justify-between items-center">

      <h1 className="text-2xl font-[Bricolage_Grotesque]">Sales</h1>
              <button className="bg-[#0a0a2a] px-2 py-1 rounded-md text-white font-[Bricolage_Grotesque]">Create Sale</button>
        </div>
      <div style={{marginTop:"1rem"}} className="mt-3 flex flex-col gap-5">
        <div className="flex gap-1 justify-between my-5 w-full">
          <div className=" flex [#0a0a2a1] bg-[#F8FAF7] text- shadow-sm rounded-md w-[300px] h-[100px] px-2 py-1">
            <div className="w-full font-[Bricolage_Grotesque] flex flex-col justify-between">
              <div className="flex items-center gap-2 justify-start">
                <PiSealWarningFill className="h-7 w-7 [#d3cbee99] bg-[#0a0a2a] p-1 text-white rounded-md "/>

              <span className="text-[15px] font-[200] font-[Bricolage_Grotesque] text-[#BCBEBB] ">About To Expire Products</span>
              </div>
              <div className="flex items-center justify-between w-full">
              <p className="font-[600] text-[#3D3F3E] font-[Bitcount_Single] text-xl">10</p>
              <div className="flex gap-0.5 items-center">

              <IoAnalyticsSharp className="h-5 w-5 text-[#8ca607]"/><span className="font-[Bitcount_Single] text-[#8ca607]">4%</span>
              </div>
              </div>
            </div>
          </div>
          <div className=" flex [#0a0a2a1] bg-[#F8FAF7] text- shadow-sm rounded-md w-[300px] h-[100px] px-2 py-1">
            <div className="w-full font-[Bricolage_Grotesque] flex flex-col justify-between">
              <div className="flex items-center gap-2 justify-start">
                <MdPointOfSale className="h-7 w-7 [#d3cbee99] bg-[#0a0a2a] p-1 text-white rounded-md "/>

              <span className="text-[15px] font-[200] font-[Bricolage_Grotesque] text-[#BCBEBB] ">Today's Sales</span>
              </div>
              <div className="flex items-center justify-between w-full">
              <p className="font-[600] text-[#3D3F3E] font-[Bitcount_Single] text-xl">$139.960</p>
              <div className="flex gap-0.5 items-center">

              <IoAnalyticsSharp className="h-5 w-5 text-[#8ca607]"/><span className="font-[Bitcount_Single] text-[#8ca607]">4%</span>
              </div>
              </div>
            </div>
          </div>
          <div className=" flex [#0a0a2a1] bg-[#F8FAF7] text- shadow-sm rounded-md w-[300px] h-[100px] px-2 py-1">
            <div className="w-full font-[Bricolage_Grotesque] flex flex-col justify-between">
              <div className="flex items-center gap-2 justify-start">
                <FaProductHunt  className="h-7 w-7 [#d3cbee99] bg-[#0a0a2a] p-1 text-white rounded-md "/>

              <span className="text-[15px] font-[200] font-[Bricolage_Grotesque] text-[#BCBEBB] ">Total products Sold Today</span>
              </div>
              <div className="flex items-center justify-between w-full">
              <p className="font-[600] text-[#3D3F3E] font-[Bitcount_Single] text-xl">1960</p>
              <div className="flex gap-0.5 items-center">

              <IoAnalyticsSharp className="h-5 w-5 text-[#8ca607]"/><span className="font-[Bitcount_Single] text-[#8ca607]">7%</span>
              </div>
              </div>
            </div>
          </div>
          
         
        </div>
        <div className="flex justify-between w-full flex-wrap gap-5">
       
      </div>
      </div>
    </Wrapper>
    
  );
}
