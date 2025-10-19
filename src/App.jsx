import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages1/Home'
import Login from './pages1/auth/Login'
import Layout from './pages1/Layout'
import Dashboard from './pages1/dashboard'

export default function App() {
   
   
  return (
        <BrowserRouter>
    <div className='flex w-full flex-col bg-gray-200/5'>
        <Routes>
            <Route element={<Layout/>}>
            <Route path='/login' element={<Login/>}/>

            <Route path='/' element={<Dashboard/>}/>
            <Route path='/home' element={<Home/>}/>
            </Route>
        </Routes>
    </div>
        </BrowserRouter>
  )
}
