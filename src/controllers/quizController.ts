import { Request, Response } from 'express';
import { findAllQuizzesService } from '../services/quiz/findAll-quizzes.service';
import { findOneQuizService } from '../services/quiz/findOne-quiz.service';
import { createQuizService } from '../services/quiz/createQuiz.service';
import { deleteQuizService } from '../services/quiz/deleteQuiz.service';

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
    const idQuiz = req.params.id;
    const quiz = await findOneQuizService(idQuiz);
    return res.json(quiz);
  } catch (error) {
    console.log(error);
  }
};

export const createQuiz = async (req: Request, res: Response) => {
  try {
    const { nome, perguntas } = req.body;
    const quiz: any = await createQuizService(nome, perguntas);
    return res.status(201).json(quiz);
  } catch (error) {
    console.log(error);
  }
};

export const deleteQuiz = async (req: Request, res: Response) => {
  try {
    const idQuiz = req.params.id;
    await deleteQuizService(idQuiz);
    return res.status(204).json();
  } catch (error) {
    console.log(error);
  }
};
