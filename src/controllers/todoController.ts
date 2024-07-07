import { Request, Response } from 'express';

import Todos from '../models/todoModel';
import User from '../models/userModel'

const getTodos = async (req: Request, res: Response) => {
    const user = await User.findById("668aa0a0da96738508742418")
    console.log(user?.tags)
    const todos = await Todos.find();
    res.render('index', {
        todos: todos,
        user: user
    });
}

const createTodo = async (req: Request, res: Response) => {
    try {
        console.log(req.body)
        const { userId, tag, content } = req.body;
        const user = await User.findById(req.body.userId)
        if (!user) {
            return res.send("This user is invalid. Please add the user first.")
        }

        if (!user.tags.includes(tag)) {
            return res.send("This tag is invalid. Please add the tag first.")
        }


        const todo = new Todos({
            userId,
            tag,
            content
        })
        await todo.save();

        user.todos.push(todo._id)
        await user.save()


        res.redirect('/todo')

    } catch (error) {
        res.send(error)
    }
}



export { getTodos, createTodo }