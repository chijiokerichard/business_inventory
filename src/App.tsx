import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages1/Layout'
import Dashboard from './pages1/Dashboard'
import Sales from './pages1/Sales'
import { useEffect, useState } from 'react'
import { DataWrapper } from '../context'
import type { products_type } from './component/type'
import Products from './pages1/Products'

export default function App() {
    const [products,setProducts] = useState<products_type[]>([])
    const [exp,setExp] = useState([])
const API_URL = import.meta.env.VITE_API_URL;
console.log(API_URL)
   useEffect(()=>{
    async function fetchExpress(){
      try{
        const res = await fetch(`${API_URL}/api/users`)
        const data = await res.json()
        setExp(data)
      }catch(err){
        console.log("you have error")
        console.log(err)
      }
    }
    async function fetchProduct(){
      try{
        const res = await fetch(`http://localhost:8000/api/products`)
        const data = await res.json()
        setProducts(data)
      }catch(err){
        console.log("you have error")
        console.log(err)
      }
    }
    fetchProduct()
    fetchExpress()
   },[])
  return (
        <BrowserRouter>
        <DataWrapper.Provider value={{products,setProducts}}>
    <div className='flex w-full flex-col bg-[#fff'>
        <Routes>
            <Route element={<Layout/>}>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/sales' element={<Sales/>}/>
            </Route>
        </Routes>
    </div>
    </DataWrapper.Provider>
        </BrowserRouter>
  )
}
