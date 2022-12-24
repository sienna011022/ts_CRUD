import express from "express";
import router from "./src/routes/UserRouter";

export class App {
  public app;

  constructor() {
    this.app = express();
    this.setMiddleWares();
    this.setRouter();
    this.showStartLog();
  }

  private setRouter(): void {
    this.app.use(router);
  }

  private setMiddleWares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  private showStartLog(): void {
    this.app.listen(8000, () => {
      console.log("**----------------------------------**");
      console.log("====      Server is On...!!!      ====");
      console.log("**----------------------------------**");
    });
  }
}
