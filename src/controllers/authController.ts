import { Response, Request } from 'express'
import User from '../models/userModel'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const authController = async (req:Request, res: Response) => {
    try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).send("Tüm alanları doldurunuz");

    const newUser = await User.findOne({ email: email });
    if (!newUser) return res.status(404).send("Kullanıcı bulunamadı");


    const matchPwd = await bcrypt.compare(password, newUser.password) // ilk önce loginde girilen password, sonraki bizim db'deki hashlenmiş password

    if (!matchPwd) return res.status(400).send("Hatalı şifre");

    
        if (matchPwd) {
            //email yerine userID koymayi dene  .
            const token = jwt.sign({}, process.env.ACCESS_TOKEN_SECRET as string, { expiresIn: '15m' });
            const refreshToken = jwt.sign({}, process.env.REFRESH_TOKEN_SECRET as string, { expiresIn: '1d' });


            res.cookie('at', token, {
                httpOnly: true,
                secure: true,
                sameSite: 'none'
            });
            res.cookie('rt', refreshToken, {
                httpOnly: true,
                secure: true,
                sameSite: 'none' 
            });
            res.cookie('userId', newUser._id.toString(), {
                httpOnly: true,
                secure: true,
                sameSite: 'none' 
            })
            
            res.redirect(`/user/${newUser._id.toString()}`);
        } else {
            res.status(401).send("Hatalı şifre");
        }
    } catch (error: any) {
        res.status(500).json({ 'message': error.message })

    }
}


const logoutController = async (req: Request, res: Response) => {
    res.clearCookie('userId');
    res.clearCookie('at');
    res.clearCookie('rt');
    res.redirect('/');
}

export {authController,logoutController} 