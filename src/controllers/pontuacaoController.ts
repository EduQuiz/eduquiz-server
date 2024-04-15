import type { Request, Response } from "express";

import { createPontuacao } from "../services/pontuacao/createPontuacao.service.js";
import { findAllPontuacao } from "../services/pontuacao/findAllPontuacao.service.js";

export const getAllPontuacao = async (req: Request, res: Response) => {
  try {
    console.log("getAllPontuacao,  params.id:", req.params.id);
    const resp = await findAllPontuacao(req.params.id);
    return res.status(200).json({ resp });
  } catch (error) {
    console.log(error);
  }
};

export const postPontuacao = async (req: Request, res: Response) => {
  try {
    console.log("postPontuacao,  req.body:", req.body);
    const { usuarioId, pontuacao, quizId } = req.body;
    const resp = await createPontuacao(usuarioId, pontuacao, quizId);
    return res.status(200).json({ resp });
  } catch (error) {
    console.log(error);
  }
};
