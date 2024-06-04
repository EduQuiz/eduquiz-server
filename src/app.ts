import cors from "cors";
import express from "express";
import perguntaRouter from "./routes/perguntaRouter.js";
import quizRouter from "./routes/quizRouter.js";
import userRouter from "./routes/userRouter.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/quizzes", quizRouter);
app.use("/user", userRouter);
app.use("/pergunta", perguntaRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
