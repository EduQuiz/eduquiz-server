import { Router } from "express";
import {
  novaResposta,
  respostaDeId,
  respostasDoQuiz,
} from "../controllers/respostaController.js";

export const respostaRouter = Router();

respostaRouter.post("/", novaResposta);
respostaRouter.get("/quiz/:id", respostasDoQuiz);
respostaRouter.get("/:id", respostaDeId);
