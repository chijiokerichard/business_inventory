import React from 'react'

export default function Button({children,color,bg,className,onClick}) {
  return (
    <button style={{color:`${color}`, background:`${bg}`}} onClick={onClick} className={className?className:`bg-blue-500 px-3 py-1 text-white rounded-md`}>
        {children}
    </button>
  )
}
