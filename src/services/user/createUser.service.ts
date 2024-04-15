import { clientDataBase } from "../../database/clientDataBase.js";

export const createUserService = async (nome: string, senha: string) => {
  try {
    return await clientDataBase.usuario.create({
      data: {
        nome,
        senha,
        tipo: true,
        email: `${nome}@gamil.com`,
      },
    });
  } catch (error) {
    console.error("Erro ao salvar quiz:", error);
  }
};
