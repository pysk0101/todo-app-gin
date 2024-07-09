import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import refreshToken from "../middlewares/refreshToken";

const verifyJWT = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies?.at;
    if (!token) return res.status(401).redirect("/");

    try {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string, (err:any, user : any) => {
            if (err) refreshToken(req, res)
            })
        next();
        
    } catch (error) {
        res.status(400).send("Geçersiz token");
    }
}

export default verifyJWT 