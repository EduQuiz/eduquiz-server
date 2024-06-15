import { createSecretKey } from "node:crypto";
import { readFileSync } from "node:fs";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import type { NextFunction, Request, Response } from "express";
import { jwtVerify } from "jose";
import swaggerUi from "swagger-ui-express";
import { criadorRouter } from "./routes/criadorRouter.js";
import { perguntaRouter } from "./routes/perguntaRouter.js";
import { questionarioRouter } from "./routes/quizRouter.js";
import { respostaRouter } from "./routes/respostaRouter.js";

const secret = createSecretKey(process.env.JWT_SECRET || "", "utf-8");

const auth = async (req: Request, res: Response, next: NextFunction) => {
  const { jwt } = req.cookies;

  if (jwt) {
    const { id } = (await jwtVerify(jwt, secret)).payload;
    res.locals.id = id;
  }

  next();
};

const log = (req: Request, res: Response, next: NextFunction) => {
  console.log(
    `${req.path} ${JSON.stringify(res.locals)} ${JSON.stringify(req.body)}`,
  );
  next();
};

const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(auth);
app.use(log);

const swaggerDocument = JSON.parse(
  readFileSync(new URL("swagger.json", import.meta.url), "utf-8"),
);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/questionario", questionarioRouter);
app.use("/criador", criadorRouter);
app.use("/pergunta", perguntaRouter);
app.use("/resposta", respostaRouter);

app.get("/", (_req: Request, res: Response) => {
  res.redirect("/api-docs");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
