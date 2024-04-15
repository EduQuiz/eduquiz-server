import { clientDataBase } from "../../database/clientDataBase.js";

export const findOneUserService = async (id: string) => {
  try {
    const user = await clientDataBase.usuario.findUnique({ where: { id } });

    if (!user) {
      return {};
    }

    return user;
  } catch (error) {
    console.error("Erro ao buscar usuário ID:", error);
    return null;
  }
};
