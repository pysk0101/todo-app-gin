import { Request, Response } from 'express';

import Todos from '../models/todoModel';
import User from '../models/userModel'

const getTodos = async (req: Request, res: Response) => {
    const userId = req.params.userId;
    const user = await User.findById(userId)
    if (!user) {
        return res.send("This user is invalid. Please add the user first.")
    }
    const todos = await Todos.find({ userId: user._id });
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

const completeTodo = async (req: Request, res: Response) => {
    try {
        const userId = req.cookies.userId;
        const { todoId } = req.body;
        const todo = await Todos.findById(todoId);
        if (!todo) {
            return res.send("This todo is invalid. Please add the todo first.")
        }
        todo.completed = true;
        await todo.save();

        res.json({ success: true, redirectUrl: `/todo/${userId}` });


    } catch (error) {
        res.send(error)
    }

}

const deleteTodo = async (req: Request, res: Response) => {
    try {
        const userId = req.cookies.userId;
        const { todoId } = req.body;
        const todo = await Todos.findById(todoId);
        if (!todo) {
            return res.send("This todo is invalid. Please add the todo first.")
        }
        await Todos.findByIdAndDelete(todoId);

        const user = await User.findById(userId);

        if (!user) {
            return res.send("This user is invalid. Please add the user first.")
        }
        
        const deletedIndex = user.todos.findIndex(todo => todo.toString() === todoId);
        // if (deletedIndex === -1) {
        //     return res.send("This todo is not in the user's todo list.")
        // }
        user.todos.splice(deletedIndex, 1);


        // user.todos = user.todos.filter(todo => todo.toString() !== todoId);
        user.save();

        res.json({ success: true, redirectUrl: `/todo/${userId}` });

    } catch (error) {
        res.send(error)
    }
}


export { getTodos, createTodo, completeTodo, deleteTodo }