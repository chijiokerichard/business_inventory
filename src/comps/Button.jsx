import React from 'react'

export default function Button({children}) {
  return (
    <button className='rounded-full border-1 h-[50px] bg-transparent text-black w-[130px]'>
        {children??"button"}
    </button>
  )
}
