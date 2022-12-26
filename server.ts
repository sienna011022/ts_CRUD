import express from "express";
import router from "./src/routes/router";

export class App {
  public app;

  constructor() {
    this.app = express();
    this.setMiddleWares();
    this.setRouter();
  }

  private setRouter(): void {
    this.app.use(router);
  }

  private setMiddleWares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

}
