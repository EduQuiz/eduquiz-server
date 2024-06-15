import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getOneUser,
  postLogin,
} from "../controllers/criadorController.js";

export const criadorRouter = Router();

criadorRouter.post("/entrar", postLogin);
criadorRouter.post("/", createUser);
criadorRouter.get("/", getAllUsers);
criadorRouter.get("/:id", getOneUser);
criadorRouter.delete("/:id", deleteUser);
