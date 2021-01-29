import sharp from "sharp";

export type TSupportedFileType = "jpeg" | "png" | "gif";

// Based on https://malcoded.com/posts/nodejs-image-resize-express-sharp/
export const resize = (
  path: string,
  format: TSupportedFileType,
  width: number,
  height: number
) => {
  let transform = sharp(path);

  if (format) {
    transform = transform.toFormat(format);
  }

  if (width || height) {
    transform = transform.resize(width, height);
  }

  return transform.toBuffer();
};
