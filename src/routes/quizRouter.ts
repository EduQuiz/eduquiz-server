import { Router } from "express";
import {
  createQuiz,
  deleteQuiz,
  getAllQuizzes,
  getOneQuizze,
} from "../controllers/questionarioController.js";

export const questionarioRouter = Router();

questionarioRouter.get("/", getAllQuizzes);
questionarioRouter.post("/", createQuiz);
questionarioRouter.get("/:id", getOneQuizze);
questionarioRouter.delete("/:id", deleteQuiz);
