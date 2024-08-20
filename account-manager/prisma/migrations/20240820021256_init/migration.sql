/*
  Warnings:

  - You are about to drop the column `balance` on the `PaymentAccount` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `PaymentAccount` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `PaymentAccount` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `PaymentHistory` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `PaymentHistory` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `PaymentHistory` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PaymentAccount" DROP COLUMN "balance",
DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "PaymentHistory" DROP COLUMN "createdAt",
DROP COLUMN "status",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";
