import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import type { NextFunction, Request, Response } from "express";
import { jwtVerify } from "jose";
import { criadorRouter } from "./routes/criadorRouter.js";
import { perguntaRouter } from "./routes/perguntaRouter.js";
import { questionarioRouter } from "./routes/quizRouter.js";
import { respostaRouter } from "./routes/respostaRouter.js";
import { createSecretKey } from "node:crypto";

const secret = createSecretKey(process.env.JWT_SECRET || "", "utf-8");

const auth = async (req: Request, res: Response, next: NextFunction) => {
  const { jwt } = req.cookies;
  await jwtVerify(jwt, secret);
  next();
};

const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
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
