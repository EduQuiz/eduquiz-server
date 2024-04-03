import { clientDataBase } from "../../database/clientDataBase";

export const findOneQuizService = async (id: string) => {
  try {
    const quiz = await clientDataBase.quiz.findUnique({ where: { id } });

    if (!quiz) {
      return {};
    }

    const perguntasRespostas = await clientDataBase.pergunta.findMany({
      where: {
        quizId: id,
      },
      select: {
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
      titulo: item.titulo,
      respostas: item.Pergunta_Respota.map((pr) => ({
        id: pr.resposta.id,
        descricao: pr.resposta.descricao,
        resultado: pr.resultado,
      })),
    }));

    return { quiz, perguntas };
  } catch (error) {
    console.error("Erro ao buscar quizz ID:", error);
    return null;
  }
};
