import { Request, Response, NextFunction } from "express";

const { validationResult } = require("express-validator");

import { resize, TSupportedFileType } from "../Utils/resize";

const fakeTimeOutSeconds = Number(process.env.FAKE_TIMEOUT_SECONDS) || 5;

export const assetsResizer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (Object.keys(req.query).length <= 0) {
    next();

    return;
  }

  setTimeout(async () => {
    try {
      validationResult(req).throw();

      const width = Number(req.query.width);
      const height = Number(req.query.height);

      const format = req.query.format as TSupportedFileType;

      res.type(`image/${format || "png"}`);

      const resizedImagePromise = await resize(
        req.body.fileURL,
        format,
        width,
        height
      );

      res.send(resizedImagePromise);
    } catch (err) {
      res.statusMessage = "Bad request";
      res.status(400).send(err);

      return;
    }
  }, fakeTimeOutSeconds * 1000);
};
