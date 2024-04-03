import { clientDataBase } from "../../database/clientDataBase";

export const deleteOnePergunta = async (id: string) => {
  try {
    await clientDataBase.$transaction(async (prisma) => {
      // Encontra todas as respostas associadas à pergunta
      const respostas = await prisma.pergunta_Respota.findMany({
        where: {
          perguntaId: id,
        },
      });

      // Deleta as respostas associadas à pergunta
      await prisma.pergunta_Respota.deleteMany({
        where: {
          perguntaId: id,
        },
      });

      // Deleta a pergunta
      await prisma.pergunta.delete({
        where: {
          id: id,
        },
      });

      // Deleta as respostas encontradas
      await prisma.resposta.deleteMany({
        where: {
          id: {
            in: respostas.map((r) => r.respostaId),
          },
        },
      });
    });

    return { msg: "deletado com sucesso" };
  } catch (error) {
    console.error("Erro ao deleter pergunta:", error);
  }
};
