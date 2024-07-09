import { Request, Response } from "express";
import jwt from "jsonwebtoken";


const refreshToken = async (req:Request, res:Response) => {
    try {

        const refreshToken = req.cookies.rt;
        if (!refreshToken) return res.sendStatus(401);
        console.log
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET as string , (err:any, decoded:any) => {
            if (err) return res.sendStatus(403);
            //decoded= paylod kısmı
            const token = jwt.sign({ email: decoded.email }, process.env.ACCESS_TOKEN_SECRET as string, { expiresIn: '1h' });
            res.cookie("at", token, { httpOnly: true });

        })
    } catch (error : any) {
        res.status(500).json({ 'message': error.message })
    }
}

export default refreshToken