import app from "./app";

const defaultAppPort = 3000;
const port = parseInt(process.env.APP_PORT as string) || defaultAppPort;

import { seedDB } from "./seeds/seedDB";

app.listen(port, async () => {
  const logYellow = "\x1b[33m%s\x1b[0m";

  await seedDB();

  console.log(logYellow, `💾 running on ${port}`);
});
