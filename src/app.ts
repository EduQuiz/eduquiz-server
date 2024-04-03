import express from 'express';
import routes from './routes/quizRouter';
import quizRouter from './routes/quizRouter';
import userRouter from './routes/userRoute';
import perguntaRouter from './routes/perguntaRouter';
import cors from 'cors';
import pontuacacaoRouter from './routes/pontuacaoRouter';

const app = express();
app.use(cors());
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use('/quizzes', quizRouter);
app.use('/user', userRouter);
app.use('/pergunta', perguntaRouter);
app.use('/pontuacao', pontuacacaoRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
