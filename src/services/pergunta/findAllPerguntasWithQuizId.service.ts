import { clientDataBase } from "../../database/clientDataBase";

export const findAllPerguntasWithQuizId = async (quizId: string) => {
  try {
    const perguntas = await clientDataBase.pergunta.findMany({
      where: {
        quizId,
      },
      select: {
        id: true,
        titulo: true,
        description: true,
      },
    });

    let pergunta_resposta = [] as any[];

    for (const pergunta of perguntas) {
      const resposta = await clientDataBase.pergunta_Respota.findMany({
        where: {
          perguntaId: pergunta.id,
        },
        select: {
          id: true,
          resposta: true,
          resultado: true,
        },
      });

      const respostas = resposta.map((r) => {
        const resultado = r.resultado;
        const description = r.resposta.descricao;
        const id = r.resposta.id;
        return { description, resultado, id };
      });
      pergunta_resposta.push({ ...pergunta, respostas });
    }

    return pergunta_resposta;
  } catch (error) {
    console.error("Erro ao retornar perguntas:", error);
  }
};
