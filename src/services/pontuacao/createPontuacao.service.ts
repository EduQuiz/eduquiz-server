import { clientDataBase } from "../../database/clientDataBase";

export const createPontuacao = async (
  usuarioId: string,
  pontuacao: number,
  quizId: string,
) => {
  let pontucaoExistente;
  try {
    pontucaoExistente = await clientDataBase.pontuacacao.findFirst({
      where: {
        quizId,
        usuarioId,
      },
    });

    if (pontucaoExistente) {
      return await clientDataBase.pontuacacao.update({
        where: {
          id: pontucaoExistente.id,
        },
        data: {
          pontuacao,
          usuarioId,
          quizId,
        },
      });
    } else {
      return await clientDataBase.pontuacacao.create({
        data: {
          pontuacao,
          usuarioId,
          quizId,
        },
      });
    }
  } catch (error) {
    console.error("Erro ao criar pontuacao:", error);
  }
};
