import type { Request, Response } from "express";

import { createUserService } from "../services/user/createUser.service.js";
import { deleteUserService } from "../services/user/deleteUser.service.js";
import { findAllUsersService } from "../services/user/findAllUsers.service.js";
import { findOneUserService } from "../services/user/findOneUser.service.js";
import { realiseLogin } from "../services/user/realiseLogin.service.js";

export const createUser = async (req: Request, res: Response) => {
  try {
    console.log("createUser, req.body", req.body);
    const { usuario, senha } = req.body;
    const user = await createUserService(usuario, senha);
    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    console.log("getAllUsers,  no req.body no params");
    const users = await findAllUsersService();
    return res.json(users);
  } catch (error) {
    console.log(error);
  }
};

export const getOneUser = async (req: Request, res: Response) => {
  try {
    console.log("getAllUsers, req.params.id: ", req.params.id);
    const idUser = req.params.id;
    const user = await findOneUserService(idUser);
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    console.log("deleteUser, req.params.id: ", req.params.id);
    const idUser = req.params.id;
    await deleteUserService(idUser);
    return res.status(200).json();
  } catch (error) {
    console.log(error);
  }
};

export const postLogin = async (req: Request, res: Response) => {
  try {
    console.log("login, req.body ", req.body);
    const { usuario, senha } = req.body;
    const resp = await realiseLogin(usuario, senha);
    return res.status(200).json(resp);
  } catch (error) {
    console.log(error);
  }
};
