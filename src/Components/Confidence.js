import React from "react";

function Confidence() {
  return (
    <div>
      <div className="flex flex-col fixed top-[550px] left-80 justify-start items-start bg-white border-1 border-gray-300 w-11/11 h-60 rounded-2xl mt-4">
        <span className="font-extrabold text-black mt-6 ml-5">
          Confidence Levels
        </span>
        <div className="flex flex-row">
          <span className="text-black ml-5 w-full">React</span>
          <span className="font-extrabold text-purple-600 fixed left-7/9 ml-3">
            5/10
          </span>
          <div className="h-3.5 w-8/12 bg-gray-200 rounded-2xl fixed left-1/9 mt-2">
            <div className="h-3.5 w-6/12 bg-purple-600 rounded-2xl">
              <div className="rounded-full h-4 w-5 border border-2 border-white bg-purple-600"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confidence;
