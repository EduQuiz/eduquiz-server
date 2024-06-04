import type { Request, Response } from "express";

import {
  encontrarCriador,
  encontrarTodosCriadores,
  entrar,
  novoCriador,
  removerCriador,
} from "../services/criador.js";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { nome, email, senha } = req.body;
    const user = await novoCriador(nome, email, senha);
    return res.status(201).json(user);
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
    const resp = await entrar(email, senha);
    return res.status(200).json(resp);
  } catch (error) {
    console.error(error);
  }
};
