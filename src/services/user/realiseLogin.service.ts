import { clientDataBase } from "../../database/clientDataBase.js";

export const realiseLogin = async (usuario: string, senha: string) => {
  try {
    const user = await clientDataBase.usuario.findFirst({
      where: {
        nome: usuario,
        senha: senha,
      },
      select: { id: true, email: true, nome: true, tipo: true },
    });

    if (!user) {
      return { msg: "usuario nao encontrado" };
    }
    return user;
  } catch (error) {
    console.error("Erro ao buscar usuário ID:", error);
    return null;
  }
};
