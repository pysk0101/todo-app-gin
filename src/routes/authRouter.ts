import express from 'express';

const router = express.Router();

import  authController from '../controllers/authController';

router.post('/', authController)

export default router;