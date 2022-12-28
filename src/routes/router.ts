import express from "express";
import { ArticleController } from "../controller/ArticleController";
import { UserController } from "../controller/UserController";

const router = express.Router();
const userController = new UserController();
const articleController = new ArticleController();

router.post("/users", userController.createUser);
router.get("/users", userController.findUsers);

router.post("/users/:user_id/articles", articleController.createArticle);
router.get("/users/:user_id/articles", articleController.findAllArticle);
router.patch("/users/:user_id/articles/:article_id", articleController.updateArticle);
router.delete("/users/:user_id/articles", articleController.deleteAllArticle);
router.delete("/users/:user_id/articles/:article_id", articleController.deleteArticle);
export default router;