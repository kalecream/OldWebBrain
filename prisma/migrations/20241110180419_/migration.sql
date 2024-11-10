/*
  Warnings:

  - You are about to drop the `GuestBook` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "GuestBook";

-- CreateTable
CREATE TABLE "guestBook" (
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" SERIAL NOT NULL,
    "note" TEXT[],
    "name" TEXT,
    "url" TEXT,

    CONSTRAINT "guestBook_pkey" PRIMARY KEY ("created_at")
);
