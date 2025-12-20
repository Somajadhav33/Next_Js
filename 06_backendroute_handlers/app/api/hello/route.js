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
    return NextResponse.json({
      success: true,
      data: users,
      total: users.length,
    });
  } catch (e) {
    return NextResponse.json({
      success: false,
      error: "Failed to fetch users",
    });
  }
}
