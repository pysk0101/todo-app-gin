import { Schema, model, Document } from 'mongoose';

// Todo belgesinin alanlarını tanımlayan interface
interface Todo {
    userId: import('mongoose').Types.ObjectId;
    tag: string;
    content: string;
    completed: boolean;
}

// Todo belgesini ve Mongoose Document özelliklerini birleştiren interface
interface TodoDocument extends Todo, Document {
    _id: Schema.Types.ObjectId;
}

// Todo şemasını oluşturma
const TodoSchema: Schema<TodoDocument> = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Student', // Student yerine User veya uygun koleksiyon adı
        required: true
    },
    tag: {
        type: String,
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

// Todo modelini oluşturma
const TodoModel = model<TodoDocument>('Todo', TodoSchema);

export default TodoModel;
