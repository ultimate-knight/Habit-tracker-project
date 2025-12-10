"use client";
import React from "react";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import Link from "next/link";
import { toast } from "react-toastify";

import dynamic from "next/dynamic";
import { useState } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor").then((mod) => mod.default),
  { ssr: false }
);

const Markdown = dynamic(() => import("@uiw/react-markdown-preview"), {
  ssr: false,
});

function Page() {
  //   const [state, setstate] = useState("");
  const [content, setContent] = useState("");
  const [topic, setTopic] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [fill, setfill] = useState("");

  const handleClick = async function () {
    if (!topic || !content || !title) {
      setfill("fill the form field");
      setTimeout(() => setfill(""), 1000);
      return;
    }

    setLoading(true);
    setMessage("");

    const res = await fetch("/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic, content, title }),
    });

    try {
      if (res.ok) {
        setMessage("user data saved successfully");
        setTimeout(() => setMessage(""), 1000);
        setContent("");
        setTitle("");
        setTopic("");
      } else {
        const data = await res.json();
        setfill(data.message || "error occured while saving data");
      }
    } catch (error) {
      setfill("network error occured");
      setTimeout(() => setfill(""), 2000);
    }

    setLoading(false);
  };

  return (
    <>
      <div className="flex flex-col  bg-white text-black w-screen h-screen overflow-y-auto">
        <div className="h-20 pb-5 w-screen bg-white border-1 border-gray-300">
          <div className="flex flex-row items-center">
            <span className="text-black font-extrabold text-2xl max-[600]:text-xl max-[380]:text-lg pt-3 ml-5 whitespace-nowrap">
              Create New Note
            </span>
            <div className="flex flex-row items-center max-[600]:gap-3 gap-10 ml-auto  pr-5">
            <Link href="/">
            {
              <button className="cursor-pointer   -top-8 left-1/1 overflow-hidden mt-3">
                X <span className="max-[600]:hidden">Cancel</span>
              </button>
}
            </Link>


            <button
              className="bg-purple-700 gap-2 flex flex-row justify-center  max-[600]:h-10   opacity-80 border-1 cursor-pointer   rounded-xl text-white p-4 max-[600]:p-2 max-[380]:p-1 max-[380]:h-9 translate-y-2 h-12  min-w-auto font-extrabold"
              onClick={handleClick}
            >
              <ArrowDownTrayIcon className="h-5 w-6 max-[380]:h-4 max-[380]:w-4 -mt-1 max-[380]:mt-0.5 max-[600]:-mt-0.5 whitespace-nowrap text-white" />
              <div className="whitespace-nowrap -mt-1.5 max-[600]:-mt-0.5 max-[380]:text-sm max-[380]:mt-0.5">
                {loading ? "Saving..." : "Save Notes"}
              </div>
            </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex  flex-col   justify-center overflow-hidden flex-wrap  items-center">
            {message && (
              <div className="font-extrabold text-green-700 mt-7 w-full bg-green-300 text-center h-6 border-1 border-black ">
                {message}
              </div>
            )}
            {fill && (
              <div className="font-extrabold text-red-700 mt-7 w-full bg-red-300 text-center h-6 border-1 border-black ">
                {fill}
              </div>
            )}
            <div
              className={`border-1 translate-y-20 flex flex-col justify-center  border-black bg-white ${
                content ? "h-[775px] max-[600px]:h-[840px]" : "h-[740px] max-[600]:h-[80%]"
              }  w-4/6`}
            >
              <div className="flex flex-col  justify-start space-y-4 ml-5 mt-5 h-full">
                <span className="text-black font-extrabold -ml-2.5 mt-2">Topic</span>
                {content ? (
                  <>
                    <select
                      className="bg-gray-50 cursor-pointer border-1 h-[5%] p-2 border-gray-300  w-5/5 -ml-2.5 rounded-lg"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      defaultValue=""
                    >
                      <option value="" disabled className="text-black">
                        Select Topic...
                      </option>
                      <option>frontend development</option>
                      <option>backend development</option>
                      <option>javascript fundamentals</option>
                      <option>React/Nextjs</option>
                      <option>Database Design</option>
                    </select>
                  </>
                ) : (
                  <>
                    <select
                      className="bg-gray-50 cursor-pointer border-1 h-[5%] p-1 pl-2 border-gray-300 w-5/5 -ml-2.5 rounded-lg"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      defaultValue=""
                    >
                      <option value="" disabled className="text-black">
                        Select Topic...
                      </option>
                      <option>frontend development</option>
                      <option>backend development</option>
                      <option>javascript fundamentals</option>
                      <option>React/Nextjs</option>
                      <option>Database Design</option>
                    </select>
                  </>
                )}
                <span className="text-black font-extrabold -ml-2.5">Note title</span>
                {content ? (
                  <input
                    type="text"
                    placeholder="Enter note title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="border-1  border-black  w-5/5 -ml-2.5 h-10 rounded-lg p-2.5 placeholder-gray-400"
                  />
                ) : (
                  <>
                    <input
                      type="text"
                      placeholder="  Enter note title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="border-1  border-black  w-5/5 -ml-2.5 h-10 rounded-lg placeholder-gray-400"
                    />
                  </>
                )}
                <span className="text-black font-extrabold -ml-2.5">Content</span>
                <div className="-mt-2   w-5/5 -ml-2.5">
                  <MDEditor
                    value={content}
                    style={{
                      whiteSpace: "pre-wrap",
                      backgroundColor: "white",
                      color: "black",
                    }}
                    className="bg-white text-black"
                    onChange={setContent}
                    height={400}
                  />
                </div>

                {content && (
                  <>
                    <span className="text-black font-extrabold -mt-1 -ml-2.5">
                      preview
                    </span>
                    <Markdown
                      source={content}
                      style={{
                        whiteSpace: "pre-wrap",
                        backgroundColor: "white",
                        color: "black",
                      }}
                      className="bg-white pb-9 pl-2  overflow-y-scroll  w-5/5 -ml-2.5 border border-gray-300 rounded-lg"
                    />
                    <div className="-mt-12"></div>
                  </>
                )}
                {content ? (
                  <>
                    <div className="h-0.5 w-full bg-gray-300 mt-2 -ml-2 translate-y-43"></div>
                  </>
                ) : (
                  <>
                    <div className="h-0.5 w-full bg-gray-300 mt-2 -ml-2"></div>
                  </>
                )}

                {content ? (
                  <>
                    <div className="flex flex-row max-[600]:-ml-1 max-[600]:flex max-[600]:flex-col gap-5 ml-2 mb-32 pb-10">
                      <Link href="/">
                        <button className="cursor-pointer mt-1 max-[600]:text-center max-[600]:w-[95%] max-[600]:rounded-lg max-[600]:p-1 max-[600]:border-1 max-[600]:border-black">
                          X Cancel
                        </button>
                      </Link>
                      <button
                        className="bg-purple-700 shrink-0 max-[600]:flex max-[600]:flex-row max-[600]:justify-center max-[600]:-ml-1 max-[600]:w-[96%]   opacity-80 border-1 cursor-pointer mt-1   rounded-xl text-white p-4 h-10 -translate-y-2 min-w-[13%]  font-extrabold"
                        onClick={handleClick}
                      >
                        <ArrowDownTrayIcon className="h-5 w-6 -translate-y-1.5 -ml-2 text-white " />
                        <div className="-translate-y-6/5 translate-x-1/10 pl-3 max-[600]:-ml-4.5">
                          {loading ? "Saving..." : "Save Notes"}
                        </div>
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex flex-row max-[600]:flex max-[600]:flex-col max-[600]:gap-5 max-[600]: gap-5">
                      <Link href="/">
                        <button className="cursor-pointer  max-[600]:text-center max-[600]:w-[95%] max-[600]:rounded-lg max-[600]:p-1 max-[600]:border-1 max-[600]:border-black">X Cancel</button>
                      </Link>
                      <button
                        className="bg-purple-700 shrink-0 max-[600]:flex max-[600]:flex-row max-[600]:justify-center max-[600]:-ml-1 max-[600]:w-[96%]   opacity-80 border-1 cursor-pointer   rounded-xl text-white p-4 h-10 -translate-y-2 min-w-[13%]  font-extrabold"
                        onClick={handleClick}
                      >
                        <ArrowDownTrayIcon className="h-5 w-6 -translate-y-1.5 -ml-2 text-white " />
                        <div className="-translate-y-6/5 translate-x-1/10 pl-3 max-[600]:-ml-4.5">
                          {loading ? "Saving..." : "Save Notes"}
                        </div>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="h-40"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;























// "use client";
// import React from "react";
// import "@uiw/react-md-editor/markdown-editor.css";
// import "@uiw/react-markdown-preview/markdown.css";
// import Link from "next/link";

// import dynamic from "next/dynamic";
// import { useState } from "react";
// import { ArrowDownTrayIcon, XMarkIcon } from "@heroicons/react/24/solid";

// const MDEditor = dynamic(
//   () => import("@uiw/react-md-editor").then((mod) => mod.default),
//   { ssr: false }
// );

// const Markdown = dynamic(() => import("@uiw/react-markdown-preview"), {
//   ssr: false,
// });

// function Page() {
//   const [content, setContent] = useState("");
//   const [topic, setTopic] = useState("");
//   const [title, setTitle] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");
//   const [fill, setfill] = useState("");

//   const handleClick = async function () {
//     if (!topic || !content || !title) {
//       setfill("Please fill all form fields");
//       setTimeout(() => setfill(""), 3000);
//       return;
//     }

//     setLoading(true);
//     setMessage("");

//     const res = await fetch("/api/notes", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ topic, content, title }),
//     });

//     try {
//       if (res.ok) {
//         setMessage("Note saved successfully!");
//         setTimeout(() => setMessage(""), 3000);
//         setContent("");
//         setTitle("");
//         setTopic("");
//       } else {
//         const data = await res.json();
//         setfill(data.message || "Error occurred while saving data");
//         setTimeout(() => setfill(""), 3000);
//       }
//     } catch (error) {
//       setfill("Network error occurred");
//       setTimeout(() => setfill(""), 3000);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-4">
//         <div className="flex items-center justify-between max-w-6xl mx-auto">
//           <h1 className="text-xl md:text-2xl font-bold text-gray-900">
//             Create New Note
//           </h1>
          
//           <div className="flex items-center gap-2 md:gap-4">
//             <Link href="/">
//               <button className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors">
//                 <XMarkIcon className="h-4 w-4" />
//                 <span className="hidden sm:inline">Cancel</span>
//               </button>
//             </Link>
            
//             <button
//               onClick={handleClick}
//               disabled={loading}
//               className="flex items-center gap-2 bg-purple-700 hover:bg-purple-800 disabled:opacity-50 text-white px-4 py-2 rounded-lg font-medium transition-colors"
//             >
//               <ArrowDownTrayIcon className="h-4 w-4" />
//               <span className="hidden sm:inline">
//                 {loading ? "Saving..." : "Save Note"}
//               </span>
//               <span className="sm:hidden">
//                 {loading ? "..." : "Save"}
//               </span>
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Messages */}
//       {message && (
//         <div className="mx-4 mt-4 max-w-6xl lg:mx-auto">
//           <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
//             {message}
//           </div>
//         </div>
//       )}
      
//       {fill && (
//         <div className="mx-4 mt-4 max-w-6xl lg:mx-auto">
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
//             {fill}
//           </div>
//         </div>
//       )}

//       {/* Main Form */}
//       <main className="px-4 py-6">
//         <div className="max-w-6xl mx-auto">
//           <div className="bg-white border border-gray-300 rounded-lg p-6">
//             <form className="space-y-6">
//               {/* Topic Selection */}
//               <div>
//                 <label htmlFor="topic" className="block text-sm font-bold text-gray-900 mb-2">
//                   Topic
//                 </label>
//                 <select
//                   id="topic"
//                   value={topic}
//                   onChange={(e) => setTopic(e.target.value)}
//                   className="w-full px-3 text-black py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                 >
//                   <option value="" disabled>
//                     Select Topic...
//                   </option>
//                   <option value="frontend development">Frontend Development</option>
//                   <option value="backend development">Backend Development</option>
//                   <option value="javascript fundamentals">JavaScript Fundamentals</option>
//                   <option value="React/Nextjs">React/Next.js</option>
//                   <option value="Database Design">Database Design</option>
//                 </select>
//               </div>

//               {/* Note Title */}
//               <div>
//                 <label htmlFor="title" className="block text-sm font-bold text-gray-900 mb-2">
//                   Note Title
//                 </label>
//                 <input
//                   id="title"
//                   type="text"
//                   placeholder="Enter note title"
//                   value={title}
//                   onChange={(e) => setTitle(e.target.value)}
//                   className="w-full px-3 text-black py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//                 />
//               </div>

//               {/* Content Editor */}
//               <div>
//                 <label htmlFor="content" className="block text-sm font-bold text-gray-900 mb-2">
//                   Content
//                 </label>
//                 <div className="border border-gray-300 rounded-lg overflow-hidden">
//                   <MDEditor
//                     value={content}
//                     onChange={setContent}
//                     height={300}
//                     style={{
//                       backgroundColor: "white",
//                       color: "black",
//                     }}
//                     data-color-mode="light"
//                   />
//                 </div>
//               </div>

//               {/* Preview */}
//               {content && (
//                 <div>
//                   <label className="block text-sm font-bold text-gray-900 mb-2">
//                     Preview
//                   </label>
//                   <div className="border border-gray-300 rounded-lg p-4 bg-gray-50 max-h-96 overflow-y-auto">
//                     <Markdown
//                       source={content}
//                       style={{
//                         backgroundColor: "transparent",
//                         color: "black",
//                       }}
//                     />
//                   </div>
//                 </div>
//               )}

//               {/* Action Buttons */}
//               <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
//                 <Link href="/" className="order-2 sm:order-1">
//                   <button
//                     type="button"
//                     className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
//                   >
//                     <XMarkIcon className="h-4 w-4" />
//                     Cancel
//                   </button>
//                 </Link>
                
//                 <button
//                   type="button"
//                   onClick={handleClick}
//                   disabled={loading}
//                   className="order-1 sm:order-2 w-full sm:w-auto flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-800 disabled:opacity-50 text-white px-6 py-2 rounded-lg font-medium transition-colors"
//                 >
//                   <ArrowDownTrayIcon className="h-4 w-4" />
//                   {loading ? "Saving..." : "Save Note"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Page;
