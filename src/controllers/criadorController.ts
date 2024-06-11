import { createSecretKey } from "node:crypto";
import type { Request, Response } from "express";
import { SignJWT } from "jose";

const secret = createSecretKey(process.env.JWT_SECRET || "", "utf-8");

import {
  encontrarCriador,
  encontrarTodosCriadores,
  entrar,
  novoCriador,
  removerCriador,
} from "../services/criador.js";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, senha } = req.body;
    const criador = await novoCriador(email, senha);
    return res.status(201).json({ id: criador?.id, email: criador?.email });
  } catch (error) {
    console.error(error);
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await encontrarTodosCriadores();
    return res.json(users);
  } catch (error) {
    console.error(error);
  }
};

export const getOneUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await encontrarCriador(id);
    return res.json(user);
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await removerCriador(id);
    return res.status(200).json({ status: `removido id ${id}` });
  } catch (error) {
    console.error(error);
  }
};

export const postLogin = async (req: Request, res: Response) => {
  try {
    const { email, senha } = req.body;

    const criador = await entrar(email, senha);

    if (criador) {
      const jwt = await new SignJWT({ id: criador.id })
        .setProtectedHeader({ alg: "HS256" })
        .sign(secret);
      res.cookie("jwt", jwt, { sameSite: "none", secure: true });
    }

    return res.status(200).json({ id: criador?.id, email: criador?.email });
  } catch (error) {
    console.error(error);
  }
};
