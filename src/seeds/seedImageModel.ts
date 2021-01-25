import { prisma } from "./seedDB";

export const seedImageModel = async () => {
  return Promise.all(
    imagesMetadata.map((image) =>
      image.url
        ? prisma.image.upsert({
            where: {
              url: image.url,
            },
            update: {},
            create: {
              url: image.url,
            },
          })
        : null
    )
  );
};
const imagesMetadata = [
  {
    url:
      "http://localhost:3000/assets/vehicle_image-155fa5ae-00a0-11ea-84e3-4371baa68b28.jpg",
  },
  {
    url:
      "http://localhost:3000/assets/vehicle_image-206b3cd8-00a0-11ea-a1de-278776d54145.jpg",
  },
  {
    url:
      "http://localhost:3000/assets/vehicle_image-2b301b3e-00a0-11ea-a1df-d319b5694f62.jpg",
  },
  {
    url:
      "http://localhost:3000/assets/vehicle_image-329ca892-00a0-11ea-a1e0-87df99c1daef.jpg",
  },
  {
    url:
      "http://localhost:3000/assets/vehicle_image-3e33a386-00a0-11ea-a1e1-33fd4292aab9.jpg",
  },
  {
    url: null,
  },
  {
    url:
      "http://localhost:3000/assets/vehicle_image-46a17a48-00a0-11ea-a1e2-f7e8d4c242d7.jpg",
  },
  {
    url:
      "http://localhost:3000/assets/vehicle_image-590679fe-c8ce-11e9-a7fd-d784ecefb016.jpg",
  },
  {
    url:
      "http://localhost:3000/assets/vehicle_image-5e87ec18-d469-11e9-a665-876511f53dc2.jpg",
  },
  {
    url:
      "http://localhost:3000/assets/vehicle_image-b8ee783a-c8ce-11e9-8654-1fdda1b36688.jpg",
  },
  {
    url:
      "http://localhost:3000/assets/vehicle_image-dc0e179c-ec34-11e9-9a17-2b1a8ae7aa78.jpg",
  },
  {
    url:
      "http://localhost:3000/assets/vehicle_image-dd23c210-cafd-11e9-96b5-4b562b719823.jpg",
  },
];
