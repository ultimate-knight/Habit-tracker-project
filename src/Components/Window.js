import React from "react";


export default function Window() {
  return (
    <>
      <div className="flex max-[600px]:overflow-x-hidden space-y-4 max-[600px]:space-y-4 max-[500px]:-translate-x-1/11  max-[641px]:ml-1 max-[482px]:ml-10   max-[616px]:pl-42 max-[616px]:-ml-20 max-[631px]:pl-32 max-[631px]:-ml-15  max-[600px]:w-screen max-[600px]: max-[600px]:items-center max-[600px]:ml-8  max-[600px]:justify-center max-[600px]:flex-wrap   max-[600px]:-translate-x-1/9  top-12 items-center justify-center translate-x-[261px] max-[377px]:ml-5   h-screen w-full overflow-y-auto">
      {/* <div className="flex flex-wrap max-[600px]:w-full max-[600px]:translate-x-0 top-12 items-center justify-center h-screen w-full overflow-y-auto"> */}
        <div className="lg:pr-5 space-y-4 lg:pl-5  md:pr-5 md:pl-5 sm:pr-5 sm:pl-5 h-10/12  w-9/12 mr-66 mb-22 pr-3   border-gray-300">
          <div className="flex max-[482px]:h-45 max-[377px]:w-[195%]  max-[647px]:h-30 max-[600px]:w-[160%]  max-[454px]:pr-3 max-[454px]:w-[160%]     max-[600px]: items-center flex-row justify-start max-[482px]:h-40 h-13 w-12/12 p-7.5 mt-5 border border-1 border-gray-300 border-opacity-50 rounded-2xl">
            <div className="w-full ml-2 font-extrabold max-[345px]:-translate-x-6 text-black">
              <span>Good morning,Maaz!👋</span>
            </div> 
            <div className="flex justify-end w-full">
              <div className="flex items-center border-none max-[345px]:whitespace-pre max-[345px]:-ml-7 max-[482px]:translate-y-4/3 max-[482px]:-translate-x-4/5  justify-center border-2 border-black px-5 py-3 w-36 rounded-full bg-orange-500">
                <span className="font-extrabold text-white text-sm">
                  🔥 7 day streak
                </span>
              </div>
              {/* </div> */}
            </div>
          </div>
          {/* NEXTJS REACT */}
          <div className="flex space-y-4 flex-row  max-[600px]:pl-0 max-[925px]:flex max-[925px]:flex-col  gap-4 items-center">
            <div className="flex  flex-col justify-center max-[377px]:w-[195%] max-[377px]:translate-x-2/8 max-[600px]:w-[165%] max-[600px]:translate-x-2/11 items-center h-35 w-45 max-[925px]:w-1/1 bg-gradient-to-l mt-3 from-purple-600 to-blue-600 border-2 rounded-2xl">
              <img src="./Books.png" className="h-7 w-7" />
              <h5 className="font-extrabold">NEXTJS, REACT</h5>
              <span>+2 more</span>
              <span>currently learning</span>
            </div>
            <div className="flex space-y-4 flex-col max-[377px]:w-[195%] max-[377px]:translate-x-2/8 max-[600px]:pb-10  max-[600px]:flex-1 max-[600px]:w-11/7 max-[600px]:translate-x-2/11 text-black justify-start items-center bg-white border-1 border-gray-300 h-35 w-12/12 rounded-2xl">
              <div className="flex flex-col   justify-start w-full mt-5 ml-4">
                <span className="font-extrabold">Career Tracker</span>
                <span className="text-purple-800 font-extrabold">
                  Phase 1 of 3:<span className="block">Building Frontend</span>
                </span>
                <div className="flex items-center justify-center bg-green-500 font-extrabold rounded-full w-7 h-7 p-5  text-white">
                  <span>CT</span>
                </div>
                <span className="ml-12 -mt-8 text-gray-600">
                  Active Project
                </span>
              </div>
              <div className="flex space-y-4 flex-col justify-start items-end w-full max-[364px]:mt-5 max-[364px]:-translate-x-3/8 -mt-15 -ml-5">
                <div className="bg-pink-100 h-14 w-14 rounded-full">
                  <img src="./rocket.png" className="h-7 w-7 mt-4 ml-3" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex  flex-row max-[925px]:flex max-[925px]:flex-col">
            <div className="flex flex-col max-[925px]:mt-4  max-[985px]:h-60 max-[377px]:w-[195%] max-[600px]:w-[160%]   justify-start h-60 max-[402px]:h-70  bg-gradient-to-l  from-purple-600 to-blue-600 border-2 max-[925px]:pr-0 rounded-2xl pr-3">
              <span className="mt-2 ml-4 font-extrabold">Revise Knowledge</span>
              <div className="flex flex-col  items-center justify-center max-[985px]:mt-1 max-[985px]:pb-3 max-[985px]:h-48 items-center   h-45 w-9/10 p-2 ml-5 mt-2 border-2  max-[402px]:pb-3 max-[1124px]:h-45 max-[402px]:h-55 max-[386px]:pb-2 max-[386px]:overflow-y-hidden bg-gradient-to-br pb-2 from-purple-500 to-purple-700 opacity-80 rounded-2xl cursor-pointer">
                <h6 className="text-white font-extrabold text-[13px] mt-2 max-[1124px]:ml-7">
                  What hook is used for state management in React?
                </h6>
                <div className="h-6 w-6/7 border-1 border-gray-50 rounded-md mt-3 text-[13px] text-white font-extrabold bg-transparent opacity-80">
                  <span className="ml-2">A) useState</span>
                </div>
                <div className="h-6 w-6/7 border-1 border-gray-50 rounded-md mt-3 text-[13px] text-white font-extrabold bg-transparent opacity-80">
                  <span className="ml-2">B) useEffect</span>
                </div>
                <div className="h-6 w-6/7 border-1 border-gray-50 rounded-md mt-3 text-[13px] text-white font-extrabold bg-transparent opacity-80">
                  <span className="ml-2">C) useContext</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col max-[925px]:mt-8 max-[377px]:w-[190%] max-[600px]:w-[155%]  items-start justify-start w-2xl max-[925px]:w-full max-[925px]:ml-1 pr-2.5 max-[406px]:h-60  h-60   bg-white border-1 border-gray-300 rounded-2xl  ml-4">
              <span className="text-black font-extrabold ml-4 mt-5">
                Learning Backlogs
              </span>
              <div className="flex flex-row max-[406px]:-mt-5   max-[1231px]:text-[10px] items-center text-purple-800 text-[12px] font-extrabold ml-4 gap-3 mt-2 max-[655px]:whitespace-pre">
                <div className="bg-pink-100 rounded-2xl p-1.5 ">
                  TypeScript Fundamentals
                </div>
                <div className="bg-pink-100 rounded-2xl p-1.5 max-[406px]:ml-4 max-[406px]:translate-y-1/2 max-[406px]:-translate-x-4/2 max-[406px]:mt-10 max-[655px]:whitespace-pre">
                  Docker Basics
                </div>
                <div className="bg-pink-100 rounded-2xl p-1.5 max-[406px]:-ml-3 max-[406px]:mt-16 max-[1095px]:translate-y-9/7 max-[1095px]:-translate-x-60 max-[655px]:whitespace-pre">
                  System Design
                </div>
              </div>
              <div className="h-6 w-9/10 border-1 border-gray-400 max-[1095px]:mt-11 ml-5.5 mt-4 rounded-md text-gray-500 ">
                <span className="ml-2 font-sans opacity-70">
                  Add new topic...
                </span>
              </div>
            </div>
          </div>

           <div className="flex mt-8 flex-wrap max-[925px]:mt-8  max-[377px]:w-[190%]  max-[600px]:w-[155%] flex-col  justify-start items-start  border-1 border-gray-300 w-1/1 h-90 rounded-2xl overflow-hidden">
            <span className=" font-extrabold text-black mt-6 ml-5">
              Confidence Levels
            </span>
            <div className="flex flex-col flex-wrap flex-1 gap-7 items-center mt-3">
              <div className="flex flex-row flex-wrap shrink">
                <span className="text-black -ml-3">React</span>   
                <span className="font-extrabold text-purple-600 max-[631px]:ml-15 max-[1140px]:-ml-1 max-[1140px]:fixed max-[1140px]:left-6/12 mr-auto whitespace-pre fixed left-4/6 ml-4 mt-5 space-x-[300px]">
                  5/10
                </span>
                <div className="flex flex-wrap shrink h-3.5 w-6/11 max-[631px]:ml-15 max-[1140px]:w-4/11 bg-gray-200 rounded-2xl fixed left-1/8 mt-7">
                  <div className="h-3.5 w-6/12 bg-purple-600 rounded-2xl">
                    <div className="rounded-full absolute -top-1 left-3/7 h-5 w-5 border border-2 border-white bg-purple-600"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <span className="text-black ml-2.5 ">NEXTJS</span>
                <span className="font-extrabold max-[631px]:ml-1  text-purple-600  max-[1140px]:-ml-14 max-[1140px]:fixed max-[1140px]:left-6/12  translate-x-13 fixed left-4/6 -ml-9 mt-5">
                  3/10
                </span>
                <div className="h-3.5 w-6/11 max-[631px]:ml-15 max-[1140px]:w-4/11 bg-gray-200 rounded-2xl fixed left-1/8 mt-7">
                  <div className="h-3.5 w-3/12 bg-purple-600 rounded-2xl">
                    <div className="rounded-full absolute -top-1 left-2/11 h-5 w-5 border border-2 border-white bg-purple-600"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <span className="text-black ml-5 ">JavaScript</span>
                <span className="font-extrabold max-[631px]:ml-15 text-purple-600 max-[1140px]:-ml-1 max-[1140px]:fixed max-[1140px]:left-6/12 fixed left-4/6 ml-3 mt-5">
                  7/10
                </span>
                <div className="h-3.5 w-6/11 max-[631px]:ml-15 max-[1140px]:w-4/11 bg-gray-200 rounded-2xl fixed left-1/8 mt-7">
                  <div className="h-3.5 w-7/12 bg-purple-600 rounded-2xl">
                    <div className="rounded-full relative -top-1 left-7/8 h-5 w-5 border border-2 border-white bg-purple-600"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <span className="text-black ">NodeJS</span>
                <span className="font-extrabold max-[631px]:ml-15 text-purple-600 max-[1140px]:-ml-1 max-[1140px]:fixed max-[1140px]:left-6/12  w-fit fixed left-4/6 ml-5 mt-5">
                  4/10
                </span>
                <div className="h-3.5 w-6/11 max-[631px]:ml-15 max-[1140px]:w-4/11 bg-gray-200 rounded-2xl fixed left-1/8 mt-7">
                  <div className="h-3.5 w-4/12 bg-purple-600 rounded-2xl">
                    <div className="rounded-full absolute -top-1 left-2/8  h-5 w-5 border border-2 border-white bg-purple-600"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <span className="text-black ml-4">MongoDB</span>
                <div className="h-3.5 w-6/11 max-[1140px]:w-4/11 max-[631px]:ml-15 bg-gray-200 rounded-2xl fixed left-1/8 mt-7">
                  <div className="h-3.5 w-3/12 bg-purple-600 rounded-2xl">
                    <div className="rounded-full absolute -top-1 left-2/11 h-5 w-5 border border-2 border-white bg-purple-600"></div>
                  </div>
                </div>
                <span className="font-extrabold text-purple-600 max-[631px]:ml-15 max-[1140px]:fixed max-[1140px]:left-6/12 max-[1140px]:mt-5 fixed max-[1140px]:-ml-1 left-4/6 ml-5 mt-5">
                  2/10
                </span>
              </div>
            </div>
          </div> 
       
          <div className="h-30"></div>
        </div>
      </div>
    </>
  );
}






