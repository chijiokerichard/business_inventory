import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages1/Layout'
import Dashboard from './pages1/Dashboard'
import Sales from './pages1/Sales'
import { useEffect, useState } from 'react'
import { DataWrapper } from '../context'
import type { products_type } from './component/type'
import Products from './pages1/Products'
import NewProductModal from './comps/modal/NewProductModal'

export default function App() {
  const [products, setProducts] = useState<products_type[]>([])
  const [isNewProduct, setIsNewProduct] = useState<boolean>(false)
  const [msg, setMsg] = useState<string>("")
  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`${API_URL}/api/products`,{
          method: "GET",
          headers:{
            "Content-Type":"application/json"
          }
        })
        const data = await res.json()
        setProducts(data)
      } catch (err) {
        console.log("you have error")
        console.log(err)
      }
    }
   
    fetchProduct()
  }, [])
console.log(products)
  
  return (
    <BrowserRouter>
      <DataWrapper.Provider value={{ products, setProducts, isNewProduct, setIsNewProduct,setMsg,msg }}>

        <div className='flex w-full flex-col '>
            {msg && <p style={{marginTop:"10px"}} className='text-white fixed top-4 h-[10] w-[300px] flex mt-5 justify-center items-center bg-green-500 z-[222222222222] text-[1rem] text-center rounded-md p-1'>{msg}</p>}
          
          <div className={`${isNewProduct?"fixed ":"hidden"} cursor-pointer left-0 bg-[#0000007a] right-0 z-10 top-0 bottom-0 flex items-center mx-auto justify-center`}>
            </div>
          {isNewProduct &&
            <div className="fixed left-0  right-0 z-10 top-0 bottom-0 flex items-center mx-auto justify-center">
              <NewProductModal />
            </div>
          }
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Dashboard />} />
              <Route path='/products' element={<Products />} />
              <Route path='/sales' element={<Sales />} />
            </Route>
          </Routes>
        </div>
      </DataWrapper.Provider>
    </BrowserRouter>
  )
}
