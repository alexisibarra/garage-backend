/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[url]` on the table `Image`. If there are existing duplicate values, the migration will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Image.url_unique" ON "Image"("url");
