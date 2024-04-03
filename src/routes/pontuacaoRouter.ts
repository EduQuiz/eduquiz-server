import express from 'express';
import {
  getAllPontuacao,
  postPontuacao,
} from '../controllers/pontuacaoController';
const pontuacacaoRouter = express.Router();

// Rota para obter todos os quizzes
pontuacacaoRouter.get('/:id', getAllPontuacao);

pontuacacaoRouter.post('/', postPontuacao);

export default pontuacacaoRouter;
