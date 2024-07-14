import mongoose, { Schema, Document, Model } from "mongoose";
import TodoModel from "./todoModel";

interface User {
    name: string;
    email: string;
    password: string;
    todos: Schema.Types.ObjectId[];
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
    completedTodos?: number;
    profilePicture?: string;
    getCompletedTodos(): Promise<number>;
    getNumber(): number;
}

interface UserDocument extends User, Document {
    _id: Schema.Types.ObjectId;
    
}

interface UserModel extends Model<UserDocument> { }

const userSchema = new Schema<UserDocument>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    todos: [{
        type: Schema.Types.ObjectId,
        ref: 'Todo'
    }],
    tags: {
        type: [String],
        default: ['Work', 'Personal', 'Study', 'School']
    },
    profilePicture: {
        type: String,
        default: "default-avatar.jpg"
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});



userSchema.methods.getCompletedTodos = async function (this: UserDocument) {
    const todoDocs = await TodoModel.find({ _id: { $in: this.todos }, completed: true });
    return todoDocs.length;
};

userSchema.methods.getNumber = function () {
    return 20
};

const User = mongoose.model<UserDocument, UserModel>('User', userSchema);

export default User;
