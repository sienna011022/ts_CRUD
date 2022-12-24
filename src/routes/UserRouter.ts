import express from "express";

import {UserController} from "../controller/UserController";

const router = express.Router();
const userController = new UserController();

router.post("/users", userController.createUser);

export default router;