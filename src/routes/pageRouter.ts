import express from 'express';
const router = express.Router();

import { getHomePage,getLoginPage,getRegisterPage } from '../controllers/pageController';

router.get('/', getHomePage).get('/login', getLoginPage).get('/signup', getRegisterPage);

export default router;