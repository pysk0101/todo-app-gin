import express from "express"
const router = express.Router()
import  {createUser} from "../controllers/userController" 
router.post("/", createUser)


export default router