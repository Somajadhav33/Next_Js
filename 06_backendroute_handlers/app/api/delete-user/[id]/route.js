import { NextResponse } from "next/server";
import { users } from "../../hello/route";


export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    const userId = parseInt(id);

    const userIndex = users.findIndex((u) => u.id === userId);
    if (userIndex === -1) {
      return NextResponse.json(
        { success: false, error: "User Not Found" },
        { status: 404 }
      );
    }
    const deleteUser = users[userIndex];
    users.splice(userIndex, 1);
    return NextResponse.json({
      success: true,
      data: deleteUser,
      message: "User Deleted!",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "User delete failed",
      },
      { status: 404 }
    );
  }
}
