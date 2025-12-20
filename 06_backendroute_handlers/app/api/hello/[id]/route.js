import { NextResponse } from "next/server";
import { users } from "../route";

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const userId = parseInt(id);
    const user = users.find((u) => u.id === userId);
    if (!user)
      return NextResponse.json(
        {
          success: false,
          error: "user Not Found",
        },
        { status: 404 }
      );
    return NextResponse.json({
      success: true,
      data: user,
    });
  } catch (e) {
    return NextResponse.json({
      success: false,
      error: "Failed to fetch users",
    });
  }
}
