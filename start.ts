import { App } from "./server";
import 'dotenv/config'

try {
  const app = new App().app;
  const port = process.env.PORT;

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
} catch (error) {
  console.log(error);
}
