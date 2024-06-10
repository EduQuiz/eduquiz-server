import express from "express";

import {
  createUser,
  deleteUser,
  getAllUsers,
  getOneUser,
  postLogin,
} from "../controllers/criadorController.js";

export const criadorRouter = express.Router();

criadorRouter.post("/entrar", postLogin);
criadorRouter.post("/", createUser);
criadorRouter.get("/", getAllUsers);
criadorRouter.get("/:id", getOneUser);
criadorRouter.delete("/:id", deleteUser);
