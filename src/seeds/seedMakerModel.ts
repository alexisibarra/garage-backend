import { prisma } from "./seedDB";

const makersMetadata = [
  { name: "Audi" },
  { name: "Bugatti" },
  { name: "Cougar" },
  { name: "Mercedes" },
  { name: "Mitsubishi" },
  { name: "Porsche" },
];

export const seedMakerModel = async () => {
  return Promise.all(
    makersMetadata.map((maker) =>
      prisma.maker.upsert({
        where: {
          name: maker.name,
        },
        update: {},
        create: {
          name: maker.name,
        },
      })
    )
  );
};
