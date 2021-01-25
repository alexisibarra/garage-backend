import { PrismaClient } from "@prisma/client";
import { seedCarModel } from "./seedCarModel";
import { seedImageModel } from "./seedImageModel";
import { seedMakerModel } from "./seedMakerModel";

export const prisma = new PrismaClient();

export const seedDB = async () => {
  await seedImageModel().catch(console.log);
  await seedMakerModel().catch(console.log);
  await seedCarModel().catch(console.log);
};
