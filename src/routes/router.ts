import { ArticleController } from "../controller/ArticleController";
import express from "express";

import { UserController } from "../controller/UserController";

const router = express.Router();
const userController = new UserController();
const articleController = new ArticleController();

router.post("/users", userController.createUser);
router.get("/users", userController.findUsers);

router.post("/users/:user_id/articles", articleController.createArticle);
router.get("/users/:user_id/articles", articleController.findAllArticle);
export default router;
