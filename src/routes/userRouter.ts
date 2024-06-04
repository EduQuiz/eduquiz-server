import express from "express";

import {
  createUser,
  deleteUser,
  getAllUsers,
  getOneUser,
  postLogin,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/login", postLogin);
userRouter.post("/", createUser);
userRouter.get("/", getAllUsers);
userRouter.get("/:id", getOneUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;
