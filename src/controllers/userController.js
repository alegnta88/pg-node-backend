import {
  getAllUsersService,
  createUserService,
  updateUserService,
  deleteUserService,
} from "../services/userService.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await getAllUsersService();
    res.json({ success: true, message: "Users fetched successfully", users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const createUser = async (req, res) => {
  try {
    const user = await createUserService(req.body);
    res.status(201).json({ success: true, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await updateUserService(id, req.body);
    res.json({ success: true, user });
  } catch (error) {
    if (error.message === "User not found") {
      return res.status(404).json({ success: false, message: error.message });
    }
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteUserService(id);
    res.json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    if (error.message === "User not found") {
      return res.status(404).json({ success: false, message: error.message });
    }
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};