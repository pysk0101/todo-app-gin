import express from "express"
const router = express.Router()

import  {getUser, createTag,deleteTag , updateProfilePicture, removeProfilePicture } from "../controllers/userController" 
import upload from '../middlewares/multer';
import verifyJWT from "../middlewares/verifyJWT";

//About users
router.get("/:userId",verifyJWT, getUser)

//About tags
router.delete("/deleteTag", deleteTag).post("/addTag", createTag)

//About picture
router.post("/:userId/removePicture", removeProfilePicture).post("/:userId", upload.single('profilePicture'), updateProfilePicture )

export default router   