import {
  getAllUsersModel,
  createUserModel,
  updateUserModel,
  deleteUserModel,
} from "../models/userModel.js";

export const getAllUsersService = async () => {
  return await getAllUsersModel();
};

export const createUserService = async (data) => {
  const { name, email } = data;
  return await createUserModel(name, email);
};

export const updateUserService = async (id, data) => {
  const { name, email } = data;
  const result = await updateUserModel(id, name, email);

  if (result.rowCount === 0) {
    throw new Error("User not found");
  }
  return result.rows[0];
};

export const deleteUserService = async (id) => {
  const result = await deleteUserModel(id);

  if (result.rowCount === 0) {
    throw new Error("User not found");
  }
  return result.rows[0];
};