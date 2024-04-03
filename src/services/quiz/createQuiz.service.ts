import { clientDataBase } from "../../database/clientDataBase";
import { CreateQuizDto } from "../../dtos/createQuizDto";

export const createQuizService = async (data: CreateQuizDto) => {
  try {
    let savedQuiz = await clientDataBase.quiz.create({
      data: {
        nome: data.titulo,
        description: data.descricao,
      },
    });

    data.perguntas.forEach(async (p) => {
      await clientDataBase.pergunta.update({
        data: {
          quizId: savedQuiz.id,
        },
        where: { id: p },
      });
    });

    return { quiz: savedQuiz };
  } catch (error) {
    console.error("Erro ao salvar quiz:", error);
  }
};
