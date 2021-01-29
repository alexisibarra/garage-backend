import { prisma } from "./seedDB";

const carsMetadata = [
  {
    model: "RS7 4.0",
    maker: "Audi",
    year: 2015,
    imageUrl:
      "http://localhost:3000/assets/vehicle_image-155fa5ae-00a0-11ea-84e3-4371baa68b28.jpg",
  },
  {
    model: "A6 50",
    maker: "Audi",
    year: 2013,
    imageUrl:
      "http://localhost:3000/assets/vehicle_image-206b3cd8-00a0-11ea-a1de-278776d54145.jpg",
  },
  {
    model: "G-klasse 300",
    maker: "Mercedes",
    year: 2011,
    imageUrl:
      "http://localhost:3000/assets/vehicle_image-2b301b3e-00a0-11ea-a1df-d319b5694f62.jpg",
  },
  {
    model: "EB Veyron 16.4 SS",
    maker: "Bugatti",
    year: 2015,
    imageUrl:
      "http://localhost:3000/assets/vehicle_image-329ca892-00a0-11ea-a1e0-87df99c1daef.jpg",
  },
  {
    model: "911 GT3 RS",
    maker: "Porsche",
    year: 2019,
    imageUrl:
      "http://localhost:3000/assets/vehicle_image-3e33a386-00a0-11ea-a1e1-33fd4292aab9.jpg",
  },
  {
    model: "Montero Sport",
    maker: "Mitsubishi",
    year: 1998,
    imageUrl: null,
  },
  {
    model: "959 2.9",
    maker: "Porsche",
    year: 2015,
    imageUrl:
      "http://localhost:3000/assets/vehicle_image-46a17a48-00a0-11ea-a1e2-f7e8d4c242d7.jpg",
  },
  {
    model: "190 SL 1.9",
    maker: "Mercedes",
    year: 1955,
    imageUrl:
      "http://localhost:3000/assets/vehicle_image-590679fe-c8ce-11e9-a7fd-d784ecefb016.jpg",
  },
  {
    model: "S63",
    maker: "Mercedes",
    year: 2019,
    imageUrl:
      "http://localhost:3000/assets/vehicle_image-5e87ec18-d469-11e9-a665-876511f53dc2.jpg",
  },
  {
    model: "Cougar R-Code",
    maker: "Cougar",
    year: 1968,
    imageUrl:
      "http://localhost:3000/assets/vehicle_image-b8ee783a-c8ce-11e9-8654-1fdda1b36688.jpg",
  },
  {
    model: "Q2 Sport Tfsi",
    maker: "Audi",
    year: 2017,
    imageUrl:
      "http://localhost:3000/assets/vehicle_image-dc0e179c-ec34-11e9-9a17-2b1a8ae7aa78.jpg",
  },
  {
    model: "E-type 3.8",
    maker: "Mercedes",
    year: 1961,
    imageUrl:
      "http://localhost:3000/assets/vehicle_image-dd23c210-cafd-11e9-96b5-4b562b719823.jpg",
  },
];

export const seedCarModel = async () => {
  return Promise.all(
    carsMetadata.map((car) => {
      const preValues = {
        where: {
          model: car.model,
        },
        update: {},
        create: {
          model: car.model,
          year: car.year,
          maker: {
            connect: {
              name: car.maker,
            },
          },
        },
      };

      const values = !!car.imageUrl
        ? {
            ...preValues,
            create: {
              ...preValues.create,
              image: {
                connect: {
                  url: car.imageUrl,
                },
              },
            },
          }
        : preValues;

      return prisma.car.upsert(values);
    })
  );
};
