import { clientDataBase } from '../../database/clientDataBase';

export const deleteUserService = async (id: string) => {
  if (!id) {
    throw Error('Id invalido');
  }

  const user = await clientDataBase.usuario.findUnique({ where: { id } });

  if (!user) {
    throw Error('Id não encontrado');
  }

  await clientDataBase.usuario.delete({ where: { id } });
};
