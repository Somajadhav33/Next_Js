"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const seedDb = async () => {
  await prisma.post.createMany({
    data: [
      { title: "Hello Prisma", description: "This is a seeded post" },
      { title: "Hello Soma", description: "Another seeded post" },
      { title: "Hello Anna", description: "Seeded for testing" },
    ],
  });
  revalidatePath("/");
  console.log("Seed Successfull");
};

export const createPost = async (formdata) => {
  const title = formdata.get("title");
  const description = formdata.get("description");

  if (!title) return { success: false, error: "Title is required" };

  try {
    const post = await prisma.post.create({
      data: {
        title: title,
        description: description,
      },
    });
    revalidatePath("/");
    console.log("Data inserted");
    return {
      success: true,
      data: post,
    };
  } catch (error) {
    console.error("Error creating post:", error);
    return { success: false, error: "Failed to create post" };
  }
};

export const getPost = async () => {
  const posts = await prisma.post.findMany();
  return posts;
};
