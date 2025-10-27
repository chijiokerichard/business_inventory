import React, { useContext } from 'react'
import Wrapper from '../../component/atom/Wrapper'
import { FaPlus } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { DataWrapper } from '../../../context'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

export default function ProductsList() {
    const { products } = useContext(DataWrapper)
    console.log(products.products)
    return (
        <Wrapper bg="#0e0e0e" top="72px" height="auto">
            <div className="flex w-full justify-between items-center ">
                <span className='text-white text-xl font-[Bricolage_Grotesque] font-[200]'>Select product to change</span>
                <div className="flex items-center  justify-center  h-[30px] text-white rounded-2xl bg-gray-500 text-center w-[120px] px-1">
                    <Link to={"/shop/products/add"} className="text-[12px] cursor-pointer">
                        ADD PRODUCT
                    </Link>
                    <FaPlus className="text-[12px] " />
                </div>
            </div>

            <div className="w-full  border-0 my-1 p-3  flex font-[Bricolage_Grotesque]  flex-col justify-center items-start mt-10 gap-4">
                <div className='flex gap-1 justify-start  items-start w-full'>
                    <p className='text-white'>{products?.products?.length}</p>
                    <p className='text-white'>products</p>
                </div>
            </div>
            <div>
                {products?.products?.length === 0 &&
                    <h1 className='text-white'>No products found</h1>
                }
                <TableContainer component={Paper} className='bg-black' style={{borderTop:"0"}}  sx={{ backgroundColor: "black", border: 0 }}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow sx={{ color: "#141416" }}>
                                <TableCell style={{color:"white",fontSize:"12px"}}>PRODUCT</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody sx={{ width: "500" }}>
                            {products?.products?.map((row: any) => (
                                <TableRow key={row._id} sx={{
                                    "&:last-child td, &:last-child th": { border: 0 }, "&:nth-of-type(odd)": {
                                        backgroundColor: "#141416", color: "white",
                                        border: 0, borderColor: "#2f2f33"
                                    },
                                }}>
                                    <TableCell width={"100"} component="th" scope="row" sx={{ color: "#239bca", border: 0 }}>
                                       <div className='flex items-center gap-2'>
                                        <input type="checkbox" className='checkbox:bg-red-500 w-4 h-4 outline-none' /> {row?.name} {""}{row?._id}
                                        <Link to={"#"}>
                                        </Link>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </Wrapper>
    )
}
