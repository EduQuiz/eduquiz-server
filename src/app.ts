import cors from "cors";
import express from "express";
import type { NextFunction, Request, Response } from "express";
import {} from "jose";
import { criadorRouter } from "./routes/criadorRouter.js";
import { perguntaRouter } from "./routes/perguntaRouter.js";
import { questionarioRouter } from "./routes/quizRouter.js";
import { respostaRouter } from "./routes/respostaRouter.js";

const auth = (req: Request, res: Response, next: NextFunction) => {
  next();
};

const app = express();

app.use(cors());
app.use(express.json());
app.use(auth);

app.use("/questionario", questionarioRouter);
app.use("/criador", criadorRouter);
app.use("/pergunta", perguntaRouter);
app.use("/resposta", respostaRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
