import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages1/Layout'
import Dashboard from './pages1/Dashboard'
import Sales from './pages1/Sales'
import { useEffect, useState } from 'react'
import { DataWrapper } from '../context'
import type { products_type } from './component/type'
import Products from './pages1/Products'
import AdminLayout from './src/admin/AdminLayout'
import ProductsList from './src/products/ProductsList'
import AddProduct from './src/products/AddProduct'
import CategorysList from './src/category/CategoryList'
import Admin from './src/admin/Admin'
import AddCategory from './src/category/AddCategory'

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
  }, [products])
  
  return (
    <BrowserRouter>
      <DataWrapper.Provider value={{ products, setProducts, isNewProduct, setIsNewProduct,setMsg,msg }}>

        <div className='flex w-full flex-col '>
          
          {/* <div className={`${isNewProduct?"fixed ":"hidden"} cursor-pointer left-0 bg-[#0000007a] right-0 z-10 top-0 bottom-0 flex items-center mx-auto justify-center`}>
            </div>
          {isNewProduct &&
            <div className="fixed left-0  right-0 z-10 top-0 bottom-0 flex items-center mx-auto justify-center">
              <NewProductModal />
            </div>
          } */}
          <Routes>
            <Route element={<AdminLayout/>}>
              <Route path='/shop/admin/inventory' element={<Admin/>} />
              <Route path='/shop/products' element={<ProductsList/>} />
              <Route path='/shop/products/add' element={<AddProduct />} />
              <Route path='/shop/categorys' element={<CategorysList />} />
              <Route path='/shop/categorys/add' element={<AddCategory />} />
            </Route>
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
