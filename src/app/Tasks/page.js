"use client";
import { useState } from "react";


export default function Tasks(){
    const [notes,setnotes]=useState();
    const [notes1,setnotes1]=useState([]);

    function addnotes(){
        setnotes1([...notes1,notes])
        setnotes([])
    }

    function deleteall(){
        setnotes1([])
    }
    return (
        <>
        <div className="flex flex-col items-center space-y-3 justify-start min-h-screen min-w-screen bg-white text-black">
                <span className="p-10 font-bold text-3xl">Task App</span>
                <div className="flex flex-row space-x-3">
                        <input type="text" value={notes} onChange={(e)=>setnotes(e.target.value)} placeholder="enter your tasks" className="border-1 border-black h-fit w-fit p-3 rounded-lg" required/>
                        <button onClick={addnotes} className="p-3 rounded-lg cursor-pointer h-fit w-fit font-bold bg-green-700 text-green-300">Add Task</button>
                        <button onClick={deleteall} className="p-3 rounded-lg cursor-pointer h-fit w-fit font-bold bg-red-700 text-red-300">Delete All</button>
                </div>
                <ul className="flex flex-col space-y-3 p-5  text-gray-300">
                    {
                        notes1.map((note,index)=>{
                            return (
                                <>
                            <li key={index} className="px-10 py-4 rounded-lg bg-gray-700">
                                <div className="flex flex-row   text-white">
                                <span className="font-bold">{note}</span>  
                                <div className="space-x-4 mt-0.5 ml-30">
                                <span className="h-fit w-fit rounded-lg bg-red-500 p-2">Delete</span>
                                <span className="h-fit w-fit rounded-lg bg-blue-500 p-2">Edit</span>
                                </div>
                                </div>
                                </li>
                            </>
                            )
                        })
                    }
                </ul>
        </div>
        </>
    )
}