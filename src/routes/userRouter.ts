import express from "express"
const router = express.Router()

import  {getUser, createTag,deleteTag} from "../controllers/userController" 
import verifyJWT from "../middlewares/verifyJWT";

router.delete("/deleteTag", deleteTag).get("/:userId",verifyJWT, getUser).post("/addTag", createTag)


export default router