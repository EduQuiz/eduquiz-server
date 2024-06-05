import type { Request, Response } from "express";
import { enviarReposta } from "../services/resposta.js";

export const novaResposta = (req: Request, res: Response) => {
  try {
    const { resposta } = req.body;
    enviarReposta(resposta);
  } catch (error) {
    console.error(error);
  }
};

export const respostasDoQuiz = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
  } catch (error) {
    console.error(error);
  }
};

export const respostaDeId = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
  } catch (error) {
    console.error(error);
  }
};
