import { Request, Response } from 'express';
import User from '../models/userModel';

const getUser = async (req: Request, res: Response) => {
    try {
        
        const userId = req.params.userId;
        const user = await User.findById(userId)
        if (!user) {
            return res.send("GET USER DA BIR PROBLEM OLDU ASLAN PARCASI")
        }

        const completedCount = await user.getCompletedTodos();

        res.render('profile', {user: user, completedCount: completedCount}, );
    } catch (error: any) {
        res.send(error)
    }
}

const createTag = async (req: Request, res: Response) => {
    try {
        const userId = req.cookies.userId;
        const user = await User.findById(userId);
        if (!user) {
            return res.send("Kullanıcı bulunamadı");
        }
        const { newTag } = req.body;
        if(user.tags.includes(newTag)) return res.send("Bu etiket zaten var");

        user.tags.push(newTag);
        await user.save();

        res.redirect(`/user/${userId}`);    
        
    } catch (error:any) {
        res.send(error)
    }    
}

const deleteTag = async (req: Request, res: Response) => {
    try {
        const userId = req.cookies.userId;
        const { tagName } = req.body;
        const user = await User.findById(userId);

        if (!user) {
            return res.send("Kullanıcı bulunamadı");
        }

        user.tags = user.tags.filter(tag => tag !== tagName);
        await user.save();

        res.json({ success: true, redirectUrl: `/user/${userId}` });

    } catch (error: any) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export {  getUser , createTag , deleteTag}