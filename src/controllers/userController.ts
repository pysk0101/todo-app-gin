import { Request, Response } from 'express';
import Users from '../models/userModel';


const createUser = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    console.log(req.body)

    if (!name || !email || !password) res.status(400).send("Tüm alanları doldurunuz")

    const duplicate = await Users.findOne({ email: email });
    if (duplicate) return res.status(409).send("Bu email zaten kayıtlı");

    try {

        const users = await Users.find()
        console.log(users)
        // const lastId = users[users.length - 1].id

        const newUser = new Users({
            name,
            email,
            password
        })

        await newUser.save()
        res.send(newUser)
    } catch (error) {
        // res.status(500).redirect("/register")
        res.send(error)
    }
}


export { createUser }