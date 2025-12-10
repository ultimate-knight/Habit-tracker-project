"use client"
import { useState ,useEffect } from "react"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { TagIcon } from "@heroicons/react/24/outline";
import { DocumentIcon } from "@heroicons/react/24/solid";
import Link from "next/link";


export default function NotesInfo(){

    const [slate,setslate]=useState([]);
    const [count,setcount]=useState(0);

    useEffect(()=>{
        async function handleUser(){
            const res=await fetch("/api/notes");
            const respond=await res.json();
            setslate(respond)
            setcount(respond.length);
            console.log("respond",respond);

    }
    handleUser()


    },[])

    
   
    return (
    <div className="flex flex-col flex-wrap items-center justify-center pl-10 pr-10 max-[361]:pr-11 w-full min-h-screen min-w-screen bg-white text-black -mt-5">
      <div className="max-[361px]:translate-x-1/12 max-[361px]:-ml-12">
      <div className="flex flex-row justify-end gap-2 w-full -ml-3  translate-y-8 font-semibold">
        <DocumentIcon className="h-6 w-6 text-gray-600 " />
        <span>{count} Notes</span>
        </div>
        {/* <div className="flex flex-col items-center justify-center"> */}
        <div className="flex flex-row flex-wrap p-3 items-start justify-start border-1 border-gray-400 rounded-lg mt-13">
        <MagnifyingGlassIcon className="max-h-7 max-w-7 whitespace-nowrap  text-gray-500 opacity-55" />
        <input type="text" placeholder=" search notes..." className="whitespace-nowrap block rounded-lg text-xl" />
        </div>
        {/* </div> */}
        {slate.map((note,index) => (
          <Link key={note._id || index} href={`/notes/${note._id}`} className="cursor-pointer">
        <div
          className="flex flex-col justify-center flex-wrap shrink"
        >
            <div className="flex flex-col  flex-wrap border border-gray-300 mt-10 rounded-lg p-10 w-1/1">
          <h1 className="font-extrabold text-black text-lg">{note.title}</h1>
          <p className="mt-1 text-sm text-gray-700">{note.content.slice(0,100)}...</p>

          <div className="flex items-center mt-2 bg-purple-200 text-purple-700 font-bold rounded-2xl ml-6 px-4 py-1 w-fit text-xs">
            {note.topic}
          </div>


          <div className="flex items-center mt-2 text-sm text-gray-500">
            <CalendarDaysIcon className="h-4 w-4 mr-2" />
            <span>{new Date(note.createdAt).toLocaleDateString("en-IN", {  year: "numeric", month: "long", day: "numeric" })}</span>
          </div>
          <TagIcon className="h-5 w-5 text-gray-500 -translate-y-12 -translate-x-1" />
        </div>
        </div>
        </Link>
      ))}
      <div className="pb-[70px]"></div>
    </div>
    </div>
    )
}








// "use client"
// import { useState, useEffect } from "react"
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import { CalendarDaysIcon } from "@heroicons/react/24/outline";
// import { TagIcon } from "@heroicons/react/24/outline";
// import { DocumentIcon } from "@heroicons/react/24/solid";
// import Link from "next/link";

// export default function NotesInfo() {
//     const [slate, setSlate] = useState([]);
//     const [count, setCount] = useState(0);
//     const [searchTerm, setSearchTerm] = useState("");
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState("");

//     useEffect(() => {
//         async function handleUser() {
//             try {
//                 setLoading(true);
//                 const res = await fetch("/api/notes");
//                 if (!res.ok) {
//                     throw new Error('Failed to fetch notes');
//                 }
//                 const respond = await res.json();
//                 setSlate(respond);
//                 setCount(respond.length);
//                 console.log("respond", respond);
//             } catch (err) {
//                 setError("Failed to load notes");
//                 console.error("Error fetching notes:", err);
//             } finally {
//                 setLoading(false);
//             }
//         }
//         handleUser();
//     }, []);

//     // Filter notes based on search term
//     const filteredNotes = slate.filter(note =>
//         note.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         note.content?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         note.topic?.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     const formatDate = (dateString) => {
//         try {
//             return new Date(dateString).toLocaleDateString("en-IN", {
//                 year: "numeric",
//                 month: "long",
//                 day: "numeric"
//             });
//         } catch {
//             return "Invalid date";
//         }
//     };

//     const truncateContent = (content, maxLength = 150) => {
//         if (!content) return "";
//         return content.length > maxLength 
//             ? content.slice(0, maxLength) + "..." 
//             : content;
//     };

//     if (loading) {
//         return (
//             <div className="flex items-center justify-center py-12">
//                 <div className="text-gray-500">Loading notes...</div>
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className="flex items-center justify-center py-12">
//                 <div className="text-red-500">{error}</div>
//             </div>
//         );
//     }

//     return (
//         <div className="w-full bg-white text-black px-4 sm:px-6 lg:px-8">
//             <div className="max-w-4xl mx-auto">
//                 {/* Header with notes count */}
//                 <div className="flex items-center justify-end gap-2 mb-6 pt-4">
//                     <DocumentIcon className="h-5 w-5 text-gray-600" />
//                     <span className="text-sm font-semibold text-gray-700">
//                         {searchTerm ? filteredNotes.length : count} Notes
//                         {searchTerm && ` (filtered from ${count})`}
//                     </span>
//                 </div>

//                 {/* Search bar */}
//                 <div className="relative mb-8">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <input
//                         type="text"
//                         placeholder="Search notes..."
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                         className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
//                     />
//                 </div>

//                 {/* Notes list */}
//                 <div className="space-y-6">
//                     {filteredNotes.length === 0 ? (
//                         <div className="text-center py-12">
//                             <DocumentIcon className="h-12 w-12 text-gray-300 mx-auto mb-4" />
//                             <p className="text-gray-500">
//                                 {searchTerm ? "No notes match your search" : "No notes found"}
//                             </p>
//                             {searchTerm && (
//                                 <button
//                                     onClick={() => setSearchTerm("")}
//                                     className="mt-2 text-purple-600 hover:text-purple-800 text-sm"
//                                 >
//                                     Clear search
//                                 </button>
//                             )}
//                         </div>
//                     ) : (
//                         filteredNotes.map((note, index) => (
//                             <Link 
//                                 key={note._id || index} 
//                                 href={`/notes/${note._id}`} 
//                                 className="block group"
//                             >
//                                 <div className="border border-gray-300 rounded-lg p-4 sm:p-6 hover:border-purple-300 hover:shadow-md transition-all duration-200 bg-white">
//                                     {/* Note title */}
//                                     <h1 className="font-bold text-gray-900 text-lg sm:text-xl mb-2 group-hover:text-purple-700 transition-colors line-clamp-2">
//                                         {note.title}
//                                     </h1>

//                                     {/* Note content preview */}
//                                     <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3 leading-relaxed">
//                                         {truncateContent(note.content)}
//                                     </p>

//                                     {/* Topic and date info */}
//                                     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
//                                         {/* Topic tag */}
//                                         <div className="flex items-center gap-2">
//                                             <TagIcon className="h-4 w-4 text-purple-500 flex-shrink-0" />
//                                             <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700 border border-purple-200">
//                                                 {note.topic}
//                                             </span>
//                                         </div>

//                                         {/* Date */}
//                                         <div className="flex items-center gap-2 text-sm text-gray-500">
//                                             <CalendarDaysIcon className="h-4 w-4 flex-shrink-0" />
//                                             <span>{formatDate(note.createdAt)}</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </Link>
//                         ))
//                     )}
//                 </div>

//                 {/* Bottom spacing */}
//                 <div className="pb-20"></div>
//             </div>
//         </div>
//     );
// }
























