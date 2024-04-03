import { clientDataBase } from "../../database/clientDataBase";

export const findAllQuizzesService = async () => {
  try {
    const quiz = await clientDataBase.quiz.findMany({
      select: {
        id: true,
        nome: true,
      },
    });
    return quiz;
  } catch (error) {
    console.error("Erro ao buscar quizzes:", error);
    return null;
  }
};
