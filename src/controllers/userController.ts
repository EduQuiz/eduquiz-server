import { Request, Response } from 'express';
import { createUserService } from '../services/user/createUser.service';
import { deleteUserService } from '../services/user/deleteUser.service';
import { findAllUsersService } from '../services/user/findAllUsers.service';
import { findOneUserService } from '../services/user/findOneUser.service';
import { realiseLogin } from '../services/user/realiseLogin.service';

export const createUser = async (req: Request, res: Response) => {
  try {
    console.log('createUser, req.body', req.body);
    const { nome, tipo } = req.body;
    const usuario: any = await createUserService(nome, tipo);
    return res.status(201).json(usuario);
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    console.log('getAllUsers,  no req.body no params');
    const users = await findAllUsersService();
    return res.json(users);
  } catch (error) {
    console.log(error);
  }
};

export const getOneUser = async (req: Request, res: Response) => {
  try {
    console.log('getAllUsers, req.params.id: ', req.params.id);
    const idUser = req.params.id;
    const user = await findOneUserService(idUser);
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    console.log('deleteUser, req.params.id: ', req.params.id);
    const idUser = req.params.id;
    await deleteUserService(idUser);
    return res.status(204).json();
  } catch (error) {
    console.log(error);
  }
};

export const postLogin = async (req: Request, res: Response) => {
  try {
    console.log('login, req.body ', req.body);
    const { usuario, senha } = req.body;
    await realiseLogin(usuario, senha);
    return res.status(204).json();
  } catch (error) {
    console.log(error);
  }
};
