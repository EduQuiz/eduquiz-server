import { db } from "../db.js";

export const enviarReposta = (resposta: any) => {
  try {
    db.resposta.create({ data: resposta });
  } catch (error) {
    console.error(error);
  }
};
