//Imports
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database-connection';


dotenv.config();
const app = express();

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(express.json())

//Database
connectDB();

//Routes
import todoRouter from './routes/todoRouter';
import userRouter from './routes/userRouter';

//APIs
app.use('/todo', todoRouter);
app.use('/user', userRouter);


//Port
app.listen(3000, () => {    
    console.log('Server is running on http://localhost:3000');
});






















