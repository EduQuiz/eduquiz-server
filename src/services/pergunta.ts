import { db } from "../db.js";

export interface Pergunta {
  id: string;
  pergunta: string;
}

export interface Alternativa {
  id: string;
  alternativa: string;
  correta: boolean;
}

export interface PerguntaEAlternativas {
  pergunta: Pergunta;
  alternativas: Alternativa[];
}

export const novaPergunta = async (
  pergunta: string,
  id: string,
  alternativas: { alternativa: string; correta?: boolean }[],
) => {
  try {
    return await db.pergunta.create({
      data: {
        pergunta,
        criadorId: id,
        alternativas: {
          create: alternativas,
        },
      },
    });
  } catch (error) {
    console.error(error);
    return {};
  }
};

export const removerPergunta = async (id: string) => {
  try {
    return db.pergunta.delete({ where: { id } });
  } catch (error) {
    console.error(error);
  }
};

export const findAllPerguntas = async (id: string) => {
  try {
    const res = await db.pergunta.findMany({ where: { criadorId: id } });
    return res.map((p) => ({ id: p.id, pergunta: p.pergunta }));
  } catch (error) {
    console.error(error);
  }
};

export const encontrarPergunta = async (id: string) => {
  try {
    return await db.pergunta.findUnique({
      where: { id },
      include: { alternativas: true },
    });
  } catch (error) {
    console.error(error);
  }
};
