import React from 'react'
import Wrapper from '../../component/atom/Wrapper'

export default function AddCategory() {
    return (
        <Wrapper bg="#0e0e0e" top="72px" height="100vh">
            <div className="flex w-full justify-between flex-col items-start ">
                <span className='text-white text-xl font-[Bricolage_Grotesque] font-[200]'>Add Category</span>

                <form className={` flex text-white px-1 flex-col py-2 text-[16px] mt-10  font-[Bricolage_Grotesque]  font-[200]  w-full  justify-between`}>
                    <div className="flex items-center w-full justify-between border-b-1 pt-2 border-[#373c3f]  cursor-pointer gap-0.5">
                        <div className="flex items-center w-[500px] justify-between  pb-2   cursor-pointer gap-0.5">
                            <label className='' htmlFor="">Category name</label>
                            <input type="text" className='border-1 visited:border-white visited:border-2 border-[#373c3f] rounded-md w-[300px]  p-1' />
                        </div>
                    </div>
                    
                    <div className="flex items-center bg-[#4d4949] rounded-md  w-full justify-between  cursor-pointer gap-0.5">
                        <div className="flex  p-2 items-center w-[500px]   pb-2   cursor-pointer gap-2">
                            <button className='text-white rounded-md bg-[#3e9db9] text-sm py-2 px-3' >SAVE</button>
                            <button className='text-white rounded-md bg-[#3e9db9] text-sm py-2 px-3' >Save and add another</button>
                        </div>
                    </div>
                </form>
            </div>


        </Wrapper>)
}
