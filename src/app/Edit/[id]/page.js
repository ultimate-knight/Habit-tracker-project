

// "use client";
// import dynamic from "next/dynamic";
// import { useState, useEffect } from "react";
// import { useParams, useRouter } from "next/navigation";
// import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
// import Link from "next/link";

// const MDEditor = dynamic(
//   () => import("@uiw/react-md-editor").then((mod) => mod.default),
//   { ssr: false }
// );

// const Markdown = dynamic(() => import("@uiw/react-markdown-preview"), {
//   ssr: false,
  
// });

// export default function EditNote() {
//   const params = useParams();
//   const router = useRouter();
//   const id = params?.id;

//   const [title, setTitle] = useState("");
//   const [topic, setTopic] = useState("");
//   const [content, setContent] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     async function fetchNote() {
//       if (!id) return;

//       try {
//         const res = await fetch(`/api/notes/${id}`);
//         const data = await res.json();
//         setTitle(data.title);
//         setTopic(data.topic);
//         setContent(data.content);
//       } catch (err) {
//         console.error("Error loading note:", err);
//         setMessage("Failed to load note.");
//       }
//     }

//     fetchNote();
//   }, [id]);

//   const handleUpdate = async () => {
//     if (!title || !topic || !content) {
//       setMessage("Fill all fields");
//       setTimeout(() => setMessage(""), 2000);
//       return;
//     }

//     setLoading(true);
//     setMessage("");

//     try {
//       const res = await fetch(`/api/notes/${id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ title, topic, content }),
//       });

//       if (res.ok) {
//         setMessage("Note updated successfully");
//         setTimeout(() => router.push(`/notes/${id}`), 1500);
//       } else {
//         const data = await res.json();
//         setMessage(data.message || "Error updating note");
//       }
//     } catch (err) {
//       setMessage("Network error");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="flex flex-col bg-white w-screen h-screen fixed overflow-y-auto">
//       <div className="h-20 pb-5 w-screen border-1 border-gray-300">
//         {/* <div className="flex h-full flex-row items-center justify-evenly gap-50"> */}
//         <div className="flex flex-row items-center">
//           {/* <span className="text-black font-extrabold text-2xl mt-4"> */}
//           <span className="text-black font-extrabold text-2xl max-[600]:text-xl max-[380]:text-lg pt-3 ml-5 whitespace-nowrap">
//             Edit Note
//           </span>
//           <button className="cursor-pointer mt-4 text-black translate-x-75" onClick={() => router.back()}>
//             ❌ Cancel
//           </button>
//           <button
//             className="bg-purple-700 opacity-80 rounded-xl text-white p-1 h-10 w-1/9 font-extrabold mt-4"
//             onClick={handleUpdate}
//           >
//             <ArrowDownTrayIcon className="h-5 w-6 translate-y-1 translate-x-1/2 text-white" />
//             <div className="-translate-y-5/7 translate-x-1/11 cursor-pointer">
//               {loading ? "Saving..." : "Update Note"}
//             </div>
//           </button>
//         </div>
//       </div>

//       <div className="flex flex-col h-full w-full items-center justify-center">
//         {message && (
//           <div className="text-green-700 mt-7 w-full bg-green-300 text-center h-6 font-extrabold">
//             {message}
//           </div>
//         )}

//         <div className="border-1 mt-10 flex flex-col justi fy-center border-black bg-white h-auto pb-10 w-4/6">
//           <div className="flex flex-col justify-start space-y-4 ml-5 mt-5">
//             <label className="font-extrabold text-black">Topic</label>
//             <select
//               value={topic}
//               onChange={(e) => setTopic(e.target.value)}
//               className="bg-gray-50 border-1 h-10 p-2 border-gray-300 text-black w-[830px] rounded-lg"
//             >
//               <option value="" disabled>Select Topic...</option>
//               <option>frontend development</option>
//               <option>backend development</option>
//               <option>javascript fundamentals</option>
//               <option>React/Nextjs</option>
//               <option>Database Design</option>
//             </select>

//             <label className="font-extrabold text-black">Note Title</label>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="border-1 border-black text-black w-[830px] h-10 rounded-lg p-2.5"
//               placeholder="Enter note title"
//             />

//             <label className="font-extrabold text-black">Content</label>
//             <div className="w-[830px]">
//               <MDEditor
//                 value={content}
//                 onChange={setContent}
//                 style={{ backgroundColor: "white", color: "black" }}
//               />
//             </div>

//             {content && (
//               <>
//                 <label className="font-extrabold text-black">Preview</label>
//                 <Markdown
//                   source={content}
//                    style={{
//                         whiteSpace: "pre-wrap",
//                         backgroundColor: "white",
//                         color: "black",
//                         height:"50px"
//                       }}
//                   className="bg-white p-3 overflow-y-scroll w-[830px] border border-gray-300 rounded-lg"
//                 />
//               </>
//             )}
//           </div>
//         </div>

//         <div className="h-40"></div>
//       </div>
//     </div>
//   );
// }





























"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowDownTrayIcon, XMarkIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor").then((mod) => mod.default),
  { ssr: false }
);

const Markdown = dynamic(() => import("@uiw/react-markdown-preview"), {
  ssr: false,
});

export default function EditNote() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id;

  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchNote() {
      if (!id) {
        setError("No note ID provided");
        setInitialLoading(false);
        return;
      }

      try {
        setInitialLoading(true);
        const res = await fetch(`/api/notes/${id}`);
        
        if (!res.ok) {
          throw new Error(`Failed to fetch note: ${res.status}`);
        }
        
        const data = await res.json();
        setTitle(data.title || "");
        setTopic(data.topic || "");
        setContent(data.content || "");
      } catch (err) {
        console.error("Error loading note:", err);
        setError("Failed to load note. Please try again.");
      } finally {
        setInitialLoading(false);
      }
    }

    fetchNote();
  }, [id]);

  const handleUpdate = async () => {
    if (!title.trim() || !topic || !content.trim()) {
      setError("Please fill in all fields");
      setTimeout(() => setError(""), 3000);
      return;
    }

    setLoading(true);
    setMessage("");
    setError("");

    try {
      const res = await fetch(`/api/notes/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          title: title.trim(), 
          topic, 
          content: content.trim() 
        }),
      });

      if (res.ok) {
        setMessage("Note updated successfully!");
        setTimeout(() => router.push(`/notes/${id}`), 1500);
      } else {
        const data = await res.json();
        throw new Error(data.message || "Failed to update note");
      }
    } catch (err) {
      console.error("Update error:", err);
      setError(err.message || "Network error occurred");
      setTimeout(() => setError(""), 3000);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    if (window.confirm("Are you sure you want to cancel? Any unsaved changes will be lost.")) {
      router.back();
    }
  };

  // Loading state
  if (initialLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <div className="text-gray-600">Loading note...</div>
        </div>
      </div>
    );
  }

  // Error state
  if (error && !title && !topic && !content) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="text-red-500 mb-4">Error loading note</div>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => router.back()}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">
            Edit Note
          </h1>
          
          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={handleCancel}
              className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <XMarkIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Cancel</span>
            </button>
            
            <button
              onClick={handleUpdate}
              disabled={loading}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              <ArrowDownTrayIcon className="h-4 w-4" />
              <span className="hidden sm:inline">
                {loading ? "Updating..." : "Update Note"}
              </span>
              <span className="sm:hidden">
                {loading ? "..." : "Update"}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Messages */}
      {message && (
        <div className="mx-4 mt-4 max-w-6xl lg:mx-auto">
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            {message}
          </div>
        </div>
      )}
      
      {error && (
        <div className="mx-4 mt-4 max-w-6xl lg:mx-auto">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        </div>
      )}

      {/* Main Form */}
      <main className="px-4 py-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border border-gray-300 rounded-lg p-6">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {/* Topic Selection */}
              <div>
                <label htmlFor="topic" className="block text-sm  font-bold text-black mb-2">
                  Topic
                </label>
                <select
                  id="topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-3 py-2 border text-black border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                >
                  <option value="" disabled>
                    Select Topic...
                  </option>
                  <option value="frontend development">Frontend Development</option>
                  <option value="backend development">Backend Development</option>
                  <option value="javascript fundamentals">JavaScript Fundamentals</option>
                  <option value="React/Nextjs">React/Next.js</option>
                  <option value="Database Design">Database Design</option>
                </select>
              </div>

              {/* Note Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-bold text-gray-900 mb-2">
                  Note Title
                </label>
                <input
                  id="title"
                  type="text"
                  placeholder="Enter note title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Content Editor */}
              <div>
                <label htmlFor="content" className="block text-sm font-bold text-gray-900 mb-2">
                  Content
                </label>
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  <MDEditor
                    value={content}
                    onChange={setContent}
                    height={350}
                    style={{
                      backgroundColor: "white",
                      color: "black",
                    }}
                    data-color-mode="light"
                  />
                </div>
              </div>

              {/* Preview */}
              {content && (
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Preview
                  </label>
                  <div className="border border-gray-300 rounded-lg p-4 bg-gray-50 max-h-96 overflow-y-auto">
                    <Markdown
                      source={content}
                      style={{
                        backgroundColor: "transparent",
                        color: "black",
                      }}
                    />
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="order-2 sm:order-1 w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  <ArrowLeftIcon className="h-4 w-4" />
                  Cancel Changes
                </button>
                
                <button
                  type="button"
                  onClick={handleUpdate}
                  disabled={loading}
                  className="order-1 sm:order-2 w-full sm:w-auto flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  <ArrowDownTrayIcon className="h-4 w-4" />
                  {loading ? "Updating..." : "Update Note"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
