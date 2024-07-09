import User from '../models/userModel' 
import bcrypt from 'bcrypt'

// @ts-ignore
const registerController = async (req, res) => {
    const {  name, email, password } =  req.body;
    
    if (!name || !email || !password) res.status(400).send("Tüm alanları doldurunuz")

    const duplicate = await  User.findOne({ email: email });
    if (duplicate) return res.status(409).send("Bu email zaten kayıtlı");

    try {
        const hashedPwd= await bcrypt.hash(password, 10);
        
        const newUser = new User({
            name,
            email,
            password: hashedPwd
        })
        await newUser.save()
        
        
        res.redirect("/login")
    } catch (error) {
        res.status(500).redirect("/register")
    }
}


export  default registerController