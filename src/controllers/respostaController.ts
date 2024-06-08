import type { Request, Response } from "express";
import { enviarReposta, listarTodas } from "../services/resposta.js";

export const novaResposta = (req: Request, res: Response) => {
  try {
    const { id, identificador, respostas } = req.body;
    enviarReposta(id, identificador, respostas);
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

export const todasAsRespostas = async (req: Request, res: Response) => {
  try {
    res.status(200).json(await listarTodas());
  } catch (error) {
    console.error(error);
  }
};
