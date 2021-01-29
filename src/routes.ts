import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();

const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const cars = await prisma.car.findMany({
    include: { maker: true, image: true },
  });

  res.json(cars);
});

export default router;
