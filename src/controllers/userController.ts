import { Request, Response } from 'express';
import User from '../models/userModel';
import fs from 'fs';
import path from 'path';
import bcrypt from "bcrypt";



const getUser = async (req: Request, res: Response) => {
    try {

        const userId = req.params.userId;
        const user = await User.findById(userId)
        if (!user) {
            return res.send("GET USER DA BIR PROBLEM OLDU ASLAN PARCASI")
        }

        const completedCount = await user.getCompletedTodos();

        res.render('profile', { user: user, completedCount: completedCount },);
    } catch (error: any) {
        res.send(error)
    }
}

const deleteUser = async (req: Request, res: Response) => {
    try {
        const password = req.body.password; 
        const userId = req.params.userId;
        const user = await User.findById(userId);
        if(!user) return res.send("Kullanıcı bulunamadı");

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.send("Şifre hatalı");
        }
        
        await User.deleteOne({ _id: userId }).then(() => { res.redirect("/"); });

    } catch (error) {
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
        if (user.tags.includes(newTag)) return res.send("Bu etiket zaten var");

        user.tags.push(newTag);
        await user.save();

        res.redirect(`/user/${userId}`);

    } catch (error: any) {
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

const updateProfilePicture = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId;
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }

        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).send('User not found');
        }

        if (typeof user.profilePicture === 'undefined') return res.status(404).send('User not found');

        if (user.profilePicture !== "default-avatar.jpg") {
            fs.unlink(path.join(__dirname, '../public/Images', user.profilePicture), (err) => {
                if (err) {
                    console.error(err);
                }
            });
        }

        user.profilePicture = req.file.filename
        await user.save()

        res.redirect('/user/' + userId)


    } catch (error) {
        res.status(500).send("Bir hata oluştu")
    }
}

const removeProfilePicture = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId)

        if (!user) {
            return res.status(404).send('User not found removePicture');
        }

        if (user.profilePicture === "default-avatar.jpg") return res.redirect('/user/' + userId)


        if (user.profilePicture == undefined) return res.status(404).send('User not found removePicture');

        if (user.profilePicture !== "default-avatar.jpg") {
            fs.unlink(path.join(__dirname, '../public/Images', user.profilePicture), (err) => {
                if (err) {
                    console.error(err);
                }
            });
        }

        user.profilePicture = "default-avatar.jpg"

        await user.save()

        res.redirect('/user/' + userId)

    } catch (error) {
        res.send(error)
    }
}

export { getUser, deleteUser, createTag, deleteTag, updateProfilePicture, removeProfilePicture }