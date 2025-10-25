import React from 'react'
type Props = {
    img?: string,
    name?: string,
}
export default function Trending({img,name}:Props) {
  return (
    <div style={{marginTop:"1rem"}} className='flex w-full justify-between items-end'>
        <div className="flex gap-2 items-end">
        <img className='w-10 h-10 rounded-md' src={img}/>
        <div className="flex flex-col gap-1 font-[Montagu_Slab]">
            <h4 className='leading-4 text-[black] font-[700]'>{name}</h4>
            <p className='leading-4 text-[gray] text-sm font-[200]'>FA-349ZP</p>
        </div>
        </div>
        <h1 className='leading-4 text-[black] font-[700]'>$509.30</h1>
    </div>
  )
}
