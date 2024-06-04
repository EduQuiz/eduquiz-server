import express from "express";

import {
  deletePergunta,
  getAllPerguntas,
  getAllPerguntasWithIdQuiz,
  getOnePergunta,
  postPergunta,
  updatePergunta,
} from "../controllers/perguntaController.js";

const perguntaRouter = express.Router();

perguntaRouter.get("/", getAllPerguntas);
perguntaRouter.post("/", postPergunta);
perguntaRouter.get("/:id", getOnePergunta);
perguntaRouter.delete("/:id", deletePergunta);
perguntaRouter.patch("/:id", updatePergunta);
//perguntaRouter.get("/questionario/:id", getAllPerguntasWithIdQuiz);

export default perguntaRouter;
