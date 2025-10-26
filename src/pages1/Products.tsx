

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Wrapper from "../component/atom/Wrapper";
import { useContext } from "react";
import { DataWrapper } from "../../context";
import { products_type } from "../component/type";



    
export default function Products() {
  const {products,setIsNewProduct} = useContext(DataWrapper)
 
  function showModal(){
    setIsNewProduct((prev:boolean)=>!prev)
  }

  return (
    <Wrapper>
      {/* {isNewProduct && 
      <div className="flex flex-col bg-amber-300 fixed z-[433333334444] items-center m-auto justify-center">
        <NewProductModal/>
      </div> 
      } */}
      <div className="flex justify-between items-center">

        <h1 className="text-2xl font-[Bricolage_Grotesque]">Products</h1>
        <button className="bg-[#0a0a2a] px-2 py-1 rounded-md text-white font-[Bricolage_Grotesque]" onClick={showModal}>Create Product</button>
      </div>
      <div style={{ marginTop: "1rem" }} className="mt-3 flex flex-col gap-5">
   
        <div>
        <div className="flex justify-between w-full flex-wrap gap-5">
 <div className="flex items-center gap-3">
          <input placeholder="expired,stock,category,name,price" type="text" className="w-auto font-[Bricolage_Grotesque] border-none p-1 outline-1 placeholder:text-sm placeholder:text-center bg-white rounded-md border-[#0a0a2a]" name="" id="" />
        <button className="bg-[#d5d5e2c9] text-sm px-2 py-[7px] text-black font-[Montagu_Slab]">Filter</button>
        </div>
        </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell>NAME</TableCell>
                  <TableCell align="center">ID</TableCell>
                  <TableCell align="center">PRICE</TableCell>
                  <TableCell align="center">STOCK</TableCell>
                  <TableCell align="center">PUB DATE</TableCell>
                  <TableCell align="right">EXPIRING DATE</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products?.products?.map((row:products_type) => (
                  <TableRow key={row._id} sx={{
                    "&:last-child td, &:last-child th": { border: 0 }, "&:nth-of-type(odd)": {
                      backgroundColor: "#0a0a2a11",color:"white" // ✅ correct spelling
                    },
                  }}>
                    <TableCell component="th" scope="row">
                      {row?.name}
                    </TableCell>
                    <TableCell align="center">{row?._id}</TableCell>
                    <TableCell align="center">${row?.price}</TableCell>
                    <TableCell align="center">{row.stock}</TableCell>
                    <TableCell align="center">{row.pub_date}</TableCell>
                    <TableCell align="right">{row.expiring_date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </Wrapper>

  );
}
