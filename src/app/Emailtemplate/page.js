"use client"
import moment from "moment"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import {useState} from "react"
export default function Emailtemplate(){
    const date=moment().format("DD-MM-YYYY")

    const [startDate,setstartDate]=useState(null);
    const [endDate,setendDate]=useState(null);
    return (
        
        <div className="flex flex-col  items-center justify-center  min-h-screen min-w-screen  text-black bg-white">    
            <div className=" border-1 font-extrabold grid w-7/8    grid-cols-1 h-20 border-1 border-black  bg-white">
                    <div className="flex items-center   justify-center bg-gradient-to-r bg-white text-black  border-1 border-black">Campaign Name-{date}</div>
                </div>
                <div className=" h-18 border-1 font-extrabold grid w-7/8   grid-cols-[1fr_2fr] border-black w-1/3 bg-white text-black">
                    <div className="flex items-center  justify-center  border-1 border-black">Campaign Date</div>
                    <div className="flex items-center space-x-12  justify-center   border-1   border-black">
                        <p className="whitespace-nowrap -ml-6">Start Date</p>
                         <DatePicker selected={startDate} onChange={(date)=>setstartDate(date)} dateFormat="dd-MM-yyyy" placeholderText="select start date" className="w-55 -ml-7 rounded-lg border-1 p-3 whitespace-nowrap border-black  text-black" popperPlacement="bottom"
  popperClassName="z-50"
  portalId="root-portal"/>
                    {startDate && (
                    <>
                    <p className="font-medium -ml-40">
                    📅 {moment(startDate).format("dddd")}
                    </p>
                    </>
                    )          
                    }
                    
                    
                        
                        <p className="whitespace-nowrap ml-3">end Date</p>
                         <DatePicker selected={endDate} onChange={(date)=>setendDate(date)} dateFormat="dd-MM-yyyy" placeholderText="select end date" className="w-55 p-3  rounded-lg border-1 whitespace-nowrap border-black  text-black" popperPlacement="bottom"
  popperClassName="z-50"
  portalId="root-portal"/>
                    {endDate && (
                    <>
                    <p className="font-medium -ml-42 text-md">
                    📅 {moment(endDate).format("dddd")}
                    </p>
                    
                    </>
                    
                    )          
                    }
                    
                    
                    
                        </div>
                   
                </div>
                <div className=" h-15 border-1 bg-gradient-to-tl w-7/8 bg-white font-extrabold grid    grid-cols-[1fr_1fr_1fr_1fr] border-black w-1/3 ">
                    <div className="flex items-center  bg-gradient-to-tl bg-white justify-center  border-1 border-black">Target Amount</div>
                    <div className="flex items-center   bg-white justify-center  p-1 border-1   border-black">20000</div>
                    <div className="flex items-center  bg-white justify-center  border-1 border-black">Archived Amount</div>
                    <div className="flex items-center  bg-white justify-center  p-1 border-1   border-black">7000</div>
                    
                </div>
                 <div className=" h-15 border-1 font-extrabold grid w-7/8   grid-cols-1 border-black w-1/3 bg-white">
                    <div className="flex items-center  justify-center bg-white text-black  border-1 border-black">Branches Details</div>
                </div>
                 <div className=" h-15 border-1 font-extrabold grid w-7/8    grid-cols-[1fr_1fr_2fr] border-black w-1/3 bg-white">
                    <div className="flex items-center bg-white justify-center  border-1 border-black">Branch Name 1</div>
                    <div className="flex items-center bg-white  justify-center  p-1 border-1   border-black">10000</div>
                    <div className="flex items-center bg-white text-black justify-center  border-1 border-black">5000</div>
                </div>
                <div className=" h-15 border-1 font-extrabold grid w-7/8   grid-cols-[1fr_1fr_2fr] border-black w-1/3 bg-white">
                    <div className="flex items-center bg-white justify-center  border-1 border-black">Branch Name 2</div>
                    <div className="flex items-center bg-white text-black justify-center  p-1 border-1   border-black">10000</div>
                    <div className="flex items-center bg-white  justify-center  border-1 border-black">2000</div>
                </div>
                </div>
            
        
        
    )
}

