import dbConnect from "@/lib/db";
import Note from "@/models/Note";
import { NextResponse } from "next/server";

// export const runtime = "nodejs";

export async function GET() {
  try {
    await dbConnect();
    const notes = await Note.find({}).sort({ createdAt: -1 });
    return NextResponse.json(
      {
        success: true,
        data: notes,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error,
      },
      { status: 404 }
    );
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    // console.log("BODY:", body);
    const note = await Note.create(body);
    console.log("Note Created Successfully");
    return NextResponse.json(
      {
        success: true,
        data: note,
      },
      { status: 201 }
    );
  } catch (error) {
    // console.error("API ERROR:", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message,
        stack: error.stack,
      },
      { status: 500 }
    );
  }
}
