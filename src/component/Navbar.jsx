import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ".././index.css"
import "../css/navbar.css"
import { DataWrapper } from '../../../store/context'
import Button from "../component/atom/Button"

export default function Navbar() {
  const {userInfo} = useContext(DataWrapper)


  return (
    <div>
        <header className='header'>
            <h1>Logo</h1>
            <div style={{display:"flex",marginLeft:"1rem",gap:"1rem"}} className="flex items-center justify-center">
            <Link to={"/"}> Home </Link>
            <Link to={"/about"}>About us</Link>
            <Link to={"/contact"}>contact page</Link>
            <Button className="bg-purple-600 w-[100px] py-1 rounded-md">FAG</Button>
            {userInfo? <span>welcome, {userInfo?.user?.username}</span>:""}

            </div>
        </header>
    </div>
  )
}
