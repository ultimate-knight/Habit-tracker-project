
// "use client"
// import React from 'react'
// import { useState } from "react"


// function page() {
//     const [move,setmove]=useState(false);
//     const [reverse,setreverse]=useState(false);

//   return (
//     <div className='flex flex-col justify-center items-center min-h-screen min-w-screen bg-white text-black'>
//             <div className='min-h-8 min-w-40 bg-amber-600 rounded-lg border-1 border-black'>
//                 <div className={"min-h-8 w-10 bg-blue-950 rounded-full border border-1 border-black"} onClick={() => {}}></div>
//             </div>
//     </div>
//   )
// }

// export default page





// "use client";
// import { useState } from "react";


// export default function Miscellaneous(){
//   const [state,setState]=useState(true);
//   return (
//     <>
//     <div className="text-black bg-white min-h-screen min-w-screen flex flex-col justify-center items-center">
//       <input type="checkbox" checked={state} onChange={(e)=>setState(e.target.checked)}/>
//       <span>{state?"i liked it":"i didnt like it"}</span>
//     </div>
//     </>
//   )
// }




// "use client";
// import { useState } from "react";

// export default function Miscellaneous(){
//     const [name,setname]=useState("maaz");
//     const [age,setage]=useState(0);

//     function handleupdater(){
//       setage(prev=>prev+1)
//       setage(prev=>prev+1)
//       setage(prev=>prev+1)
//     }
//     return (
//         <>
//         <div className="bg-white text-black space-y-5 flex flex-col justify-center items-center min-h-screen min-w-screen">
//                         <input value={name} onChange={(e)=>setname(e.target.value)} placeholder="enter ur name" className="border-1 border-black h-fit w-fit p-2 rounded-lg" required/>
//             <span>My name is {name}</span>
//             <span>My age is {age}</span>
//             <button className="border-1 border-black p-2 rounded-lg" onClick={handleupdater}>increment</button>
//         </div>
//         </>
//     )
// }



// 'use client';
// import { use, useState } from "react";


// export default function Miscellaneous(){
//   const [form,setform]=useState({
//     firstname:"maaz",
//     lastname:"baqtiyaar",
//     rollno:25,
//     email:"maaz2607@gmail.com"
//   })
//   return (
//     <>
//     <div className="flex flex-col items-center justify-center bg-white text-black min-h-screen min-w-screen">
      
//    <div className="flex flex-col rounded-lg space-y-3">
//     <span className="font-bold text-black">{form.firstname}</span>
//       <input type="text" placeholder="enter first name" value={form.firstname} onChange={(e)=>setform({...form,firstname:e.target.value})} className="border-1 border-black p-2 text-black" required/>

//       <span className="font-bold text-black">{form.lastname}</span>
//       <input type="text"  value={form.lastname} placeholder="enter ur last name" onChange={(e)=>setform({...form,lastname:e.target.value})} className="border-1 border-black p-2 text-black" required/>


//     <span  className="font-bold text-black">{form.rollno}</span>
//       <input type="number" placeholder="enter ur rollno" value={form.rollno} onChange={(e)=>setform({...form,rollno:e.target.value})} className="border-1 border-black p-2 text-black" required/>


//       <span  className="font-bold text-black">{form.email}</span>
//       <input type="email" placeholder="enter ur email" value={form.email} onChange={(e)=>setform({...form,email:e.target.value})} className="border-1 border-black p-2 text-black" required/>

//    </div>
      

//     </div>
//     </>
//   )
// }


"use client";
import { useState } from "react";

export default  function Miscellaneous(){

  const [state,setstate]=useState({
    name:"maaz",
    age:23,
    email:"maaz2607@gmail.com",
    artwork:{
      rollno:45,
      school:"gowtam"
    }
  })

  return (
    <>
    <div className="flex flex-col items-center justify-center bg-white text-black min-h-screen min-w-screen">
      <label>name</label>
      <input type="text" placeholder="enter ur name" value={state.name} onChange={(e)=>setstate({...state,name:e.target.name})}/>
      <label>age</label>
      <input type="number" placeholder="enter ur age" value={state.age} onChange={(e)=>setstate({...state,age:state.age})}/>
      <label>email</label>
      <input type="number" placeholder="enter ur email" value={state.email} onChange={(e)=>setstate({...state,email:state.target.email})}/>
      <label>rollno</label>
      <input type="number" placeholder="enter ur rollno" value={state.artwork.rollno} onChange={(e)=>setstate({...state,artwork:{...state.artwork,rollno:e.target.value}})}/>
      <label>school</label>
      <input type="text" placeholder="enter ur school" value={state.artwork.school} onChange={(e)=>setstate({...state,artwork:{...state.artwork,school:e.target.value}})}/>

    </div>
    </>
  )

}







// "use client"
// import React from "react"
// import { useState } from "react"

// export default function Miscellaneous(){
//     const [state,setstate]=useState({name:"",email:""})

//     function gerter(e){
//         const {name,value}=e.target;
//         setstate(prev=>({...prev,[name]:value}))
//     }


//     function handlesubmit(e){
//         e.preventDefault();
//         console.log("state",state);
//     }

//     return (
//         <div className="bg-white h-screen text-black">
//             <form onSubmit={handlesubmit} className="flex flex-col justify-start space-y-3 ml-4 translate-y-10">
//                 <label>Name:</label>
//                 <input type="text" autocomplete="on" maxLength={34} name="name" className="rounded-lg p-2 w-fit text-black border-1 border-black"  placeholder="enter ur name" value={state.name} onChange={gerter} required/>
//                  <label>Email:</label>
//                 <input type="text" autocomplete="on" name="email" maxLength={34} placeholder="enter ur email" className="rounded-lg p-2 w-fit text-black border-1 border-black" value={state.email} onChange={gerter} required/>
//                 <button type="submit" className="border-1 border-black bg-purple-800 text-white p-2 rounded-lg w-fit">submit</button>
//             </form>
//         </div>
//     )
// }


//practising useRef//

// "use client"
// import React from "react";
// import {useRef,useState} from "react"


// export default function Refuse(){
//     const reference=useRef("");
//     const [state,setstate]=useState("baqtiyaar");

//     console.log("refrence",reference);

//     function reset(){
//         setstate("");
//     }

//     function focus(){
//         reference.current.focus();
//         reference.current.style.color="black"
//         if(reference.current.style.backgroundColor==="white"){
//             return reference.current.style.backgroundColor="blue"
//         }else if(reference.current.style.backgroundColor==="blue"){
//             return reference.current.style.backgroundColor="white"
//         }else{
//             reference.current.style.backgroundColor="white"
//         }
//         reference.current.value="blue"
//     }


//     return(
//         <div className="flex flex-col justify-start h-screen bg-white text-black">
//             <input ref={reference} className="border border-1 border-black p-2 w-fit mt-5 ml-5 rounded-md" value={state} onChange={(e)=>setstate(e.target.value)} maxLength={34} autoCapitalize="on" autoCorrect="on" autoComplete="on" required/>
//             <button onClick={reset} className="border cursor-pointer hover:bg-pink-600 hover:transition-transform  border-gray-300 bg-pink-800 text-white font-extrabold rounded-md p-2 w-fit ml-5 mt-2">reset</button>
//             <button onClick={focus} className="border cursor-pointer hover:bg-pink-600 hover:transition-transform  border-gray-300 bg-pink-800 text-white font-extrabold rounded-b-md p-2 w-fit ml-5 mt-2">change</button>
//         </div>

//     )

// }




{/* 

{/* // import React from "react"; */}

{/* export default function Window() { */}
{/* //   return (
//     <div className="fixed inset-0 top-12 flex justify-center overflow-y-auto px-4">
//       <div className="w-full max-w-6xl h-auto"> */}
        
//         {/* Greeting + Streak */}
{/* //         <div className="flex flex-col sm:flex-row items-center justify-between p-6 mt-5 border border-gray-300 rounded-2xl">
//           <div className="font-extrabold text-lg text-black">
//             Good morning, Maaz! 👋
//           </div>
//           <div className="mt-3 sm:mt-0">
//             <div className="flex items-center justify-center px-5 py-2 rounded-full bg-orange-500">
//               <span className="font-extrabold text-white text-sm">
//                 🔥 7 day streak
//               </span>
//             </div>
//           </div>
//         </div> */}

//         {/* Learning + Career Tracker */}
{/* //         <div className="flex flex-col lg:flex-row gap-4 mt-5">
//           <div className="flex flex-col justify-center items-center h-36 flex-1 bg-gradient-to-l from-purple-600 to-blue-600 border rounded-2xl p-4 text-white">
//             <img src="./Books.png" className="h-7 w-7" alt="Books"/>
//             <h5 className="font-extrabold">NEXTJS, REACT</h5>
//             <span>+2 more</span>
//             <span>currently learning</span>
//           </div>

//           <div className="flex flex-col justify-between bg-white border border-gray-300 rounded-2xl p-5 flex-1">
//             <div>
//               <span className="font-extrabold">Career Tracker</span>
//               <p className="text-purple-800 font-extrabold">
//                 Phase 1 of 3: Building Frontend
//               </p>
//             </div>
//             <div className="flex items-center justify-between mt-3">
//               <div className="flex items-center gap-2">
//                 <div className="flex items-center justify-center bg-green-500 font-extrabold rounded-full w-10 h-10 text-white">
//                   CT
//                 </div>
//                 <span className="text-gray-600">Active Project</span>
//               </div>
//               <div className="bg-pink-100 h-14 w-14 rounded-full flex items-center justify-center">
//                 <img src="./rocket.png" className="h-7 w-7" alt="Rocket"/>
//               </div>
//             </div>
//           </div>
//         </div> */}

//         {/* Revise + Learning Backlogs */}
{/* //         <div className="flex flex-col lg:flex-row gap-4 mt-5"> */}
{/* //           <div className="flex flex-col p-4 flex-1 bg-gradient-to-l from-purple-600 to-blue-600 border rounded-2xl text-white">
//             <span className="font-extrabold">Revise Knowledge</span>
//             <div className="flex flex-col mt-4 gap-3 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-3">
//               <h6 className="text-sm font-extrabold">
//                 What hook is used for state management in React?
//               </h6> */}
{/* //               {["A) useState", "B) useEffect", "C) useContext"].map((opt) => ( */}
{/* //                 <div */}
{/* //                   key={opt}
//                   className="p-2 border border-white rounded-md text-sm font-extrabold"
//                 >
//                   {opt}
//                 </div> */}
{/* //               ))}
//             </div> */}
{/* //           </div> */}

{/* //           <div className="flex flex-col flex-1 bg-white border border-gray-300 rounded-2xl p-5"> */}
//             <span className="font-extrabold">Learning Backlogs</span>
//             <div className="flex flex-wrap gap-2 mt-3 text-purple-800 font-extrabold text-sm">
//               {["TypeScript Fundamentals", "Docker Basics", "System Design"].map(
//                 (item) => (
//                   <div key={item} className="bg-pink-100 rounded-2xl px-3 py-1">
//                     {item}
//                   </div>
//                 )
//               )}
//             </div>
//             <div className="mt-4 px-3 py-2 border border-gray-400 rounded-md text-gray-500 opacity-70 text-sm">
//               Add new topic...
//             </div>
//           </div>
//         </div>

//         {/* Confidence Levels */}
//         <div className="flex flex-col mt-6 border border-gray-300 rounded-2xl p-5">
//           <span className="font-extrabold mb-4 text-black">Confidence Levels</span>
//           <div className="flex flex-col gap-5">
//             {[
//               { skill: "React", level: 5 },
//               { skill: "NEXTJS", level: 3 },
//               { skill: "JavaScript", level: 7 },
//               { skill: "NodeJS", level: 4 },
//               { skill: "MongoDB", level: 2 },
//             ].map(({ skill, level }) => (
//               <div key={skill} className="flex items-center gap-3">
//                 <span className="w-24 text-sm text-black">{skill}</span>
//                 <div className="flex-1 h-3.5 bg-gray-200 rounded-2xl relative">
//                   <div
//                     className="h-3.5 bg-purple-600 rounded-2xl"
//                     style={{ width: `${(level / 10) * 100}%` }}
//                   ></div>
//                   <div
//                     className="absolute -top-1 h-5 w-5 border-2 border-white bg-purple-600 rounded-full"
//                     style={{ left: `${(level / 10) * 100}%` }}
//                   ></div>
//                 </div>
//                 <span className="font-extrabold text-purple-600 text-sm w-10">
//                   {level}/10
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="h-12"></div>
//       </div>
//     </div>
//   );
// } */}

