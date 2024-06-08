import { Router } from "express";
import {
  novaResposta,
  respostaDeId,
  respostasDoQuiz,
  todasAsRespostas,
} from "../controllers/respostaController.js";

export const respostaRouter = Router();

respostaRouter.get("/", todasAsRespostas);
respostaRouter.post("/", novaResposta);
respostaRouter.get("/quiz/:id", respostasDoQuiz);
respostaRouter.get("/:id", respostaDeId);
