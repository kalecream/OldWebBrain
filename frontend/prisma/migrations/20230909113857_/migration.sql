-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'CONTRACTOR', 'CUSTOMER');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'CUSTOMER',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "books" (
    "isbn" TEXT NOT NULL,
    "title" TEXT,
    "author" TEXT,
    "rating" INTEGER DEFAULT 0,
    "genre" TEXT[],
    "status" TEXT NOT NULL DEFAULT 'unread',
    "summary" TEXT NOT NULL,
    "review" TEXT,
    "started" TIMESTAMP(3),
    "finished" TIMESTAMP(3),
    "cover" TEXT,
    "pages" INTEGER,
    "minutes" INTEGER,
    "series" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "books_pkey" PRIMARY KEY ("isbn")
);

-- CreateTable
CREATE TABLE "courses" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "author" TEXT,
    "rating" INTEGER DEFAULT 0,
    "status" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "review" TEXT,
    "started" TIMESTAMP(3),
    "finished" TIMESTAMP(3),
    "type" TEXT,
    "where" TEXT,
    "topic" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "courses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TimeLog" (
    "projectId" TEXT NOT NULL,
    "scope" TEXT NOT NULL,
    "started" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "finished" TIMESTAMP(3),
    "notes" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TimeLog_pkey" PRIMARY KEY ("created_at")
);

-- CreateTable
CREATE TABLE "services" (
    "id" TEXT NOT NULL,
    "category" TEXT NOT NULL DEFAULT 'service',
    "title" TEXT NOT NULL,
    "display" BOOLEAN NOT NULL DEFAULT true,
    "description" TEXT NOT NULL,
    "link" TEXT,
    "image" TEXT,
    "linkText" TEXT,
    "cost" DECIMAL(8,2) NOT NULL DEFAULT 0,
    "costDay" DECIMAL(8,2) NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "display" BOOLEAN NOT NULL DEFAULT true,
    "status" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT,
    "link" TEXT,
    "repoName" TEXT,
    "sourceLink" TEXT,
    "technology" TEXT[],
    "language" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,
    "serviceId" TEXT,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "TimeLog_created_at_key" ON "TimeLog"("created_at");

-- AddForeignKey
ALTER TABLE "TimeLog" ADD CONSTRAINT "TimeLog_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("email") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE SET NULL ON UPDATE CASCADE;
