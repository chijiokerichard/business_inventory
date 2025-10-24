


import { IoIosHome } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";
import { GrMoney } from "react-icons/gr";

import { GoPeople } from "react-icons/go";
import { CiLogin } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";


import { IoSettingsOutline } from "react-icons/io5";




export default function Sidebar() {
  return (
    <div className="bg-[#0a0a2a] fixed w-70 left-0 top-0 bottom-0">
      <div className="flex flex-col items-center justify-center gap-12">
        <div className="py-6 bg-transparent w-full pl-4">
          <img src="https://themewagon.github.io/DashboardKit/assets/logo-B3nv2ngr.svg"/>  
        </div>
        <div className="flex flex-col justify-between text-[18px] font-[400] items-start h-full font-[Bricolage_Grotesque] w-full ">
          <nav className="flex flex-col gap-1 items-start w-full pl-4">
            <div className="w-[240px] mx-auto px-4 flex items-center  hover:bg-[#21223F]   rounded-[10px]">
              <RxDashboard className="h-6 w-6 text-[#D1D1DD]"/>
            <Link className="flex text-left text-[#ADACCA]  pl-4 py-3 w-full " to={"/"}>Dashboard</Link>
            </div>
            <div className="w-[240px] mx-auto px-4 flex items-center  hover:bg-[#21223F]   rounded-[10px]">
              <GrMoney  className="h-6 w-6 text-[#D1D1DD]"/>
            <Link className="flex text-left text-[#ADACCA] pl-4 py-3 w-full " to={"/sales"}>Sales</Link>
            </div>
            <div className="w-[240px] mx-auto px-4 flex items-center  hover:bg-[#21223F]   rounded-[10px]">
              <GoPeople className="h-6 w-6 text-[#D1D1DD]"/>
            <Link className="flex text-left text-[#ADACCA] pl-4 py-3 w-full ">Customer</Link>
            </div>
          
          </nav>

          <div className="flex flex-col items-start w-full pl-4">
            <div className="w-[240px] mx-auto px-4 flex items-center  hover:bg-[#21223F]   rounded-[10px]">
              <CiLogin className="h-5 w-5 text-[#D1D1DD]"/>

            <Link className="flex text-left text-[#ADACCA] pl-4 py-3 w-full ">Logout</Link>
            </div>
            <div className="w-[240px] mx-auto px-4 flex items-center  hover:bg-[#21223F]   rounded-[10px]">
              <IoSettingsOutline className="h-5 w-5 text-[#D1D1DD]"/>

            <Link className="flex text-left text-[#ADACCA] pl-4 py-3 w-full ">Settings</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



// import { IoIosHome } from "react-icons/io";
// import { Link } from "react-router-dom";
// import { IoLogOut } from "react-icons/io5";
// import { GrMoney } from "react-icons/gr";

// import { GoPeople } from "react-icons/go";
// import { CiLogin } from "react-icons/ci";
// import { RxDashboard } from "react-icons/rx";


// import { IoSettingsOutline } from "react-icons/io5";






// export default function Sidebar() {
//   return (
//     <div className="bg-[#0a0a2a] fixed w-70 left-0 top-0 bottom-0">
//       <div className="flex flex-col items-center justify-center gap-12">
//         <div className="py-6 bg-transparent w-full pl-4">
//           <img src="https://themewagon.github.io/DashboardKit/assets/logo-B3nv2ngr.svg"/>  
//         </div>
//         <div className="flex flex-col justify-between text-[18px] font-[400] items-start h-full font-[Bricolage_Grotesque] w-full ">
//           <nav className="flex flex-col gap-1 items-start w-full pl-4">
//             <div className="w-[240px] mx-auto px-4 flex items-center  hover:bg-[#21223F]   rounded-[10px]">
//               <RxDashboard className="h-6 w-6 text-[#D1D1DD]"/>
//             <Link className="flex text-left text-[#ADACCA] pl-4 py-3 w-full ">Dashboard</Link>
//             </div>
//             <div className="w-[240px] mx-auto px-4 flex items-center  hover:bg-[#21223F]   rounded-[10px]">
//               <GrMoney  className="h-6 w-6 text-[#D1D1DD]"/>
//             <Link className="flex text-left text-[#ADACCA] pl-4 py-3 w-full ">Sales</Link>
//             </div>
//             <div className="w-[240px] mx-auto px-4 flex items-center  hover:bg-[#21223F]   rounded-[10px]">
//               <GoPeople className="h-6 w-6 text-[#D1D1DD]"/>
//             <Link className="flex text-left text-[#ADACCA] pl-4 py-3 w-full ">Customer</Link>
//             </div>
          
//           </nav>

//           <div className="flex flex-col items-start w-full pl-4">
//             <div className="w-[240px] mx-auto px-4 flex items-center  hover:bg-[#21223F]   rounded-[10px]">
//               <CiLogin className="h-5 w-5 text-[#D1D1DD]"/>

//             <Link className="flex text-left text-[#ADACCA] pl-4 py-3 w-full ">Logout</Link>
//             </div>
//             <div className="w-[240px] mx-auto px-4 flex items-center  hover:bg-[#21223F]   rounded-[10px]">
//               <IoSettingsOutline className="h-5 w-5 text-[#D1D1DD]"/>

//             <Link className="flex text-left text-[#ADACCA] pl-4 py-3 w-full ">Settings</Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
