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
