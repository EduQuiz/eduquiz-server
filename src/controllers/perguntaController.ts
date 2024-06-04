import type { Request, Response } from "express";
import type { Pergunta, PerguntaEAlternativas } from "../services/pergunta.js";
import {
  encontrarPergunta,
  findAllPerguntas,
  findAllPerguntasWithQuizId,
  novaPergunta,
  removerPergunta,
  upersetPergunta,
} from "../services/pergunta.js";

export const postPergunta = async (req: Request, res: Response) => {
  try {
    const { pergunta, alternativas } = req.body;
    const resp = await novaPergunta(pergunta, alternativas);
    return res.status(200).json(resp);
  } catch (error) {
    console.log(error);
  }
};

export const getAllPerguntas = async (req: Request, res: Response) => {
  try {
    console.log("getAllPerguntas, no body e noparams:");
    const resp = await findAllPerguntas();
    return res.status(200).json(resp);
  } catch (error) {
    console.log(error);
  }
};

export const getAllPerguntasWithIdQuiz = async (
  req: Request,
  res: Response,
) => {
  try {
    console.log("getAllPerguntasWithIdQuiz, params.id:");
    const idquiz = req.params.quizId;
    const resp = await findAllPerguntasWithQuizId(idquiz);
    return res.status(200).json(resp);
  } catch (error) {
    console.log(error);
  }
};

export const getOnePergunta = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const resp = await encontrarPergunta(id);
    return res.status(200).json(resp);
  } catch (error) {
    console.log(error);
    return res.status(201).json({});
  }
};

export const deletePergunta = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const resp = await removerPergunta(id);
    return res.status(200).json(resp);
  } catch (error) {
    console.log(error);
    return res.status(201).json({});
  }
};

export const updatePergunta = async (req: Request, res: Response) => {
  try {
    console.log("updatePergunta,  body:", req.body);
    const data: Pergunta = req.body;
    const resp = await upersetPergunta(data);
    return res.status(200).json(resp);
  } catch (error) {
    console.log(error);
  }
};
