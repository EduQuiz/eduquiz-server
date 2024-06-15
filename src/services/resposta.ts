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

export const notas = async (id: string) => {
  try {
    const numeroDePerguntas = await db.questionario.findMany({
      select: {
        _count: {
          select: { perguntas: true },
        },
      },
      where: {
        id: id,
      },
    });

    const acertos = await db.$queryRaw`
      SELECT
        R.identificador,
        COUNT(A.ID)::int AS "acertos"
      FROM
        "Resposta" AS R
      LEFT JOIN
        "Alternativa" as A
        ON R."alternativaId" = A.id
        AND R."perguntaId" = A."perguntaId"
        and A.correta = true
      WHERE
        R."questionarioId" = ${id}
      GROUP BY R.identificador
      ORDER BY "acertos" DESC;`;

    return {
      questionario: { id, perguntas: numeroDePerguntas[0]._count.perguntas },
      acertos,
    };
  } catch (error) {
    console.error(error);
  }
};
