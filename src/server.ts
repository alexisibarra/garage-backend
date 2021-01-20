import app from "./app";

const defaultAppPort = 3000;
const port = parseInt(process.env.APP_PORT as string) || defaultAppPort;

app.listen(port, () => {
  const logYellow = "\x1b[33m%s\x1b[0m";
  console.log(logYellow, `💾 running on ${port}`);
});
