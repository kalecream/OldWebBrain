-- CreateTable
CREATE TABLE "GuestBook" (
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" SERIAL NOT NULL,
    "note" TEXT[],
    "name" TEXT,
    "url" TEXT,

    CONSTRAINT "GuestBook_pkey" PRIMARY KEY ("created_at")
);
