import { db } from "../db.js";

export const novoCriador = async (
  nome: string,
  email: string,
  senha: string,
) => {
  try {
    return await db.criador.create({
      data: {
        nome,
        email,
        senha,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

export const removerCriador = async (id: string) => {
  try {
    return await db.criador.delete({ where: { id } });
  } catch (error) {
    console.error(error);
  }
};

export const encontrarTodosCriadores = async () => {
  try {
    return await db.criador.findMany();
  } catch (error) {
    console.error(error);
  }
};

export const encontrarCriador = async (id: string) => {
  try {
    return await db.criador.findUnique({ where: { id } });
  } catch (error) {
    console.error(error);
  }
};

export const entrar = async (email: string, senha: string) => {
  try {
    return await db.criador.findUnique({
      where: {
        email,
        senha,
      },
    });
  } catch (error) {
    console.error(error);
  }
};
