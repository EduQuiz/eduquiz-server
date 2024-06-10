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
    return res.status(201).json(resp);
  } catch (error) {
    console.error(error);
  }
};

export const getAllPerguntas = async (req: Request, res: Response) => {
  try {
    const resp = await findAllPerguntas();
    return res.status(200).json(resp);
  } catch (error) {
    console.error(error);
  }
};

export const getAllPerguntasWithIdQuiz = async (
  req: Request,
  res: Response,
) => {
  try {
    const { id } = req.params;
    const resp = await findAllPerguntasWithQuizId(id);
    return res.status(200).json(resp);
  } catch (error) {
    console.error(error);
  }
};

export const getOnePergunta = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const resp = await encontrarPergunta(id);
    return res.status(200).json(resp);
  } catch (error) {
    console.error(error);
    return res.status(201).json({});
  }
};

export const deletePergunta = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const resp = await removerPergunta(id);
    return res.status(200).json(resp);
  } catch (error) {
    console.error(error);
    return res.status(201).json({});
  }
};

export const updatePergunta = async (req: Request, res: Response) => {
  try {
    const data: Pergunta = req.body;
    const resp = await upersetPergunta(data);
    return res.status(200).json(resp);
  } catch (error) {
    console.error(error);
  }
};
