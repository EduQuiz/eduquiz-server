import type { Request, Response } from "express";
import {
  criarQuestionario,
  removerQuestionario,
  encontarTodos,
  encontrarQuestionario,
} from "../services/questionario.js";

export const getAllQuizzes = async (req: Request, res: Response) => {
  try {
    const quizzes = await encontarTodos();
    return res.json(quizzes);
  } catch (error) {
    console.log(error);
  }
};

export const getOneQuizze = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const quiz = await encontrarQuestionario(id);
    return res.json(quiz);
  } catch (error) {
    console.log(error);
  }
};

export const createQuiz = async (req: Request, res: Response) => {
  try {
    const { titulo, criador, perguntas } = req.body;
    const quiz = await criarQuestionario(titulo, criador, perguntas);
    return res.status(201).json(quiz);
  } catch (error) {
    console.log(error);
  }
};

export const deleteQuiz = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await removerQuestionario(id);
    return res.status(204).json();
  } catch (error) {
    console.log(error);
  }
};
