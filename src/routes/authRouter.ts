import express from 'express';

const router = express.Router();

import  {authController,logoutController} from '../controllers/authController';

router.post('/login', authController).post('/logout', logoutController);

export default router;