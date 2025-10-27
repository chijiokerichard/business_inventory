import React from 'react'
import Wrapper from '../../component/atom/Wrapper'
import { FaPlus } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export default function CategorysList() {
    return (
        <Wrapper bg="#0e0e0e" top="72px" height="100vh">
            <div className="flex w-full justify-between items-center ">
                <span className='text-white text-xl font-[Bricolage_Grotesque] font-[200]'>Select category to change</span>
                <div className="flex items-center  justify-center  h-[30px] text-white rounded-2xl bg-gray-500 text-center w-[120px] px-1">
                    <Link to={"/shop/categorys/add"} className="text-[12px] cursor-pointer">
                        ADD CATEGORY
                    </Link>
                    <FaPlus className="text-[12px] " />
                </div>
            </div>

            <div className="w-full  border-y-1 my-1 p-3 border-[#272626]  flex font-[Bricolage_Grotesque]  flex-col justify-center items-start mt-10 gap-4">
                <div className='flex gap-1 justify-start items-start w-full'>
                    <p className='text-white'>0</p>
                    <p className='text-white'>categories</p>
                </div>
            </div>
            <div>
                <h1 className='text-white'>No category found</h1>
            </div>
        </Wrapper>
    )
}
