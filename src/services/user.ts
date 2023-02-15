// user communication with database
import User, { UserDocument } from '../models/User';

const createUser = async (user: UserDocument): Promise<UserDocument> => {
  return user.save();
};

const getUsers = async (): Promise<UserDocument[]> => {
  return User.find();
};

const getUserById = async (id: string): Promise<UserDocument | null> => {
  return User.findById(id);
};

const deleteUserById = async (id: string): Promise<UserDocument | null> => {
  return User.findByIdAndDelete(id);
};

const updateUserById = async (
  id: string,
  update: UserDocument
): Promise<UserDocument | null> => {
  return User.findByIdAndUpdate(id, update);
};

export default {
  createUser,
  getUsers,
  getUserById,
  deleteUserById,
  updateUserById,
};
