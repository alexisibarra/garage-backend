import express from "express";
import cors from "cors";
import "dotenv/config";

import router from "./routes";
import { assetsEndpointValidations } from "./Validators/assetsEndpointValidations";
import { assetsResizer } from "./Middlewares/assetsResizer";
import { checkFileExists } from "./Middlewares/checkFileExists";
import { cache } from "./Middlewares/cache";

const app = express();

const assetsCacheSeconds = Number(process.env.ASSETS_CACHE_SECONDS) || 60;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  "/assets",
  checkFileExists,
  cache(assetsCacheSeconds),
  assetsEndpointValidations,
  assetsResizer
);
app.use("/assets", express.static("assets"));

app.use(router);

export default app;
