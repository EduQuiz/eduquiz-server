import { db } from "../db.js";

export const criarQuestionario = async (
  titulo: string,
  criador: string,
  perguntas: string[],
) => {
  try {
    return await db.questionario.create({
      data: {
        titulo,
        criadorId: criador,
        perguntas: {
          connect: perguntas.map((p) => ({ id: p })),
        },
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export const removerQuestionario = async (id: string) => {
  try {
    return await db.questionario.delete({ where: { id } });
  } catch (error) {
    console.error(error);
  }
};

export const encontarTodos = async (id: string) => {
  try {
    return await db.questionario.findMany({ where: { criadorId: id } });
  } catch (error) {
    console.error(error);
  }
};

export const encontrarQuestionario = async (id: string) => {
  try {
    const res = await db.questionario.findUnique({
      where: { id },
      include: {
        perguntas: {
          include: {
            alternativas: true,
          },
        },
      },
    });

    return {
      id: res?.id,
      titulo: res?.titulo,
      perguntas: res?.perguntas.map((p) => ({
        id: p.id,
        pergunta: p.pergunta,
        alternativas: p.alternativas.map((a) => ({
          id: a.id,
          alternativa: a.alternativa,
        })),
      })),
    };
  } catch (error) {
    console.error(error);
  }
};
