import type { Request, Response } from "express";
import {
  createQuizService,
  deleteQuizService,
  findAllQuizzesService,
  findOneQuizService,
} from "../services/questionario.js";

export const getAllQuizzes = async (req: Request, res: Response) => {
  try {
    const quizzes = await findAllQuizzesService();
    return res.json(quizzes);
  } catch (error) {
    console.log(error);
  }
};

export const getOneQuizze = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const quiz = await findOneQuizService(id);
    return res.json(quiz);
  } catch (error) {
    console.log(error);
  }
};

export const createQuiz = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const quiz = await createQuizService(data);
    return res.status(201).json(quiz);
  } catch (error) {
    console.log(error);
  }
};

export const deleteQuiz = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteQuizService(id);
    return res.status(204).json();
  } catch (error) {
    console.log(error);
  }
};
