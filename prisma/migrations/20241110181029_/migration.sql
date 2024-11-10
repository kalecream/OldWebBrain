/*
  Warnings:

  - You are about to drop the `guestBook` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "guestBook";

-- CreateTable
CREATE TABLE "GuestBook" (
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" SERIAL NOT NULL,
    "note" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT,

    CONSTRAINT "GuestBook_pkey" PRIMARY KEY ("created_at")
);
