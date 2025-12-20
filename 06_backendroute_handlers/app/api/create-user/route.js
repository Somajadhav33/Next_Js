import { NextResponse } from "next/server";
import { users } from "../hello/route";

export async function POST(request) {
  try {
    const { name, age, gender } = await request.json();
    if (!name || !age || !gender) {
      return NextResponse.json(
        {
          success: false,
          error: "Incomplete data",
        },
        { status: 400 }
      );
    }
    const nameExists = users.find((user) => user.name === name);
    if (nameExists) {
      return NextResponse.json(
        {
          success: false,
          error: "User exists",
        },
        { status: 400 }
      );
    }
    const newUSer = {
      id: users.length + 1,
      name: name,
      age: age,
      gender: gender,
    };
    users.push(newUSer);
    return NextResponse.json(
      { success: true, data: users, message: "user created" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to create user" },
      { status: 500 }
    );
  }
}
