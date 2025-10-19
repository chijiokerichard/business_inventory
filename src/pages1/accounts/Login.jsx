import { useContext, useState } from 'react'
import { DataWrapper } from '../../../context'
import Button from "../../component/atom/Button"
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [msg,setMsg] = useState("")
  const {setUserInfo} = useContext(DataWrapper)
const navigate = useNavigate() // for going to another page 
  
  async function onLogIn(event){
    event.preventDefault()
    try{
      const res = await fetch("http://localhost:8000/create/login",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({email,password})
      })
      const data = await res.json()
      if(res.status === 200){
        setUserInfo(data)
        navigate("/")// go to home page
      }
      setMsg(data.message)
      setTimeout(()=>{
        setMsg("")
      },3000)
    }catch(err){
      console.log("you have error")
      console.log(err)
    }
  }
   return (
    <div className='flex items-center flex-col'>
      <h1>{msg}</h1>
        <h1 className='text-[2rem] text-center font-[Sans_Serif] font-bolder'>Login page</h1>
        
        <form className='flex flex-col w-[400px] items-center justify-center h-auto gap-4'>

        <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} className="outline-none border-1 shadow-md p-[10px] w-2/3 mx-auto rounded-md" placeholder='Enter email'/>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="outline-none border-1 shadow-md p-[10px] w-2/3 mx-auto rounded-md" placeholder='Enterpassword'/>
        <Button type='button' onClick={(e)=>onLogIn(e)} className="text-white bg-blue-500 w-[100px] h-auto py-2 px-2 rounded-lg shadow-md shadow-blue-500"> Log In</Button>
        </form>
    </div>
  )
}
