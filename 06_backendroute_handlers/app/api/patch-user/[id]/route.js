import { NextResponse } from "next/server";
import { users } from "../../hello/route";

export async function PATCH(request, { params }) {
  try {
    const { id } = await params;
    const userId = parseInt(id);
    const UserIndex = users.findIndex((u) => u.id === userId);

    if (UserIndex === -1) {
      return NextResponse.json(
        { success: false, error: "User Not Found" },
        { status: 404 }
      );
    }

    const body = await request.json();

    users[UserIndex] = {
      ...users[UserIndex],
      ...body,
      id: userId,
    };
    return NextResponse.json({
      success: true,
      data: users[UserIndex],
      message: "User Updated!!",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to Update user" },
      { status: 500 }
    );
  }
}
