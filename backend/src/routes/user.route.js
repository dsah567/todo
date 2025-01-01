//user routes
import { Router } from 'express';
import { signup, login, logout } from '../controllers/user.controller.js';

const userRouter = Router();

userRouter.post('/signup',signup);
userRouter.post('/login',login);
userRouter.get('/logout',logout);

export default userRouter;