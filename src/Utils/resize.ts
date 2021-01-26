import sharp from "sharp";
import fs from "fs";

export type TSupportedFileType = "jpeg" | "png" | "gif";

export const resize = (
  path: string,
  format: TSupportedFileType,
  width: number,
  height: number
) => {
  const readStream = fs.createReadStream(path);
  let transform = sharp();

  if (format) {
    transform = transform.toFormat(format);
  }

  if (width || height) {
    transform = transform.resize(width, height);
  }

  return readStream.pipe(transform);
};
