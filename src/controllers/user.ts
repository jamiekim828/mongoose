import { Request, Response } from 'express';

import User from '../models/User';
import UserServices from '../services/user';

export const createUserController = async (req: Request, res: Response) => {
  try {
    const newUser = new User({
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
      email: req.body.email,
    });
    UserServices.createUser(newUser);
    res.status(200).json(newUser);
  } catch (err) {
    res.status(404).json('User cannot be created');
  }
};

export const getUsersController = async (req: Request, res: Response) => {
  try {
    const userList = await UserServices.getUsers();
    res.status(200).json(userList);
  } catch (err) {
    res.status(404).json('Users not found');
  }
};

export const getUserByIdController = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await UserServices.getUserById(userId);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json('User not found');
  }
};

export const updateUserByIdController = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const updateUser = await UserServices.updateUserById(userId, req.body);
    res.status(200).json(updateUser);
  } catch (err) {
    res.status(404).json('User cannot be created');
  }
};

export const deleteUserById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id
    const deleteUser = await UserServices.deleteUserById(userId)
    res.status(200).json(deleteUser)
  } catch (err) {
    res.status(404).json('User cannot be deleted');
  }
};
