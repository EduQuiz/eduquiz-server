import { clientDataBase } from "../../database/clientDataBase";

export const findAllUsersService = async () => {
  try {
    const user = await clientDataBase.usuario.findMany({
      select: {
        id: true,
        nome: true,
        tipo: true,
      },
    });
    return user;
  } catch (error) {
    console.error("Erro ao buscar usuarios:", error);
    return null;
  }
};
