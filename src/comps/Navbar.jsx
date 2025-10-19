import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { IoSearchCircleOutline } from 'react-icons/io5'

export default function Navbar() {
  return (
    <header  className='flex  justify-between py-4 px-7 top-0  fixed ml-70 right-0 shadow-md  left-70 bg-[#f4f6fa]   items-center h-18'>
        <div className='flex  items-center w-full justify-between gap-10'>

        <h1 className='bg-[#44458e7a]/50 rounded-md  px-5 py-2 text-[#44458e] text-center relative flex items-center justify-center'>
        level
        </h1>
        <div className='flex gap-7 justify-between items-center'>

          <IoSearchCircleOutline className='w-7 h-7 text-gray-700'/>
        <nav className='flex gap-5 font-[Sans] text-[20px]'>
            <Link to={"/"} className='flex  items-center gap-3'>
            <img className='h-10 w-10 rounded-full' src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s"} alt="" />
            <div className='flex flex-col gap-1 justify-center h-2'>
            <span className=' font-[700] text-[17px] leading-[13px] text-gray-500 font-[Bricolage_Grotesque]'>Mitcel Anthony</span>
            <span className='font-[200] text-sm leading-[14px] text-gray-400 font-[Bricolage_Grotesque]'>Photographer</span>

            </div>
            </Link>
       
        </nav>
        </div>
        </div>
    </header>
  )
}



// import React from 'react'
// import { Link } from 'react-router-dom'
// import Button from './Button'

// export default function Navbar() {
//   return (
//     <header className='flex w-full justify-between py-4 px-7  absolute  left-0 right-0   items-center h-25'>
//         <div className='flex items-center gap-10'>

//         <h1 className='bg-black rounded-full w-15 h-15 text-white text-center relative flex items-center justify-center'>
//             <div className="h-4 w-4 bg-red-600 absolute inset-auto z-1  rotate-[30deg]"></div>
//             <div className="h-4 w-4 bg-white absolute left-[17px]  inset-auto  rotate-[30deg]"></div>
//         </h1>
//         <nav className='flex gap-5 font-[Sans] text-[20px]'>
//             <Link to={"/"}>Home</Link>
//             <Link to={"/service"}>Service</Link>
//             <Link to={"/about"}>About</Link>
//             <Link to={"/block"}>Block</Link>
//             <Link to={"/contact"}>Contact</Link>
//         </nav>
//         </div>
//         <Button>buy now</Button>
//     </header>
//   )
// }
