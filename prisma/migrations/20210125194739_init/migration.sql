-- CreateTable
CREATE TABLE "Car" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "imageId" INTEGER,
    "makerId" INTEGER,
    FOREIGN KEY ("imageId") REFERENCES "Image" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    FOREIGN KEY ("makerId") REFERENCES "Maker" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Maker" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Image" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Car.model_unique" ON "Car"("model");

-- CreateIndex
CREATE UNIQUE INDEX "Maker.name_unique" ON "Maker"("name");
