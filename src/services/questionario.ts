import { db } from "../db.js";

export const createQuizService = async (data) => {
  try {
    /*
    const savedQuiz = await clientDataBase.quiz.create({
      data: {
        nome: data.titulo,
        description: data.descricao,
      },
    });

    for (const p of data.perguntas) {
      await clientDataBase.pergunta.update({
        data: {
          quizId: savedQuiz.id,
        },
        where: { id: p },
      });
    }
    */

    return {};
  } catch (error) {
    console.error("Erro ao salvar quiz:", error);
  }
};

export const deleteQuizService = async (id: string) => {
  /*
  if (!id) {
    throw Error("Id invalido");
  }

  const quiz = await clientDataBase.quiz.findUnique({ where: { id } });

  if (!quiz) {
    throw Error("Id não encontrado");
  }

  const perguntas = await clientDataBase.pergunta.findMany({
    where: { quizId: quiz.id },
  });

  if (perguntas) {
    await clientDataBase.pergunta.deleteMany({ where: { quizId: quiz.id } });
  }
  */
  await db.questionario.delete({ where: { id } });
};

export const findAllQuizzesService = async () => {
  try {
    const quiz = await db.questionario.findMany({
      select: {
        id: true,
        titulo: true,
      },
    });
    return quiz;
  } catch (error) {
    console.error("Erro ao buscar quizzes:", error);
    return null;
  }
};

export const findOneQuizService = async (id: string) => {
  try {
    const quiz = await db.questionario.findUnique({ where: { id } });
    /*
    if (!quiz) {
      return {};
    }
    const perguntasRespostas = await db.pergunta.findMany({
      where: {
        questionarios: id,
      },
      select: {
        id: true,
        titulo: true,
        Pergunta_Respota: {
          select: {
            resposta: true,
            resultado: true,
          },
        },
      },
    });

    // transforma em um modelo mais facil para ser consumido no front end
    const perguntas = perguntasRespostas.map((item) => ({
      id: item.id,
      titulo: item.titulo,
      respostas: item.Pergunta_Respota.map((pr) => ({
        id: pr.resposta.id,
        descricao: pr.resposta.descricao,
        // resultado: pr.resultado,
      })),
    }));
    */

    return { quiz };
  } catch (error) {
    console.error("Erro ao buscar quizz ID:", error);
    return null;
  }
};
