"use server";

import { revalidatePath } from "next/cache";
import connectDb from "@/lib/db";
import TodoSchema from "@/model/todo";
import { createTodoSchema } from "@/validations/todo";

export async function CreateTodo(data) {
  try {
    const validateData = createTodoSchema.parse(data);
    await connectDb();
    const todo = await TodoSchema.create(validateData);
    revalidatePath("/");
  } catch (e) {}
}
