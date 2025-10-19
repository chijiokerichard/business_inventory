import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

export default function Navbar() {
  return (
    <header style={{marginLeft:"100px"}} className='flex w-full justify-between py-4 px-7  fixed  left-70 bg-[#f4f6fa] right-0   items-center h-16'>
        <div className='flex items-center w-full justify-between gap-10'>

        <h1 className='bg-black rounded-full w-15 h-15 text-white text-center relative flex items-center justify-center'>
            <div className="h-4 w-4 bg-red-600 absolute inset-auto z-1  rotate-[30deg]"></div>
            <div className="h-4 w-4 bg-white absolute left-[17px]  inset-auto  rotate-[30deg]"></div>
        </h1>
        <nav className='flex gap-5 font-[Sans] text-[20px]'>
            <Link to={"/"}>Home</Link>
            <Link to={"/service"}>Service</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/block"}>Block</Link>
            <Link to={"/contact"}>Contact</Link>
        </nav>
        </div>
        <Button>buy now</Button>
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
