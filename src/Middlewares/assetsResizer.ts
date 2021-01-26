import { Request, Response, NextFunction } from "express";
const { validationResult } = require("express-validator");
import { resize, TSupportedFileType } from "../Utils/resize";

export const assetsResizer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (Object.keys(req.query).length <= 0) {
    next();

    return;
  }

  try {
    validationResult(req).throw();

    const width = Number(req.query.width);
    const height = Number(req.query.height);

    const format = req.query.format as TSupportedFileType;

    res.type(`image/${format || "png"}`);

    resize(req.body.fileURL, format, width, height).pipe(res);
  } catch (err) {
    res.statusMessage = "Bad request";
    res.status(400).send(err);

    return;
  }
};
