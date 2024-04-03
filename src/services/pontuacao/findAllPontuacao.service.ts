import { clientDataBase } from "../../database/clientDataBase";

export const findAllPontuacao = async (id: string) => {
  try {
    const pontuacao = await clientDataBase.pontuacacao.findMany({
      where: {
        quizId: id,
      },
      select: {
        id: true,
        pontuacao: true,
        usuarioId: true,
        Usuario: {
          select: { nome: true },
        },
      },
    });

    return pontuacao;
  } catch (error) {
    console.error("Erro ao encontrar pontuacoes:", error);
  }
};
