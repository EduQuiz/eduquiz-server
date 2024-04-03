import { clientDataBase } from '../../database/clientDataBase';
import { PerguntaDto } from '../../dtos/perguntaDto';

export const upersetPergunta = async (pergunta: PerguntaDto) => {
  try {
    const perguntaCriada = await clientDataBase.pergunta.update({
      where: {
        id: pergunta.id,
      },
      data: {
        titulo: pergunta.titulo,
        description: pergunta.description,
      },
    });

    pergunta.respostas.forEach(async (r) => {
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
    });

    return { msg: 'Atualizado com sucesso' };
  } catch (error) {
    console.error('Erro ao salvar quiz:', error);
  }
};
