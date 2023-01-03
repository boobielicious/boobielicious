-- CreateEnum
CREATE TYPE "NewznabItemStatus" AS ENUM ('UNKNOWN', 'QUEUED', 'PAUSED', 'DOWNLOADING', 'COMPLETED', 'SKIPPED', 'FAILED', 'DELETED');

-- CreateTable
CREATE TABLE "NewznabItem" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "status" "NewznabItemStatus" NOT NULL DEFAULT 'UNKNOWN',
    "queryName" TEXT NOT NULL,
    "stashId" TEXT NOT NULL,
    "publishedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NewznabItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NewznabItem_url_key" ON "NewznabItem"("url");
