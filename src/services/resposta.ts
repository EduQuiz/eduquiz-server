import { db } from "../db.js";

interface Resposta {
  pergunta: string;
  alternativa: string;
}

export const enviarReposta = async (
  id: string,
  identificador: string,
  respostas: Resposta[],
) => {
  try {
    respostas.map(async (resposta) => {
      await db.resposta.create({
        data: {
          questionarioId: id,
          identificador: identificador,
          perguntaId: resposta.pergunta,
          alternativaId: resposta.alternativa,
        },
      });
    });
  } catch (error) {
    console.error(error);
  }
};

export const listarTodas = async () => {
  try {
    return await db.resposta.findMany();
  } catch (error) {
    console.error(error);
  }
};
