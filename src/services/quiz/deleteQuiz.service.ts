import { clientDataBase } from "../../database/clientDataBase";

export const deleteQuizService = async (id: string) => {
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

  await clientDataBase.quiz.delete({ where: { id } });
};
