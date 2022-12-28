import { Article } from "./src/entity/Article";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./src/entity/User";
import { Picture } from "./src/entity/Picture";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: true,
  entities: [User,Article,Picture],
  migrations: [],
  subscribers: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((error: Error) => console.log(error));
