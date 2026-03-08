"use server";

import { prisma } from "@/lib/db";

export const seedDb = async () => {
  await prisma.post.createMany({
    data: [
      { title: "Hello Prisma" },
      { title: "Hello Soma" },
      { title: "Hello Anna" },
    ],
  });
  console.log("Seed Successfull");
};

export const createPost = async (formdata) => {
  const title = formdata.get("title");
  const description = formdata.get("description");
  const post = await prisma.post.create({
    data: {
      title: title,
      description: description,
    },
  });
  console.log("Data inserted");
  return {
    success: true,
    data: post,
  };
};

export const getPost = async () => {
  const posts = await prisma.post.findMany();
  return posts;
};
