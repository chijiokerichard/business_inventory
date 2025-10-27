import React, { useContext, useState } from 'react'
import Wrapper from '../../component/atom/Wrapper'
import { DataWrapper } from '../../../context'
import axios from 'axios'

export default function AddProduct() {
    const {setIsNewProduct,setMsg,msg} = useContext(DataWrapper)
        const [name,setName] = useState<string>("")
        const [price,setPrice] = useState<string>("")
        const [stock,setStock] = useState<string>("")
        const [error,setError] = useState<boolean>(false)
    
       async function addProduct(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
      e.preventDefault();
      
      const API_URL = import.meta.env.VITE_API_URL;
      console.log(name, price, stock);
    
      try {
        const res = await axios.post(`${API_URL}/api/create_product`, {
          name: name.toString(),
          stock: parseInt(stock),
          price: parseInt(price),
        });
        const data = await res?.data
        setTimeout(() => setMsg(""), 3000);
        setMsg(data?.message);
        setName("");
        setPrice("");
        setStock("");
        setError?.(false)
      } catch (err: any) {
        console.error("Error adding product:", err.response?.data || err.message);
        if(err){
            setError?.(true)
        }
        setMsg(err.response?.data?.message);
        setTimeout(() => setMsg(""), 3000);
    
      }
    }
        
    return (
        <Wrapper bg="#0e0e0e" top="72px" height="100vh">
            <div className="flex w-full justify-between flex-col items-start ">
                <span className='text-white text-xl font-[Bricolage_Grotesque] font-[200]'>Add Product</span>
                {msg && <div className={`border ${error ? "border-[#cf5454]":"border-[#55e6a9]"} text-[15px] py-2 px-2 w-full mt-4 rounded-[6px]`}>
                    <p className={`${error ? "text-[#cf5454]":"text-[#55e6a9]"} font-[Bricolage_Grotesque] font-[600]`}>{msg}</p>
                </div>}
                <form className={` flex text-white px-1 flex-col py-2 text-[16px] mt-10  font-[Bricolage_Grotesque]  font-[200]  w-full  justify-between`}>
                    <div className="flex items-center w-full justify-between border-b-1 pt-2 border-[#373c3f]   gap-0.5">
                        <div className="flex items-center w-[500px] justify-between  pb-2    gap-0.5">
                            <label className='' htmlFor="">Product name</label>
                            <input required onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setName(e.target.value)} type="text" value={name} className='border-1 visited:border-white text-white visited:border-2 border-[#373c3f] rounded-md w-[300px]  p-1' />
                        </div>
                    </div>
                    <div className="flex items-center w-full justify-between border-b-1 pt-2 border-[#373c3f]   gap-0.5">
                        <div className="flex items-center w-[500px] justify-between  pb-2    gap-0.5">
                            <label className='' >Product Price</label>
                            <input required onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setPrice(e.target.value)} type="text" value={price} className='border-1 float-left visited:border-white text-white visited:border-2 border-[#373c3f] rounded-md w-[100px]  p-1' />
                        </div>
                    </div>
                    <div className="flex items-center w-full justify-between border-b-1 pt-2 border-[#373c3f]   gap-0.5">
                        <div className="flex items-center w-[500px] justify-between  pb-2    gap-0.5">
                            <label className='' >Stock</label>
                            <input  onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setStock(e.target.value)} value={stock} type="number" className='border-1 float-left visited:border-white text-white visited:border-2 border-[#373c3f] text- rounded-md w-[100px]  p-1' required/>
                        </div>
                    </div>
                    <div className="flex items-center w-full justify-between border-b-0 pt-2 border-[#373c3f]   gap-0.5">
                        <div className="flex items-center w-[500px] justify-between  pb-2    gap-0.5">
                            <label className='' >category</label>
                            <select className='border-1 float-left text-white visited:border-white  visited:border-2 border-[#373c3f] rounded-md w-[300px] p-1'>
                                <option value="" className='text-white'>---------</option>
                                <option className='text-black' value="clothes">Clothes</option>
                                <option className='text-black' value="electronics">Electronics</option>
                                <option className='text-black'  value="furniture">Furniture</option>
                                <option className='text-black' value="shoes">Shoes</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex items-center bg-[#4d4949] rounded-md  w-full justify-between   gap-0.5">
                        <div className="flex  p-2 items-center w-[500px]   pb-2    gap-2">
                            <button type='submit' onClick={addProduct} className='text-white rounded-md cursor-pointer bg-[#3e9db9] text-sm py-2 px-3' >SAVE</button>
                            <button className='text-white rounded-md cursor-pointer bg-[#3e9db9] text-sm py-2 px-3' >Save and add another</button>
                        </div>
                    </div>
                </form>
            </div>


        </Wrapper>)
}
