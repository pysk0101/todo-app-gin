import express from "express";
const router = express.Router();

import verifyJWT from "../middlewares/verifyJWT";
import {getTodos,createTodo,createTag} from "../controllers/todoController";

router.get("/" ,verifyJWT,getTodos).post("/add", createTodo).post("/addTag",createTag);

export default router;