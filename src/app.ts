import cors from "cors";
import express from "express";
import { criadorRouter } from "./routes/criadorRouter.js";
import perguntaRouter from "./routes/perguntaRouter.js";
import quizRouter from "./routes/quizRouter.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/quizzes", quizRouter);
app.use("/criador", criadorRouter);
app.use("/pergunta", perguntaRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
