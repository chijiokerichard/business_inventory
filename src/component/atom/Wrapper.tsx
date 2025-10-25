import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function Wrapper({children}: Props) {
  return (
    <div style={{marginLeft:"278px",marginTop:"73px",paddingBottom:"40px"}} className="bg-white  p-5  ml-[30px]  mt-18">
        {children}
    </div>
  )
}
