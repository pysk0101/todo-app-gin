import mongoose, { model } from "mongoose";

const todoSchema = new mongoose.Schema({
     userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true
    },
    tag: {
        type : String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const Todo = model('Todo', todoSchema);
export default Todo