import { NextResponse } from "next/server";

export const users = [
  {
    id: 1,
    name: "Somnath",
    age: 21,
    gender: "M",
  },
  {
    id: 2,
    name: "Radha",
    age: 22,
    gender: "F",
  },
  {
    id: 3,
    name: "Ravi",
    age: 23,
    gender: "M",
  },
];

export async function GET(request) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const name = searchParams.get("name");
    const age = searchParams.get("age");

    let filteredUsers = users;
    if (age) {
      filteredUsers = filteredUsers.filter((u) => u.age === Number(age));
    }

    if (name) {
      filteredUsers = filteredUsers.filter((user) =>
        user.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    return NextResponse.json({
      success: true,
      data: filteredUsers,
      total: filteredUsers.length,
    });
  } catch (e) {
    return NextResponse.json({
      success: false,
      error: "Failed to fetch users",
    });
  }
}
