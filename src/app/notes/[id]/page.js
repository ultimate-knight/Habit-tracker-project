// "use client"
// import { ArrowLeftIcon } from "@heroicons/react/24/outline";
// import { ShareIcon } from "@heroicons/react/24/outline";
// import { useState, useEffect } from "react";
// import { useParams, useRouter } from "next/navigation";
// import { TagIcon } from "@heroicons/react/24/outline";
// import { TrashIcon } from "@heroicons/react/24/outline";
// import { CalendarDaysIcon } from "@heroicons/react/24/outline";
// import { PencilSquareIcon } from "@heroicons/react/24/outline";
// import Link from "next/link";

// export default function UserInfo() {
//     const params = useParams();
//     const router = useRouter();
//     const id = params?.id;

//     console.log("params", params);


//     const [userInfo, setuserInfo] = useState();
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const handleBackClick = (e) => {
//         // e.preventDefault();
//         setLoading(true);
//         // router.push('/notes');  // Navigate programmatically
//     };

    

//     useEffect(() => {
//         const id = params?.id;
//         if (!id) return;

//         async function handleUser(id) {
//             try {
//                 setLoading(true);
//                 const res = await fetch(`/api/notes/${id}`);
//                 const myblog = await res.json();
//                 console.log("myblog", myblog);
//                 setuserInfo(myblog);
//             } catch (error) {
//                 console.error("Error fetching user info:", error); // Fixed: was 'err'
//                 setError(error.message);
//             } finally {
//                 setLoading(false);
//             }
//         }
//         handleUser(id);
//     }, [params?.id])

//     const formatDate = (dateString) => {
//         if (!dateString) return "Date not available";
//         return new Date(dateString).toLocaleDateString('en-US', {
//             year: 'numeric',
//             month: 'long',
//             day: 'numeric'
//         });
//     };

//     const handleShare = (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//         // Add your share logic here
//         console.log("Share clicked");
//     };

//     const handleDelete = async (e) => {
//         e.preventDefault();
//         e.stopPropagation();
        
//         if (confirm("Are you sure you want to delete this note?")) {
//             try {
//                 const res = await fetch(`/api/notes/${id}`, {
//                     method: 'DELETE',
//                 });
                
//                 if (res.ok) {
//                     router.push('/notes');
//                 } else {
//                     alert("Failed to delete note");
//                 }
//             } catch (error) {
//                 console.error("Error deleting note:", error);
//                 alert("Error deleting note");
//             }
//         }
//     };

//     if (loading) {
//         return (
//             <div className="flex items-center justify-center h-screen">
//                 <div className="text-lg">Loading...</div>
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className="flex items-center justify-center h-screen">
//                 <div className="text-red-500">Error: {error}</div>
//             </div>
//         );
//     }

//     if (!userInfo) {
//         return (
//             <div className="flex items-center justify-center h-screen">
//                 <div className="text-gray-500">No note found</div>
//             </div>
//         );
//     }

//     return (
//         <div className="flex flex-col bg-white h-screen w-screen">
//             <div className="h-15 w-screen border border-1 border-gray-300">
//                 <div className="flex flex-row justify-between  ">
//                     {/* Left side - Back button */}
                    
//                     <Link href={`/notes`}>
//                         <button type="button"  onClick={handleBackClick}  className="  text-gray-300 w-full cursor-pointer hover:text-purple-800">
//                             <ArrowLeftIcon className="h-5 w-5 translate-y-5.5 translate-x-2" /><span className="text-gray-300 hover:text-purple-800 ml-8 ">Back to Notes</span>
//                         </button>
//                     </Link>
                  

//                     {/* Right side - Action buttons */}
//                     <div className="flex items-center gap-4 mt-2.5 -translate-x-3 ml-2 cursor-pointer">
//                         <button 
//                             className="flex gap-2 items-center text-gray-600 hover:text-gray-800 cursor-pointer"
//                             type="button"
//                             onClick={handleShare}
//                         >
//                             <ShareIcon className="h-5 w-5" />
//                             Share
//                         </button>
                        
//                         <button 
//                             className="flex gap-2 items-center text-red-500 hover:text-red-700"
//                             type="button"
//                             onClick={handleDelete}
//                         >
//                             <TrashIcon className="h-5 w-5 cursor-pointer -translate-y-0.5" />
//                             Delete
//                         </button>
                        
//                         <Link href={`/Edit/${id}`}>
//                             <button className="flex gap-2 items-center border cursor-pointer rounded-lg p-1.5 bg-purple-800 text-white font-extrabold hover:bg-purple-900" type="button">
//                                 <PencilSquareIcon className="h-5 w-5" />
//                                 Edit Notes
//                             </button>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
          

//             {userInfo && (
//                 <div key={userInfo._id} className="flex flex-col justify-center">
//                     <div className="border border-1 border-gray-300 h-[550px] w-[70%] mt-10 mx-auto overflow-y-auto pt-3">
//                         <div className="flex flex-col mt-3 ml-9">
//                             <span className="text-black text-3xl font-extrabold">
//                                 {userInfo.title}
//                             </span>
//                             <div className="flex items-center gap-3 mt-4 text-xs flex-wrap">
//                                 <div className="flex items-center gap-1">
//                                     <TagIcon className="h-4 w-4 text-gray-500" />
//                                     <span className="bg-purple-200 px-4 py-1 text-purple-700 font-bold rounded-2xl">
//                                         {userInfo.topic}
//                                     </span>
//                                 </div>
                                
//                                 <div className="flex items-center gap-1 text-gray-500">
//                                     <CalendarDaysIcon className="h-4 w-4" />
//                                     <span>created {formatDate(userInfo.createdAt)}</span>
//                                 </div>
                                
//                                 <div className="flex items-center gap-1 text-gray-500">
//                                     <CalendarDaysIcon className="h-4 w-4" />
//                                     <span>updated {formatDate(userInfo.updatedAt)}</span>
//                                 </div>
//                             </div>
//                         </div>
                        
//                         <div className="h-0.5 bg-gray-200 w-full mt-3"></div>
                        
//                         <div className="flex flex-col mt-6 p-3">
//                             <span className="text-black text-2xl font-extrabold ml-8 mb-3">
//                                 {userInfo.title}
//                             </span>
//                             <span className="text-gray-600 w-full ml-4 p-5 whitespace-pre-wrap leading-relaxed">
//                                 {userInfo.content}
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//             )}
            
//             <div className="flex flex-row items-center justify-center mt-4">
//                 <Link href={`/Edit/${id}`}>
//                     <button className="flex gap-2 cursor-pointer items-center border w-fit p-1.5 rounded-lg bg-purple-800 text-white font-extrabold hover:bg-purple-900">
//                         <PencilSquareIcon className="h-5 w-5" />
//                         Edit Notes
//                     </button>
//                 </Link>
//             </div>
//         </div>
//     );
// }




"use client"
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { ShareIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { TagIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function UserInfo() {
    const params = useParams();
    const router = useRouter();
    const id = params?.id;

    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const noteId = params?.id;
        if (!noteId) {
            setError("No note ID provided");
            setLoading(false);
            return;
        }

        async function fetchNote(id) {
            try {
                setLoading(true);
                const res = await fetch(`/api/notes/${id}`);
                
                if (!res.ok) {
                    throw new Error(`Failed to fetch note: ${res.status}`);
                }
                
                const note = await res.json();
                setUserInfo(note);
            } catch (err) {
                console.error("Error fetching note:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        
        fetchNote(noteId);
    }, [params?.id]);

    const formatDate = (dateString) => {
        if (!dateString) return "Date not available";
        try {
            return new Date(dateString).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        } catch {
            return "Invalid date";
        }
    };

    const handleShare = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        if (navigator.share) {
            try {
                await navigator.share({
                    title: userInfo.title,
                    text: userInfo.content.slice(0, 100) + "...",
                    url: window.location.href,
                });
            } catch (err) {
                console.log("Share canceled or failed:", err);
            }
        } else {
            // Fallback: copy URL to clipboard
            try {
                await navigator.clipboard.writeText(window.location.href);
                alert("Link copied to clipboard!");
            } catch (err) {
                console.error("Failed to copy link:", err);
            }
        }
    };

    const handleDelete = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        if (!confirm("Are you sure you want to delete this note? This action cannot be undone.")) {
            return;
        }

        try {
            setDeleting(true);
            const res = await fetch(`/api/notes/${id}`, {
                method: 'DELETE',
            });
            
            if (res.ok) {
                router.push('/notes');
            } else {
                throw new Error("Failed to delete note");
            }
        } catch (error) {
            console.error("Error deleting note:", error);
            alert("Failed to delete note. Please try again.");
        } finally {
            setDeleting(false);
        }
    };

    // Loading state
    if (loading) {
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
    if (error) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center px-4">
                <div className="text-center max-w-md">
                    <div className="text-red-500 mb-4">Error loading note</div>
                    <p className="text-gray-600 mb-4">{error}</p>
                    <Link href="/notes">
                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
                            Back to Notes
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

    // No note found
    if (!userInfo) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center px-4">
                <div className="text-center max-w-md">
                    <div className="text-gray-500 mb-4">Note not found</div>
                    <Link href="/notes">
                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
                            Back to Notes
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-4">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    {/* Back button */}
                    <Link href="/notes">
                        <button className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
                            <ArrowLeftIcon className="h-5 w-5" />
                            <span>Back to Notes</span>
                        </button>
                    </Link>

                    {/* Action buttons */}
                    <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
                        <button 
                            onClick={handleShare}
                            className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-800 transition-colors rounded-lg hover:bg-gray-50"
                        >
                            <ShareIcon className="h-4 w-4" />
                            <span className="hidden sm:inline">Share</span>
                        </button>
                        
                        <button 
                            onClick={handleDelete}
                            disabled={deleting}
                            className="flex items-center gap-2 px-3 py-2 text-red-500 hover:text-red-700 transition-colors rounded-lg hover:bg-red-50 disabled:opacity-50"
                        >
                            <TrashIcon className="h-4 w-4" />
                            <span className="hidden sm:inline">
                                {deleting ? "Deleting..." : "Delete"}
                            </span>
                        </button>
                        
                        <Link href={`/Edit/${id}`}>
                            <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                                <PencilSquareIcon className="h-4 w-4" />
                                <span className="hidden sm:inline">Edit Note</span>
                                <span className="sm:hidden">Edit</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main content */}
            <main className="px-4 py-6 text-black">
                <div className="max-w-4xl mx-auto">
                    <article className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                        {/* Note header */}
                        <div className="p-6 border-b border-gray-200">
                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                                {userInfo.title}
                            </h1>
                            
                            {/* Meta information */}
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                {/* Topic tag */}
                                <div className="flex items-center gap-2">
                                    <TagIcon className="h-4 w-4 text-purple-500" />
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700 border border-purple-200">
                                        {userInfo.topic}
                                    </span>
                                </div>
                                
                                {/* Created date */}
                                <div className="flex items-center gap-2">
                                    <CalendarDaysIcon className="h-4 w-4" />
                                    <span>Created {formatDate(userInfo.createdAt)}</span>
                                </div>
                                
                                {/* Updated date */}
                                {userInfo.updatedAt && userInfo.updatedAt !== userInfo.createdAt && (
                                    <div className="flex items-center gap-2">
                                        <CalendarDaysIcon className="h-4 w-4" />
                                        <span>Updated {formatDate(userInfo.updatedAt)}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        {/* Note content */}
                        <div className="p-6">
                            <div 
                                className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed"
                                style={{ whiteSpace: 'pre-wrap' }}
                            >
                                {userInfo.content}
                            </div>
                        </div>
                    </article>

                    {/* Bottom edit button (mobile-friendly) */}
                    <div className="mt-8 flex justify-center sm:justify-start">
                        <Link href={`/Edit/${id}`}>
                            <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-sm">
                                <PencilSquareIcon className="h-5 w-5" />
                                Edit This Note
                            </button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}