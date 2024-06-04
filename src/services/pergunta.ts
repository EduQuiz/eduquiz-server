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
  perguntaEAlternativas: PerguntaEAlternativas,
) => {
  const { pergunta, alternativas } = perguntaEAlternativas;

  try {
    /*
    const perguntaCriada = await clientDataBase.pergunta.create({
      data: {
        pergunta: pergunta.pergunta,
      },
    });

    for (const a of alternativas) {
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
    */

    return { msg: "Criado com sucesso" };
  } catch (error) {
    console.error("Erro ao salvar quiz:", error);
  }
};

export const deleteOnePergunta = async (id: string) => {
  try {
    /*
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
    */

    return { msg: "deletado com sucesso" };
  } catch (error) {
    console.error("Erro ao deleter pergunta:", error);
  }
};

export const findAllPerguntas = async () => {
  try {
    /*
    const perguntas = await clientDataBase.pergunta.findMany({
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

export const findOnePergunta = async (id: string) => {
  try {
    /*
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
    */

    return {};
  } catch (error) {
    console.error("Erro ao encontrar pergunta:", error);
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
