const { query } = require("express-validator");

export const assetsEndpointValidations = [
  query("format", "Supported formats: jpeg, png, gif").isIn([
    "jpeg",
    "png",
    "gif",
  ]),
  query("width", "width must be a number greater than zero").isInt({ gt: 0 }),
  query("height", "height must be a number greater than zero").isInt({
    gt: 0,
  }),
];
