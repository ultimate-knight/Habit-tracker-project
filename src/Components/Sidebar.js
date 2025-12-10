// import React from "react";
// import { HomeIcon } from "@heroicons/react/24/solid";
// import { FolderIcon } from "@heroicons/react/24/outline";
// import { DocumentIcon } from "@heroicons/react/24/outline";
// import { Cog6ToothIcon } from "@heroicons/react/24/outline";

// export default function Sidebar() {
//   return (
//     <>
//       <div className="flex flex-col h-screen  mr-18 pr-0 justify-end items-center container bg-gradient-to-l  from-purple-600 to-blue-600 overflow-hidden w-64  text-white -translate-y-12 -translate-0.5">
//         <div className="fixed left-5 top-3">
//         <img src="https://img.icons8.com/m_rounded/512/FFFFFF/tailwind_css.png" className="w-9 h-10 "/>
//         </div>
//         <ul>
//         <div className="mb-100 fixed -top-30 left-4">
//           <li className="flex justify-start items-start pr-25 cursor-pointer hover:text-blue-300">
//             <HomeIcon className="h-5 w-7 text-white-600 mt-50" />
//             <span className="mt-50 pl-2 font-extrabold"><a href="/" target="_blank">Dashboard</a></span>
//           </li>
//           <li className="flex justify-start mt-1 items-start pr-25 cursor-pointer hover:text-blue-300">
//             <FolderIcon className="h-5 w-7 mt-1 text-white-600" />
//             <span className="mb-1 pl-2 font-extrabold">Projects</span>
//           </li>
//           <li className="flex pr-25 cursor-pointer hover:text-blue-300">
//             <DocumentIcon className="h-8 w-5.5 ml-1 text-white-600" />
//             <span className="pl-3 mt-1.5 font-extrabold">Documents</span>
//           </li>
//           </div>
//           <li className="flex justify-start items-start pr-25 cursor-pointer hover:text-blue-300 mt-70">
//             <Cog6ToothIcon className="h-10 w-6 mb-1 text-white-600" />
//             <span className="pl-3 font-extrabold mt-2">Settings</span>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }



"use client"
import React, { useState } from "react";
import { HomeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { FolderIcon, DocumentIcon, Cog6ToothIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [tudung,settudung]=useState(null);
  const [isopen,setisopen]=useState(false);


  const toggling=(args)=>{
    settudung(tudung===args?null:args);
  }

  return (
    <>
      {/* Hamburger button — visible at <=600px */}
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((s) => !s)}
        className="hidden ml-1 max-[600px]:fixed max-[600px]:block left-4 top-4 z-50 p-2 rounded-md bg-white/10 hover:bg-white/20"
      >
        {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-8 w-8 bg-gradient-to-l from-purple-600 to-blue-600  text-white -translate-x-6 -translate-y-4 rounded-sm" />}
      </button>

      {/* Desktop sidebar: shown above 600px, hidden at <=600px */}
      <aside
        className={`max-[600px]:hidden flex flex-col h-screen justify-between items-center bg-gradient-to-l from-purple-600 to-blue-600 w-64 text-white fixed left-0 top-0 p-4 overflow-hidden`} 
      >
        <div className="w-full">
          <div className="mb-6">
            <img src="https://img.icons8.com/m_rounded/512/FFFFFF/tailwind_css.png" className="w-9 h-10" alt="tailwind" />
          </div>

          <ul className="space-y-4">
            <li className="flex items-center cursor-pointer hover:text-blue-300">
              <HomeIcon className="h-5 w-5 text-white" />
              <a href="/" target="_blank" rel="noreferrer" className="pl-3 font-extrabold">Dashboard</a>
            </li>

            <li className="flex items-center cursor-pointer hover:text-blue-300">
              <FolderIcon className="h-5 w-5 text-white" />
              {/* <span className="pl-3 font-extrabold">Projects</span> */}
             <div className="flex items-center ml-3 font-extrabold" onClick={()=>toggling("notes")}>
                <span>Notes</span>
                {"notes"===tudung?<ChevronUpIcon size={20}/>:<ChevronDownIcon size={20}/>}
                 {tudung === "notes" && (
          <div className="flex flex-col fixed  justify-start -ml-1 mt-50 space-y-1">
            <Link href={"/new-notes"}>
            <div className="p-2 hover:bg-gray-800 rounded cursor-pointer" >Create notes</div>
            </Link>
            <Link href={"/notes"}>
            <div className="p-2 hover:bg-gray-800 rounded cursor-pointer">Existing notes</div>
            </Link>
            <div className="p-2 hover:bg-gray-800 rounded cursor-pointer">Edit notes</div>
            <div className="p-2 hover:bg-gray-800 rounded cursor-pointer">update notes</div>
          </div>
        )}
             </div>

            
            </li>

            <li className={`flex items-center cursor-pointer hover:text-blue-300 ${tudung?"mt-45":"mt-0"}`}>
              <DocumentIcon className="h-5 w-5 text-white" />
              <span className="pl-3 font-extrabold">Documents</span>
              
            </li>
          </ul>
        </div>

        <div className="w-full">
          <div className="flex items-center cursor-pointer hover:text-blue-300">
            <Cog6ToothIcon className="h-5 w-5 text-white" />
            <span className="pl-3 font-extrabold">Settings</span>
          </div>
        </div>
      </aside>

      {/* Mobile sidebar overlay — shown when open and at <=600px */}
      <div
        className={`fixed inset-0 z-40 transition-opacity ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none" } max-[600px]:block hidden`}
        aria-hidden={!open}
      >
        {/* backdrop */}
        <div
          className={`absolute inset-0 bg-black/40`}
          onClick={() => setOpen(false)}
        />

        {/* sliding panel */}
        <nav
          className={`absolute left-0 top-0 h-full w-64 bg-gradient-to-l from-purple-600 to-blue-600 text-white p-4 transform transition-transform ${open ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="mb-6 flex items-center justify-between">
            <img src="https://img.icons8.com/m_rounded/512/FFFFFF/tailwind_css.png" className="w-9 h-10" alt="tailwind" />
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-1">
              <XMarkIcon className="h-6 w-6 text-white" />
            </button>
          </div>

          <ul className="space-y-4">
            <li className="flex items-center cursor-pointer hover:text-blue-300">
              <HomeIcon className="h-5 w-5 text-white" />
              <a href="/" target="_blank" rel="noreferrer" className="pl-3 font-extrabold">Dashboard</a>
            </li>

            <li className="flex items-center cursor-pointer hover:text-blue-300">
              <FolderIcon className="h-5 w-5 text-white" />
              <span className="pl-3 font-extrabold">Projects</span>
            </li>

            <li className="flex items-center cursor-pointer hover:text-blue-300">
              <DocumentIcon className="h-5 w-5 text-white" />
              <span className="pl-3 font-extrabold">Documents</span>
            </li>

            <li className="flex items-center cursor-pointer hover:text-blue-300 pt-6">
              <Cog6ToothIcon className="h-5 w-5 text-white" />
              <span className="pl-3 font-extrabold">Settings</span>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
