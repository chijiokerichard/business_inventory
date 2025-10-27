import React from 'react'

type Props = {
    children: React.ReactNode;
    bg?:string;
    top?:string;
    height?:string
}

export default function Wrapper({children,bg,top,height}: Props) {
  return (
    <div style={{marginLeft:"278px",marginTop:top?top:"73px",paddingBottom:"40px",backgroundColor:bg?bg:"white",height:height?height:"auto"}} className="p-5  ml-[30px]  mt-20">
        {children}
    </div>
  )
}
