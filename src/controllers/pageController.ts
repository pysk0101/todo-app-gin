
import { Request, Response } from 'express';
const getHomePage = async (req:Request, res:Response) => {
    res.render('home');
}
const getLoginPage = async (req:Request, res:Response) => {
    res.render('login');
    }
const getRegisterPage = async (req:Request, res:Response) => {
    res.render('register');
}

export { getHomePage,getLoginPage,getRegisterPage }