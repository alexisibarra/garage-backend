import { Request, Response, NextFunction } from "express";
import mcache from "memory-cache";

// Taken from https://medium.com/the-node-js-collection/simple-server-side-cache-for-express-js-with-node-js-45ff296ca0f0
export const cache = (duration: number) => {
  return (req: any, res: any, next: NextFunction) => {
    const key = "__express__" + req.originalUrl || req.url;

    const cachedBody = mcache.get(key);

    if (cachedBody) {
      res.send(cachedBody);
      return;
    } else {
      res.sendResponse = res.send;

      res.sendFile = (annn: any) => {
        console.log("Prueba");
      };

      res.send = (body: any) => {
        // Cache body for [duration] minutes
        mcache.put(key, body, duration * 1000);
        res.sendResponse(body);
      };
      next();
    }
  };
};
