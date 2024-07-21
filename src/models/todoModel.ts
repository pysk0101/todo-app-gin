import mongoose, { Schema, Model, Document } from 'mongoose';

import mongoosePaginate from 'mongoose-paginate-v2';

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

interface TodoModel extends Model<TodoDocument>, mongoose.PaginateModel<TodoDocument> { }

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

TodoSchema.plugin(mongoosePaginate as any);

// Todo modelini oluşturma
const TodoModel = mongoose.model<TodoDocument,TodoModel>('Todo', TodoSchema);

export default TodoModel;
