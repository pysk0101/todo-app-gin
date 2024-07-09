//Imports
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database-connection';
import cookieParser from 'cookie-parser';


dotenv.config();
const app = express();

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(express.json())
app.use(cookieParser());

//Database
connectDB();

//Routes
import registerRouter from './routes/registerRouter';
import authRouter from './routes/authRouter'; 
import todoRouter from './routes/todoRouter';
import userRouter from './routes/userRouter';
import pageRouter from './routes/pageRouter';

//APIs
app.use('/signup', registerRouter);
app.use('/login', authRouter);
app.use('/todo', todoRouter);
app.use('/user', userRouter);
app.use("/", pageRouter)


//Port
app.listen(3000, () => {    
    console.log('Server is running on http://localhost:3000');
});






















