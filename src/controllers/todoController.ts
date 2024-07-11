import { Request, Response } from 'express';

import Todos from '../models/todoModel';
import User from '../models/userModel'

const getTodos = async (req: Request, res: Response) => {
    const userId = req.params.userId;
    const user = await User.findById(userId)
    if (!user) {
        return res.send("This user is invalid. Please add the user first.")
    }
    const todos = await Todos.find({ userId: user._id});
    res.render('todo', {
        todos: todos,
        user: user
    });
}

const createTodo = async (req: Request, res: Response) => {
    try {
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

        user.todos.push(todo._id as any)
        await user.save()


        res.redirect(`/todo/${user._id.toString()}`);

    } catch (error) {
        res.send(error)
    }
}

const createTag = async (req: Request, res: Response) => {}


export { getTodos, createTodo,createTag }