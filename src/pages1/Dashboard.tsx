import { IoPeople } from "react-icons/io5";
import { TbWorldUpload } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaProductHunt } from "react-icons/fa6";
import { MdPointOfSale } from "react-icons/md";
import { IoAnalyticsSharp } from "react-icons/io5";
import Trending from "../component/product/Trending";
import { img } from "../comps/images/images";
import { Link } from "react-router-dom";
import BarChart from "../comps/chart/BarChart";
import LineChart from "../comps/chart/LineCart";
import Wrapper from "../component/atom/Wrapper";
import DoughnutChart from "../comps/chart/DoughnutChart";

export default function Dashboard() {
  return (
    <Wrapper>
      <h1 className="text-2xl font-[Bricolage_Grotesque]">Dashboard</h1>
      <div style={{ marginTop: "1rem" }} className="mt-3 flex flex-col gap-5">
        <div className="flex gap-1 justify-between my-5 w-full">
          <div className=" flex [#0a0a2a1] bg-[#F8FAF7] text- shadow-sm rounded-md w-[250px] h-[100px] px-2 py-1">
            <div className="w-full font-[Bricolage_Grotesque] flex flex-col justify-between">
              <div className="flex items-center gap-2 justify-start">
                <IoPeople className="h-7 w-7 [#d3cbee99] bg-[#8ca607] p-1 text-white rounded-md " />

                <span className="text-[15px] font-[200] font-[Montagu_Slab] text-[#BCBEBB] ">Total customer</span>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="font-[600] text-[#3D3F3E] font-[Bitcount_Single] text-xl">1960</p>
                <div className="flex gap-0.5 items-center">

                  <IoAnalyticsSharp className="h-5 w-5 text-[#8ca607]" /><span className="font-[Bitcount_Single] text-[#8ca607]">4%</span>
                </div>
              </div>
            </div>
          </div>
          <Link to={"/sales"} className=" flex [#0a0a2a1] bg-[#F8FAF7] text- shadow-sm rounded-md w-[250px] h-[100px] px-2 py-1">
            <div className="w-full font-[Bricolage_Grotesque] flex flex-col justify-between">
              <div className="flex items-center gap-2 justify-start">
                <MdPointOfSale className="h-7 w-7 [#d3cbee99] bg-[#8ca607] p-1 text-white rounded-md " />

                <span className="text-[15px] font-[200] font-[Montagu_Slab] text-[#BCBEBB] ">Total Sales</span>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="font-[600] text-[#3D3F3E] font-[Bitcount_Single] text-xl">$139.960</p>
                <div className="flex gap-0.5 items-center">

                  <IoAnalyticsSharp className="h-5 w-5 text-[#8ca607]" /><span className="font-[Bitcount_Single] text-[#8ca607]">4%</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to={"/products"} className=" flex [#0a0a2a1] bg-[#F8FAF7] text- shadow-sm rounded-md w-[250px] h-[100px] px-2 py-1">
            <div className="w-full font-[Bricolage_Grotesque] flex flex-col justify-between">
              <div className="flex items-center gap-2 justify-start">
                <FaProductHunt className="h-7 w-7 [#d3cbee99] bg-[#8ca607] p-1 text-white rounded-md " />

                <span className="text-[15px] font-[200] font-[Montagu_Slab] text-[#BCBEBB] ">Total products</span>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="font-[600] text-[#3D3F3E] font-[Bitcount_Single] text-xl">1960</p>
                <div className="flex gap-0.5 items-center">

                  <IoAnalyticsSharp className="h-5 w-5 text-[#8ca607]" /><span className="font-[Bitcount_Single] text-[#8ca607]">7%</span>
                </div>
              </div>
            </div>
          </Link>
          <div className=" flex [#0a0a2a1] bg-[#F8FAF7] text- shadow-sm rounded-md w-[250px] h-[100px] px-2 py-1">
            <div className="w-full font-[Bricolage_Grotesque] flex flex-col justify-between">
              <div className="flex items-center gap-2 justify-start">
                <TbWorldUpload className="h-7 w-7 [#d3cbee99] bg-[#8ca607] p-1 text-white rounded-md " />

                <span className="text-[15px] font-[200] font-[Montagu_Slab] text-[#BCBEBB] ">Total Revenue</span>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="font-[600] text-[#3D3F3E] font-[Bitcount_Single] text-xl">$193060.404</p>
                <div className="flex gap-0.5 items-center">

                  <IoAnalyticsSharp className="h-5 w-5 text-[#8ca607]" /><span className="font-[Bitcount_Single] text-[#8ca607]">10%</span>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="flex justify-between w-full flex-wrap gap-5">
          <LineChart />
          <DoughnutChart />
          <BarChart />
          <div style={{ marginTop: "-60px" }} className="bg-[#F8FAF7] rounded-[12px] w-[340px] h-full p-3">
            <div className="flex justify-between w-full ">
              <h3 className="font-[Bricolage_Grotesque]">Top Trending Products</h3>
              <BsThreeDotsVertical />
            </div>
            <div className="w-full">
              <Trending name="Banana" img={img.img1} />
              <Trending name="Apple" img={img.img3} />
              <Trending name="Cashew" img={img.img4} />
              <Trending name="Orange" img={img.img2} />
              <Trending name="Pinapple" img={img.img5} />
            </div>
          </div>
        </div>
      </div>
      
    </Wrapper>

  );
}
