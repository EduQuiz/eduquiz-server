import { Router } from "express";
import {
  deletePergunta,
  getAllPerguntas,
  getOnePergunta,
  postPergunta,
} from "../controllers/perguntaController.js";

export const perguntaRouter = Router();

perguntaRouter.get("/", getAllPerguntas);
perguntaRouter.post("/", postPergunta);
perguntaRouter.get("/:id", getOnePergunta);
perguntaRouter.delete("/:id", deletePergunta);
