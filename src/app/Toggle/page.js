"use client"
import {useState} from "react";

export default function Toggle(){
    const [toggle,setToggle]=useState(false);
    return (
        <>
        <div className="flex flex-col items-center cursor-pointer justify-center  min-h-screen min-w-screen bg-white">
            <div onClick={()=>setToggle(!toggle)} className={` rounded-full border-1 border-gray-500  w-34 h-14 ${toggle?"bg-blue-800":"bg-white"}`} >
                <div className={`bg-white h-14 mb-2  border-1 border-black rounded-full w-14 transition-all duration-950 mb-5 ${toggle?"translate-x-20":"translate-x-0"}`}></div>
            </div>
            {toggle &&
            <>
            <div>
                <h3 className="text-white p-2 rounded-lg  w-fit bg-pink-700 mt-5">Hey there how are u there u go i don't get it</h3>
            </div>
            </>
            }
        </div>
       
        </>
    )
}