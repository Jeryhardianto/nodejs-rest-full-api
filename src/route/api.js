import express from "express";
import userController from "../controller/user-controller.js";
import {authMiddleware} from "../middleware/auth-middleware.js";
import ContactController from "../controller/contact-controller.js";

const userRouter = new express.Router();

userRouter.use(authMiddleware);

// user API
userRouter.get('/api/users/current', userController.get);
userRouter.patch('/api/users/current', userController.update);
userRouter.delete('/api/users/logout', userController.logout);

// Contact API
userRouter.post('/api/contacts', ContactController.create);

export {
    userRouter
}