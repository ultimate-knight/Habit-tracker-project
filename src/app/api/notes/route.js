import dbConnect from "@/lib/mongodb";
import Note from "@/models/Note";

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*", // Or replace with specific origin
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}


export async function GET(){
    await dbConnect();
    const Notes=await Note.find();

    return Response.json(Notes,{status:200,headers: {
      "Access-Control-Allow-Origin": "*",
    },},);
}

export async function POST(request){
    await dbConnect();
    const {title,content,topic}=await request.json();
    const Noted=await Note.create({title,content,topic});

    return Response.json(Noted,{status:201,headers: {
      "Access-Control-Allow-Origin": "*",
    },})

}
