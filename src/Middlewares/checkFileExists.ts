import { Request, Response, NextFunction } from "express";

import { fileExists } from "../Utils/fileExists";

export const checkFileExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const fileNameWithQueryString = req.originalUrl.split("/")[2];
  const fileName = fileNameWithQueryString.split("?")[0];

  const fileURL = `${process.cwd()}/assets/${fileName}`;

  fileExists(fileURL)
    .then(() => {
      req.body.fileName = fileName;
      req.body.fileURL = fileURL;
      next();
    })
    .catch(() => {
      res.statusMessage = "File does not exist";
      res.status(400).send("No such file or directory");

      return;
    });
};
