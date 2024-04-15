import { clientDataBase } from "../../database/clientDataBase.js";

export const findOnePergunta = async (id: string) => {
  try {
    const pergunta = await clientDataBase.pergunta.findUnique({
      where: {
        id,
      },
    });

    const respostas = await clientDataBase.pergunta_Respota.findMany({
      where: {
        perguntaId: pergunta?.id,
      },
      select: {
        respostaId: true,
        resposta: true,
        resultado: true,
      },
    });

    return { pergunta, respostas };
  } catch (error) {
    console.error("Erro ao encontrar pergunta:", error);
  }
};
