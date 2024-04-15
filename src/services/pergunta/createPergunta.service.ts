import { clientDataBase } from "../../database/clientDataBase";
import type { PerguntaDto } from "../../dtos/perguntaDto";

export const createPergunta = async (pergunta: PerguntaDto) => {
  try {
    const perguntaCriada = await clientDataBase.pergunta.create({
      data: {
        titulo: pergunta.titulo,
        description: pergunta.description,
      },
    });

    for (const r of pergunta.respostas) {
      const respostaCriada = await clientDataBase.resposta.create({
        data: {
          descricao: r.description,
        },
      });

      await clientDataBase.pergunta_Respota.create({
        data: {
          perguntaId: perguntaCriada.id,
          respostaId: respostaCriada.id,
          resultado: r.resultado,
        },
      });
    }

    return { msg: "Criado com sucesso" };
  } catch (error) {
    console.error("Erro ao salvar quiz:", error);
  }
};
