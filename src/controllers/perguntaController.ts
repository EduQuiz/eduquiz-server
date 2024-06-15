import type { Request, Response } from "express";
import {
  encontrarPergunta,
  findAllPerguntas,
  novaPergunta,
  removerPergunta,
} from "../services/pergunta.js";

export const postPergunta = async (req: Request, res: Response) => {
  try {
    const { pergunta, alternativas } = req.body;
    const { id } = res.locals;
    const resp = await novaPergunta(pergunta, id, alternativas);
    return res.status(201).json(resp);
  } catch (error) {
    console.error(error);
  }
};

export const getAllPerguntas = async (req: Request, res: Response) => {
  try {
    const { id } = res.locals;
    const resp = await findAllPerguntas(id);
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
