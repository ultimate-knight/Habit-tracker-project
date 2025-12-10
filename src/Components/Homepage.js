import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/24/outline";

export default function Searchbar() {
  return (
    <>
      <div className="flex items-center bg-white  h-12 px-4 cursor-pointer shadow-sm border-b border-gray-100 rounded-b-sm focus:outline-none overflow-x-hidden">
        <div className="flex items-center space-x-2 fixed left-73 max-[600px]:-translate-x-7/2">
          <MagnifyingGlassIcon className="h-6 w-6  text-gray-500 opacity-55" />
          <h6 className="text-gray-500 opacity-45 text-xs">Search</h6>
        </div>

        <div className="flex items-center ml-auto space-x-1 sm:space-x-2 md:space-x-3 shrink-0">
          <BellIcon className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 opacity-45 text-gray-600" />
          <div className="bg-gray-400 h-4 sm:h-6 w-0.5 opacity-45 shrink-0"></div>
          <img
            src="/maaz.jpeg"
            className="h-9 w-9 object-center sm:h-9 sm:w-9 rounded-full shrink-0"
            alt="Profile"
          />
          <select
            id="names"
            className="font-extrabold py-1 px-1 text-sm sm:text-base text-black border-0 bg-transparent min-w-0 max-w-[80px] sm:max-w-none truncate"
          >
            <option value="maaz">maaz</option>
            <option value="saif">saif</option>
            <option value="aziz">aziz</option>
          </select>
        </div>
      </div>
    </>
  );
}





// import React from "react";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import { BellIcon } from "@heroicons/react/24/outline";

// export default function Searchbar() {
//   return (
//     <>
//       <div className="flex items-center justify-between bg-white h-12 px-4 ml-1 cursor-pointer shadow-sm border-b border-gray-100 rounded-b-sm focus:outline-none overflow-hidden min-w-0">
//         <div className="flex items-center space-x-2 min-w-0 shrink">
//           <MagnifyingGlassIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-500 opacity-55 shrink-0" />
//           <h6 className="text-gray-500 opacity-45 text-xs whitespace-nowrap hidden sm:block">Search</h6>
//         </div>

//         <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 shrink-0 min-w-0">
//           <BellIcon className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 opacity-45 text-gray-600" />
//           <div className="bg-gray-400 h-4 sm:h-6 w-0.5 opacity-45 shrink-0"></div>
//           <img
//             src="/maaz.jpeg"
//             className="h-7 w-7 sm:h-9 sm:w-9 rounded-full shrink-0"
//             alt="Profile"
//           />
//           <select
//             id="names"
//             className="font-extrabold py-1 px-1 text-sm sm:text-base text-black border-0 bg-transparent min-w-0 max-w-[60px] sm:max-w-none truncate appearance-none"
//           >
//             <option value="maaz">maaz</option>
//             <option value="saif">saif</option>
//             <option value="aziz">aziz</option>
//           </select>
//         </div>
//       </div>
//     </>
//   );
// }