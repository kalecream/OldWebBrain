/*
  Warnings:

  - Made the column `name` on table `guestBook` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "guestBook" ALTER COLUMN "note" SET NOT NULL,
ALTER COLUMN "note" SET DATA TYPE TEXT,
ALTER COLUMN "name" SET NOT NULL;
