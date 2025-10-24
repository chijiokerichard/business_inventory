import { IoPeople } from "react-icons/io5";
import { PiSealWarningFill } from "react-icons/pi";
import { FaProductHunt } from "react-icons/fa6";
import { MdPointOfSale } from "react-icons/md";
import { IoAnalyticsSharp } from "react-icons/io5";

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Wrapper from "../component/atom/Wrapper"


export default function Sales() {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    paid_type: string,
    customer: string,
  ) {
    return { name, calories, fat, carbs, paid_type,customer };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 340.0, 24, "POS","John"),
    createData('Ice cream sandwich', 237, 2912.0, 37, "CASH","Onyeka"),
    createData('Eclair', 262, 20043.0, 24, "POS","Charlse"),
    createData('Cupcake', 305, 120.4, 67, "BANK TR","Emeka"),
    createData('Gingerbread', 356, 4008.0, 49, "CASH","Philip"),
  ];

  return (
    <Wrapper>
      <div className="flex justify-between items-center">

        <h1 className="text-2xl font-[Bricolage_Grotesque]">Sales</h1>
        <button className="bg-[#0a0a2a] px-2 py-1 rounded-md text-white font-[Bricolage_Grotesque]">Create Sale</button>
      </div>
      <div style={{ marginTop: "1rem" }} className="mt-3 flex flex-col gap-5">
        <div className="flex gap-1 justify-between my-5 w-full">
          <div className=" flex [#0a0a2a1] bg-[#F8FAF7] text- shadow-sm rounded-md w-[300px] h-[100px] px-2 py-1">
            <div className="w-full font-[Bricolage_Grotesque] flex flex-col justify-between">
              <div className="flex items-center gap-2 justify-start">
                <PiSealWarningFill className="h-7 w-7 [#d3cbee99] bg-[#0a0a2a] p-1 text-white rounded-md " />

                <span className="text-[15px] font-[200] font-[Bricolage_Grotesque] text-[#BCBEBB] ">About To Expire Products</span>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="font-[600] text-[#3D3F3E] font-[Bitcount_Single] text-xl">10</p>
                <div className="flex gap-0.5 items-center">

                  <IoAnalyticsSharp className="h-5 w-5 text-[#8ca607]" /><span className="font-[Bitcount_Single] text-[#8ca607]">4%</span>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex [#0a0a2a1] bg-[#F8FAF7] text- shadow-sm rounded-md w-[300px] h-[100px] px-2 py-1">
            <div className="w-full font-[Bricolage_Grotesque] flex flex-col justify-between">
              <div className="flex items-center gap-2 justify-start">
                <MdPointOfSale className="h-7 w-7 [#d3cbee99] bg-[#0a0a2a] p-1 text-white rounded-md " />

                <span className="text-[15px] font-[200] font-[Bricolage_Grotesque] text-[#BCBEBB] ">Today's Sales</span>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="font-[600] text-[#3D3F3E] font-[Bitcount_Single] text-xl">$139.960</p>
                <div className="flex gap-0.5 items-center">

                  <IoAnalyticsSharp className="h-5 w-5 text-[#8ca607]" /><span className="font-[Bitcount_Single] text-[#8ca607]">4%</span>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex [#0a0a2a1] bg-[#F8FAF7] text- shadow-sm rounded-md w-[300px] h-[100px] px-2 py-1">
            <div className="w-full font-[Bricolage_Grotesque] flex flex-col justify-between">
              <div className="flex items-center gap-2 justify-start">
                <FaProductHunt className="h-7 w-7 [#d3cbee99] bg-[#0a0a2a] p-1 text-white rounded-md " />

                <span className="text-[15px] font-[200] font-[Bricolage_Grotesque] text-[#BCBEBB] ">Total products Sold Today</span>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="font-[600] text-[#3D3F3E] font-[Bitcount_Single] text-xl">1960</p>
                <div className="flex gap-0.5 items-center">

                  <IoAnalyticsSharp className="h-5 w-5 text-[#8ca607]" /><span className="font-[Bitcount_Single] text-[#8ca607]">7%</span>
                </div>
              </div>
            </div>
          </div>


        </div>
        <div>
        <div className="flex justify-between w-full flex-wrap gap-5">
 <div className="flex items-center gap-3">
          <input placeholder="search for product" type="text" className="w-[200px] font-[BitCount_Single] border-none p-1 outline-1 placeholder:text-sm placeholder:text-center bg-white rounded-md border-[#0a0a2a]" name="" id="" />
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
                  <TableCell align="center">QTY</TableCell>
                  <TableCell align="center">PAID TYPE</TableCell>
                  <TableCell align="center">PURCHASED BY</TableCell>
                  <TableCell align="right">DATE</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name} sx={{
                    "&:last-child td, &:last-child th": { border: 0 }, "&:nth-of-type(odd)": {
                      backgroundColor: "#0a0a2a11",color:"white" // ✅ correct spelling
                    },
                  }}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.calories}</TableCell>
                    <TableCell align="center">${row.fat}</TableCell>
                    <TableCell align="center">{row.carbs}</TableCell>
                    <TableCell align="center">{row.paid_type}</TableCell>
                    <TableCell align="center">{row.customer}</TableCell>
                    <TableCell align="right">{new Date().getFullYear()}</TableCell>
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
