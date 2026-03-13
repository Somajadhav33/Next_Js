/*
  Warnings:

  - You are about to drop the column `strpeCustomerId` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "strpeCustomerId",
ADD COLUMN     "stripeCustomerId" TEXT;
