

"use client";
import { useState,useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
 import "@fortawesome/fontawesome-free/css/all.min.css";
 import Progressring from "@/Components/Progressring";
import {Toothbrush,StarIcon,SettingsIcon,Ban,CarrotIcon,HeartIcon,Dog,PersonStandingIcon,Brush,PlusIcon,PauseIcon,CigaretteOffIcon,PlayIcon} from "lucide-react"



export default function Homepage(){
  const [change,setchange]=useState(false);
  const [walkdog,setwalkdog]=useState(false);
  const [running,setrunning]=useState(false)
  const [dogrun,setdogrun]=useState(600);
  const [count,setcount]=useState(600);
  const [vegger,setvegger]=useState(70);
  const [countrun,setcountrun]=useState(600);

  useEffect(()=>{
    if(!walkdog || dogrun===0){
      return
    }

    const interval=setInterval(()=>{
        setdogrun(prev=>prev-1)
    },800)

    return ()=>clearInterval(interval);
  },[walkdog,dogrun])

    useEffect(()=>{
    if(!running || countrun===0){
      return
    }

    const interval=setInterval(()=>{
        setcountrun(prev=>prev-1)
    },800)

    return ()=>clearInterval(interval);
  },[countrun,running])

  useEffect(()=>{
    if(!change || count===0){
      return
    }

    const interval=setInterval(()=>{
        setcount(prev=>prev-1)
    },800)

    return ()=>clearInterval(interval);
  },[count,change])


  function vegclick(){
    if(vegger===0){
      return
    }

    setvegger(vegger-1)
  }

  




  const minutes=Math.floor(count/60);
  const seconds=Math.floor(count%60);


  const Minutes=Math.floor(countrun/60);
  const Seconds=Math.floor(countrun%60);

  const formattedMinutes=String(minutes).padStart(2,0);
  const formattedSeconds=String(seconds).padStart(2,0)

    const FormattedMinutes=String(Minutes).padStart(2,0);
  const FormattedSeconds=String(Seconds).padStart(2,0)


  let fullTime=600;


  let progress = (count / fullTime) * 100;
  
  let runner=(countrun/fullTime)*100

  let veggie=vegger
 
  return (
    <>
    <div className="flex flex-col overflow-x-hidden overflow-y-hidden justify-center  items-center  min-h-screen min-w-screen bg-gradient-to-b bg-white/10 from-blue-500 via-purple-700 to-pink-400  text-black">
        <div className="grid grid-cols-2 gap-x-7 gap-y-12 mt-5 max-[376px]:mt-0">
          <div className="flex flex-col items-center space-y-3 -mt-3">
          <Progressring className="flex flex-col items-center justify-center rounded-full w-37 h-37 max-[376px]:w-32  max-[376px]:h-32 border-8 text-center border-white/40" stroke={9} progress={runner} radius={89}><img src="icons8-running-50.png" className="text-white h-25 w-25 max-[376px]:h-20 max-[376px]:w-20 mt-2 blur-none"/><span className="text-white space-y-2 font-extrabold -mt-2">1</span></Progressring>
          <div className="flex flex-row space-x-2  -ml-5">
            <span className="">{running?<PlayIcon onClick={()=>setrunning(!running)} className="absolute -mt-8  ml-23 text-white bg-black h-10 w-10 p-1  rounded-full"/>:<PauseIcon onClick={()=>setrunning(!running)} className="absolute -mt-8  ml-23 text-white bg-black h-10 w-10 p-1  rounded-full"/>}</span>
          <HeartIcon className="text-white h-5 w-5 mt-3.5"/><span className="text-white whitespace-nowrap font-extrabold text-lg mt-3 max-[376px]:text-sm">RUN 2.3 KM</span>
          
          </div>
          <span className="text-white -mt-2">{FormattedMinutes}:{FormattedSeconds}</span>
          </div>
          <div className="flex flex-col space-y-3 items-center">
          <span className="flex flex-col items-center justify-center rounded-full w-37 h-37 max-[376px]:w-32  max-[376px]:h-32 border-8 text-center border-white/40 bg-white"><CigaretteOffIcon className="text-black h-20 w-20 max-[376px]:h-17 max-[376px]:w-17"/><span className="text-black space-y-2 font-extrabold">5</span></span>
          <div className="flex flex-row space-x-3 -ml-2">
          <Ban className="text-white h-5 w-5 font-extrabold"/>
          <span className="text-white font-extrabold max-[376px]:text-sm">DON'T SMOKE</span>
          </div>
          </div>
          <div className="flex flex-col space-y-3 items-center -mt-3">
          <Progressring onClick={vegclick}  className="flex flex-col items-center justify-center rounded-full w-37 h-37 max-[376px]:w-32  max-[376px]:h-32 border-8 text-center border-white/40 " stroke={9} progress={veggie} radius={89}><CarrotIcon onClick={vegclick} className="h-25 w-25 text-white max-[376px]:h-20 max-[376px]:w-20"/><span onClick={vegclick} className="text-white space-y-2 font-extrabold">{vegger}</span></Progressring>
          <span className="text-white font-extrabold max-[376px]:text-sm mt-2">EAT A HEALTHY MEAL</span>
          </div>
          <div className="flex flex-col items-center space-y-4 -mt-4">
            
         
          <Progressring className="flex flex-col items-center -mt-3 justify-center rounded-full w-37 h-37 max-[376px]:w-32  max-[376px]:h-32 border-8 text-center border-white/40" stroke={9} progress={progress} radius={89}><img src="brektor.png" className="text-white h-25 w-25 max-[376px]:h-20 max-[376px]:w-20"/><span className="text-white space-y-2 font-extrabold -mt-2">1</span></Progressring>
          <div className="flex flex-row space-x-2 whitespace-nowrap"><HeartIcon className="text-white h-5 w-5 mt-2 -ml-7"/><span className="text-white font-extrabold max-[376px]:text-sm mt-2">BRUSH YOUR TEETH</span></div>
          <span className="">{change?<PlayIcon onClick={()=>setchange(!change)} className="absolute -mt-20 ml-5 text-white bg-black h-10 w-10 p-1  rounded-full"/>:<PauseIcon onClick={()=>setchange(!change)} className="absolute -mt-20 ml-5 text-white bg-black h-10 w-10 p-1  rounded-full"/>}</span>
          <span className="text-white -mt-7">{formattedMinutes}:{formattedSeconds}</span>
          </div>
          <div className="flex flex-col space-y-3 items-center -mt-3">
         
          <Progressring className="flex flex-col items-center justify-center rounded-full w-37 h-37 max-[376px]:w-32  max-[376px]:h-32 border-8 text-center border-white/40 " stroke={9} progress={runner} radius={89}><Dog className="text-white h-25 w-25 max-[376px]:h-20 mt-3 max-[376px]:w-20"/></Progressring>
          <span className="text-white font-extrabold max-[376px]:text-sm mt-5">WALK THE DOG</span>
          <span className="text-white -mt-2">{FormattedMinutes}:{FormattedSeconds}</span>
          </div>
          <div className="flex flex-col space-y-3 items-center">
          <span className="flex flex-col items-center justify-center rounded-full w-37 h-37 max-[376px]:w-32  max-[376px]:h-32 border-8  border-white/40 ">
          <PlusIcon className="absolute text-center h-30 w-30 max-[376px]:h-20 max-[376px]:w-20 text-white font-extrabold"/>    
          </span>
          <span className="text-white font-extrabold max-[376px]:text-sm">ADD TASK</span>
          </div>

          
         
          <div className="flex flex-row justify-between relative max-[376px]:mt-7 items-center space-x-3 w-full mt-5"> 
            
            <SettingsIcon className="absolute  h-6 w-6 text-white ml-7"/>  
            <div className="flex flex-row justify-center items-center space-x-4 ml-43">  
            <span className="bg-white h-2 w-2 rounded-full"></span>
            <span className="whitespace-nowrap bg-white/40 h-2 w-2 rounded-full"></span>
            <span className="whitespace-nowrap bg-white/40 h-2 w-2 rounded-full"></span>
            <span className="whitespace-nowrap bg-white/40 h-2 w-2 rounded-full"></span>      
            </div>
            <StarIcon className=" absolute h-6 w-6 text-white ml-90"/>
          </div>
          
          
        </div>
    </div>
    </>
  )
}