import express from "express";

import {
  createQuiz,
  deleteQuiz,
  getAllQuizzes,
  getOneQuizze,
} from "../controllers/quizController.js";

const quizRouter = express.Router();

quizRouter.get("/", getAllQuizzes);
quizRouter.post("/", createQuiz);
quizRouter.get("/:id", getOneQuizze);
quizRouter.delete("/:id", deleteQuiz);

export default quizRouter;
