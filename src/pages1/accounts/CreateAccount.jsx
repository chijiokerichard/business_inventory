import { useState } from 'react'

export default function CreateAccount() {
  const [email,setEmail] = useState("")
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [msg,setMsg] = useState("")
  async function onLogIn(event){
    event.preventDefault()
    try{
      const res = await fetch("http://localhost:3000/user/signup",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({username,email,password})
      })
      const data = await res.json()
      if(res.ok){
        console.log(data)
      }
      setMsg(data.message)
      setTimeout(()=>{
        setMsg("")
      },3000)
      if(!res){
        setMsg("No internet connection")
        setTimeout(()=>{
        setMsg("")
      },3000)
      }
    }catch(err){
      console.log("you have error")
      console.log(err)
    }
  }
   return (
    <div className='flex items-center flex-col'>
      <h1>{msg}</h1>
        <h1 className='text-[2rem] text-center font-[Sans_Serif] font-bolder'>SignUp page</h1>
        <form className='flex flex-col w-[400px] items-center justify-center h-auto gap-4'>

        <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} className="outline-none border-1 shadow-md p-[10px] w-2/3 mx-auto rounded-md" placeholder='Enter email'/>
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="outline-none border-1 shadow-md p-[10px] w-2/3 mx-auto rounded-md" placeholder='Enter username'/>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="outline-none border-1 shadow-md p-[10px] w-2/3 mx-auto rounded-md" placeholder='Enterpassword'/>
        <button type='button' onClick={(e)=>onLogIn(e)} className="text-white bg-orange-600 w-[100px] h-auto py-2 px-2 rounded-lg shadow-md shadow-orange-500"> Log In</button>
        </form>
    </div>
  )
}
