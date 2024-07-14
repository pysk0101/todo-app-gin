import express from "express";
const router = express.Router();

import verifyJWT from "../middlewares/verifyJWT";
import {getTodos,createTodo,completeTodo, deleteTodo} from "../controllers/todoController";
router.get("/:userId", verifyJWT ,getTodos).post("/add", createTodo).put("/complete", completeTodo).delete("/delete", deleteTodo);

export default router;