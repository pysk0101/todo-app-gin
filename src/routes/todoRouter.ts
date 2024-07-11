import express from "express";
const router = express.Router();

import verifyJWT from "../middlewares/verifyJWT";
import {getTodos,createTodo,createTag} from "../controllers/todoController";

router.get("/:userId" ,getTodos).post("/add", createTodo)

export default router;