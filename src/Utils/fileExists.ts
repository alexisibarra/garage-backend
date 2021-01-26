import fs from "fs";

export const fileExists = (file: string) =>
  new Promise((resolve, reject) => {
    fs.access(file, fs.constants.F_OK, (err) =>
      err ? reject(false) : resolve(true)
    );
  });
