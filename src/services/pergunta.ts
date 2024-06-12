import { db } from "../db.js";

export interface Pergunta {
  id: string;
  pergunta: string;
}

export interface Alternativa {
  id: string;
  alternativa: string;
  correta: boolean;
}

export interface PerguntaEAlternativas {
  pergunta: Pergunta;
  alternativas: Alternativa[];
}

export const novaPergunta = async (
  pergunta: string,
  alternativas: { alternativa: string; correta?: boolean }[],
) => {
  try {
    return await db.pergunta.create({
      data: {
        pergunta,
        alternativas: {
          create: alternativas,
        },
      },
    });
  } catch (error) {
    console.error(error);
    return {};
  }
};

export const removerPergunta = async (id: string) => {
  try {
    return db.pergunta.delete({ where: { id } });
  } catch (error) {
    console.error(error);
  }
};

export const findAllPerguntas = async (id) => {
  try {
    const res = await db.pergunta.findMany({ where: { criadorId: id } });
    return res.map((p) => ({ id: p.id, pergunta: p.pergunta }));
  } catch (error) {
    console.error(error);
  }
};

export const findAllPerguntasWithQuizId = async (quizId: string) => {
  try {
    /*
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

    const pergunta_resposta = [];

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
    */
    return {};
  } catch (error) {
    console.error("Erro ao retornar perguntas:", error);
  }
};

export const encontrarPergunta = async (id: string) => {
  try {
    return await db.pergunta.findUnique({
      where: { id },
      include: { alternativas: true },
    });
  } catch (error) {
    console.error(error);
  }
};

export const upersetPergunta = async (pergunta: Pergunta) => {
  try {
    /*
    const perguntaCriada = await clientDataBase.pergunta.update({
      where: {
        id: pergunta.id,
      },
      data: {
        titulo: pergunta.titulo,
        description: pergunta.description,
      },
    });

    for (const r of pergunta.respostas) {
      const resposta = await clientDataBase.resposta.update({
        where: {
          id: r.id,
        },
        data: {
          descricao: r.description,
        },
      });

      const rp = await clientDataBase.pergunta_Respota.findFirst({
        where: {
          respostaId: r.id,
          perguntaId: pergunta.id,
        },
        select: {
          id: true,
        },
      });

      await clientDataBase.pergunta_Respota.update({
        where: {
          id: rp?.id,
        },
        data: {
          resultado: r.resultado,
        },
      });
    }
    */

    return { msg: "Atualizado com sucesso" };
  } catch (error) {
    console.error("Erro ao salvar quiz:", error);
  }
};
