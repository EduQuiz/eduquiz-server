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

export const encontarTodos = async () => {
  try {
    return await db.questionario.findMany();
  } catch (error) {
    console.error(error);
  }
};

export const encontrarQuestionario = async (id: string) => {
  try {
    return await db.questionario.findUnique({
      where: { id },
      include: {
        perguntas: {
          include: {
            alternativas: true,
          },
        },
      },
    });
  } catch (error) {
    console.error(error);
  }
};
