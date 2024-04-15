import express from "express";

import cors from "cors";

import perguntaRouter from "./routes/perguntaRouter.js";
import pontuacacaoRouter from "./routes/pontuacaoRouter.js";
import quizRouter from "./routes/quizRouter.js";
import userRouter from "./routes/userRouter.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/quizzes", quizRouter);
app.use("/user", userRouter);
app.use("/pergunta", perguntaRouter);
app.use("/pontuacao", pontuacacaoRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
