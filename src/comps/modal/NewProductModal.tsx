import { useContext, useState } from 'react'
import { DataWrapper } from '../../../context'
import { TbCancel } from 'react-icons/tb'
import { IoRemove } from 'react-icons/io5'
import { MdCancel } from 'react-icons/md'
import axios from 'axios'

export default function NewProductModal() {
    const {setIsNewProduct,setMsg} = useContext(DataWrapper)

    const [name,setName] = useState<string>("")
    const [price,setPrice] = useState<string>("")
    const [stock,setStock] = useState<string>("")
    const [category,setCategory] = useState<string>("")
    const [expiringDate,setExpiringDate] = useState<string>("")

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
    const data = res.data;
    setTimeout(() => setMsg(""), 3000);
    setMsg("Product added successfully");
    setName("");
    setPrice("");
    setStock("");
    setCategory("");
    setExpiringDate("");
  } catch (err: any) {
    console.error("Error adding product:", err.response?.data || err.message);
    setMsg(err.response?.data?.message);
    setTimeout(() => setMsg(""), 3000);

  }
}
    function removeModal(){
    setIsNewProduct(false)
    console.log("clicked me")
  }
    return (
            <div className='w-auto px-4  py-2 h-auto bg-[white] gap-1 rounded-2xl  shadow-2xl  flex flex-col items-center  mx-auto'>
            <div className='flex items-center justify-between w-full'>
            <h1 className='text-center'>ADD NEW PRODUCT</h1>
                <MdCancel onClick={removeModal} className=' w-7 h-7 text-black'/>
            </div>
            <form action="" className='w-auto h-full py-4  gap-4   flex flex-col items-center  mx-auto'>
                <div className='flex items-center gap-2'>
                    <div className='flex flex-col w-[200px]'>
                        <label htmlFor="">NAME</label>
                        <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setName(e.target.value)} placeholder='product name' value={name} className='outline-none border-1 py-1 pl-2 border-black rounded-md' type="text" />
                    </div>
                    <div className='flex flex-col w-[200px]'>
                        <label htmlFor="">PRICE</label>
                        <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setPrice(e.target.value)} value={price} placeholder='product price' className='outline-none border-1 py-1 pl-2 border-black rounded-md' type="text" />
                    </div>
                </div>
                <div className='flex flex-col w-full '>
                    <label htmlFor="">CATEGORY</label>
                    <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setCategory(e.target.value)} placeholder='category' value={category} className='outline-none border-1 px-3 w-full py-1 border-black rounded-md' type="text" />
                </div>
                <div className='flex items-center gap-2'>
                    <div className='flex flex-col w-[200px]'>
                        <label htmlFor="">STOCK</label>
                        <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setStock(e?.target?.value)} placeholder='stock count' value={stock} className='outline-none border-1 py-1 pl-2 border-black rounded-md' type="text" />
                    </div>
                    <div className='flex flex-col w-[200px]'>
                        <label htmlFor="">EXPIRING DATE</label>
                        <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setExpiringDate(e.target.value)} value={expiringDate} placeholder='expiring date' className='outline-none border-1 placeholder: py-1 pl-2 border-black rounded-md' type="date" />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="">PRODUCT IMAGE</label>
                    <input className='outline-none border-1 border-[gray] bg-white shadow-md py-2 px-2 ' type="file" />
                </div>
                <button onClick={addProduct} className='bg-[#0a0a2a] text-white w-full py-2 px-2 rounded-md'>click to complete</button>
            </form>
        </div>
    )
}
