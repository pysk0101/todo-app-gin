import express from "express";
const router = express.Router();

import {getTodos,createTodo} from "../controllers/todoController";

router.get("/", getTodos).post("/add", createTodo);

export default router;