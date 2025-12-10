import dbConnect from "@/lib/mongodb";
import Note from "@/models/Note";
import { isValidObjectId } from "mongoose";

export async function GET(request, { params }) {
  try {
    await dbConnect();

    // Await params before using its properties
    const { id } = await params;

    // Check if id exists and is valid
    if (!id || id === "undefined" || !isValidObjectId(id)) {
      return Response.json(
        { message: "Invalid or missing ID" },
        { status: 400 }
      );
    }

    const Notes = await Note.findById(id);

    if (!Notes) {
      return Response.json({ message: "Note not found" }, { status: 404 });
    }

    return Response.json(Notes, { status: 200 });
  } catch (error) {
    console.error("Database error:", error);
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    await dbConnect();
    const body = await request.json();

    const { id } = await params;

    if (!id || id === "undefined" || !isValidObjectId(id)) {
      return Response.json(
        { Message: "Invalid id or missing id" },
        { status: 400 }
      );
    }

    const Notes = await Note.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true }
    );

    return Response.json({ message: Notes }, { status: 200 });
  } catch (error) {
    console.error("Database error:", error);
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}



export async function DELETE(request, { params }) {
  try {
    await dbConnect();

    const { id } = params;

    if (!id || id === "undefined" || !isValidObjectId(id)) {
      return Response.json(
        { message: "Invalid id or missing id" },
        { status: 400 }
      );
    }

    const note = await Note.findByIdAndDelete(id);

    if (!note) {
      return Response.json(
        { message: "Note not found" },
        { status: 404 }
      );
    }

    return Response.json(
      { message: "Note deleted successfully", data: note },
      { status: 200 }
    );
  } catch (error) {
    console.error("Database error:", error);
    return Response.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}